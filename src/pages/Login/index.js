import React from 'react'
import { BgLogin } from '../../assets'
import {Button, Gap, Input, Link} from '../../components'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={BgLogin} alt='background Login' className='bg-image' />
        </div>
        <div className='right'>
            <p className='title'>Login</p>
            <Input label='Email' placeholder='Email' />
            <Gap height={15} />
            <Input label='Password' placeholder='Password' />
            <Gap height={30} />
            <Button title='Login' onClick={() => navigate('/') } />
            <Link title='Belum punya akun? klik untuk daftar!' onClick={() => navigate('/register')} />
        </div>
    </div>
  )
}

export default Login