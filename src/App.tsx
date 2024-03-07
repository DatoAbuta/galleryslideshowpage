import './App.css'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Root from './pages/Root'
import data from './data.json'
import Main from './pages/Main'
import Photopage from './pages/Photopage'
function App() {
  const newData = data
  console.log(newData)


  return (
    <>

        <BrowserRouter >
        <Routes >
          <Route path="/" element={<Root />}>
            <Route index element={<Main />} />
            <Route path='info/:id' element={<Photopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
