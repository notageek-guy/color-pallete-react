import React from "react";
import { Badge, Box } from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export default function ColorBox({ color }) {
  const { hasCopied, onCopy } = useClipboard(color.color);
  const toast = useToast();
  if (hasCopied) {
    toast({
      title: "Copied.",
      description: "Color copied to clipboard.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <Box py={3}>
      <Badge
        p={2}
        m={1}
        boxShadow="md"
        borderRadius="full"
        textTransform="uppercase"
        fontSize="0.8em"
      >
        {color.name}
      </Badge>
      <Box
        w="100px"
        h="100px"
        textAlign="center"
        bgGradient={`linear(to-l, ${color.color}, ${color.color})`}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent={"center"}
        bg={color.color}
        borderRadius="md"
        onClick={onCopy}
        sx={{
            _hover: {
                cursor: "pointer",
                opacity:'1',
            }
        }}
      >
        {color.color}
      </Box>
    </Box>
  );
}
