// import ReactDOM from "react-dom/client";
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import Login from "./components/Login";
// import 

// const myFirstElement = <h1>Hello React!</h1>
// const myArray = ['apple', 'banana', 'orange'];

// const myList = myArray.map((item) => <p>{item}</p>)
// console.log(myList[0]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header favcol="yellow" />);

// export default function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }

import ReactDOM from "react-dom/client";
import App from './components/App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);