import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SideView from './components/sideView/SideView'
import { Box, Text } from '@chakra-ui/react'
import Account from './components/mainComponents/account/Account'
import Send from './components/mainComponents/send/Send'
import Transactions from './components/mainComponents/transactions/Transactions'
import Chat from './components/mainComponents/chat/Chat'
import Rewards from './components/mainComponents/rewards/Rewards'

interface HomePageInterface {
  props: any
}

const index: React.FC<HomePageInterface> = ({
  props
}) => { 
  return (
    <>
      <Header />
      <div className='grid grid-cols-1 gap-5 p-10 lg:grid hidden'>
        <Text className='font-bold text-3xl'>Hi, {props.name}!</Text>
        <Box className='grid grid-cols-3 gap-5 lg:grid hidden'>
          <Box className='grid grid-cols-1 gap-5'>
            <Account props={props}/>
            <Send />
          </Box>
          <Transactions />
          <Chat />
        </Box>
        <Rewards props={props}/>
      </div>

      <div className='flex flex-col gap-5 p-5 flex lg:hidden'>
        <Text className='font-bold text-3xl'>Hi, {props.name}!</Text>
        <Account props={props}/>
        <Send />
        <Transactions />
        <Chat />
        <Rewards props={props}/>
      </div>
      <Footer />
    </>
  )
}

export default index