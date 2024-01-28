import React from 'react'
import "./App.scss"
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'
const App = () => {
  return (
    <>
      <Navbar />
      <UserDetail />
      {/* <AdminDetail /> */}
    </>
  )
}

export default App