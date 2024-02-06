import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import { px } from "framer-motion";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" paddingRight='10px'>
            <Image src={logo} boxSize='60px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar