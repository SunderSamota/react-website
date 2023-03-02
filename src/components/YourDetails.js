import {
    Button,
    Checkbox,
  GridItem,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const YourDetails = () => {
  return (
    <>
      <VStack align={{base:"center", md:"flex-start"}} w="full" h="full" spacing={6} mt={{base:'30px', md:'auto'}}>
        <VStack align={{base:"center", md:"flex-start"}}>
        <Heading fontSize='2xl'>Your Details</Heading>
        <Text>If you already have a account, click here to log in.</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <HStack>
            <SimpleGrid columns={2} rowGap={4} spacing={10} columnGap={3}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Enter First Name" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Enter Last Name" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea placeholder="Enter Address Here" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input type="text" placeholder="Enter City" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select placeholder="Select country">
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="London">London</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
              <FormControl>
              <Checkbox defaultChecked>Shipping to the billing address</Checkbox>
              </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
              <FormControl>
              <Button colorScheme='yellow' w='full' mt={4}>Place Order</Button>
              </FormControl>
              </GridItem>
            </SimpleGrid>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default YourDetails;
