import React from 'react'
import './register.scss'
import { BgRegister } from '../../assets'
import {Button, Gap, Input, Link} from '../../components'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  return ( 
    <div className='main-page'>
        <div className='left'>
            <img src={BgRegister} alt='background for register' className='bg-image' />
        </div>
        <div className='right'>
            <p className='title'>Form Register</p>
            <Input label='Full Name' placeholder='Full Name' />
            <Gap height={15} />
            <Input label='Email' placeholder='Email' />
            <Gap height={15} />
            <Input label='Password' placeholder='Password' />
            <Gap height={30} />
            <Button title='Register' onClick={() => navigate('/login')} />
            <Link title='Kembali Ke Halaman Login' onClick={() => navigate('/login')} />
        </div>
    </div>
  )
}

export default Register