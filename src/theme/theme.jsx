import { appConstants } from 'modules';

const { themes } = appConstants;

const colors = {
  neutral: {
    raisinBlack: '#2a2829',
    davysGrey: '#555555',
    greyWeb: '#7a7d7d',
    lightGrey: '#d0cfcf',
  },

  accent: {
    brightNavyBlue: '#0c77d4',
    carolinaBlue: '#479eeb',
  },

  success: {
    oceanGreen: '#50b990',
  },

  warning: {
    orangeYellow: '#f0b800',
  },

  error: {
    persianRed: '#c93434',
    congoPink: '#f1746e',
  },

  shades: {
    black: '#1e1e1e',
    white: '#fafafa',
  },
};

const modes = {
  [themes.light]: {
    primary: colors.shades.white,
    onPrimary: colors.neutral.raisinBlack,
    secondary: colors.neutral.raisinBlack,
    onSecondary: colors.neutral.lightGrey,
    accent: colors.accent.brightNavyBlue,
    onAccent: colors.shades.white,
    accentHover: colors.accent.carolinaBlue,
    onAccentHover: colors.shades.white,

    white: colors.shades.white,
    lightGrey: colors.neutral.lightGrey,
    grey: colors.neutral.greyWeb,
    darkGrey: colors.neutral.davysGrey,
    black: colors.shades.black,

    success: colors.success.oceanGreen,
    warning: colors.warning.orangeYellow,
    error: colors.error.persianRed,
  },

  [themes.dark]: {
    primary: colors.neutral.raisinBlack,
    onPrimary: colors.shades.white,
    secondary: colors.shades.black,
    onSecondary: colors.neutral.lightGrey,
    accent: colors.accent.brightNavyBlue,
    onAccent: colors.neutral.raisinBlack,
    accentHover: colors.accent.carolinaBlue,
    onAccentHover: colors.neutral.raisinBlack,

    white: colors.shades.white,
    lightGrey: colors.neutral.lightGrey,
    grey: colors.neutral.greyWeb,
    darkGrey: colors.shades.black,
    black: colors.shades.black,

    success: colors.success.oceanGreen,
    warning: colors.warning.orangeYellow,
    error: colors.error.congoPink,
  },
};

const theme = { colors, modes };

export { theme };