import Image from "next/image";
import { Inter } from "next/font/google";
import Home_Authentication from "./authentication";
import { ChakraProvider } from '@chakra-ui/react'
 

export default function Home() {
  return (
    <ChakraProvider>
      <Home_Authentication />
    </ChakraProvider>
  );
}
