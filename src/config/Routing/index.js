import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Login, MainApp, Register } from '../../pages'

const Routing = () => {
  return (
    
        <Routes>
            <Route path="/login" element={<Login />} />
                
            <Route path='/register' element={<Register />} />

            <Route path='/*' element={<MainApp />} />
                
        </Routes>
    
  )
}

export default Routing