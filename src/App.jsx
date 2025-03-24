
import './App.css'
// import ToDo from './ToDo';
import Actor from './Actor';
import Singer from './Singer'

function App() {
  
  const actors = ['Bappa Raj', 'omar sunny', 'Salman shah', 'jasim', 'anwar'];
 const singers = [
  { id: 1, name: 'Dr. Mahfuz', age:68},
  {id:2, name: 'Tahsan', age:45},
  {id: 3, name: 'shuvro deb', age: 57}
 ]
// const time = 50;
  return (
    <>
     
     <h1>React Core concepts</h1>  

     {
      singers.map(singer => <Singer key={singer.id}  singer={singer}></Singer>)
     }

     {
      actors.map((actor, index) => <Actor  key={index} actor={actor}></Actor>)
     }

     {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
     <ToDo task="Revise JS" isDone={false}></ToDo>
     <ToDo task="Take a shower" isDone={true} time="100"></ToDo> 
     <ToDo task="Take a shower" isDone={true} time=""></ToDo> */}

     {/* <Student></Student>
     <Student></Student>
     <Person></Person>
     <Developer name="nafees" tech="JS"></Developer>
     <Developer name="nobel" tech="Python"></Developer>
     <Developer name="arif" tech="Java"></Developer>
     <Player name="tamim" runs ="5000"></Player>
     <Player name="mushi" runs ="5000"></Player>
    <Salami event="roja Eid" amount="20"></Salami>
    <Salami event="Graduation" amount="0"></Salami> */}
    </>
  )
}

function Salami({event, amount}){
  return(
    <div className='Student'>
      <p>Salami For: {event} </p>
      <p>Amount: {amount}</p>
    </div>
  )
}

function Player({name, runs}){
  return(
    <div className='Student'>
    <h3>Name:{name} </h3>
    <p>Runs:{runs} </p>
    </div>
  )
}

const {name, tech} = {name: 'nafees', tech: 'JS'}
function Developer(props){
  console.log(props);
  return (
<div style={{
  border:'2px solid green',
  borderRadius: '20px'
}}>
    <h3>Developer:{props.name} </h3> 
    <p>Technology:{props.tech} </p>
  </div>
  )
}

function Person() {
  const age = 17;
  const name ='nobel';

  const personStyle ={
    color: 'red',
    textAlign:'right'
  }
  return(
    <p id='' title='tooltip' style={personStyle}>I am a Person: {name} {age}</p>
  )
}

function Student(){
  return(
    <div className='Student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function pet(){
  returnK(
  <p>Cat</p>
  )
}

function Sports(){
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>bowler</li>
        <li>wicket</li>
      </ul>
      <p>Playing and winning</p>
    </div>
  )
}


export default App
