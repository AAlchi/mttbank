import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@chakra-ui/react'
import Send from '../components/mainComponents/send/Send'

const index = () => {
  return (
    <>
      <Header />
      <Box className="bg-white rounded-lg lg:p-10 p-5">
        <Send />
      </Box>
      <Footer />
    </>
  )
}

export default index