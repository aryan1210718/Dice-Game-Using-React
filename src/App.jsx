import  {React,useState} from 'react'
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameplay=()=>{
    setIsGameStarted((prev)=>!prev)
}
  return (
    <>
  
  {isGameStarted? <GamePlay />:<StartGame  toggle={toggleGameplay} />}
   
    </>
  );
}

export default App
