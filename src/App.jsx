
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Person></Person>
      <Pet></Pet>
      <Person></Person>
      <Person></Person>
     
    </>
  )
}

function Person(){
  const age = 17 ;
  const name = 'Jion'
  return(
    <p>I am a {name } age {age}</p>
  )
}


function Pet(){
  return(
    <h2>This is my cat</h2>
  )
}


export default App
