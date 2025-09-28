import React, { useState, useRef, useEffect } from 'react';
import { Box, Flex, Input, Button, Text, VStack, Heading, Spinner, Code } from '@chakra-ui/react';
import { IoIosSend } from "react-icons/io";
import { GoogleGenAI } from '@google/genai';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

function ChatBot() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hello, how can I help you today?' }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

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

  const renderMessageText = (text) => {
    const components = {
      // Custom component for code blocks (```language...```)
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        
        // Block Code Styling (for the blocky text and separate background)
        if (!inline && match) {
          return (
            <Code
              p={3}
              my={2}
              borderRadius="md"
              bg="rgba(0, 0, 0, 0.4)" 
              display="block"
              whiteSpace="pre-wrap"
              fontFamily="mono"
              {...props}
            >
              {children}
            </Code>
          );
        }
        return (
          <Code bg="rgba(0, 0, 0, 0.4)" {...props}>{children}</Code>
        );
      },
      strong: ({ children }) => <Text as="span" fontWeight="bold">{children}</Text>,
      p: ({ children }) => <Text mb={1}>{children}</Text>,
      h1: ({ children }) => <Heading as="h1" size="lg" mt={4} mb={2}>{children}</Heading>,
      h2: ({ children }) => <Heading as="h2" size="md" mt={3} mb={1}>{children}</Heading>,
      h3: ({ children }) => <Heading as="h3" size="sm" mt={2} mb={1}>{children}</Heading>,
    };

    return (
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {text}
      </ReactMarkdown>
    );
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
            maxW={{ base: "95%", md: "70%" }}
            fontSize={{ base: '0.7rem', md: '1rem' }}
            
          >
            {message.sender === 'user' ? (
              <Text>{message.text}</Text>
            ) : (
              <Box>
                {renderMessageText(message.text)}
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
            borderColor="gray.700" 
            borderWidth={1}
            mr={2}
            fontSize={'16px'}
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