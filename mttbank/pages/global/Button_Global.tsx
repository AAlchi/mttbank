import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

interface ButtonInterface {
    name: String;
}

const Button_Global: React.FC<ButtonInterface> = ({
    name
}) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <Button
            mt={4}
            colorScheme='teal'
            isLoading={isLoading}
            type='submit'
            onClick={() => setIsLoading(true)}
        >
            {name}
        </Button>
    )
}

export default Button_Global