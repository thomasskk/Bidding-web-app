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
  color1: 'transparent',
}

export default mixins
