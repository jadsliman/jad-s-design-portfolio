import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import AllDesignsPage from './pages/AllDesignsPage'
import SingleDesignPage from './pages/SingleDesignPage'
import './App.css'

function App() {
    return (
        <>
            <title>Jad's Design Portfolio</title>

            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/:designType' element={<AllDesignsPage />} />
                <Route path='/:designType/:designName' element={<SingleDesignPage />} />
            </Routes>
        </>
    )
}

export default App