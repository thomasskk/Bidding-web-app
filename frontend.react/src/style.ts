import styled, { createGlobalStyle } from 'styled-components'
import noise from 'assets/img/noise.png'

export const GlobalStyle = createGlobalStyle`

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
html{
  overflow-x: hidden;
}
body {
  background: whitesmoke;
  overflow-x: hidden;
}
`

export const CoreWrapper = styled.div`
  transition: transform 0.22s ease-in;
  position: relative;
  min-height: 100vh;
`

export const Noise = styled.div`
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
  height: 100vh;
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 200;

  &::after {
    animation: grain 8s steps(10) infinite;
    background-image: url(${noise});
    content: '';
    height: 285%;
    left: -50%;
    opacity: 0.3;
    position: absolute;
    top: -100%;
    width: 300%;
  }
`
