function Button() {

    const handleClick = () => console.log("Clicked");

    let count = 0;

    const handleClick2 = (e, name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked ${count} times.`);
            e.target.textContent = count;

        }else{
            console.log(`${name}, stop clicking me!! 😡`);
            e.target.textContent = "Ouch!! 🤕";
        }
    };



    return(
        <>
            <button onClick={(e) => handleClick2(e, "Hridoy")}>Click Me 😃</button>
        </>
    );

}

export default Button;