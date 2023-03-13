import Tests from "../Tests/Tests";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
			<p>WELCOME TO SCHOOL</p>
            <p>Liat learn GitHub</p>
            <Tests subject={"CSS"} score={80}/>
            <Tests subject={"React"} />
            </div>             
    );
   
}

export default Home;
