/* eslint-disable import/no-anonymous-default-export */
import { css } from 'styled-components'

const mixins = {
  flex: (justify = 'none', align = 'none', direction = 'none', flex= 'none') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
    flex:${flex};
  `,
  border: css`
    border: none;
    outline: none;
  `,
  WH: (w, h) => css`
    width: ${w + 'px'};
    height: ${h + 'px'};
  `,
}

export default mixins
