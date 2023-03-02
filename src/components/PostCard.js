import {
  Avatar,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const PostCard = ({post}) => {
  return (
    <>
        <Stack boxShadow='lg' borderRadius='lg' w='20rem'>
          <VStack>
            <Image src={post.imageURL} />
            <Heading  alignSelf='flex-start' fontSize='xl'>{post.title}</Heading>
            <HStack alignSelf='flex-start' m={4}>
              <Avatar src={post.avatar} />
              <Text fontWeight='bold'>{post.name}</Text>
              <Text>{post.date}</Text>
            </HStack>
            <Text m={4}>
            {post.decs}
            </Text>
            <HStack alignSelf='flex-start' m={4}>
            <Tag>{post.tag1}</Tag>
            <Tag>{post.tag2}</Tag>
            </HStack>
            <Button alignSelf='flex-end' colorScheme='orange'>Read More</Button>
          </VStack>
        </Stack>
    </>
  );
};

export default PostCard;
