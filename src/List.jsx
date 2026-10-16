import { id } from "zod/locales";

function List (){
    const fruits = [
        {id: 1, name : 'apple', calorie: 95},
        {id: 2, name: 'orange', calorie: 170}, 
        {id: 3, name: 'banana', calorie: 21}, 
        {id: 4, name: 'pineappple', calorie: 37}
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));   Alphabetical

    // fruits.sort((a,b) => b.name.localeCompare(a.name));       Reverse Alphabetical

    fruits.sort((a,b) => a.calorie - b.calorie);          //  Numeric

    // fruits.sort((a,b) => b.calorie - a.calorie);                Reverse Numeric

    const fruitlist = fruits.map(fruit => <li key={fruit.id}>{fruit.name} , <b>{fruit.calorie}</b></li>);

    return(<ol>{fruitlist}</ol>)
}

export default List;