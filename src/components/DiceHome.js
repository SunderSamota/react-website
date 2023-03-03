import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import diceImage from "../images/dices.png";

const DiceHome = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const numbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumbers, setSelectedNumbers] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState();
  const [score, setScore] = useState(0);

  const onNumberClicked = (value) => {
    setSelectedNumbers(value);
    setError(null);
  };

  const genrateRandomNum = () => {
    if (selectedNumbers) {
      const genrateNumbers = Math.ceil(Math.random() * 6);
      setDice(genrateNumbers);
      if (selectedNumbers === genrateNumbers) {
        setScore((prev) => prev + genrateNumbers);
      } else {
        setScore((prev) => prev - 2);
      }
    } else {
      setError("Please Select Number");
    }
  };

  return (
    <>
      {gameStarted ? (
        <>
          <Container maxW="container.xl" py={10}>
            <Stack
              justify="center"
              align="center"
              maxW="1300px"
              mx="auto"
              gap={0}
            >
              <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "6xl" }}
                color={error ? "red" : "black"}
              >
                {error ? error : "Select Number"}
              </Heading>
              <Button
                onClick={() => {
                  setGameStarted(false);
                }}
                alignSelf="flex-end"
                bg="black"
                color="white"
                _hover={{ bg: "gray" }}
              >
                Back Game
              </Button>
              <Flex>
                {numbers.map((value) => (
                  <Flex
                    justify="center"
                    align="center"
                    bg={selectedNumbers === value ? "green" : "black"}
                    color="white"
                    w={{ base: "35px", sm: "35px", md: "50px", lg: "50px" }}
                    h={{ base: "35px", sm: "35px", md: "50px", lg: "50px" }}
                    key={value}
                    mr={4}
                    borderRadius={5}
                    fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl" }}
                    cursor="pointer"
                    onClick={() => onNumberClicked(value)}
                  >
                    {value}
                  </Flex>
                ))}
                ;
              </Flex>
              <SimpleGrid columns={1}>
                <Box
                  h="150px"
                  w="150px"
                  onClick={genrateRandomNum}
                  cursor="pointer"
                >
                  <Image src={require(`../images/dice${dice}.png`)} />
                </Box>
              </SimpleGrid>
              <Text fontSize="lg" mt={{base:'60px', sm:'60px', md:'auto', lg:'auto'}}>Click on dice to roll</Text>
              <Text fontSize="6xl" color={score > 0 ? "green" : "red"}>
                {score}
              </Text>
              <Heading as="h2" fontSize="6xl">
                Total Score
              </Heading>
              <Button onClick={() => setScore(0)}>Reset Score</Button>
            </Stack>
            <Stack maxW="900px" mx="auto" py={5}>
              <Heading>Game Rules:-</Heading>
              <List>
                <ListItem>Select Number any number</ListItem>
                <ListItem>Click on dice image to roll it</ListItem>
                <ListItem>
                  Select number is equal to obtained dice result then you will
                  get same point of dice
                </ListItem>
                <ListItem>
                  if You are Wrong Score will be deducted by 2 points
                </ListItem>
              </List>
            </Stack>
          </Container>
        </>
      ) : (
        <Container maxW="container.xl" py={10}>
          <Flex justify="center" align="center">
            <Image src={diceImage} w="50%" />
            <Stack>
              <Heading
                fontSize={{ base: "3xl", sm: "3xl", md: "6xl", lg: "6xl" }}
              >
                The Dice Game
              </Heading>
              <Button
                bg="black"
                alignSelf="flex-end"
                color="white"
                _hover={{ bg: "gray" }}
                onClick={() => {
                  setGameStarted(true);
                }}
              >
                Start Game
              </Button>
            </Stack>
          </Flex>
        </Container>
      )}
    </>
  );
};

export default DiceHome;
