import { useEffect, useState } from 'react'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
  const [defaultTheme, setDefaultTheme] = useState('light')

  const darkTheme = () => {
    setDefaultTheme('dark')
  }

  const lightTheme = () => {
    setDefaultTheme('light')
  }
  const toggleTheme = () => {
    if (defaultTheme === 'light') {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])

  return (
    <ThemeProvider value={{defaultTheme, darkTheme, lightTheme, toggleTheme}}>
    <>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Toggle Button */}
                        <ThemeButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/* Card */}
                        <Card />
                       
                    </div>
                </div>
            </div>
    </>
    </ThemeProvider>
  )
}

export default App
