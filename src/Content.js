import React, {useState} from "react"

const Content = () => {
    const [name, setName] = useState('Karthik')
    const handlenamechange = ()=> {
        const name = ["Bob", 'Kevin', "Karthik"];
        const int = Math.floor(Math.random()*3);
        setName(name[int]);
      }
      const handleClick = ()=> {
        console.log('you clicked it');
      }
      const handleClick2 = (name)=> {
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e)=> {
        console.log(e.target.innerText);
      }
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handlenamechange}>Change name</button>
        <button onClick={()=>handleClick2('Karthik')}>Click It</button>
        <button onClick={(e)=>handleClick3(e)}>Click It</button>

    </main>
  )
}

export default Content