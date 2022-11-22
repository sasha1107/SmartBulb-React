import Home from "./components/pages/home/Home";
import LogIn from "./components/pages/users/Login";
import SignIn from "./components/pages/users/SignIn";
import Diary from "./components/pages/diary/Diary";

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
          <Route path="SmartBulb-React/diary" element={<Diary />}/>
          {/* <Route path="/" element={<MyPage />}/> */}
          <Route path="SmartBulb-React/login" element={<LogIn />}/>
          <Route path="SmartBulb-React/signin" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
