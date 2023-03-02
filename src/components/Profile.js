import userProfileImage from '../images/sunder.jpg';
import workImage1 from '../images/work-1.png';
import workImage2 from '../images/work-2.png';
import workImage3  from '../images/work-3.png';
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Profile = () => {
  return (
    <>
      <Container maxW="container.xl" my={10}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={10}
        >
          <GridItem w="100%">
            <Text fontSize="xl" color="green">
              Full Stack Developer
            </Text>
            <Heading as="h2" color="orange.700">
              Hi, I'm Sunder Samota From India
            </Heading>
            <Image src={userProfileImage} w="full" h="400px" py={6} />
          </GridItem>
          <GridItem w="100%">
            <Heading>About Me</Heading>
            <Text>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Text>
            <Tabs>
              <TabList>
                <Tab fontWeight="bold">Skill</Tab>
                <Tab fontWeight="bold">Experience</Tab>
                <Tab fontWeight="bold">Education</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>UI/UX</Text>
                  <Text>Designing Web/App Interface</Text>
                  <Text>HTML</Text>
                  <Text>Designing Web/App Interface</Text>
                  <Text>Designing Web/App Interface</Text>
                  <Text>Designing Web/App Interface</Text>
                  <Text>Designing Web/App Interface</Text>
                </TabPanel>
                <TabPanel>
                  <Text>Web Development</Text>
                  <Text>Web App Development</Text>
                </TabPanel>
                <TabPanel>
                  <Text>App Development!</Text>
                  <Text>Building Androied/Ios Apps</Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
          <GridItem w="100%"></GridItem>
          <GridItem w="100%"></GridItem>
          <GridItem w="100%"></GridItem>
        </Grid>
        <Stack>
          <Heading>My Services</Heading>
          <Flex justify="space-between" align="center">
            <HStack spacing={10}>
              <Card>
                <CardBody bg="#262626" color="white" borderRadius="lg">
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                  <Button colorScheme="orange">Learn More..</Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody bg="#262626" color="white" borderRadius="lg">
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                  <Button colorScheme="orange">Learn More..</Button>
                </CardBody>
              </Card>
              <Card>
                <CardBody bg="#262626" color="white" borderRadius="lg">
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                  <Button colorScheme="orange">Learn More..</Button>
                </CardBody>
              </Card>
            </HStack>
          </Flex>
        </Stack>

        <Stack py={20}>
          <Heading>My Work</Heading>
          <Flex justify="space-between" align="center">
            <HStack spacing={10}>
              <Card
                bgImage={workImage1}
                color="white"
                borderRadius="lg"
              >
                <CardBody>
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                </CardBody>
              </Card>
              <Card
                bgImage={workImage2}
                color="white"
                borderRadius="lg"
              >
                <CardBody>
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                </CardBody>
              </Card>
              <Card
                bgImage={workImage3}
                color="white"
                borderRadius="lg"
              >
                <CardBody>
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                </CardBody>
              </Card>
            </HStack>
          </Flex>
        </Stack>
        <Stack>
          <Button colorScheme="orange" alignSelf="center">
            Learn More..
          </Button>
        </Stack>
          <Grid templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          py={20}
          >
            <GridItem>
              <Heading>Contact Me</Heading>
              <Text>sundersamota001@gmail.com</Text>
              <Text>91-9694753020</Text>
              <Text>70/57, Patel marg, Mansrover, Jaipur</Text>
              <Button colorScheme="orange">Download CV</Button>
            </GridItem>
            <GridItem>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number" />
              </InputGroup>
            </GridItem>
          </Grid>
      </Container>
    </>
  );
};

export default Profile;
