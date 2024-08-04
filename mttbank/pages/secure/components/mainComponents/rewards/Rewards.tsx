import Button_Global from '@/pages/global/Button_Global'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Rewards = () => {
    return (
        <Box className='bg-gray-100 p-7 rounded-lg'>
            <Box className='flex justify-between items-center pb-2'>
                <Text className='font-bold text-xl'>Rewards</Text>
                <Button_Global name="View All" />
            </Box>
            <div className='border-b-2' />
            <Box className='flex justify-between mt-5'>
                <Box>
                    <Text className='pb-2'>Main Account Balance</Text>
                    <Text className='font-bold text-xl pb-2'>$1500</Text>
                </Box>
                <Box>
                    <Box className='flex pb-2 items-center gap-3'>
                        <Text>Deposits/Withdrawals (Monthly)</Text>
                    </Box>
                    <Box className='flex font-bold text-lg gap-5'>
                        <Text>+ $1000</Text>
                        <Text>- $500</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Rewards