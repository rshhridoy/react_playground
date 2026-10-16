function User(props){
    const loggedIn = <h2 id="logged-in">Welcome {props.username}</h2>;
    const notLoggedIn = <h2 id="not-logged-in">Please login to continue</h2>;
    return (props.isLoggedIn) ?loggedIn : notLoggedIn;
}

export default User;