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
                <CarouselItem>
                    <div className='carousel__img'>
                        
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className='carousel__img'>
                        
                    </div>
                </CarouselItem>
            </Carousel>
      </Layout>
    </>
  )
}
