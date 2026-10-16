import { id } from "zod/locales";

function List (){
    const fruits = [
        {id: 1, name : 'apple', calorie: 95},
        {id: 2, name: 'orange', calorie: 170}, 
        {id: 3, name: 'banana', calorie: 21}, 
        {id: 4, name: 'pineappple', calorie: 37}
    ];

    // Sorting
    // fruits.sort((a, b) => a.name.localeCompare(b.name));    Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name));     Reverse Alphabetical
    // fruits.sort((a,b) => a.calorie - b.calorie);            Numeric
    // fruits.sort((a,b) => b.calorie - a.calorie);            Reverse Numeric

    // filter
    const localFruits = fruits.filter(fruit => fruit.calorie <= 90);
    const highCalFruits = fruits.filter(fruit => fruit.calorie >90);

    const lowFruitList = localFruits.map(localFruit => <li key={localFruit.id}>{localFruit.name} , <b>{localFruit.calorie}</b></li>);

    const highFruitList = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}, <b>{highCalFruit.calorie}</b></li>)

    return(<><ol>{lowFruitList}</ol><ol>{highFruitList}</ol></>);
}

export default List;