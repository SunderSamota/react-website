import {
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const FooterMenu = () => {
  const textstyle = {
    color: "rgb(143 143 143)",
    fontSize: "16px",
    fontFamily: "Montserrat",
    cursor: "pointer",
    h2: { fontSize: "18px", color:'orange' },
    '&:hover':{color:'red'}
  };
  return (
    <>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(auto-fit, minmax(10rem, 1fr))" gap={6}>
          <GridItem>
          <VStack>
            <Heading style={textstyle.h2}>CONTACT</Heading>
            <Divider />
            <Text style={textstyle} as="p">
              16192, Coastal Hwy,
            </Text>
            <Text style={textstyle} as="p">
              Lewes, Delaware, 19958
            </Text>
            <Spacer />
            <Text style={textstyle} as="p">
              Customer Service: +1 (607) 213 1251
            </Text>
            <Text style={textstyle} as="p">
              {" "}
              Email: cs@md-tradeline.com
            </Text>
          </VStack>
          </GridItem>
          <GridItem>
          <VStack>
            <Heading style={textstyle.h2}>QUICK LINKS</Heading>
            <Divider />
            <Link to={"./"}>
            <Text style={textstyle} as="p">Home</Text>
          </Link>
          <Link to={"./cart"}>
            <Text style={textstyle} as="p">Cart</Text>
          </Link>
          <Link to={"./dicehome"}>
            <Text style={textstyle} as="p">Game</Text>
          </Link>
          <Link to={"./header"}>
            <Text style={textstyle} as="p">Blog</Text>
          </Link>
          </VStack>
          </GridItem>
          <GridItem>
          <VStack>
            <Heading style={textstyle.h2}>CUSTOMER SERVICE</Heading>
            <Divider />
            <Text style={textstyle} as="p">
              Privacy policy
            </Text>
            <Text style={textstyle} as="p">
              Refund Policy
            </Text>
            <Text style={textstyle} as="p">
              Terms of Service
            </Text>
            <Text style={textstyle} as="p">
              Shipping policy
            </Text>
          </VStack>
          </GridItem>
          <GridItem>
          <VStack>
            <Heading style={textstyle.h2}>NEWSLETTER</Heading>
            <Divider />
            <Text as="p" style={textstyle}>
              Please sign up the newsletter and
            </Text>
            <Text as="p" style={textstyle}>
              gets the latest update about the products.
            </Text>
            <Spacer />
            <HStack>
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
              <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button>
              <Button colorScheme="orange" leftIcon={<FaInstagram />}>
                Twitter
              </Button>
            </HStack>
          </VStack>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default FooterMenu;
