import {useState} from "react";

const AdviceApp =()=>{
    const [advice, setAdvice] = useState("Please Click Button to Get Advice");
    const [count, setCount] = useState(0);

   async function getAdvice(){
const result = await fetch("https://api.adviceslip.com/advice");
const data = await result.json();

setAdvice(data.slip.advice);
setCount((c)=>c + 1);
    }
    return(
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <p>You have read <b>{count}</b> pieces of advice...</p>
        </div>
    )
}
 
export default AdviceApp;