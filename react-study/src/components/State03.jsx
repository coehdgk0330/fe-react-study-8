function State03(){

    // let arr= [1,2,3,4,5];
    let [arr,setArr] = useState([1,2,3,4,5]);

    retunr(
        <div>
            <button onClick={()=>{
                //arr.push(6);
                //console.log(arr);
                // arr.push(7);
                // setArr(arr);

                // setArr([1,2,3,4,5,7]);

                let temp = [...arr];
                temp.push(7);
                setArr(temp);

            }}>배열변경버튼</button>
            {
            arr.map((val)=>{
                return <p>{val}</p>
            })
        }
        </div>
    )
}
export default State03