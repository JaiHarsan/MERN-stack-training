import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Counter from './component/Counter'
// import UserInput from './component/UserInput'
import UserInput from "./component/UserInput";
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './component/About'
import Student from './component/Student'
import Settings from './component/Settings'
import Crash from './component/Crash'
// import ErrorBoundary from './component/ErrorBoundary'

const App = () => {

    return(
      <div>
        <Navbar/>
        <div className="flex">
          <Sidebar/>
          
          <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/crash" element={<Crash/>}/>
            <Route path="/login" element={<Login/>}/>
            
          </Routes>
          

          
          



          {/* <DashBoard/>
          <Login/>
          <Counter/>
          <UserInput/> */}
        </div>
        <Footer/>
        

      </div>
    )









  // let text = "ram"
  // function great(){
  //   return "welcome pandya"
  // }
  // let age = 20;
  // return (
  //   <div style={{backgroundColor:"green"}}>

  //     <h1 className="hi">Hello World</h1>
  //     <p style={{color:"black"}}>We are learning MERN stack</p>
  //     <p style={{color:"blue"}}>welcome {text}</p>
  //     <p>{great()}</p>
  //     <h3>{(age > 18) ? ("Eligible to vote") : ("Not eligible to vote")}</h3>
  //     <div className="text-red-500 flex flex-cols gap-1 bg-black ">
  //       <h2>vite</h2>
  //       <h2>react</h2>
  //       <h2>html</h2>
  //     </div>
  //   </div>
  // )
}

export default App
