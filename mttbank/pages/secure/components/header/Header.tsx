import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon, BellIcon } from "@chakra-ui/icons"
import { useRouter } from 'next/router' 
import SideView from '../sideView/SideView'

const Header = () => {
    const router = useRouter()
    return (
        <>
            <header className='items-center justify-between px-10 py-4 bg-white hidden lg:flex'>
                <Link href="/" display={'flex'} gap={1} pb={3}>
                    <Text color={'#307c7c'} fontSize='3xl' fontWeight={'bold'}>MTT</Text>
                    <Text fontSize='3xl'>Bank</Text>
                </Link>
                <Box className='flex gap-5'>
                    <Link href="/secure/transactions">Transactions</Link>
                    <Link href="/secure/open">Open an Account</Link>
                    {/* <Link href="/secure/send">Send & Recieve</Link> */}
                </Box>
                <Box className='flex gap-5'>
                    {/* <SideView /> */}
                    <ArrowForwardIcon onClick={() => router.push("/logout")} cursor="pointer"/>
                </Box>
            </header>
            <header className='flex flex-col px-6 py-4 bg-white lg:hidden'>
                <div className='flex items-center justify-between'>
                    <Link href="/" display={'flex'} gap={1} pb={3}>
                        <Text color={'#307c7c'} fontSize='3xl' fontWeight={'bold'}>MTT</Text>
                        <Text fontSize='3xl'>Bank</Text>
                    </Link>

                    <Box className='flex gap-5'>
                        {/* <SideView /> */}
                        <ArrowForwardIcon onClick={() => router.push("/logout")} cursor="pointer"/>
                    </Box>
                </div>
                <Box className='flex gap-5'>
                    <Link href="/secure/transactions">Transactions</Link>
                    <Link href="/secure/open">Open an Account</Link>
                    {/* <Link href="/secure/send">Send & Recieve</Link> */}
                </Box>
            </header>
        </>
    )
}

export default Header