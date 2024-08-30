import styled, { withTheme, css } from 'styled-components';
import { hexValid, getFontFamily } from 'helpers';

const StyledFont = styled('span')`
  display: ${props => props.block ? 'block' : 'inline-flex'};
  font-family: ${props => getFontFamily(props)}, sans-serif;
  font-size: ${props => props.size || 1}rem;
  ${props => hexValid(props.color) && css`color: ${props.color};`}
`;

const Font = withTheme(props => {
  const { theme, weight, size, children, ...rest } = props;

  return (
    <StyledFont theme={theme} weight={weight} size={size} {...rest}>
      {children}
    </StyledFont>
  );
});

export { Font };