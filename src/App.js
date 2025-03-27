import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';


// import MyComponent from './components/MyComponent';
// import MyCom from './components/MyCom';
import My2 from './components/My2'
import React from 'react';

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
//import Navbar from "./components/Navbar"

// class component
// class App extends React.Component {

//   render() {


//     return (
//       <>
//         {/* <Navbar />
//         <Router>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Router> */}
//         {/* <nav className="bg-blue-500 text-white p-4">
//           <Router>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//           </Router>
//         </nav> */}
//         <div class="app-container">
//           <p>Hello Phi Vu</p>
//           {/* <MyComponent></MyComponent>
//           <MyCom></MyCom> */}
//           <My2></My2>
//         </div>
//       </>

//     )
//   }

// }

const App = () => {
  return (
    <>
      <div className="app-container"> {/* Sửa class -> className */}
        <p>Hello Phi Vu</p>
        <My2 />
      </div>
    </>
  );
};


// const App = () => {
//   return (
//     <div>
//       <p>Hello Phi Vu</p>
//       <MyComponent></MyComponent>
//     </div>
//   );
// }

export default App;





//c bottom
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Phi Vu
//         </p>
//         <MyComponent></MyComponent>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

// export default App;



