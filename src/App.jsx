import List from './List';

function App(){
  const fruits = [
        {name:"Apple", calorie:95},
        {name:"Banana", calorie:21},
        {name:"Pineapple", calorie:37},
        {name:"Orange", calorie:170},
    ]
  return(
    <List items = {fruits} categories = "Fruit"/>
  );
};

export default App;