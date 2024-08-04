import React, { useEffect, useState } from 'react'
import Authentication_Form from './authentication_form/Authentication_Form'
import HomePage from '../secure'
import axios from 'axios';
import { useRouter } from 'next/router';
import { SpinnerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const index = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userData, setUserData] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const router = useRouter()

    useEffect(() => {
        const fetchProtectedData = async () => {
            const token = localStorage.getItem("token")
            try {
                const res = await axios.get('/api/getData', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }); 
                router.push('/')
                setLoggedIn(true)
                setUserData(res.data.user.user) 
                setIsloading(false)
            } catch (error) {
                router.push('/authentication')
                setLoggedIn(false)
                setIsloading(false)
            }
        };

        fetchProtectedData();
    }, []);
    return (
        <div>
            {isLoading ? (
                <Box className='flex items-center justify-center w-full h-screen'>
                    <SpinnerIcon />
                </Box>
            ) :(
                loggedIn ? (
                    <HomePage props={userData}/>
                ) : (
                    <Authentication_Form type="signup" />
                )
            )}
        </div>
    )
}

export default index