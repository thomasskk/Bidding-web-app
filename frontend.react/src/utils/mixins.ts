import { css, FlattenSimpleInterpolation } from 'styled-components'

const mixins = {
  flex: (
    justify: any = 'unset',
    align: any = 'unset',
    direction: any = 'unset',
    flex: any = 'none'
  ): FlattenSimpleInterpolation => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex: ${flex};
  `,
  border: css`
    border: none;
    outline: none;
  `,
  shadow: css`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  `,
  bold: css`
    font-family: HMSansLatin-Bold;
  `,
  color0: '#e9c46a',
  color1: (opacity = 1): string => `rgb(128,76,59,${opacity})`,
  color2: (opacity = 1): string => `rgb(27, 27, 26,${opacity})`,
}

export default mixins
