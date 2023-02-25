import Layout from '@/components/Layout';
import Carousel, { CarouselItem } from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Layout>
            <Carousel>
                <CarouselItem>
                    <div className='carousel__vid'>
                        <video src="/yeah-days-out.mp4" autoPlay loop muted>
                            
                        </video>
                    </div>
                </CarouselItem>
                <CarouselItem
                heading='FUN PARTIES FOR ALL THE FAMILY'
                info='Fun for all the family, from £4 per session.'
                btn1='MAKE A BOOKING'
                btn2='ABOUT US'>
                    <div className='carousel__img'>
                        
                    </div>
                </CarouselItem>
                <CarouselItem
                heading='CRYSTAL MAZE MEETS NINJA WARRIOR'
                info='Gamified obstacle course for all ages.'
                btn1='FIND OUT MORE'
                btn2='CONTACT US'>
                    <div className='carousel__img'>
                        
                    </div>
                </CarouselItem>
            </Carousel>
      </Layout>
    </>
  )
}
