import PropTypes from "prop-types";
import {z} from 'zod';

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


Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student;