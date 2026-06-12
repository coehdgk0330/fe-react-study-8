
import { useState } from 'react'; 
import './Quiz01.css';      

function Quiz01(){

    let [count,setCount]=useState(0);
    return(
        <div>
            
                <button onClick ={()=>{
                    
                    setCount(count+2);
                
                    console.log(count+2);
                }}>짝수출력</button>
            <span>{count}</span>
            
        
        </div>
    )

}
export default Quiz01;