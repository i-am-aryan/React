const heading = React.createElement("div",{
    id: "parent"
},  React.createElement("div",{
    id: "child"
},
[
    React.createElement("h1", {}, "I am on 3rd level"),
    React.createElement("h2", {}, "I am on second 3rd level"),
]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 