
function Button() {

    const style = {
        backgroundColor: 'hsla(0, 0%, 7%, 0.3)',
        width: '200px',
        maxWidth: '250px',
        margin: '20px',
        padding: '10px',
        border: '2px solid hsla(0, 0%, 69%, 0.155)',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.3)',
        textAlign: 'center',
        display: 'inline-block'
    }

    return(
        <button className="card" style={style}>Click Me</button>
    );
}

export default Button;