import 'react-native-gesture-handler';
import * as React from 'react';
import {extendTheme, NativeBaseProvider} from "native-base";

import Routes from "./Routes";

const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
};
const theme = extendTheme({ colors: newColorTheme });

const App = () => {
  return (
      <NativeBaseProvider theme={theme}>
          <Routes />
      </NativeBaseProvider>
  );
}

export default App;
