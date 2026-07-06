import { useState } from "react";

// function App(){
//   const [car, setCar] = useState({
//     brand: "ferrari",
//     model: "rome",
//     year: "2023",
//     color: "red"
//   })

//   const handleColor = () => {
//     setCar((prev) => {
//       return {...prev, color: "blue"}
//     })
//   }

//   return (
//     <>
//     <h1>My {car.brand}</h1>
//     <h2>It is a {car.color} {car.model} from {car.year}</h2>
//     <button onClick={handleColor}>Blue</button>
//     </>
//   )
// }

// function Practice_1(){

//   const [count, setCount] = useState(0);
//   console.log(count)

//   const countIncrease = () => {
//     setCount(count + 1)
//   }

//   const countInc = () => {
//     setCount(prev => prev + 4)
//   }

//   function countDecrease(){
//     setCount(count => count - 4)
//   }
//   function resetCount(){
//     setCount(0)
//   }

//   return (
//     <>
//     <h1>count: {count}</h1>
//     <button onClick={countIncrease}>Increase By 1</button>
//     <button onClick={countInc}>Increase By 4</button>
//     <button onClick={countDecrease}>Decrease By 4</button>
//     <button onClick={resetCount}>Reset</button>
//     </>
//   )
// }

// function MyComponent() {
//   const [age, setAge] = useState(28);
//   const [name, setName] = useState('Taylor');

//   function handleClick(){
//     setName(name => name === "Taylor"? "Anish": "Taylor");
//   }

//    function handleAge(){
//     setAge(a => a + 2);
//    }

//    return(
//     <>
//     <h1>Hello, my name is {name}</h1>
//     <h1>My age is {age}</h1>
//     <button onClick={handleClick}>Change Name</button>
//     <button onClick={handleAge}>Change Age</button>
//     </>
//    )
// }


// export default function MyComponent(){

//   const [text, setText] = useState("hello");

//   function handleChange(e){
//     setText(e.target.value)
//   }
  
//   return (
//     <>
//       <input value={text} onChange={handleChange}/>
//       <p>You typed: {text}</p>
//       <button onClick={() => setText('hello')}>Reset Value</button>
//     </>
//   );
// };


// export default function MyComponent(){

//   const [checked, setChecked] = useState(true);

//   function handleChange(e){
//     setChecked(e.target.checked)
//   }
  
//   return (
//     <>
//       <input type="checkbox" checked={checked} onChange={handleChange}/> I liked this
//       <h1>You {checked? "liked":"did not like"} this</h1>
//     </>
//   );
// };


// export default MyComponent;
