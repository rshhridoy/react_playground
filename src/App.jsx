import Fruits from "./Fruits";

function App(){
  const fruits = [];

  const vegetables = [{id: 1, name: "Potato", calories: 200}, 
                    {id: 2, name:"carrot", calories: 30},
                    {id: 3, name:"eggplant", calories: 88}];

          
  return(
    <>
      {fruits.length > 0 ? <Fruits items = {fruits} category = "Fruits"/> : null}
      {vegetables.length > 0 ? <Fruits items = {vegetables} category = "Vegetables"/> : null}
    </>
  );
}

export default App;