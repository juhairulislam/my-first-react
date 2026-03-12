
import './App.css'

function App() {

  return (
    <>

      <h1>React core concept</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name='Jolil' tech='Python'></Developer>
      <Developer name='Abdul' tech='js'></Developer>
      <Developer name='Azad' tech='C++'></Developer>
     
     
    </>
  )
}

function Developer(props){
  console.log(props) ;
  return (
  <div style={{
    border:'2px solid green' , 
    borderRadius:'20px' ,
  }}> 
  <h3>Developer: {props.name} </h3>
  <p>Technlogy: {props.tech}</p>
    
  </div>
  )
}

function Person(){
  const age = 17 ;
  const name = 'Jion' ;
  const personStyle = {
    color:'red' ,
    textAlign:'center'
  }
  return(
    <p style={personStyle}>I am a {name } age {age}</p>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Dept: </p>
    </div>
  )
}


function Pet(){
  return(
    <h2>This is my cat</h2>
  )
}


export default App
