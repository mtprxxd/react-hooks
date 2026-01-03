import { useEffect, useState } from 'react'
import './App.css'
import ThemeButton from './component/ThemeButton'
import Card from './component/Card'
import { ThemeProvider } from '../src/context/theme'


function App() {
  const [defaultTheme, setDefaultTheme] = useState("light")

  const darkTheme = () => {
    setDefaultTheme("dark")
  }

  const lightTheme = () => {
    setDefaultTheme("light")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])

 


  

  return (
    <ThemeProvider value={{defaultTheme, darkTheme, lightTheme}}>
    <>
  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Toggle Button */}
                        <ThemeButton />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card  */}
                        <Card />
                
                    </div>
                </div>
            </div>

    </>
    </ThemeProvider>
  )
}

export default App
