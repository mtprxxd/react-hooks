import { useState, useEffect } from 'react'
import './App.css'
import ThemeUI from './components/ThemeUI.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider } from './context/theme.js'

function App() {
  const[defaultTheme, setDefaultTheme] = useState('light');

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(defaultTheme);
  }, [defaultTheme]);
  const darkTheme = () => {
    setDefaultTheme('dark');
  }
  const lightTheme = () => {
    setDefaultTheme('light');
  }

  return (
    <ThemeProvider value={{ defaultTheme, darkTheme, lightTheme }}>
    
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                        <ThemeUI />
                    </div>
                       {/* Theme Switcher */}
                    
                    <div className="w-full max-w-sm mx-auto">
                       {/* Card */}
                        <Card />
                    </div>
                </div>
            </div>

    
    </ThemeProvider>
  )
}

export default App
