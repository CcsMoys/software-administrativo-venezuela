// src/components/Navbar.tsx
import { Box, Button, Flex } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex bg="blue.600" p={4} color="white">
      <Box>Logo</Box>
      <Button ml="auto">Iniciar sesión</Button>
    </Flex>
  );
}