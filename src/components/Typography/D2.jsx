import { fonts } from 'controllers';
import { getFontFamily } from 'helpers';
import styled, { withTheme } from 'styled-components';

const StyledD2 = styled('h1')`
  font-weight: unset;
  font-family: ${props => props.weight ? getFontFamily(props) : fonts?.primary?.bold};
  font-size: 3rem;
  margin: 0;
`;

const D2 = withTheme(props => {
  const { theme, children, ...rest } = props;

  return (
    <StyledD2 theme={theme} {...rest}>
      {children}
    </StyledD2>
  );
});

export { D2 };