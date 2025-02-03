
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home1 from './assets/componant/home/Home1';
import About1 from './assets/componant/about/About1';

import Error1 from './assets/componant/ErrorPage/Error1';
import Home2 from './home2/Home2';
import Contact from './assets/Contactp/Contact';
import Hous3 from './home2/Hous3';
import About2 from './assets/componant/about/About2';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home1></Home1>,
      errorElement: <Error1></Error1>,
      children: [
        {
          path: "/",
          element: <Home2></Home2>,
          loader: () => fetch("https://randomuser.me/api/?results=50"),

        },
        {
          path: "/:homeId",
          loader: ({ params }) => fetch(`https://randomuser.me/api/?results=50/${params.homeId}`),
          element: <Hous3></Hous3>


        },

        {
          path: "/about",
          loader: () => fetch("https://restcountries.com/v3.1/all"),
          element: <About1></About1>

        },
        {
          path:"/about/aboutId",
          loader:({pream}) =>fetch(`https://restcountries.com/v3.1/all/${pream.aboutId} `),
          element:<About2></About2>
        },
        {
          path: "/contact",
          loader: () => fetch("https://randomuser.me/api/?results=50"),
          element: <Contact></Contact>

        }

      ]
    },

  ]);


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
