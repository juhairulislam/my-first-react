// export default function ToDo({task}){
// //     return (
// //         <li>Task: {task} </li>
// //     )
// // }


// conditional rendering: 3 ternary

// export default function ToDo({task , isDone , time = 0}){
//     return isDone? <li>Done: {task}</li> : <li>Not Done: {task}</li>
// }

// conditional rendering : 4 && 

// export default function ToDo({task , isDone , time = 0}){
//     return isDone && <li>Done: {task} time: {time}</li> ;
// }
// conditional rendering : 5 || 

export default function ToDo({task , isDone , time = 0}){
    return isDone || <li>Not Done: {task} time: {time}</li> ;
}
