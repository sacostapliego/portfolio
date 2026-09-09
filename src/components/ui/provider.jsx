'use client'

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

/*
 * Chakra's stock `2xl` breakpoint is 1536px. The site's full desktop layout is
 * keyed off `2xl`, and the common 16:10 laptops land just under that line --
 * MacBook Air 13" reports 1470px and MacBook Pro 14" reports 1512px -- so they
 * were dropping back to the narrow `lg` styling instead of the 16:9 desktop
 * design. Moving `2xl` to 1440px puts every 16:10 laptop on the same layout as
 * a 1080p/1440p monitor. The rest of the scale is Chakra's default.
 */
const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
