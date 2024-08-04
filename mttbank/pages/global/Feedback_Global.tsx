import { Alert, AlertDescription, AlertIcon, Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
 

const Feedback_Global = () => {
      return (
        <Alert status='error'>
          <AlertIcon />
          <Box> 
            <AlertDescription>
              There was an error. Please try again
            </AlertDescription>
          </Box> 
        </Alert>
      )  
}

export default Feedback_Global