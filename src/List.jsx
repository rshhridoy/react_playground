function List (){
    const fruits = ['apple','orange', 'banana', 'pineappple'];

    const fruitsItem = fruits.map(fruit => <li>{fruit}</li>);

    return(<ol>{fruitsItem}</ol>)
}

export default List;