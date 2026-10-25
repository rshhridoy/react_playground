function Button() {

    const handleClick = () => console.log("Clicked");

    const handleClick2 = (name) => console.log(`${name}, stop clicking me!! 😡`)

    return(
        <button onClick={() => handleClick2("Hridoy")}>Click Me 😃</button>
    );

}

export default Button;