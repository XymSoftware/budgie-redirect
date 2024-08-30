import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledH1 = styled('h1')`
  font-weight: unset;
  font-family: ${props => props.weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 2rem;
  margin: 0;
`;

const H1 = withTheme(props => {
  const { theme, children, ...rest } = props;

  return (
    <StyledH1 theme={theme} {...rest}>
      {children}
    </StyledH1>
  );
});

export { H1 };