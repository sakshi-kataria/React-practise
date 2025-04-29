// const heading = React.createElement("h1",{id:"title"},"Hello heading (h1)");
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nested structure
{/* <h1 id="parent">
    <h2 id="child">
        <h3>I am heading 3</h3>
    </h2>
</h1> */}
const heading =  React.createElement("h3",{"id":"heading"}, "I am heading 1"); // single child
const child = React.createElement("h2",{"id":"child"}, [
    heading, 
    "This is a child"
]); // Array of children 
const parent= React.createElement("h1",{"id":"parent"},[
    child,
    "This is a Parent"]);// Array of children 
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

