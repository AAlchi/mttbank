import React from 'react'
import Authentication_Form from './authentication_form/Authentication_Form'
import HomePage from '../secure'

const index = () => {
  return (
    <div>
        <Authentication_Form type="signup"/>
        {/* <HomePage /> */}
    </div>
  )
}

export default index