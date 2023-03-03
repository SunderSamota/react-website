import userProfileImage from "../images/sunder.jpg";
import workImage1 from "../images/work-1.png";
import workImage2 from "../images/work-2.png";
import workImage3 from "../images/work-3.png";
import downloadResume from "../Resume-2023.docx";
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
  Stack,
  Text,
  ListItem,
  UnorderedList,
  Spacer,
  FormControl,
  FormLabel,
  Textarea,
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
            <Text fontSize="1xl" color="green">
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
              A full stack developer is a web developer or engineer who works
              with both the front and back ends of a website or application. In
              this sense, they provide an end-to-end service, and can be
              involved in projects that involve databases and building
              user-facing websites
            </Text>
            <Tabs>
              <TabList>
                <Tab fontWeight="bold">Skill</Tab>
                <Tab fontWeight="bold">Experience</Tab>
                <Tab fontWeight="bold">Education</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>Front-end Languages and Frameworks</ListItem>
                    <ListItem>Backend Technologies and Frameworks</ListItem>
                    <ListItem>Database Management Systems</ListItem>
                    <ListItem>Web Hosting Platforms</ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>
                      Learn the Necessary Programming Languages
                    </ListItem>
                    <ListItem>5 years experience in web technologies</ListItem>
                    <ListItem>D2doctors pvt. ltd.</ListItem>
                    <ListItem>Sraswatii global pvt,ltd.</ListItem>
                    <ListItem>M.D. TRADELINE. USA. LLC.</ListItem>
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <UnorderedList>
                    <ListItem>
                      12th form Rajasthan education board, Ajmer
                    </ListItem>
                    <ListItem>BCA - Rajasthan university</ListItem>
                    <ListItem>
                      MCA - Rajasthan Technical university, Kota
                    </ListItem>
                  </UnorderedList>
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
              <Card bgImage={workImage1} color="white" borderRadius="lg">
                <CardBody>
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                </CardBody>
              </Card>
              <Card bgImage={workImage2} color="white" borderRadius="lg">
                <CardBody>
                  <Heading>Web Design</Heading>
                  <Text py={4}>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document
                  </Text>
                </CardBody>
              </Card>
              <Card bgImage={workImage3} color="white" borderRadius="lg">
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
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          py={20}
        >
          <GridItem>
            <Heading>Contact Me</Heading>
            <Spacer />
            <Text py={4}>sundersamota001@gmail.com</Text>
            <Text>91-9694753020</Text>
            <Text py={4}>70/57, Patel marg, Mansrover, Jaipur</Text>
            <Button colorScheme="orange">
              <a
                download
                target="_blank"
                rel="noreferrer"
                href={downloadResume}
              >
                Download CV
              </a>
            </Button>
          </GridItem>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your full name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email address.." />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Please enter Message" />
            </FormControl>
            <FormControl>
              <Button mt={4} colorScheme="teal" type="submit" justifiy='center' align='center'>
                Submit
              </Button>
            </FormControl>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
