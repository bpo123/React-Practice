import ReactDOM from "react-dom/client";

// react hello world
             const heanding = React.createElement("h1", {id:"heading"}, "hello world from ReactJS");
             console.log(heanding)
 //            const root = ReactDOM.createRoot(document.getElementById("root"));
             root.render(heanding)

// nested element
             const Parent = React.createElement(
                "div",
                {id:"parent"},
               [
                 React.createElement(
                    "div",
                    {id:"child1"},
                    [
                     React.createElement("h1",{},"I am h1 tag..!"), //array of childrens    
                     React.createElement("h2",{},"I am h2 tag..!")
                    ]  
                ),
                 React.createElement(
                    "div",
                    {id:"child2"},
                    [
                     React.createElement("h1",{},"I am h1 tag..!"), //array of childrens    
                     React.createElement("h2",{},"I am h2 tag..!")
                    ]
                )
               ]
             );
              const root = ReactDOM.createRoot(document.getElementById("root"));


            console.log(parent)
            root.render(Parent)


// jsx
// React ELement
const jsxHeading = (
    <>
   <h1 className = "heading" tabIndex={5}>
    Namaste React using JSX
    Namaste React
    </h1>
    <h2>
        namaste guru
    </h2>
    </>
);
console.log(jsxHeading);
//const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);





