import './index.css'
import Home from './pages/Home'
import { Toaster } from "react-hot-toast"


function App() {
  return (
    <>
      <Home />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#212121",
            color: "#F8FAFC",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "Poppins, sans-serif",
            fontSize: "14px",
            minWidth: "600px",
          },
        }}
      />
    </>
  )
}

export default App
