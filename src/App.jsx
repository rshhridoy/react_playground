import Fruits from "./Fruits";

function App(){
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 110},
                    {id: 3, name:"banana", calories: 88},
                    {id: 4, name:"coconut", calories: 90}];
  return(
    <>
      <Fruits items = {fruits} category = "Fruits"/>
    </>
  );
}

export default App;