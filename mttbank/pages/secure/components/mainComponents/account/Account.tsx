import Button_Global from '@/pages/global/Button_Global'
import { Box, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

const Account = () => {
    return (
        <Box className='bg-gray-100 p-7 rounded-lg'>
            <Box className='flex justify-between items-center pb-2'>
                <Text className='font-bold text-xl'>Accounts</Text>
                <Button_Global name="View Transactions" />
            </Box>
            <div className='border-b-2' /> 
                <Box className='flex justify-between mt-5'>
                    <Box>
                        <Text className='pb-2'>Main Account Balance</Text>
                        <Text className='font-bold text-xl pb-2'>$1500</Text>
                    </Box>
                    <Box> 
                        <Box className='flex font-bold text-lg gap-5'>
                        <Stat>
                            <StatLabel>Deposits</StatLabel>
                            <StatNumber>$0.00</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                        <Stat>
                            <StatLabel>Withdrawals</StatLabel>
                            <StatNumber>$0.00</StatNumber>
                            <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                        </Box>
                    </Box>
                </Box> 
        </Box>
    )
}

export default Account