import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ipn3 from '../assets/ipn3.png'
import im from '../assets/IMG_0961.jpg'


const Aside = () => {
    return (
        <>
            <div className='carrousel'>

                <div className='one'>
                <h1>stody</h1>
                    <AliceCarousel className='alca'
                    autoPlay
                    infinite loop>
                        <img src={im} alt="Image 1" className='img' />
                        <img src={ipn3} alt="Image 1" className='img' />
                        <img src={im} alt="Image 1" className='img' />
                    </AliceCarousel>
                </div>
                <div className='two'>
                    <h1>two</h1>
                </div>
                <div className='three'>
                    <h1>tres</h1>
                </div>
                <div className='one'>
                    <h1>One sjjsjs</h1>
                </div>
                <div className='one'>
                    <h1>One sjjsjs</h1>
                </div>

            </div>
        </>
    )
}

export default Aside