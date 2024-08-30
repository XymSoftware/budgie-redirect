import { getColor } from 'helpers';
import { theme } from 'theme';
import { fonts } from 'controllers';
import styled, { createGlobalStyle } from 'styled-components';

const colors = theme.colors;

export const StyledApp = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
  background-color: ${props => getColor(props, 'primary')};
`;

export const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
  background-color: ${props => getColor(props, 'secondary')};
  color: ${props => getColor(props, 'onSecondary')};
`;

export const StyledFooter = styled('footer')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  width: 100%;
  background-color: ${props => getColor(props, 'secondary')};
  color: ${props => getColor(props, 'onSecondary')};
`;

export const MainContent = styled('main')`
  width: 100%;
  height: ${props => props.token ? '100%' : 'inherit'};
`;

export const AppLogo = styled('div')`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100dvh;
  }

  body {
    background-color: ${props => getColor(props, 'primary')};
    color: ${props => getColor(props, 'onPrimary')};
    font-family: ${fonts.primary.normal}, sans-serif;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 27rem;
  }

  a:link,
  a:visited {
    color: ${props => getColor(props, 'accent', colors.neutral.raisinBlack)};
  }

  a:hover {
    color: ${props => getColor(props, 'accentHover', colors.neutral.greyWeb)};
  }

  ::-webkit-scrollbar {
    width: 0.625rem;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0.25rem;
    background: ${props => getColor(props, 'lightGrey', colors.neutral.lightGrey)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background: ${props => getColor(props, 'grey', colors.neutral.greyWeb)};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => getColor(props, 'darkGrey', colors.neutral.davysGrey)};
  }
`;