import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import routes from './config/routes';


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        { routes.map((route, index) => (
          <Route
          key={index}
          path={route.path}
          element={
            <route.component />
          }
          />
        )) }
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App