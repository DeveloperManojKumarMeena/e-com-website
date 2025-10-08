
import React, { use, useEffect } from 'react'
import asyncUser from './store/actions/UserAction'

const App = () => {
  useEffect(() => {
    

    asyncUser()
  }, [])  

  return (
    <div>App</div>
  )
}

export default App