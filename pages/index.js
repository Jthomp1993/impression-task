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
                <CarouselItem>
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
