function Button() {

    const handleClick = () => console.log("Clicked");

    let count = 0;

    const handleClick2 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked ${count} times.`);
        }else{
            console.log(`${name}, stop clicking me!! 😡`);
        }
    };



    return(
        <button onClick={() => handleClick2("Hridoy")}>Click Me 😃</button>
    );

}

export default Button;