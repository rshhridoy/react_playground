function Fruits({items = [], category = "Unknown Category"}){
    

    // fruits.sort((a , b) => (a.name).localeCompare(b.name)); //Alphabetical
    //fruits.sort((a, b) => (b.name).localeCompare(a.name));      // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories);             // Numerical
    // fruits.sort((a,b) => b.calories- a.calories);       //Reverse Numerical

    
    // Reusable List component
    
    // items and category are extracted directly from props

    const listItem = items.map(item => (<li key={item.id}>{item.name}: &nbsp;
                                                                <b>{item.calories}</b></li>));

    // const lowCal = fruits.filter(fruit => fruit.calories<= 90);
    // const lowCalFruits = lowCal.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: {lowCalFruit.calories}</li>)
    
    // const highCal = fruits.filter(fruit => fruit.calories > 90);
    // const highCalFruits = highCal.map(highCalFruit => <li>{highCalFruit.name}</li>)

    return(
        <>
            <h2>{category}</h2>
            <ol>{listItem}</ol>
        </>
    );
}

export default Fruits;