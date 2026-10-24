import Student from "./Student";
import User from "./User";
import Fruits from "./Fruits";

function App(){
  return(
    <>
      <Student name = "Hridoy" age = {30}/>
      <User isLogged = {true} userName = "Shakil"/>
      <Fruits/>
    </>
  );
}

export default App;