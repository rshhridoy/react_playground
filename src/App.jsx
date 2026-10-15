import Student from "./Student";
import Propic from './assets/passport.png';
import Propic2 from './assets/react.svg'
import Propic3 from './assets/vite.svg'


const App = () => {
  return(
    <>
      <Student img = {Propic} name = "Hridoy"  isStudent= {true}/>
      <Student img = {Propic2} name = 'Squize' age = {26} isStudent = {false}></Student>
      <Student img = {Propic3} name = 'Circle' age = {36} isStudent = {false}></Student>
      <Student />
    </>
  );
}

export default App; 