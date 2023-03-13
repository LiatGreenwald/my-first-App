import { useState } from "react";
import "./Tests.css";

interface TestProps {
  subject: string;
  score?: number;
}
function Tests(props: TestProps): JSX.Element {
    const [score,setScore] = useState<number>(props.score||0);
    const addScore =()=>{
        if(score===100){
            return;
        }
        setScore(x=>x+10)
    }
    const subScore =()=>{
        if(score===0){
            return;
        }
        setScore(x=>x-10)
    }
  return (
    <div className="Tests">
      <p>Test: {props.subject} </p>
      {score ? <p>Score: {score} </p> : <p>No Grade Yet</p>}

      <div className="row">
        <button onClick={addScore}>+</button>
        <button onClick={subScore}>-</button>
       
        
      </div>
    </div>
  );
}

export default Tests;
