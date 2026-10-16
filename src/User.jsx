function User(props){
    if (props.isLoggedIn) {
        return <h2 id="logged-in">Welcome {props.username}</h2>
    }else{
        return <h2 id="not-logged-in">Please login to continue</h2>
    }
}

export default User;