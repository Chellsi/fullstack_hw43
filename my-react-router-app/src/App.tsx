import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-blue-600 shadow-md mb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <ul className="flex space-x-1">
                <li>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-800 text-white shadow-md' 
                          : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                      }`
                    }
                  >
                    Головна
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-800 text-white shadow-md' 
                          : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                      }`
                    }
                  >
                    Про нас
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/contacts" 
                    className={({ isActive }) => 
                      `px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isActive 
                          ? 'bg-blue-800 text-white shadow-md' 
                          : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                      }`
                    }
                  >
                    Контакти
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route 
              path="*" 
              element={
                <div className="text-center py-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">404</h2>
                  <p className="text-gray-600 mb-6">Сторінка не знайдена</p>
                  <Link 
                    to="/" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Повернутись на головну
                  </Link>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App