import Button_Global from '@/pages/global/Button_Global'
import Input_Global from '@/pages/global/Input_Global'
import { Box, Radio, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

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

    return (
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
                                <Radio value='1'>Checking</Radio>
                                <Radio value='2'>Saving</Radio>
                            </Box>
                        </TabPanel>
                        <TabPanel maxWidth="500px">
                            <Text className='text-xl font-bold mb-5'>Personal Information</Text>

                            <Box className='flex flex-col gap-4 mt-2'>
                                <Input_Global title="Full Name" description="" type="text" />
                                <Input_Global title="DOB" description="" type="date" />

                                <Text className='text-md font-bold'>Gender</Text>
                                <Box className='flex gap-4 mt-2' >
                                    <Radio value='1'>Male</Radio>
                                    <Radio value='2'>Female</Radio>
                                </Box>
                            </Box>
                            <Text className='text-xl font-bold my-5'>Contact Information</Text>

                            <Box className='flex flex-col gap-4 mt-2'>
                                <Input_Global title="Email" description="" type="email" /> 
                                <Input_Global title="Address" description="Your MTT Address" type="text" /> 
                            </Box>
                            <Text className='text-xl font-bold my-5'>Security</Text>

                            <Box className='flex flex-col gap-4 mt-2'>
                                <Input_Global title="Create your PIN" description="Make it only four numbers" type="text" /> 
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Text className='text-lg font-bold'>Is all of the information correct?</Text>
                            <Text className='text-md'>Please double check that everything is correct before submitting</Text>
                        </TabPanel>
                    </TabPanels>
                    <div onClick={nextStep} className='mt-4'>
                        <Button_Global name={currentIndex == 2 ? "Submit" : "Continue"} />
                    </div>
                </Tabs>
            </Box>
        </Box>
    )
}

export default OpenAccount