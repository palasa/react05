import { ChakraProvider, ThemeProvider, theme } from '@chakra-ui/react'
import { BlogList } from './components'

export default function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <BlogList />
      </ThemeProvider>
    </ChakraProvider>
  )
}
