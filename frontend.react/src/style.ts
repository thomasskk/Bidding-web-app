import { createGlobalStyle } from 'styled-components'
import HMSansLatinRegularWoff2 from './utils/fonts/HMSansLatin-Regular.woff2'
import HMSansLatinBoldWoff2 from './utils/fonts/HMSansLatin-Bold.woff2'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
@font-face {
  font-family: HMSansLatin-Regular;
  src: url(${HMSansLatinRegularWoff2}) format('woff2')
}
@font-face {
  font-family: HMSansLatin-Bold;
  src: url(${HMSansLatinBoldWoff2}) format('woff2')
}

* {
  box-sizing:border-box;
  font-family: HMSansLatin-Regular;
}

a {
  text-decoration: none;
  color: black; 
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  background: whitesmoke;
}

`
export default GlobalStyle
