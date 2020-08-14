import React from 'react'
import { WithStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { styles } from 'styles';
import { ThemeContext } from 'context/theme/themeContext';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const ThemeRoot: React.FC<AllProps> = (props) => {
  const themeContext = React.useContext(ThemeContext);
  const { darkTheme } = themeContext;

  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default withStyles(styles)(ThemeRoot);