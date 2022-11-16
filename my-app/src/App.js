import Home from "./components/pages/home/Home";
import LogIn from "./components/pages/login/Login";

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  .ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="SmartBulb-React/" element={<Home />}/>
          {/* <Route path="/" element={<Diary />}/> */}
          {/* <Route path="/" element={<MyPage />}/> */}
          <Route path="SmartBulb-React/login" element={<LogIn />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
