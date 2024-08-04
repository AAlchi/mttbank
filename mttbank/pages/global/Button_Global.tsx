import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

interface ButtonInterface {
    name: String; 
}

const Button_Global: React.FC<ButtonInterface> = ({
    name, 
}) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Button 
            colorScheme='teal'
            isLoading={isLoading}
            type='submit'
            onClick={() => isLoading}
        >
            {name}
        </Button>
    )
}

export default Button_Global