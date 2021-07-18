import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Reply from "./pages/Reply";
function App() {

  return (
    <BrowserRouter>
      <Route path = "/" exact component = {Login}/>
      <Route path = "/signup" exact component = {SignUp}/>
      <Route path = "/reply" exact component = {Reply}/>
    </BrowserRouter>

  )
}

export default App;
