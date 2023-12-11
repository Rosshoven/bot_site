function App() {
  return (
    <div>
    
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/home';
// import About from './components/about';
// import Navigation from './components/navigation';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navigation />
//         <Routes>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={About} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;










// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
// } from "react-router-dom";

// import Home from './components/home';
// import About from './components/about';
// import Navigation from './components/navigation';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigation />,
//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         // the path given for index will show upon inital load
//         index: 'home',
//         element: <Home />
//       },
//       {
//         path: 'home',
//         element: <Home />
//       },
//       {
//         path: 'create-account',
//         element: <About />
//       },

//     ]
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//         <RouterProvider router={router} />
//   </React.StrictMode>
// );