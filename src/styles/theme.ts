import { PaletteMode } from '@mui/material';
import MuiTypography from './components/MuiTypography';
import MuiLink from './components/MuiLink';

export const getTheme = (mode: PaletteMode) => {
  return {
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#fff' : '#3563E9',
      },
      secondary: {
        main: mode === 'dark' ? '#fff' : '#7C5CFC',
      },
      light: {
        main: '#fff',
      },
      background: {
        default: mode === 'dark' ? '#000' : '#f8fcff',
      },
    },
    components: {
      MuiTypography: MuiTypography(mode),
      MuiLink: MuiLink(mode),
    },
    drawerWidth: 250,
    typography: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': 'Plus Jakarta Sans',
          '@font-weight': '400',
        },
      },
    },
  };
};
