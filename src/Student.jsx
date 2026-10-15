

const Student = (prop) => {
    return(
        <div>
            <p>Name: {prop.name}</p>
            <p>Age: {prop.age}</p>
            <p>Student: {prop.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Student;