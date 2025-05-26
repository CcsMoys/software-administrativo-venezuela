import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/Navbar'; // Usando alias @/

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}