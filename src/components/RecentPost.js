import { Container, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BlogData } from "./BlogData";
import PostCard from "./PostCard";

const RecentPost = () => {
  return (
    <>
      <Container maxW="container.xl" mt={70}>
        <Divider />
        <Text fontSize="2xl" fontWeight="bold" p={4}>
          Recent Posts
        </Text>
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
          gap={6}
        >
          {BlogData.map((postData) => (
            <GridItem key={postData.title} display="flex" justifyContent="center">
              <PostCard post = {postData} />
            </GridItem>
          ))}
        </Grid>
        ;
        <Text align="center" fontSize="3xl" fontWeight="bold" m={10}>
          Read more...
        </Text>
      </Container>
    </>
  );
};

export default RecentPost;
