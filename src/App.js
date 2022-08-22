import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Cards from './components/Cards';
import CardDetail from './components/CardDetail';


function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route  path="/" element={<Cards/>} />
    <Route  path="/cart/:id" element={<CardDetail/>} />
   </Routes>
   </>
  );
}

export default App;
