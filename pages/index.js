import Layout from '@/components/Layout';
import Carousel, { CarouselItem } from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Layout>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </Carousel>
      </Layout>
    </>
  )
}
