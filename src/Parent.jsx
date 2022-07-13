import Child from "./Child"; 

function Parent(){
    const childrenNames = ["Taro","Hanako","Jiro"]
    function callChild(name){
        alert(`Hay ${name}`);
    }

    return <div>
        <h1>Parent</h1>
        {childrenNames.map(childrenName => {
            return <Child name={childrenName} callFunc={()=>callChild(childrenName)}/>
        })}
    </div>
}

export default Parent;