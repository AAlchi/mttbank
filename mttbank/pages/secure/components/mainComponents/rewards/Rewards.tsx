import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface RewardsInterface {
    props: any
}

const Rewards: React.FC<RewardsInterface> = ({ props }) => {
    const [isLoading, setIsLoading] = useState("")
    const router = useRouter();

    const redeem = (name: string) => {
        setIsLoading(name)
        try {
            axios.post('/api/deleteReward', {
                rewardName: name,
                userId: props.id
            }).then((res) => {
                alert("Changes will take affect when logged back in")
                router.push("/logout")
            })
        } catch(err) {
            alert("Changes will take affect when logged back in")
            router.push("/logout")
        } 
    }
    return (
        <Box className='bg-gray-100 p-7 rounded-lg'>
            <Box className='flex justify-between items-center pb-2'>
                <Text className='font-bold text-xl'>Rewards</Text> 
            </Box>
            <div className='border-b-2' />
            <Box className='grid lg:grid-cols-5 grid-cols-2 gap-5 mt-5'>
                {props.rewards.map((item: any, index: any) => (
                    <Box key={index} className='p-3 bg-slate-200 rounded-lg'>
                    <Text className='text-xl font-bold mb-2'>{item}</Text> 
                    {isLoading == item ? (
                        <Button colorScheme='teal' className="w-full shadow" isLoading>Redeem</Button>
                    ) : (
                        <Button colorScheme='teal' className="w-full shadow" onClick={() => redeem(item)}>Redeem</Button>
                    )}
                </Box> 
                ))}
            </Box>
        </Box>
    )
}

export default Rewards