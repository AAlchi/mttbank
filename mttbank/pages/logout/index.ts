import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
  localStorage.removeItem("token")
  const router = useRouter()

  router.push('/')
}

export default index