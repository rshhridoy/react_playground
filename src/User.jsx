function User(props){
    return(props.isLogged ? <h2>Welcome , {props.userName}</h2> : <h2>Please login to continue!</h2>);
}

export default User;