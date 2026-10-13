const Food = () => {
    const food1 = "Banana";
    const food2 = "Coconut";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1.toLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food