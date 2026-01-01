import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

function App() {
 

  return (
    <>
    <UserContextProvider>
      <h2>Context API Example</h2>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )}

export default App
