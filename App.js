import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
// react hello world
            //  const heanding = React.createElement("h1", {id:"heading"}, "hello world from ReactJS");
            //  console.log(heanding)
            //  const root = ReactDOM.createRoot(document.getElementById("root"));

            //  root.render(heanding)

// //nested element
//              const Parent = React.createElement(
//                 "div",
//                 {id:"parent"},
//                [
//                  React.createElement(
//                     "div",
//                     {id:"child1"},
//                     [
//                      React.createElement("h1",{},"I am h1 tag..!"), //array of childrens    
//                      React.createElement("h2",{},"I am h2 tag..!")
//                     ]  
//                 ),
//                  React.createElement(
//                     "div",
//                     {id:"child2"},
//                     [
//                      React.createElement("h1",{},"I am h1 tag..!"), //array of childrens    
//                      React.createElement("h2",{},"I am h2 tag..!")
//                     ]
//                 )
//                ]
//              );
//               const root = ReactDOM.createRoot(document.getElementById("root"));

// jsx
// React ELement
// const jsxHeading = (
//     <>
//    <h1 className = "heading" tabIndex={5}>
//     Namaste React using JSX
//     Namaste React
//     </h1>
//     <h2>
//         namaste guru
//     </h2>
//     </>
// );
// console.log(jsxHeading);
// //const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//             console.log(parent)
//             root.render(Parent)


//jsx

// const jsxHeading = <h1 id = "heading">Namaste React using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // React elements render like this 

// React Normal function
// const  Footer = function () {
//    return (
//       <div>
//          <h1>Hello React Normal function</h1>
//       </div>
//    )
// } ; 

// //React  arrow Functional component
// const Heading = () =><h1>Hello Functional Component</h1> //single line 


// // This is called component composition
// const Header = () =>(
//    <div id = "container">
//     <Heading/>  
//     <Footer/> 
//      <h1>Hello Component</h1>
//    </div>
// );



const Header = () => {  //logo, navItems
  return(
   <div className= "Header">
      <div className="Logo-Container">
         <img className = "Logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"/>
      </div>
      <div className="Nav-Items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
         </ul>
      </div>
   </div>
  ) 
}
// Data from API
const resObj = {
   type: "restaurent",
   data:{
      id: "48368",
      name:"Meghana",
      Rating:"4.3"
   }
}

const RestaurantCard = (props) =>{ //img, Name of res, star rati,delivery time
   const {resData} = props; //destructuring
   return(
      <div className="res-card">
         <img className="img-meghana" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg"/>
         <h4>{resData.data.name}</h4>
         <h5>{resData.data.Rating}</h5>
      </div>
   )
}


const Body = () =>{
   return(
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {/* <RestaurantCard resname = "Meghana foods" rating = " rate 4.5"/> 
            <RestaurantCard resname = "KFC" rating = "rate 4.4"/> */}
            <RestaurantCard resData = {resObj}/>
         </div>

      </div>
   );
}

const AppLayout = () => {
   return (
   <div className="app">
      <Header/>
      <Body/>
   </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>) // React Components renders like this 
