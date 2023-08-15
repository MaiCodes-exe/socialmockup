import React, { useState} from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
import NavBar from './navbar';
import Add from './add';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";






function App() {
  const [mode,setMode] = useState("light")

  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}> 

      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar/>
        <Stack direction="row" spacing={2} justifyContent={'space-evenly'}>
        <SideBar setMode={setMode} mode={mode} />
        <Feed/>
        <RightBar/>
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;