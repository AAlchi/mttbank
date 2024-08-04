import React from 'react'
import Header from '../components/header/Header'
import Transactions from '../components/mainComponents/transactions/Transactions'
import { Box } from '@chakra-ui/react'
import Footer from '../components/footer/Footer'

const index = () => {
  return (
    <>
      <Header />
      <Box className="bg-white rounded-lg lg:p-10 p-5">
        <Transactions />
      </Box>
      <Footer />
    </>
  )
}

export default index