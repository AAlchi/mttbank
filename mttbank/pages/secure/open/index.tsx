import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@chakra-ui/react'
import OpenAccount from './openAccount/OpenAccount'

const index = () => {
  return (
    <>
    <Header />
      <Box className="bg-white rounded-lg lg:p-10 p-5">
        <OpenAccount />
      </Box>
    <Footer />
  </>
  )
}

export default index