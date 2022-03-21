import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../config/style.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
