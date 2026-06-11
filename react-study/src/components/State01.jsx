import {useState } from "react";

    function State01(){

            // React Hooks
            // useState -> 상태를 저장하는 변수, 재렌더링 발생 기준, 재렌더링 상황에서 값이 계속 유지
            
            //재렌더링 발생기준
            //state 변수 set함수를 통해서 값이 변경 된 경우 -> 화면 재렌더링 (re-redering)
            
            // const|let [변수명,set함수명] = useState(초기값);
        let [count,setCount]=useState(0);
        
        let cnt = 0; //함수에 존재하는 일반 변수
        

        let [num,setNum] = useState(0);

        
        return(
            <div>
                <h1>State01</h1>

                <p>{cnt}</p>

                <button onClick={()=>{
                    console.log('cnt증가 버튼 클릭');
                    cnt++;
                    console.log(cnt);

                    num++;
                    console.log(num);
                }}>cnt증가</button>

                <br></br>

                <p>{count}</p>
                <button onClick ={()=>{
                    console.log('count증가 버튼 클릭');
                    // count++;
                    setCount(count+1);
                    setNum(num+1);
                    console.log(count);
                }}>count 증가</button>

                
            </div>
        )
    }
    export default State01;