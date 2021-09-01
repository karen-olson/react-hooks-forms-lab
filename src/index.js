import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

/*

Step 1: Break The UI Into A Component Hierarchy

    App
        Header
        ShoppingList
            ItemForm
            Filter
            Item

Step 2: Build A Static Version in React

    Done

Step 3: Identify The Minimal (but complete) Representation Of UI State
    items
    isDarkMode
    selectedCategory
    isInCart
    search: Filter, ShoppingList
    formData: ItemForm


Step 4: Identify Where Your State Should Live
    
    APP:
        const [items, setItems] = useState(itemData);
        const [isDarkMode, setIsDarkMode] = useState(false);
    
    SHOPPINGLIST:
        const [selectedCategory, setSelectedCategory] = useState("All");
        const [search, setSearch] = useState("");
        const [formData, setFormData] = useState({name: "", category: "Produce"});

    FORMDATA:

    
    ITEM:
        const [isInCart, setIsInCart] = useState(false);


Step 5: Add Inverse Data Flow
    Header --> App: handleDarkModeClick 
    Filter --> ShoppingList: handleCategoryChange, handleSearchChange



Set up the controlled form: 

1) Create stateful variables
2) Connect variables to the form elements by setting the “value” (or “checked’, for checkboxes) attribute
    to the value of the stateful variable
    Ex. <input type=”text” value={firstName} />
3) Use setter functions by:
    a) Adding event listeners to the form elements.
        Ex. <input type=”text” value={firstName} onChange={handleFirstNameChange} />
    b) Writing event handler CB functions that call the state setter function and 
        use the event object to set the state variable
            function handleFirstNameChange(e) {
                setFirstName(e.target.value)
            }
4)? Add logic (ex. filter results by the value of searchTerm)


Component called ItemForm that will allow us to add new items to our shopping list. 
When the form is submitted, a new item should be created and added to our list of items.

Make all the input fields for this form controlled inputs, so that you can access all the form data via state. 
When setting the initial state for the <select> tag, use an initial value of "Produce" (since that's the first option in the list).

Handle the form's submit event, and use the data that you have saved in state to create a new item object with the following properties:
    (see notes)

Add the new item to the list by updating state. use a prop called onItemFormSubmit as a callback and pass the new item to it.
NOTE: to add a new element to an array in state, it's a good idea to use the spread operator:

*/
