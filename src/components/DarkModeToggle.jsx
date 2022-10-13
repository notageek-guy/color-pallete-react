import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode, IconButton } from "@chakra-ui/react";

export default function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton alignSelf='flex-end'
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
      isRound="true"
      onClick={toggleColorMode}
    />
  );
}
