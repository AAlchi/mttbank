import React, { useState } from 'react'
import Input from "../../global/Input_Global"
import Button from "../../global/Button_Global"
import { Box, Link, Text } from '@chakra-ui/react'
import Feedback_Global from '@/pages/global/Feedback_Global'


interface Authentication_Form_Interface {
    type: String
}

const Authentication_Form: React.FC<Authentication_Form_Interface> = ({
    type
}) => {
    const [types, setTypes] = useState(type)
    const switchType = () => {
        if (types == "signup") {
            setTypes("signin")
        } 

        if (types == "signin") {
            setTypes("signup")
        }
    }
    return (
        <>
            <Feedback_Global />
            <Box display="flex" justifyContent="start" alignItems="start" backgroundImage={"url('background.jpg')"} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} minHeight={"100vh"} backgroundPosition={"center"}>
                <Box className='lg:ml-20 m-5' display={'flex'} justifyContent="center" flexDirection={'column'} gap={5} minHeight="550px" height="90vh" width={"600px"}>
                    <Box backgroundColor="white" padding={5} borderRadius="20px">
                        <Box display={'flex'} gap={1} pb={3}>
                            <Text color={'#307c7c'} fontSize='3xl' fontWeight={'bold'}>MTT</Text>
                            <Text fontSize='3xl'>Bank</Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={5}>
                            <Box display={'flex'} flexDirection={'column'} gap={5}>
                                <Input title="Username" description="" type="text" />
                                {types == "signin" && (
                                    <Input title="Email" description="" type="email" />
                                )}
                                <Input title="Password" description="" type="password" />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={3}>
                                <Button name="Submit" />
                                <Box className='flex gap-1'>
                                    {types == "signup" ? "Don't have an account?" : "Have an account?"}
                                    <Text onClick={switchType} cursor={"pointer"} color={'#307c7c'}>{types == "signup" ? "Sign Up" : "Sign In"}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Authentication_Form