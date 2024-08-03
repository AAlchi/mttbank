import { Alert, AlertDescription, AlertIcon, Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
 

const Feedback_Global = () => {
    const {
        isOpen: isVisible,
        onClose, 
      } = useDisclosure({ defaultIsOpen: true })
    
      return isVisible && (
        <Alert status='error' onClick={onClose}>
          <AlertIcon />
          <Box> 
            <AlertDescription>
              Alert
            </AlertDescription>
          </Box> 
        </Alert>
      )  
}

export default Feedback_Global