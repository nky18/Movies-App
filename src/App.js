
import './App.css';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Favourite from './components/Favourite';
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';

function App() {
 return(

   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route path="/" element={
       <>
         <Banner/>
         <MovieList/>
       </>
     }/>

     <Route path="/Favourites" element={
       <>
         <Favourite/>
       </>
     }/>

   </Routes>
   </BrowserRouter>
 );
}

export default App;
