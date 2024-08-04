import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

  
const Transactions = () => {
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProtectedData = async () => {
            const token = localStorage.getItem("token")
            try {
                const res = await axios.get('/api/getData', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }); 
                setUserData(res.data.user.user)
                setIsLoading(false)
            } catch (error) { 
                setIsLoading(false)
            }
        };

        fetchProtectedData();
    }, []);

    const router = useRouter()
    return (
       <TransactionsBlock isLoading={isLoading} userData={userData}/>
    )
}

interface TransactionsBlockInterface {
    isLoading: Boolean
    userData: any
}

const TransactionsBlock: React.FC<TransactionsBlockInterface> = ({isLoading, userData}) => {
    const router = useRouter()
    return (
        <Box className='bg-gray-100 p-7 rounded-lg' maxHeight="600px" overflowY="scroll">
        <Box className='flex justify-between items-center mb-2'>
            <Text className='font-bold text-xl pb-2'>Transactions</Text> 
        </Box>

        <div className='border-b-2' />  

        {!isLoading && userData && (userData.accounts?.map((item: any, index: any) => (
            <Box key={index} className="flex flex-col mt-5">
                <Text className="font-bold text-xl mb-3">Account ID: {item.accountId}</Text>
                {item.transactions.map((tItem: any, tIndex: any) => (
                    <Box key={tIndex} className="flex justify-between mt-2">
                        <Text>{tItem.merchant}</Text>
                        <Box className='flex gap-5'>
                            {tItem.type == "p" ? (
                                <Text fontWeight="bold" color="green">+ ${Number(tItem.amount)}</Text> 
                            ) : (
                                <Text fontWeight="bold" color="red">- ${Number(tItem.amount)}</Text>
                            )}
                            <Text>{new Date(tItem.date).toLocaleDateString()}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        ))) as any}
    </Box>
    )
}

export default Transactions