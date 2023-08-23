import EnterpriseRegisterForm from "./components/EnterpriseRegisterForm"
import IndividuelRegisterForm from "./components/SupervisorRegisterForm"
import LoginForm from "./components/LoginForm"
import InternRegisterForm from "./components/InternRegisterForm"
import RegisterPage from "./components/RegisterPage"
import { Route, Routes } from "react-router-dom"
import SidebarWithHeader from "./components/EnterpriseDashboard/SideBar/SideBar"
import SupervisorCard from "./components/EnterpriseDashboard/SupervisorCard"
import SupervisorsSection from "./pages/SupervisorsSection"
import TopicsSection from "./pages/TopicsSection"
import InternsSection from "./pages/InternsSection"
import HomePage from "./pages/HomePage"


function App() {

  return (
    <Routes>
      <Route element={<LoginForm />} path="/" ></Route>
      <Route element={<RegisterPage />} path="/register" ></Route>
      <Route element={<SupervisorsSection />} path="/supervisors" ></Route>
      <Route element={<InternsSection />} path="/interns" ></Route>
      <Route element={<TopicsSection />} path="/topics" ></Route>
      <Route element={<HomePage />} path="/Home" ></Route>
    </Routes>

  )
}

export default App
