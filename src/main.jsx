import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import all the pages that react will use
import App from './App';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Porfolio from './Portfolio';
import Resume from './Resume';

// Define the routes needed for the navbar to function
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        // Are the / needed before the path? 
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'hobbies',
        element: <Hobbies />,
      },
      {
        path: 'portfolio',
        element: <Porfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
