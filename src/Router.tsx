import Login from "./pages/Login/Login";
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
	  path: '/',
	  element: <Login />,
	  children: [
		{
		//   path: 'home',
		//   element: ,
		},
	  ],
	},
  ]);

export default router