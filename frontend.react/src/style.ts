import styled, { createGlobalStyle } from 'styled-components'
import HMSansLatinRegularWoff2 from './utils/fonts/HMSansLatin-Regular.woff2'
import HMSansLatinBoldWoff2 from './utils/fonts/HMSansLatin-Bold.woff2'
import noise from './img/noise.png'

export const GlobalStyle = createGlobalStyle`

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
  background: whitesmoke;
}
`

export const CoreWrapper = styled.div`
  transition: transform 0.22s ease-in;
  position: relative;
  min-height: calc(100vh - 90px);
`

export const Noise = styled.div`
  position: absolute !important;
  @keyframes grain {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
  &:after {
    content: '';
    animation: grain 8s steps(10) infinite;
    background-image: url(${noise});
    height: 300%;
    width: 300%;
    top: -100%;
    left: -100%;
    opacity: 0.3;
    position: fixed;
    z-index: 200;
  }
`
