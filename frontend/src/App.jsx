import { useDispatch } from 'react-redux'
import React, {  useEffect } from 'react'
import asyncUser from './store/actions/UserAction'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    

    dispatch(asyncUser())
  }, [])  

  return (
    <div>App</div>
  )
}

export default App