import React from "react";
import Cart from "../components/Cart";
import YourDetails from "../components/YourDetails";
import { Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const CartPage = () => {
  return (
    <>
      <Container maxW="container.xl" py={20}>
        <Box textAlign={{base:'center', md:'left'}} w='full' mt={4}>
        <Heading fontSize='3xl'>This is Your Cart Page</Heading>
        <Text>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </Text>
        </Box>
        <Divider mt={4} />
        <Flex
          h="auto"
          py={10}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <YourDetails />
          <Cart />
        </Flex>
      </Container>
    </>
  );
};

export default CartPage;
