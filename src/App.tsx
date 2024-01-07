
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Profile from './components/Profile';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
export type CatFactType = {
  id: number;
  name: string;  
}
function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}


export const AppContext = createContext();


const App = () => {



  
  const [catFact, setCatFact] = useState<CatFactType>({
    id: 0,
    name: ''
  });
 
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").
    then((res) => {
      const fact: CatFactType = {
        id: getRandomInt(res.data.length),
        name: res.data.fact
      }
      console.log(fact);
      setCatFact(fact);
    });
  }

  useEffect ( () => {
    console.log("component mount")
    fetchCatFact();

    return () => {
      console.log("component unmount")
    }
  }, [])

  
  const handleGenerateClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (event) {
      event.preventDefault();
      console.log(event);
      fetchCatFact();
    }    
    if (!event)  throw new Error('Function not implemented.');   
  }
 
   const [username, setUsername] = useState<string>("");

  return (
    <>
    
    <div className="App">
      <header className="App-header">        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > Learn React
        </a>
      </header>
      <button onClick={ (event) => handleGenerateClick( event )}>generate cat fact</button>
      <p>{catFact.name}</p>
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar ></Navbar>
        <div className="container mt-2" style={{ marginTop: 40 }}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/profile/:name" element={<Profile />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        </div>
      </Router>   
      </AppContext.Provider>   
      </div>
    </>
  );
}

export default App;


