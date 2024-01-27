import React from 'react'
import "./App.scss"
import Navbar from './components/Navbar'
import UserDetail from './components/UserDetail'
import AdminDetail from './components/AdminDetail'
const App = () => {
  return (
    <>
      <Navbar />
      <UserDetail />
      <AdminDetail />
    </>
  )
}

export default App