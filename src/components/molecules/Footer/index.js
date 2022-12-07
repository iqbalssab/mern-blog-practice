import React from 'react'
import './footer.scss'
import { IcoDiscord, IcoFacebook, IcoGithub, IcoInsta, IcoTwitter, LogoAing } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt='icon' />
        </div> 
    )
}
const Footer = () => {
  return (
    <div>
        <div>
            <div className='footer'>
                <div>
                <img src={LogoAing} className='logo' alt='logo ori' />
                </div>
                <div className='social-wrapper'>
                    <Icon img={IcoFacebook} />
                    <Icon img={IcoInsta} />
                    <Icon img={IcoTwitter} />
                    <Icon img={IcoGithub} />
                    <Icon img={IcoDiscord} />
                </div>
            </div>
            
        </div>
        <div className='copyright'>
        <p>Copyright</p>

        </div>
    </div>
  )
}

export default Footer