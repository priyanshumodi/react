import { useEffect,useState} from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
      setThemeMode("light")
  }

  const darkTheme = () => {
      setThemeMode("dark")
  }

  // actual change in theme

  useEffect(()=>{
    const changeHtmlTheme = document.querySelector('html').classList;
    changeHtmlTheme.remove("light","dark");
    changeHtmlTheme.add(themeMode);
  },[themeMode])

  return (
    
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* themebtn */}
              <ThemeBtn/>
          </div>
  
          <div className="w-full max-w-sm mx-auto">
              {/* card */}
              <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
