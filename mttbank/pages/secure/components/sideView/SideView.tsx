import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Radio,
    RadioGroup,
    Stack,
    Box,
    Text,
  } from '@chakra-ui/react'
import { BellIcon, CloseIcon } from '@chakra-ui/icons'

const SideView = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <> 
        <BellIcon onClick={onOpen} cursor="pointer"/>
        <Drawer placement={`right`} onClose={onClose} isOpen={isOpen}>

          <DrawerOverlay />
          <DrawerContent>
            <Box className="flex items-center w-full justify-between border-b-2 py-5 px-3">
                <Text className='font-bold text-lg'>Notifications</Text>
                <CloseIcon onClick={onClose} className='cursor-pointer'/>
            </Box>
            <DrawerBody>
              <p>Notification</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
}

export default SideView