import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Input, Button, Text, VStack, Heading, Spinner, Code } from '@chakra-ui/react';
import { IoIosSend } from "react-icons/io";
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function ChatBot() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hello, how can I help you today?' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: input,
      });

      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: response.text },
      ]);
      setIsTyping(false);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: 'Sorry, there was an error.' },
      ]);
    }
  };

  return (
    <Flex direction="column" color="white" borderRadius="md" p={4} w="100%" h="100%">
      <VStack spacing={4} overflowY="auto" flex="1" p={4} variant="outline" borderColor="gray.700" borderWidth={1} borderRadius="md" maxH={'95vh'}>
        {messages.map((message, index) => (
          <Flex
            key={index}
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
            bg={message.sender === 'user' ? 'rgba(60, 207, 240, 1)' : 'gray.700'}
            color="white"
            p={3}
            borderRadius="md"
            maxW="70%"
            fontSize={{ base: '0.7rem', md: '1rem' }}
            
          >
            {message.sender === 'user' ? (
              <Text>{message.text}</Text>
            ) : (
              <Box>
                {message.text.split('\n').map((line, i) => (
                  <Text key={i} mb={1}>
                    {line}
                  </Text>
                ))}
              </Box>
            )}
          </Flex>
        ))}
        {isTyping && (
          <Flex alignSelf="flex-start" bg="gray.700" p={3} borderRadius="md">
            <Spinner size="sm" />
          </Flex>
        )}
        <div ref={messageEndRef} />
      </VStack>
      <form onSubmit={handleSubmit}>
        <Flex mt={4}>
          <Input
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            color="white"
            borderRadius="md"
            variant={'outline'}
            mr={2}
          />
          <Button type="submit" colorScheme="blue" borderRadius="md">
            <IoIosSend size={20} />
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default ChatBot;