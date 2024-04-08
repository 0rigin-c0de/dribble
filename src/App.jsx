import Footer from "./components/Foot";
import Form from "./components/Loginform";
import Profile from "./components/Profile";
import Service from "./components/Service";
import Verification from "./components/Verification";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     
      <Routes>
        <Route index element={<Form/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
      <Footer/>

      

    </>
  );
};

export default App;
