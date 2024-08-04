import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'

interface Input_Global_Interface {
  title: String;
  description: String;
  type: String
}

const Input_Global: React.FC<Input_Global_Interface> = ({
  title,
  description,
  type
}) => {
  return (
    <FormControl>
      {title != "" && (
        <FormLabel>{title}</FormLabel>

      )}
      {description != "" && (
        <FormHelperText paddingBottom="10px">{description}</FormHelperText>
      )}
      <Input backgroundColor="lightgray" type={`${type}`} />
    </FormControl>
  )
}

export default Input_Global