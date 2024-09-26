import React from 'react'

import './LandingPage.css'
import './SecondLayer.css'
import './ThirdLayer.css'
import './ArtisanProfile.css'
import './Section1.css'
import './Section2.css'
import './Section3.css'

import image from '../../assets/art1_2.jpeg'
import {artisans} from '../../assets/assets'
import display from '../../assets/a1.jpeg'
import logo from '../../assets/logo11.png'
import fiberArts from '../../assets/fiberArt7.jpeg'
import VisualArts from '../../assets/VisualArts2.jpeg'
import HandcraftedArts from '../../assets/HandcraftedArts3.jpeg'

import { useNavigate } from 'react-router-dom'
import Popular_Items from '../Items/Popular_Items'
import fiber_arts from '../../assets/data'

// import BasicSection from '../BasicSection'

const footerSection = ["crafts", "collections", "artisans", "journal", "about"]

const LandingPage = () => {
  // Placeholder for future dynamic featured artisan logic
  // Manually selecting the first artisan for now
  const featuredArtisan = artisans[0];
  const navigate = useNavigate();
  return (

    <div>

    <div className='block-img' id="crafts">

      <div className="text-box">

          <div className="text">
            <h4>Discover the Art of Craftsmanship 
              <br/> where Every Creation Tells a Story.</h4>
              <p className="small-text">-small crafty world</p>
              <br/>
            <p>inspired by the combination of two words 'crafted' and 'saga'. 
            we cherish the small, poetic moments in life through thoughtfully crafted works.</p>
          </div>

      </div>

        <button className='btn-primary'>
          <a href="#shopNow">SHOP NOW</a>
        </button>

    </div>

    <div className="content-wrapper" id="about">

        <div className='content container-custom'>
            <h4>Celebrating the Stories of Everyday Craftsmanship</h4>
            <p>We honor the subtle beauty found in the everyday—the handcrafted pieces,
            the thoughtful creations, and the moments that often go unnoticed. Our artisans breathe life into these stories, encouraging us to see the world with a more appreciative eye.</p>
        </div>

        <button className='button-second'>LEARN MORE</button>

    </div>

    <section className='showcase container-custom' id="journal">
        <div className="showcase-image">
            <img src={image} alt="Artisan Crafts" />
        </div>

        <div className="showcase-text">
            <h2>Small is beautiful - humblism</h2>
            <p>
                During our stay in Kyoto, we met artisans working at 20 square meter ateliers hidden in tiny streets -
                curving out humble yet the most philosophically rich crafts at their isolated, beautiful bubbles. 
                Inspired by the trip, we created this collection filled with their personal life stories, inviting
                you to feel and live in their small yet beautiful universe.
            </p>
            <br/>
            <p>Humblism inspired by the artisanal living.</p>

            <button className="button-group">
                <button className='showcase-button one'>SHOP COLLECTION</button>
                <button className='showcase-button two'>
                  <a href="#stories">READ STORY</a>
                </button>
            </button>

        </div>
    </section>

 
 
    <div className="heading" id="stories">
      <h2>Our Artisans</h2>
  
      <div className="artisans-grid">
        
          <div className="featured-artisan">
              <div className="featured-artisan-info">
                <h2>{featuredArtisan.name}</h2>
                <p>{featuredArtisan.bio}</p>
                <button>Read Story</button>
              </div>
              <div className="featured_wrapper">
              <img src={featuredArtisan.image} alt={featuredArtisan.name} />
              </div>
          </div>

          <div className="other-artisans">
            {artisans.slice(1).map((artisans,index) => (
              <div key={index} className="artisan-card">
                <img src={artisans.image} alt={artisans.name} />
                <h3>{artisans.name}</h3>
              </div>
            ))}
          </div>
      </div>
    </div>
  
    <div className='content-wrapper container-custom mb-24' id="shopNow">

      <div className="images">
        <img  src={fiberArts} alt="Crochets" className='w-full h-[200px] md:h-[400px] object-cover pl-20 pr-40'/>
      </div>

      <div className="info_container text-small_font">

        <div className='info flex gap-[178px]'>
            <h3 className='text-3xl'>Fiber Arts</h3>
            <button className='btnView' onClick={()=>{ navigate("/fiberArts")}}>VIEW CRAFTS</button>
        </div>

      </div>

    </div>

    <div className='content-wrapper2 container-custom mb-36'>

    <div className="images">
      <img  src={VisualArts} alt="Crochets" className='w-full h-[200px] md:h-[400px] object-cover pl-20 pr-40'/>
    </div>

    <div className="info_container2 text-small_font">

    <div className='info flex gap-[170px]'>
        <h3 className='text-3xl'>Visual Arts</h3>
        <button className='btnView' onClick={()=>{ navigate("/visualArts")}}>VIEW CRAFTS</button>
    </div>

    </div>

    </div>

    <div className='content-wrapper3 container-custom bottom-28'>

            <div className="images">
              <img  src={HandcraftedArts} alt="Crochets" className='w-full h-[200px] md:h-[400px] object-cover pl-20 pr-40'/>
            </div>

        <div className="info_container3 text-small_font">

            <div className='info flex gap-[78px]'>
                <h3 className='text-3xl'>Handcrafted Arts</h3>
                <button className="btnView" onClick={()=>{ navigate("/handcraftedArts")}}>VIEW CRAFTS</button>
            </div>

        </div>

    </div>

    <div className='items-scroll grid w-[1400px] mx-auto p-8 justify-items-center'>
      <h1 className='text-[30px] font-semibold'>Popular Crafts</h1>
      <hr className='w-[200px] h-[4px] rounded-[10px] bg-black'/>
      <div className="w-[80%] overflow-x-auto">
      <div className='popular_items grid grid-flow-col grid-rows-1 gap-4 mb-24'>
          {fiber_arts.map((item,i)=>{
              return (<Popular_Items key={i} id={item.id} name={item.art_name} image={item.art_image} new_price={item.art_price_new} old_price={item.art_price_old}/>)
          })}
      </div>
      </div>
    </div>

    <div className='relative pt-20' style={{backgroundColor:'#f2eeee', color:'#2b2b2b'}}>

        <div className='upperContent flex justify-between'>

            <div className='upperLeft flex flex-col pl-5'>

                <div>Sincerley made crafts with poetic stories.</div>

                <div className='inputField flex gap-36 pt-16'>
                    <div>
                        <img src={logo} alt="Crafted Saga" className='logo11 w-48 ' />
                    </div>

                    <div className='box absolute left-[300px] top-[170px] bg-white rounded-none flex justify-between px-56 py-28'>
                        <div>
                            <div>Newsletter</div>
                            <div>Subscribe</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='upperRight flex justify-evenly gap-16 pt-10 pb-36'>
                <div>
                    <ul className='capitalize'>
                        {footerSection?.map((data, index) => <li key={index}>{data}</li>)}
                    </ul>
                </div>
                    <ul>
                        <li>Help</li>
                        <li>Terms and Conditions</li>
                        <li>Contact</li>
                    </ul>
                <div>

                </div>
            </div>

        </div>

        <div className='lowerContent bg-orange h-[160px] rounded-t-none rounded-b-3xl'>

            <ul className='text-white flex justify-end p-16 pr-60 gap-24'>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>

        </div>

    </div>

  </div>
  )
}

export default LandingPage

