function User(props){
    return (props.isLoggedIn) ? <h2 id="logged-in">Welcome {props.username}</h2>: <h2 id="not-logged-in">Please login to continue</h2>
}

export default User;