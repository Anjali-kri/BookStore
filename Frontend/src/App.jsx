import Home from "../src/home/home"
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from "./Courses/Courses"
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider";

function App() {
  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser, "auth");

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/course" element={authUser ? <Courses /> : <Navigate to = "/signup" />} /> 
    <Route path="/signup" element={<Signup />} /> 

    </Routes>
    
    </>
  )
}

export default App
