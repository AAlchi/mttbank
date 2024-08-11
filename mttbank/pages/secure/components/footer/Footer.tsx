import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon, BellIcon } from "@chakra-ui/icons"

const Footer = () => {
    return (
        <Box className='items-center bg-slate-200 flex-col justify-between px-10 py-4 bg-white hidden lg:flex' height={"200px"}>
            <Box className='flex items-center justify-between w-full'>
                <Box display={'flex'} gap={1} pb={3}>
                    <Text color={'#307c7c'} fontSize='3xl' fontWeight={'bold'}>MTT</Text>
                    <Text fontSize='3xl'>Bank</Text>
                </Box> 
            </Box>
            <Box className='flex w-full items-start'> 
                <Box className='flex gap-5'>
                    <Link>MTT Bank is NOT a real bank. This bank is only for practicing.</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer