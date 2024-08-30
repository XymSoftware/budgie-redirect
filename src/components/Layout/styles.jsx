import { appConstants } from 'modules';
import styled, { css } from 'styled-components';

const layoutWidth = appConstants.layoutWidth;

export const LayoutWrapper = styled('div')`
  width: 100%;
  max-width: ${layoutWidth}rem;

  ${props => props.center && css`margin: 0 auto;`}
  ${props => props.inline && css`
    display: inline-flex;
    gap: ${props.gap || 0}rem;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    justify-content: space-between;
  `}
`;