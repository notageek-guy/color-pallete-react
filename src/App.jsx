import { DarkMode, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ColorAdder from "./components/ColorAdder";
import DarkModeToggle from "./components/DarkModeToggle";
import stc from "string-to-color";
import { useStore } from "./context/store";
import Pallete from "./components/Pallete";
import ColorGenerator from "./components/ColorGenerator";
import Github from "./components/Github";
export default function App() {
  const { palleteList } = useStore();
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(palleteList);
  const handleInput = (e) => {
    setColor(e.target.value);
  };
  const addColor = () => {
    let newId = new Date().getTime();
    
    let ChangedColor = stc(color);
    if(color.length > 0){
    setColorList((prev) => {
      return [...prev, { id: newId, name:  color, color: ChangedColor }];
    });
    setColor("");
    }
  };
  console.log(colorList);
  const genRandom = () => {
    let newId = new Date().getTime();
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorList((prev) => {
      return [...prev, { id: newId, name: "Random", color: randomColor }];
    });
  }
  return (
    <VStack p={4} overflow='hidden'>
      <HStack alignSelf={'flex-end'}>
      <Github/>
      <DarkModeToggle />
      </HStack>
      <Heading
        as="h1"
        bgClip="text"
        size='2xl'
        fontSize={{
          base: "2xl",
          sm: "3xl",
          md: "4xl",
          lg: "5xl",
        }}

        bgGradient='linear(to-l, #7928CA, #FF0080)'
      >
        React Pallete
      </Heading>
      <ColorAdder color={color} addColor={addColor} handleInput={handleInput} />
      <Pallete  colorList={colorList}/>
      <ColorGenerator genRandom={genRandom}/>
    </VStack>
  );
}
