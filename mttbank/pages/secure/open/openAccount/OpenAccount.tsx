import Button_Global from '@/pages/global/Button_Global'
import Feedback_Global from '@/pages/global/Feedback_Global'
import Input_Global from '@/pages/global/Input_Global'
import { Box, Button, Input, Radio, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const OpenAccount = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isOffOne, setIsOffOne] = useState(true)
    const [isOffTwo, setIsOffTwo] = useState(true)

    const nextStep = () => {
        if (currentIndex == 0) {
            setCurrentIndex(1)
            setIsOffOne(false)
        }
        if (currentIndex == 1) {
            setCurrentIndex(2)
            setIsOffTwo(false)
        }
    }

    // Input Data
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [DOB, setDOB] = useState("")
    const [address, setAddress] = useState("")
    const [PIN, setPIN] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    useEffect(() => {
        if (currentIndex == 0) {
            if (isRadioCheckedSaving) {
                setIsButtonDisabled(false)
            }
        } else if (currentIndex == 1) {
            if (name == "" || email == "" || DOB == "" || address == "" || PIN == "") {
                setIsButtonDisabled(true)
            } else {
                setIsButtonDisabled(false)
            }
        }
    })

    const [isButtonLoading, setIsButtonLoading] = useState(false)
    const [error, setError] = useState(false)
    const router = useRouter()
    const [isRadioCheckedSaving, setIsRadioCheckedSaving] = useState(false)

    const openAccount = async () => {
        if (currentIndex == 2) {
            setIsButtonLoading(true)

        try {
            const post = await axios.post('/api/openAccount', { 
                email, 
            }) 
                
            if (post) {
                router.push('/')
            }
        } catch (err) {
            setError(true)
            setIsButtonLoading(false)
        }
        }
    }


    return (
        <>
            {error && (
                <div onClick={() => setError(false)} className='pb-5'>
                    <Feedback_Global />
                </div>
            )}
            <Box>
                <Text className='font-bold text-xl mb-5'>Open an Account</Text>
                <Box>
                    <Tabs index={currentIndex}>
                        <TabList>
                            <Tab onClick={() => setCurrentIndex(0)}>Account Type</Tab>
                            {isOffOne ? (
                                <Tab isDisabled>Information</Tab>
                            ) : (
                                <Tab onClick={() => setCurrentIndex(1)}>Information</Tab>
                            )}
                            {isOffTwo ? (
                                <Tab isDisabled>Confirmation</Tab>
                            ) : (
                                <Tab onClick={() => setCurrentIndex(2)}>Confirmation</Tab>
                            )}
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Text className='text-lg font-bold'>What type of account do you want to open?</Text>

                                <Box className='flex gap-4 mt-2' >
                                    <Radio value='2' isChecked={isRadioCheckedSaving} onClick={() => setIsRadioCheckedSaving(!isRadioCheckedSaving)}>Saving</Radio>
                                </Box>
                            </TabPanel>
                            <TabPanel maxWidth="500px">
                                <Text className='text-xl font-bold mb-5'>Personal Information</Text>

                                <Box className='flex flex-col gap-4 mt-2'> 
                                    <Input placeholder="Full Name" type="text" onChange={(e) => setName(e.target.value)} />
                                    <Text>DOB</Text>
                                    <Input placeholder="DOB" type="date" onChange={(e) => setDOB(e.target.value)} />
                                </Box>
                                <Text className='text-xl font-bold my-5'>Contact Information</Text>

                                <Box className='flex flex-col gap-4 mt-2'>
                                    <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                    <Input placeholder="Address" type="text" onChange={(e) => setAddress(e.target.value)} />
                                </Box>
                                <Text className='text-xl font-bold my-5'>Security</Text>

                                <Box className='flex flex-col gap-4 mt-2'>
                                    <Input placeholder="Create your PIN" type="text" onChange={(e) => setPIN(e.target.value)} />
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Text className='text-lg font-bold'>Is all of the information correct?</Text>
                                <Text className='text-md'>Please double check that everything is correct before submitting</Text>
                            </TabPanel>
                        </TabPanels>
                        <div onClick={nextStep} className='mt-4'>
                            <Button onClick={openAccount} isLoading={isButtonLoading} isDisabled={isButtonDisabled}>{currentIndex == 2 ? "Submit" : "Continue"}</Button>
                            <Text marginTop="5">* Most of this information is not stored in our database</Text>
                        </div>
                    </Tabs>
                </Box>
            </Box>
        </>
    )
}

export default OpenAccount