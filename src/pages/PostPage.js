import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import cardImage  from '../images/card.jpg';

const PostPage = () => {
  return (
    <>
      <Card maxW="sm" mt={{ base: "30px", md: "auto" }}>
        <Image
          objectFit="cover"
          src={cardImage}
          alt="Chakra UI"
          borderRadius="10px"
        />
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box display="inline-flex" gap={2}>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text size="xs">1 min ago</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the
            speed of design. I wanted the developer to be just as excited as the
            designer to create a screen.
          </Text>
          <Button colorScheme="green" float="right">
            View Post
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default PostPage;
