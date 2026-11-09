import { Routes, Route } from "react-router"
import Home from './pages/Home'
import ExperienceDetail from "./pages/ExperienceDetail"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/experience/:slug" element={<ExperienceDetail/>}/>
    </Routes>
  )
}