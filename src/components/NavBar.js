import {
  Avatar,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo  from '../images/btc.svg';
import ProfileImage  from '../images/sunder.jpg';

const NavBar = () => {
  return (
    <>
      <Flex
        boxShadow='lg'
        h="70px"
        justify="space-between"
        alignItems="center"
        px={4}
      >
        <Flex align="center">
          <Image mr={4} w="50px" h="50px" src={Logo} />
          <Link to={"./"}>
            <Text mr={4} _hover={{color:'red'}}>Home</Text>
          </Link>
          <Link to={"./cart"}>
            <Text mr={4} _hover={{color:'red'}}>Cart</Text>
          </Link>
          <Link to={"./dicehome"}>
            <Text mr={4} _hover={{color:'red'}}>Game</Text>
          </Link>
          <Link to={"./header"}>
            <Text _hover={{color:'red'}}>Blog</Text>
          </Link>
        </Flex>
        <Menu>
          <MenuButton>
            <Avatar src={ProfileImage} />
          </MenuButton>
          <MenuList>
          <Link to={"./profile"}>
          <MenuItem>Profile</MenuItem>
          </Link>
            <MenuItem>Setting</MenuItem>
            <MenuItem>Update Profile</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavBar;
