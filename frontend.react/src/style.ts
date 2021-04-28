import { createGlobalStyle } from 'styled-components'
import HMSansLatinRegularWoff2 from './utils/fonts/HMSansLatin-Regular.woff2'
import HMSansLatinRegularWoff from './utils/fonts/HMSansLatin-Regular.woff'
import HMSansLatinSemiBoldWoff2 from './utils/fonts/HMSansLatin-SemiBold.woff2'
import HMSansLatinSemiBoldWoff from './utils/fonts/HMSansLatin-SemiBold.woff'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: HMSansLatin-Regular;
  src: url(${HMSansLatinRegularWoff2}) format('woff2'),
  url(${HMSansLatinRegularWoff}) format('woff');
}
@font-face {
  font-family: HMSansLatin-SemiBold;
  src: url(${HMSansLatinSemiBoldWoff2}) format('woff2'),
  url(${HMSansLatinSemiBoldWoff}) format('woff');
}

* {
  box-sizing:border-box;
  font-family: HMSansLatin-Regular;
}
body {
  background:#f8f8f8;
}
`
export default GlobalStyle
