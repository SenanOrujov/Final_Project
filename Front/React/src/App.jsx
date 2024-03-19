import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
