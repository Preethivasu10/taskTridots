import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import EmployeeLeaveTable from "./Components/task/task";
// import BlogPage from "./Components/blogpage/BlogPage";
// import SubscriptionPlans from "./Components/SubscriptionPlans/SubscriptionPlans";
// import BlogPage from "./Components/blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
    //  <SubscriptionPlans/>
    // <BlogPage/>
    // <EmployeeLeaveTable/>
    // <LandingPage/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LandingPage/>} />
        <Route path="/task" element={<EmployeeLeaveTable />} />

  
   
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
