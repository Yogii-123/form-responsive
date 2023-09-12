import './App.css';
import FormPage from './FormPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Get from './Get';


function App() {
  return (
    <div className="">
         <BrowserRouter>
               <Routes>
                 <Route path='/'element={<FormPage/>}></Route>
                 <Route path="Get" element={<Get/>}></Route>
               </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
