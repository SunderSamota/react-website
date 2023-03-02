import { Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <>
      <Box bg="black" p={7}>
        <FooterMenu />
        <Spacer />
        <Text
          color="white"
          verticalAlign="bottom"
          fontFamily="monospace"
          display='flex'
          justifyContent='center'
          alignItems='flex-end'
          fontSize='md'
        >
          2021 © copyright @dosomecoding
        </Text>
      </Box>
    </>
  );
};

export default Footer;
