import GlobalStyle from '@/styles/GlobalStyle';
import { AppProvider } from '@/context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <>
        <AppProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        </AppProvider>
    </>
  ) 
}
