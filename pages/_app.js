import GlobalStyle from '@/styles/GlobalStyle';
import { AppProvider } from '@/context/AppContext';
import Ball from '@/components/Ball';

export default function App({ Component, pageProps }) {
  return (
    <>
        <AppProvider>
        <GlobalStyle />
        <Ball />
        <Component {...pageProps} />
        </AppProvider>
    </>
  ) 
}
