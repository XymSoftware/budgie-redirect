import { appConstants } from 'modules';
import styled from 'styled-components';

const StyledUL = styled('ul')`
  margin: 0;
  max-width: ${appConstants.textWidth}rem;
`;

const UL = props => {
  const { children, ...rest } = props;

  return (
    <StyledUL {...rest}>
      {children}
    </StyledUL>
  );
};

export { UL };