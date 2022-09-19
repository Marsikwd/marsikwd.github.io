import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


import './gallery.css'

const Gallery = () => {
 const galleryLeght = 15;
 const images = [] 

    for(let i = 1; i <= galleryLeght; i++){
      images.push(require(`../../images/gallery${i}.jpg`))
    }

  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((images, index) => {
            return <article key={index}>
              <img src={images} alt={`Gallery Image ${index + 1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery