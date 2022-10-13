import { IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Github() {
  return (
    
      <IconButton as="a" href="https://github.com/notageek-guy/color-pallete-react" alignSelf={'flex-end'}  icon={<FaGithub />} />
    
  );
}
