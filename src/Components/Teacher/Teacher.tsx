import "./Teacher.css";

interface TeacherProps {
    name: string;
    description: string;
    years: number;

}

function Teacher(props:TeacherProps): JSX.Element {
    return (
        <div className="Teacher">
			<p className="fontWeight900">{props.name} </p>
            <p>{props.description}</p>
            <p>{props.years} years of experience</p>
        </div>
    );
}

export default Teacher;
