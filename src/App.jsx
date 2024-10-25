

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header';
import Main from './components/main section/Main';

function App() {
   
  useEffect(() => {
    document.title = 'BPL-Dream-11';
  },[])

  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
     setCoin(coin + 700000);
     alert('money added');

  }

  return (
    <>
      
      <Header propCoin = {coin} propHandleCoin = {handleCoin}></Header>
      <Main></Main>
      
    </>
  )
}

export default App


// https://github.com/programming-hero-web-course1/b10a7-dream-11-Sajnin14.git
