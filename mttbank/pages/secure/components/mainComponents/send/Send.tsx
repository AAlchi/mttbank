import Button_Global from '@/pages/global/Button_Global'
import Input_Global from '@/pages/global/Input_Global'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Send = () => {
    return (
        <Box className='bg-gray-100 p-7 rounded-lg'>
            <Text className='font-bold text-xl pb-2'>Send & Recieve</Text>
            <div className='border-b-2' />
            <Box className='grid grid-cols-1 gap-5 mt-5' maxWidth="600px">
                <Input_Global title="Enter the account number" description="This is from the account that you would like to send or recieve money from" type={"text"} />
                <Box className='flex gap-2 flex-col justify-between'>
                    <Button_Global name="Send Money" />
                    <Button_Global name="Request Money" />
                </Box>
            </Box>
        </Box>
    )
}

export default Send