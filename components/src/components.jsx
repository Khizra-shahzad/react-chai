import React, { useState } from "react";


//types of components function
//1st=>
// function Car(props) {
//     return <h2>I am a { props.brand }!</h2>;
//   }
//   function Garage() {
//     return (
//       <>
//         <h1>Who lives in my garage?</h1>
//         <Car brand="Ford" />
//       </>
//     );
//   }
//   export default Garage

//2nd=>
//function Car(props){
//return <h1> I am a car{props.brand}</h1>
//}
//function Garage(){
//     const carName="ford";
//     return(
//         <>
//         who live is my garage
//         <Car brand={carName} />
//         </>
//     )
// }
//export default Garage

//3rd=>
// function Car(props) {
//     return <h1>i am a {props.brand.model}</h1>
// }
// function Garage() {
//     const carInfo = { name: "mustang", model: "ford" }
//     return (
//         <>
//             <h1>who is in my garage</h1>
//             <Car brand={carInfo} />
//         </>
//     )
// }
// //export default Garage
// //ex=>
// function Door(props) {
//     return <h1>i am {props.Car.color}</h1>
// }
// function Door2() {
//     const doorInfo = { color: "red", model: "wood" }
//     return (
//         <>
//             <h1>HI ! I am khizra</h1>
//             <Door Car={doorInfo} />
//         </>
//     )
// }
//export default Door2

// function Football(){
//     const shoot =()=>{
//         alert("great shot");
//     }
//     return(
//         <button onClick={shoot}>Take A Shot!</button>
//     )
// }
 
//export default Football

// function Football(){
//     const shoot=(a)=>{
//         alert(a);
//     }
//     return(
//         <button onClick={ () => shoot("goal")}>take shot</button>
//     )

// }
// export default Football

// function Goal(props) {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//       return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
// }
// export default Goal

// function gradesA() {
//     gradesA = 90;

//     return (<div>
//         {
//             (gradesA == 90 &&
//                 <h1>Excellent</h1>
//             )

//         }
//     </div>

//     );
// }
//export default gradesA


//const result = () => {
//     const num1 = 50;
//     const num2 = 50;
//     const total = num1 + num2;
//     let grade = 0;
//     if (total > 70) {
//         grade = "pass";
//     }
//     else {
//         grade = "fail";
//     }
//     return (
//         <div>
//             <h1>{grade}</h1>

//         </div>
//     );
// }
//export default result



function form(){
    const[FormData,setFormData]=useState({
        username:"",
        password:"",
    })
    const handleChange=(event)=>{
        const  {name,value}=event.target
        setFormData((prevstate)=>({...prevstate,[name]:value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(FormData)
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                username
                <input type="text"
                name="username"
                value={FormData.username}
                onChange={handleChange}
                />
                </label>
            <label>
                password
                <input type="password"
                name="password"
                onChange={handleChange}
                />
            </label>
            <input type="submit" name="submit"    
            />    
        </form>
    )
}
export default form
