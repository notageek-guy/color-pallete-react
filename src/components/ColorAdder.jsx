import { Button, HStack, Input } from "@chakra-ui/react";
import React from "react";

export default function ColorAdder({ color, addColor, handleInput }) {
  return (
    <>
      <HStack py={2} spacing={"10px"}>
        <Input
          sx={{
            width: "100%",
            maxWidth: "300px",
            boxSizing: "border-box",
          }}
          value={color}
          onChange={handleInput}
          placeholder="Enter your color "
        />
        <Button bg="gray.600" onClick={addColor}>
          +
        </Button>
      </HStack>
    </>
  );
}
