

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header';
import Main from './components/main section/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Available from './components/Available';
import Selected from './components/Selected';
import News from './components/News';

function App() {
   
  useEffect(() => {
    document.title = 'BPL-Dream-11';
  },[])

  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
     toast.success("Credit added to your account", {
          position: 'top-center'});
     setCoin(coin + 700000);

  }

  const [active, setActive] = useState({
    about: true,
    status: 'available'
  })

  const handleActive = (status) => {
      if(status == 'available'){
          setActive({
            about: true,
            status: 'available'
          }
          )
      }

      else{
        setActive({
          about: false,
          status: 'selected'
        })
      }

      
  }

  // choose player function


 const [selected, setSelected] = useState([]);

  const handlechoosePlayer = (propSingleAvailable) =>{

    if(selected.length <6 ){
      console.log('okay');
      const playerPrice = propSingleAvailable.price;
      const playerId = propSingleAvailable.id;
      const isSelected = selected.find(select => select.id === playerId);

      if(isSelected){
       toast.error('Player already selected',{
        position: 'top-center'
       });
      }

      else{

        if(playerPrice > coin){
          toast.error('Not enough money to buy this player. Claim some Credit',{
                position: 'top-center'
              })
        }

        else{
          setCoin(coin - playerPrice);
          toast.success('player added',{
            position: 'top-center'
          })

          const newPlayer = [...selected, propSingleAvailable];
          setSelected(newPlayer);
        }
        

      } 
    }

    else{
      toast.error('You can not choose more.',{
        position: 'top-center'
      });
    }
    
        
     }   


  // delete player function

  const handleDelete = (id) =>{
    console.log('clicked on delete', id);
    const remainingPlayer = selected.filter(player => player.id !== id);
    setSelected(remainingPlayer);
  }


  // add more player functionality
   const handleAddMorePlayer = () =>{
       console.log('clicked-on add player');
       setActive({
        about: true,
        status: 'available'
      })
         
   }
   
  

  return (
    <>
      
      <Header propCoin = {coin} propHandleCoin = {handleCoin}></Header>
      <Main 
         handleActive = {handleActive} 
         isActive ={active}
         selectedHandleChoosePlayer={selected}
      ></Main>
      
      {
        active.about? <Available handleChoosePlayer={handlechoosePlayer} ></Available> : <Selected propSelected={selected} propHandleDelete = {handleDelete} handleAddMorePlayer={handleAddMorePlayer}></Selected>
      }

      <News></News>
      
      

      <ToastContainer />
      
    </>
  );
};

export default App


// https://github.com/programming-hero-web-course1/b10a7-dream-11-Sajnin14.git
