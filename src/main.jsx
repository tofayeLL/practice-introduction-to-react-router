import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Meals from './components/Meals/Meals.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';


const router = new createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a'),
          element: <Meals></Meals >
      },
      {
        path:'/meal/:mealId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <MealDetails></MealDetails>
      }
]

  }
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
