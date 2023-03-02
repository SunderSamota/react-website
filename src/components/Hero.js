import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import heroImage  from '../images/btc.svg';

const Hero = () => {
  return (
    <>
      <Container
        maxW="container.xl"
        mt={{ base: "20px", sm: "20px", md: "40px", lg: "40px" }}
      >
        <Flex
          align="center"
          direction={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "row",
          }}
          alignContent='space-between'
        >
          <VStack
            align={{
              base: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
            spacing={10}
            mt={{ base: "10px", sm: "10px", md: "auto", lg: "auto" }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", sm: "2xl", md: "6xl", lg: "6xl" }}
            >
              Get Crypto Related Knowledge
            </Heading>
            <Text as="p" w={{ base: "auto", sm: "auto", md: "700px", lg:'700px' }}>
              Vivamus suscipit tortor eget felis porttitor volutpat. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
              sollicitudin molestie malesuada.
            </Text>
            <Button colorScheme="orange">Check Posts</Button>
          </VStack>
          <Spacer />
          <Stack>
            <Image
              src={heroImage}
              w='300px'
            />
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default Hero;
