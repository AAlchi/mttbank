import React from 'react'
import Account from './account/Account'
import Transactions from './transactions/Transactions'
import { Box } from '@chakra-ui/react'
import Send from './send/Send'
import Rewards from './rewards/Rewards'
import Chat from './chat/Chat'

const index = () => {
    return (
        <>
            <div className='grid grid-cols-1 gap-5 p-10 lg:grid hidden'>
                <Box className='grid grid-cols-3 gap-5 lg:grid hidden'>
                    <Box className='grid grid-cols-1 gap-5'>
                        <Account />
                        <Send />
                    </Box>
                    <Transactions />
                    <Chat />
                </Box>
                <Rewards />
            </div>

            <div className='flex flex-col gap-5 p-5 flex lg:hidden'>
                <Account />
                <Send />
                <Transactions />
                <Chat />
                <Rewards />
            </div>
        </>
    )
}

export default index