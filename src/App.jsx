import Fruits from "./Fruits";
import Button from "./Button";

function App(){
  const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 110},
                    {id: 3, name:"banana", calories: 88},
                    {id: 4, name:"coconut", calories: 90}];

  const vegetables = [{id: 1, name: "Potato", calories: 200}, 
                    {id: 2, name:"carrot", calories: 30},
                    {id: 3, name:"eggplant", calories: 88}];

  const meat = [
    { id: "m1", name: "Ribeye Steak", calories: 290 },
    { id: "m2", name: "Pork Chops", calories: 210},
    { id: "m3", name: "Chicken Breast", calories: 165},
    { id: "m4", name: "Lamb Shanks", calories: 200},
    { id: "m5", name: "Bacon", calories: 540}
  ];
          
  return(
    <>
      {fruits.length > 0 ? <Fruits items = {fruits} category = "Fruits"/> : null}
      {vegetables.length > 0 ? <Fruits items = {vegetables} category = "Vegetables"/> : null}
      <Fruits items = {meat}/>
      
      <Button/>
    </>
  );
}

export default App;