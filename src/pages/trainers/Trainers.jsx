import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import { FaLinkedin, FaFacebookF } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
	 <>
   <Header title="Our Trainers" image={HeaderImage}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   </Header>
   <section className="trainer">
    <div className="container trainer__container">
      {
        trainers.map(({id, image, name, job, socials}) => {
         return <Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <AiFillInstagram/>, link: socials[0]},
              {icon: <AiOutlineTwitter/>, link: socials[1]},
              {icon: <FaFacebookF/>, link: socials[2]},
              {icon: <FaLinkedin/>, link: socials[3]}
            ]
          }/>
        })
      }
    </div>
   </section>
   </>
  )
}

export default Trainers