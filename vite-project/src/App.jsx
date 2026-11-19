import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./Components/Header/Header.jsx"
import PageGlav from "./Components/PageGlav/PageGlav.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import PageAbout from "./Components/PageAbout/PageAbout.jsx"
import PageServices from "./Components/PageServices/PageServices.jsx"
import PageContact from "./Components/PageContact/PageContact.jsx"
import PageBlog from "./Components/PageBlog/PageBlog.jsx"

function App() {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<PageGlav/>} />
            <Route path="/PageAbout" element={<PageAbout/>} />
            <Route path="/PageService" element={<PageServices/>} />
            <Route path="/PageCont" element={<PageContact/>} />
            <Route path="/PageBlog" element={<PageBlog/>} />
        </Routes>
        <Footer/>
        </>
    )
    }

export default App