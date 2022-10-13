import { Button } from '@chakra-ui/react'
import React from 'react'

export default function ColorGenerator({genRandom}) {
  return (
    <>
    
    <Button onClick={genRandom} colorScheme="teal" variant='outline'>Generate</Button>
    </>
  )
}
