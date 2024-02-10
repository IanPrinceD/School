import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import { AboutScreen, ContactScreen, HomeScreen } from './Screens';

const Router = () => {
 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<App />}>
       <Route index="*" element={<HomeScreen />}/>
       <Route path="contact" element={<ContactScreen />}/>
       <Route path='about' element={<AboutScreen/>}/>
     </Route>
   )
 );
  return <RouterProvider router={router}/>
}
export default Router