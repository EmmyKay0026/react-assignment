// import React from "react"
// import ReactDOM from "react-dom"

// import "./index.css"

// const Greeting = ()=>{
//   return (
//   <>
//     <section>
//       <MyImage/>
//       <div>
//         <h4>This is my personal first react project</h4>
//         <SecondLine/>
//         <ThirdLine/>
//       </div>
//     </section>
  
//   </>
// )}
// const SecondLine = () =>{
//   return <h1>This is the second line of my code</h1>
// }
// const ThirdLine = () =>{
//   return <h1 className="third-line">This is the Third line of my code, boy am I glad thaat I am making progress</h1>
// }

// const MyImage = () => <img src="https://react-projects.netlify.app/_next/static/media/hero-1.7c6a8341.svg" alt="my react app" />


// ReactDOM.render(<Greeting/>, document.getElementById("root"))



import {createRoot} from 'react-dom/client';
import { HomePage } from './components'
import './index.css'



const App = ()=>{
  return <HomePage/>
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App/>);

// ReactDOM.render(<App/>, document.getElementById("root"))
