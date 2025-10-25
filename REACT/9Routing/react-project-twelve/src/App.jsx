
import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
function App() {
  const router = createBrowserRouter(
    [
      // "/" means route to home page direct
      {
        path : "/",
        element : 
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path : "/about",
        element :
        <div>
          <Navbar/>
          <About/>
        </div>
      },
      {
        path : "/dashboard",
        element : 
        <div>
          <Navbar/>
          <Dashboard/>
        </div>,
        children:[
          {
          path:'courses',
          element : <Courses/>
          }

        ]
      },
      {
        path:"student/:id",
        element : 
        <div>
          <Navbar/>
          <ParamComp/>
        </div>
      }
    ]
  );

  return (
    <div>
      {/* gives context to all the application that these all are router to provide */}
     <RouterProvider router={router} />
    </div>

  )
}

export default App


//hello
//jii