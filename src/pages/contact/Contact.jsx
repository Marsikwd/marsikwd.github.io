import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {IoLogoWhatsapp}from'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
	<>
    <Header title="Get In Touch" image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="https://t.me/fadeev_m_m" target="_blank" rel="noreferrer noopener"><BsTelegram/></a>
          <a href="#"  rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
  </>
  )
}

export default Contact