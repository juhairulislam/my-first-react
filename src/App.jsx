
import './App.css' 
import ToDo from './todo' ;

function App() {

  return (
    <>

      <h1>React core concept</h1>
      <ToDo task='Learn react' isDone={true}></ToDo>
      <ToDo task='Learn js' isDone={false}></ToDo>
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name='Jolil' tech='Python'></Developer>
      <Developer name='Abdul' tech='js'></Developer>
      <Developer name='Azad' tech='C++'></Developer>
      <Player name='tamim' runs='5000'></Player>
      <Salami event='Eid ul azha' amount='100'></Salami> */}
     
     
    </>
  )
}

function Salami({event, amount}){
  return(
    <div className='student'>
      <p>Salami for: {event} </p>
      <p>Amount:{amount} tk broh</p>
    </div>
  )
}

function Player({name, runs}){
  return(
    <div className='student'>
      <h3>Name: {name} </h3>
      <p>Runs:"{runs}" </p>
    </div>
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
