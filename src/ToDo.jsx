// export default function ToDo({task, isDone}){
//     return(
//         <li>Task:{task} </li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>pending: {task}</li>
//     }
// }

// export default function ToDo({task, isDone, time= 0}){
//     if (isDone === true) {
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }

// conditional rendering: 3 ternary
// condition ? true : false

// export default function ToDo({task, isDone, time = 0}){
//     return isDone ?
//     <li>Done : {task} time
//     : {time}</li> : <li>Not Done: {task}</li>
// }

//  conditional rendering : 4 &&

// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
    
// }


// conditional rendering: 6 use variable

// export default function ToDo({task, isDone, time}){
//     // const displayTime = time ? time : 100;
//     let listItem ;

//     if (isDone === true) {
//         listItem = <li>Done: {task} time: {time ? 'iam done' : 'not done yet'}</li>
//         // listItem = <li>Done: {task} time: {displayTime}</li>
//     }
//     else{
//         listItem = <li>pending: {task}</li>
//     }
//     return listItem
// }