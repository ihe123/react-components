// var GroceryList = () => (
//   <ul>
//   <li>Tomatoes</li>
//   <li>Peaches</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById("app"))
// TODO

var App = () =>(
  <div>
    <h2>Grocery List</h2>
    <Grocery List groceryItems={['Kale', 'Cucumbers']}/>
  </div>

)

// var Kale = () =>(
//   <li>Kale</li>
// );

// var Cucumbers = () => (
//   <li>Cucumbers</li>
// );

 var GroceryListItem = (props) => (
   <li>{props.name}</li>
 )

 var GroceryList = (props) => (
  <ul>
    <GroceryListItem name={props.groceryItems[0]}/>
    <GroceryListItem name={props.groceryItems[1]}/>
  </ul>
)

ReactDOM.render(<GroceryList/>, document.getElementById("app"))


// var TodoList = (props) => {
//  console.log(props)

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   )
// }

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList yummy = {[3445,76]} dummy = {[1,2,3]} todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//   </div>
// );


