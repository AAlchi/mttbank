import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

interface ButtonInterface {
    name: String; 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean
}

const Button_Global: React.FC<ButtonInterface> = ({
    name, 
    onClick,
    isLoading
}) => { 
    return (
        <Button 
            colorScheme='teal'
            isLoading={isLoading}
            type='submit'
            onClick={() => onClick}
        >
            {name}
        </Button>
    )
}

export default Button_Global