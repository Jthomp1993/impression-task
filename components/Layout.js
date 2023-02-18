import Head from "next/head";

function Layout({ title, keywords, description, children}) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Head>

        {children}
    </div>
  )
}

Layout.defaultProps = {
    title: "Yeah! | Fun parties for all the family",
    description: "Home to some of the newest family attractions in Kirklees, whether it's school holiday activities or fun for all the family, Yeah Days Out has you covered.",
    keywords: 'Fun, Activities, Family, Attractions, Parties'
}

export default Layout;
