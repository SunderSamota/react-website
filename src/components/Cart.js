import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import cartImage  from '../images/penny-board.jpg';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'whiteAlpha.50')
  const color = useColorModeValue('gray.600', 'gray.400')
  return (
    <>
      <VStack bg={bg} align="flex-start" w="full" h="full" spacing={6} p={4}>
        <VStack alignItems="flex-start" spacing={1}>
          <Heading fontSize="2xl">Your Cart</Heading>
          <Text>
            If price is too much on your eyes,{" "}
            <Button onClick={toggleColorMode} variant="outline" colorScheme="black">
              Try changing the theme
            </Button>
          </Text>
        </VStack>
        <HStack spacing={6} alignItems="center" w="full">
          <AspectRatio ratio={1} w={24}>
            <Image src={cartImage} alt="penny" />
          </AspectRatio>
          <Stack
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
          >
            <VStack w="full" alignItems="flex-start" spacing={0}>
              <Heading fontSize="md">Penny Board</Heading>
              <Text fontSize="xs" color={color}>
                PNYCOMP27451
              </Text>
            </VStack>
            <Heading fontSize="sm" textAlign="end">
              $119.25
            </Heading>
          </Stack>
        </HStack>
        <VStack w="full" alignItems="stretch" spacing={4}>
          <HStack justifyContent="space-between">
            <Text color={color}>Subtotal</Text>
            <Heading fontSize="sm">$119.25</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={color}>Shipping</Text>
            <Heading fontSize="sm">$19.25</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={color}>Taxes(estimated)</Text>
            <Heading fontSize="sm">$23.25</Heading>
          </HStack>
          <Divider border="1px solid gray" />
          <HStack justifyContent="space-between">
            <Text color={color}>Total</Text>
            <Heading fontSize="sm">
              $190.26
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Cart;
