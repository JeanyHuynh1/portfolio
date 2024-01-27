import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const MainRouter = () => {
    return (
        <div className="">
            <Routes>
                <Route exact path = "/" element={<Home />} />
            </Routes>
        </div>
    )
}

export default MainRouter