// Styles
import GlobalStyles from './globalStyles'
import { ThemeProvider } from 'styled-components'

// Themes
import { DefaultTheme } from './theme.js'

// Router-Dom
import router from './router.js'
import {  RouterProvider } from "react-router-dom"

function App() {

  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
