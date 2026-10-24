function Fruits(){
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 110},
                    {id: 3, name:"banana", calories: 88},
                    {id: 4, name:"coconut", calories: 90}];

    // fruits.sort((a , b) => (a.name).localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => (b.name).localeCompare(a.name));      // Reverse Alphabetical
    fruits.sort((a, b) => a.calories - b.calories);

    const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
                                                                <b>{fruit.calories}</b></li>)

    return(<ol>{listItem}</ol>);
}

export default Fruits;