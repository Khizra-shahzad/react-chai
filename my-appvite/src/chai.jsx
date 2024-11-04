// function Person(props){
//   return <h2>my name is {props.brand}</h2>;

// }
// function Person2(){
//   const firstName="khizra";
//   return(
//     <>
//     <h3>iim 17 year old.</h3>
//     <Person brand={firstName}/>
//     </>
//   )
// }
// export default Person2
function Car(props){
  return <h3>my car name is {props.brand.model}</h3>
}
function Garage(){
  const carInfo={name:"ford",model:"mustang."}
  return(
    <>
    <h1>who is in my garage</h1>
    <Car brand={carInfo}/>
    </>
  )
}
export default Garage
