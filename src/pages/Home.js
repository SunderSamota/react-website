import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import PostPage from "./PostPage";

const Home = () => {
  return (
    <div>
      <Container maxW="container.xl" mt={4}>
        <Flex
          w="full"
          justifyContent="space-between"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <PostPage />
          <PostPage />
          <PostPage />
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
