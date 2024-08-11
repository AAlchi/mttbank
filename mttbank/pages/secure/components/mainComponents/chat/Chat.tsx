import Button_Global from '@/pages/global/Button_Global'
import Input_Global from '@/pages/global/Input_Global'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Chat = () => {
    return (
        // <Box className='relative bg-gray-100 p-7 rounded-lg' height="600px">
        //     <Box className='flex justify-between items-center pb-2'>
        //         <Text className='font-bold text-xl'>Chat</Text> 
        //     </Box>
        //     <div className='border-b-2' /> 
        //         <Box className='flex flex-col justify-between gap-5 mt-5' maxHeight="430px" overflowY="scroll">
        //             <Box>
        //                 <Text className='font-bold'>You</Text>
        //                 <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, repellendus.</Text>
        //             </Box>
        //             <Box>
        //                 <Text className='font-bold'>You</Text>
        //                 <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, repellendus.</Text>
        //             </Box>
        //             <Box>
        //                 <Text className='font-bold'>You</Text>
        //                 <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, repellendus.</Text>
        //             </Box> 
        //         </Box> 
        //         <Box className='absolute bottom-0 w-full flex items-center gap-2 justify-between mt-2 right-0 p-5 bg-slate-100'>
        //             <Input_Global title="" description="" type="text"/> 
        //             <Button_Global name="Send" />
        //         </Box>
        // </Box>
        <Box className='relative bg-gray-100 p-7 rounded-lg' maxHeight="250px" overflowY={"scroll"}>
            <Box className='flex justify-between items-center pb-2'>
                <Text className='font-bold text-xl'>Q&A (In real life)</Text>
            </Box>
            <div className='border-b-2' />
            <Box className='flex flex-col justify-between gap-5 mt-5' maxHeight="430px">
                <Box>
                    <Text className='font-bold'>Is there a limit on my credit limit?</Text>
                    <Text>Yes. Your credit card limit depends on your credit score and other things as well.</Text>
                </Box>
                <Box>
                    <Text className='font-bold'>How do I open an account?</Text>
                    <Text>To open an account, you need to provide the necessary information (SSN, DL, etc). You can open one usually online or in-person.</Text>
                </Box>
                <Box>
                    <Text className='font-bold'>How do I know which bank to go with?</Text>
                    <Text>To know which bank is best for you, consider factors such as interest rates, fees, ATMs, benefits, branches, and more.</Text>
                </Box>
            </Box> 
        </Box>
    )
}

export default Chat