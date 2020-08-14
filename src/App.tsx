import React from 'react';
import './App.css';
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from './styles';
import { ThemeState } from 'context/theme/ThemeState';
import ThemeRoot from 'components/layout/ThemeRoot';
import LayoutRoot from 'components/layout/LayoutRoot';

interface Props {}

type AllProps 
  = WithStyles<typeof styles>
  & Props;

const App: React.FC<AllProps> = (props) => {
  return (
    <ThemeState>
      <ThemeRoot>
        <LayoutRoot>
          <h1>Yo man</h1>
        </LayoutRoot>
      </ThemeRoot>
    </ThemeState>
  );
}

export default withStyles(styles)(App);
