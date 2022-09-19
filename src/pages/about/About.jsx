import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImages from '../../images/about1.jpg'
import VisionImages from '../../images/about2.jpg'
import MissionImages from '../../images/about3.jpg'

import './about.css'

const About = () => {
  return (
	<>
  <Header title="About Us" image={HeaderImage}>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam unde doloribus. Voluptatem, maiores. Qui reprehenderit ad officia exercitationem sapiente.
  </Header>
  
  <section className="about__story">
   <div className="container about__story-container">
      <div className="about__section-image">
          <img src={StoryImages} alt="About StoryImages"/>
      </div>
      <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Bibendum ut tristique et egestas quis. Rhoncus mattis rhoncus urna neque viverra justo.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget. Ut aliquam purus sit amet luctus venenatis.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
      </div>
   </div>
  </section>

  <section className="about__vision">
   <div className="container about__vision-container">
      <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Bibendum ut tristique et egestas quis. Rhoncus mattis rhoncus urna neque viverra justo.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget. Ut aliquam purus sit amet luctus venenatis.
          </p>
      </div>
      <div className="about__section-image">
          <img src={VisionImages} alt="About StoryImages"/>
      </div>
   </div>
  </section>

  <section className="about__mission">
   <div className="container about__mission-container">
      <div className="about__section-image">
          <img src={MissionImages} alt="About StoryImages"/>
      </div>
      <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Bibendum ut tristique et egestas quis. Rhoncus mattis rhoncus urna neque viverra justo.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget. Ut aliquam purus sit amet luctus venenatis.
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
      </div>
   </div>
  </section>
  </>
  )
}

export default About