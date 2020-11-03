import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {normalize} from 'polished'
const GlobalStyle = createGlobalStyle`
 ${normalize()}
 body {
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
`

const theme = {
  borderColor: 'gray'
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
