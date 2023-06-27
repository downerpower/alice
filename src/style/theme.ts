type DefaultTheme = {
  color: {
    white: string;
    gray: string;
    red: string;
    black: string;
    green: string;
  };

  media: (size: number) => string;
  size: {
    mobileS: number;
    mobileM: number;
  };
};

export const theme: DefaultTheme = {
  color: {
    white: "#FFFFFF",
    gray: "#484848",
    red: "#D90014",
    black: "#000",
    green: "#04D900"
  },

  media: (size: number) => `@media screen and (max-width: ${size}px)`,
  size: {
    mobileS: 419,
    mobileM: 539,
  },
};