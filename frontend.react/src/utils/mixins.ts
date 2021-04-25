/* eslint-disable import/no-anonymous-default-export */
import { css } from 'styled-components'

const mixins = {
  flex: (
    justify = 'none',
    align = 'none',
    direction = 'none',
    flex: number | string = 'none'
  ) => css`
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
    font-family: HMSansLatin-SemiBold;
  `,
}

export default mixins
