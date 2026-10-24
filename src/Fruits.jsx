function Fruits(){
    const fruits = ["apple", "orange", "banana", "coconut"];

    const listItem = fruits.map(fruit => <li>{fruit}</li>)

    return(<ol>{listItem}</ol>);
}

export default Fruits;