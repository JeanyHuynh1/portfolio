import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Services from './components/Services'

const MainRouter = () => {
    return (
        <div className="">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutMe />} />
                <Route exact path = "/contact" element={<ContactMe />} />
                <Route exact path = "/projects" element={<Projects />} />
                <Route exact path = "/services" element={<Services />} />
            </Routes>
        </div>
    )
}

export default MainRouter