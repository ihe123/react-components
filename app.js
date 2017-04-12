// var GroceryList = () => (
//   <ul>
//   <li>Tomatoes</li>
//   <li>Peaches</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById("app"))
// TODO

// var App = () =>(
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList groceryItems={['Kale', 'Cucumbers']}/>
//   </div>

// )

// var Kale = () =>(
//   <li>Kale</li>
// );

// var Cucumbers = () => (
//   <li>Cucumbers</li>
// );

//  // var GroceryListItem = (props) => (
//  //   <li>{props.name}</li>
//  // )

 class GroceryListItem extends React.Component {
    constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }
  onListItemClick(){
    console.log(!this.state.done)
    this.setState({done:!this.state.done})
  }
  render(){
    var style = {

      color: this.state.done ? 'red' : 'black'
    }
    console.log(style);
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItems}</li>
    
    )
  }
 }


 var GroceryList = (props) => (
  <ul>
  {props.groceryItems.map(val => <GroceryListItem groceryItems={val}/>)}
  </ul>
)

ReactDOM.render(<GroceryList groceryItems = {['apples', 'oranges']}/>, document.getElementById("app"));







// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
// class TodoListItem extends React.Component {

//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }

//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {

//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li>{this.props.todo}</li>
//     );

//   }

// }

// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );

// ReactDOM.render(<TodoList todos = {['apples', 'oranges']}/>, document.getElementById("app"))

// var TodoList = (props) => {

//   // This function will be called when the first `<li>` below is clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`

//   var onListItemClick = (event) => {
//     console.log(event.target.innerHTML);
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
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
//   </div>
// );

// ReactDOM.render(<App/>, document.getElementById("app"))

