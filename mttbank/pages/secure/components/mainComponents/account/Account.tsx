import Button_Global from '@/pages/global/Button_Global'
import { Box, Button, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

interface AccountInterface {
    props: {
    }
}

const Account: React.FC<AccountInterface> = ({ props }) => {
    const router = useRouter()
    return (
        <AccountsBlock props={props}/>
    )
}

interface AccountsBlockInterface {
    props: any
}

const AccountsBlock: React.FC<AccountsBlockInterface> = ({ props }) => {
    const router = useRouter()
    return (
        <Box className='bg-gray-100 p-7 rounded-lg' maxHeight={"600px"} overflow={"auto"}>
            <Box className='flex justify-between items-center pb-2'>
                <Text className='font-bold text-xl'>Accounts</Text>
                <Button onClick={() => router.push('/secure/transactions')} colorScheme='teal'>View Transactions</Button>
            </Box>
            <div className='border-b-2' />
            {props.accounts?.map((item: any, index: any) => (
                <Box key={index} className='flex justify-between mt-5'>
                    <Box>
                        <Text className='pb-2'>Account Balance</Text>
                        <Text className='font-bold text-xl pb-2'>${item.balance}</Text>
                    </Box>
                    <Box>
                        <Text className='text-sm'>Acc ID: {item.id}</Text>
                        <Box className='flex font-bold text-lg gap-5'>
                            <Stat>
                                <StatLabel>Deposits</StatLabel>
                                <StatNumber>${item.deposits}</StatNumber>
                            </Stat>
                            <Stat>
                                <StatLabel>Withdrawals</StatLabel>
                                <StatNumber>${item.withdrawals}</StatNumber>
                            </Stat>
                        </Box>
                    </Box>
                </Box>
            ))}
            {props.accounts.length == 0 && (
                <Text paddingTop={5}>No accounts</Text>
            )}
        </Box>
    )
}

export default Account