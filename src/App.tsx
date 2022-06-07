import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/commons/layout/Layout'

import Home from './pages/Home'

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
