import PropTypes from "prop-types";
import {z} from 'zod';

const Student = (prop) => {

    const result = StudentSchema.safeParse(prop);

    if(!result.success){
        console.error(result.error);
    }
    else{
        return(
            <div className="single">
                <img src={prop.img} alt="placeholder" />
                <p>Name: {prop.name}</p>
                <p>Age: {prop.age}</p>
                <p>Student: {prop.isStudent ? "Yes" : "No"}</p>
            </div>
        );
    }

}
const StudentSchema = z.object({
    name: z.string(),
    age: z.number(),
    isStudent: z.boolean(),
});

export default Student;