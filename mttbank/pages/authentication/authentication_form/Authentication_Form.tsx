import React, { useState } from 'react' 
import Button from "../../global/Button_Global"
import { Box, FormLabel, Input, Link, Text } from '@chakra-ui/react'
import Feedback_Global from '@/pages/global/Feedback_Global'
import axios from 'axios'
import { useRouter } from 'next/router'


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

    // submit

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()

    const authenticate = () => {
        if (types == "signin") {
            signUp()
        } else {
            signIn()
        }
    }

    const signIn = async () => {
        setIsButtonLoading(true)
        
        try {
            const post = await axios.post('/api/signin', {
                email: email,
                password: password
            })

            if (post) {
                router.push('/')
                console.log(post)
            }
        } catch (err) {
            setError(true)
            setIsButtonLoading(false)
        } 
    }

    const signUp = async () => {
        setIsButtonLoading(true)
        
        try {
            const post = await axios.post('/api/signup', {
                name: name,
                email: email,
                password: password
            })
            if (post) {
                router.push('/')
            }
        } catch (err) {
            setError(true)
            setIsButtonLoading(false)
        } 
    }
    return (
        <>
            {error && (
                <div onClick={() => setError(false)}>
                    <Feedback_Global />
                </div>
            )}
            <Box display="flex" justifyContent="start" alignItems="start" backgroundImage={"url('background.jpg')"} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} minHeight={"100vh"} backgroundPosition={"center"}>
                <Box className='lg:ml-20 m-5' display={'flex'} justifyContent="center" flexDirection={'column'} gap={5} minHeight="550px" height="90vh" width={"600px"}>
                    <Box backgroundColor="white" padding={5} borderRadius="7px">
                        <Box display={'flex'} gap={1} pb={3}>
                            <Text color={'#307c7c'} fontSize='3xl' fontWeight={'bold'}>MTT</Text>
                            <Text fontSize='3xl'>Bank</Text>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} gap={5}>
                            <Box display={'flex'} flexDirection={'column'} gap={5}>
                            <FormLabel>Email</FormLabel>
                            <Input title="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                {types == "signin" && (
                                    <>
                                     <FormLabel>Name</FormLabel>
                                     <Input title="Name" type="text" onChange={(e) => setName(e.target.value)} /> 
                                    </>
                                )}
                                <FormLabel>Password</FormLabel>
                                <Input title="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} gap={3}>
                                <div onClick={authenticate}>
                                    {
                                        isButtonLoading ? (
                                            <Button name="Submit" isLoading={true}/>
                                        ) : (
                                            <Button name="Submit" isLoading={false}/>
                                        )
                                    }
                                </div>
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