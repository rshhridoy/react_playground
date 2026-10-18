
// Reusable List components


function List (props){
    const itemList = props.items;

    const listItems = itemList.map(item => <li>{item.name}, <b>{item.calorie}</b></li>);

    return(
        <>
            <h3>{props.categories}</h3>
            <ol>{listItems}</ol>
        </>
    );

}

export default List;