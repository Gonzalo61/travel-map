import { CssBaseline, ThemeProvider } from "@material-ui/core";
import CoreStructure from "./components/CoreStructure";

import theme from "./styles/globals";

const App = () => {
  return (
    // <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CoreStructure />
    </ThemeProvider>
    // </div>
  )
};

export default App;
