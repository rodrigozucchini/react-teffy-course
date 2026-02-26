import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleThem = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  } 
  return (
    <ThemeContext.Provider value={{theme, toggleThem}}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, toggleThem } = useContext(ThemeContext);

  return (
    <button 
      onClick={()=> toggleThem()} 
      style= {{ 
        backgroundColor: theme === "light" ? "#ffffff": "#333333",
        color: theme === "light" ? "#000000" : "#ffffff"
      }}
    >
      Cambiar Tema
    </button>
  )
}


function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App
