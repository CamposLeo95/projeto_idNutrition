import GlobalStyles from './globalStyles';
import router from './router.js';
import {  RouterProvider } from "react-router-dom";

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
