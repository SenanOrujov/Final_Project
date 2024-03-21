import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Home from "./Admin/Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/admin' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
