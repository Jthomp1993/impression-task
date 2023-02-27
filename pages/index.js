import Layout from '@/components/Layout';
import Carousel, { CarouselItem } from '@/components/Carousel';
import StyledContent from '@/styles/StyledContent';
import Splodge from '@/public/assets/splodge1.svg';
import SplodgeTwo from '@/public/assets/splodge2.svg';
import { getSortedPostsData } from '@/lib/content';

{/** Get the data from the markdown file using static props */}
export async function getStaticProps() {
    const allContentData = getSortedPostsData();
    return {
        props: {
            allContentData,
        },
    };
}


export default function Home({ allContentData }) {

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
                <CarouselItem
                heading='GOLF BLENDED WITH FOOTBALL'
                info='Players kick balls into holes in as few shots as possible.'
                btn1='FIND OUT MORE'
                btn2='CONTACT US'>
                    <div className='carousel__img'>
                        
                    </div>
                </CarouselItem>
            </Carousel>
            <StyledContent>
                <div className="info">
                    <p>{allContentData[0].content}</p>
                    <div className="splodge__one">
                        <Splodge />
                    </div>
                    <div className="splodge__two">
                        <SplodgeTwo />
                    </div>
                </div>
            </StyledContent>
      </Layout>
    </>
  )
}
