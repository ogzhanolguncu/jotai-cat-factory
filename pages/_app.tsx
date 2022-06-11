import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextLink from "next/link";
import {
  Box,
  Center,
  ChakraProvider,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { catLengthAtom } from "../atoms/index";
import { useAtom } from "jotai";

const Navbar = () => {
  return (
    <Flex w="100%" justifyContent="center" mt="3rem">
      <Flex
        gap="5rem"
        border="3px solid #bcadad5e"
        boxShadow="8px 8px #8876765e"
        borderRadius="10px"
        padding="1rem"
      >
        <NextLink passHref href="/" shallow>
          <Link fontSize="3xl">LIST</Link>
        </NextLink>
        <NextLink passHref href="/add-cat" shallow>
          <Link fontSize="3xl">ADD A CAT</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

const CatCounter = () => {
  const [catLength] = useAtom(catLengthAtom);

  return (
    <Box
      position="absolute"
      top="0px"
      left="0px"
      fontSize="xl"
      fontWeight="bold"
      color="gray.800"
      maxW="300px"
      height="200px"
      marginLeft='1rem'
    >
      <Text
        border="3px solid #bcadad5e"
        boxShadow="8px 8px #8876765e"
        borderRadius="10px"
        padding="1rem"
      >
        Cat Count: {catLength}
      </Text>
    </Box>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CatCounter />
      <Navbar />
      <Center height="100vh">
        <Component {...pageProps} />
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
