import './App.css'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Home from './components/home'
import { lazy, Suspense, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { appRoutes } from './AppRoutes'

const AboutUs = lazy(() => import('./components/about'))
const Users = lazy(() => import('./components/users'))
const NotFound = lazy(() => import('./components/NotFound'))
const UserProfile = lazy(() => import('./components/userProfile'))
const SearchUser = lazy(() => import('./components/searchUser'))
const Login = lazy(() => import('./components/login'))
const AuthProfile = lazy(() => import('./components/authProfile'))

function App() {
  const [username, setUsername] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const location = useLocation()

  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading .....</h1>}>
            <Routes location={location}>
              {appRoutes.map((route) => {
                if (route.reqAuth && !isLogged) {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={<Navigate replace to={'/login'} />}
                    />
                  )
                } else {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={<route.component setIsLogged={setIsLogged} setUsername={setUsername} username={username} 
                      />
                    }
                    />
                  )
                }
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App
