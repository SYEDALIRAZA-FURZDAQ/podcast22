import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>

    <Stack direction={['column', 'row']}>
      <VStack
        alignItems={'stretch'}
        w={'full'}
        px={'4'}
      >
        <Heading size="md" textTransform={'uppercase'} textAlign={['center', 'left']}>
          subscribe to get updates
        </Heading>
        <HStack
          borderBottom={'2px solid white'}
          py='2'
        >
          <Input
            placeholder='Enter Email Here ... '
            border={'none'}
            borderRadius={'none'}
            outline={'none'}
            focusBorderColor='none'
          />
          <Button p={'0'} colorScheme='purple' varient={'ghost'} borderRadius={'0 20px 20px 0'}>
            <AiOutlineSend size={20} />
          </Button>
        </HStack>

      </VStack >

      <VStack
        w={'full'}
        borderLeft={['none', '1px solid white']}
        borderRight={['none', '1px solid white']}
      >
        <Heading textTransform={'uppercase'} textAlign={'center'}>
          Thabang Podcast Stream 
        </Heading>
        <Text>
          Enjoy your favourit Podcasts 
        </Text>

      </VStack>

      <VStack
        w={'full'}
      // borderlLeft={['none', '1px solid white']}
      // borderRight={['none', '1px solid white']}
      >
        <Heading size={'md'} textTransform={'uppercase'}>
          Social Media
        </Heading>
        <Button variant={'link'} colorScheme={'white'}>
          <a target={'blank'} href="https://youtube.com">Youtube</a>
        </Button>

        <Button variant={'link'} colorScheme={'white'}>
          <a target={'blank'} href="https://youtube.com">Instagram</a>
        </Button>

        <Button variant={'link'} colorScheme={'white'}>
          <a target={'blank'} href="https://youtube.com">Github</a>
        </Button>


      </VStack>


    </Stack>

  </Box>
};

export default Footer