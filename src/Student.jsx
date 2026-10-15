

const Student = (prop) => {
    return(
        <div className="single">
            <img src={prop.img} alt="placeholder" />
            <p>Name: {prop.name}</p>
            <p>Age: {prop.age}</p>
            <p>Student: {prop.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;