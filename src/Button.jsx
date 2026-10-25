function Button() {

    const handleClick = () => console.log("Clicked");

    return(
        <button onClick={handleClick}>Click Me 😃</button>
    );

}

export default Button;