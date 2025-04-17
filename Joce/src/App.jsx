import { RouterProvider } from "react-router-dom"
import router from "./router"

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
     <RouterProvider router={router}/> 
    </div>
  )
}
