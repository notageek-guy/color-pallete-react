import { HStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ColorBox from "./ColorBox";

export default function Pallete({ colorList }) {
  return (
    <SimpleGrid
      columns={{ 
        base: 2,
        md: 3,
        lg: 4,
      }}
      spacing={{
        base: 2,
        sm: 2,
        md: 3,
        lg: 4,
      }}
    >
      {colorList.map((color) => (
        <ColorBox key={color.id} color={color} />
      ))}
    </SimpleGrid>
  );
}
