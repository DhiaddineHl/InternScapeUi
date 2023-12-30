import LoginForm from "./components/LoginForm"
import RegisterPage from "./pages/RegisterPage"
import { Route, Routes } from "react-router-dom"
import SupervisorsSection from "./pages/SupervisorsSection"
import TopicsSection from "./pages/TopicsSection"
import InternsSection from "./pages/InternsSection"
import HomePage from "./pages/HomePage"
import TopicCardElement from "./components/EnterpriseDashboard/Topics/TopicCardElement"
import TopicGrid from "./components/EnterpriseDashboard/Topics/TopicGrid"


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
