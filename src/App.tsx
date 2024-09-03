import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/Layout/DefaultLayout"
import HomePage from "./components/Pages/HomePage"
import About from "./components/Pages/About"
import Services from "./components/Pages/Services"
import Contact from "./components/Pages/Contact"
import Patients from "./components/Pages/Patients"

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="patients" element={<Patients />} />
          </Route>
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App