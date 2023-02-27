import { useEffect } from 'react';
import Head from "next/head";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Lenis from '@studio-freight/lenis'

function Layout({ title, keywords, description, children}) {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
          })
        
        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);

    },[]);

  return (
    <div>
        {/* If the application was to have pages in addition to the home page, they could be wrapped in this layout component and have custom meta data passed in as props.  */}
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>
        <div className="navigation">
        <Banner />
        <Navbar />
        </div>
        
        {children}
        
    </div>
  )
}

Layout.defaultProps = {
    title: "Yeah! Days Out | Fun parties for all the family",
    description: "Home to some of the newest family attractions in Kirklees, whether it's school holiday activities or fun for all the family, Yeah Days Out has you covered.",
    keywords: 'Fun, Activities, Family, Attractions, Parties'
}

export default Layout;
