//-- REACT AND REACTDOM -------------------------------------------------------
//-- When we inserted the 2 <script> tags into the index-with-react.html file.
//-- All packages that are needed for React is downloaded in to the browser. And
//-- these code will create two global variables for us, React and ReactDOM.

//-- The React library:
//-- . We will be using 99% of the time.
//-- . A set of JavaScript function that help building things easier.
//-- . Adding the reuse ability to the components.
console.log(React);

//-- The ReactDOM library:
//-- . Allow React to render onto the DOM:
//--   - React create the elements and components.
//--   - ReactDOM put those elements and components onto the DOM.
console.log(ReactDOM);

//-- The ReactNative library will render React elements onto Mobile Devices,
//-- or Desktop environment.


//-- REACT ROOT ELEMENT -------------------------------------------------------
//-- To start writing code in React, we'll need to get a hold of the root element
//-- in the HTML file.
const reactContentRoot = document.getElementById('root');

//-- Render the string 'helllo world' into the reactContentRoot element
// ReactDOM.render("hello world", reactContentRoot);


//-- REACT ELEMENT ------------------------------------------------------------
//-- Create a React element
//-- Syntax: React.createElement(<elementType>, <props>, <content>)
// const myFirstElement = React.createElement("li", null, "item");

// ReactDOM.render(myFirstElement, reactContentRoot);


//-- REACT NESTED ELEMENTS ----------------------------------------------------
//-- Putting React element into another React element
// const myReactElement = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "item1")
// );

//-- Code ID: 1
//-- Putting multiple React elements into a React element using array
// const myReactElement = React.createElement(
//   "ul",
//   null,
//   [
//     React.createElement("li", null, "item1"),
//     React.createElement("li", null, "item2")
//   ]
// );

// ReactDOM.render(myReactElement, reactContentRoot);


//-- JSX ----------------------------------------------------------------------
//-- The question here is why don't we just use HTML. It is just so much easier
//-- to use, we can see the whole structure of the code in the HTML file.
//--
//-- The concern is very valid. In order to satisfy you needs for looking at
//-- HTML code and its beautiful structure, we invented JSX.
//--
//-- JSX is the language that looks like HTML, but it can be written directly
//-- into our JavaScript file.
//--
//-- JSX is the syntactic sugar language. It is not JavaScript, but the transpiler
//-- will translate it into JavaScript code so the browser can render it.
//--
//-- That transpiler is called Babel
//-- https://babeljs.io/

//-- Code ID: 2
//-- Now that we have Babel <script> added into the root HTML file. We can use
//-- JSX to implement the same thing in the React Code ID 1
//--
//-- Note: if we got error when running in the browser, try to serve the file as
//-- a local server instead.
//-- Running a html page on localhost UNIX(Linux and Mac OS X):
//--   1. Open the terminal on your system.
//--   2. Navigate to the folder containing the HTML file.
//--   3. Run the command:
//--      python -m SimpleHTTPServer [portnumber]
//--      or
//--      python3 -m http.server [portnumber]
//--
//-- You will see a log with where you can access the page:
//--   Serving HTTP on 0.0.0.0 port 8000
//--
//-- Go to your browser and type 0.0.0.0:8000 or localhost:8000
//-- or localhost:[portnumber]
//--
//-- To serve a specified HTML file, add it to then of the address:
//--   localhost:[portnumber]/index-with-react.html

//-- Using JSX String interpolation
//--   . String interpolation is replacing placeholders with values
//--     in a string literal.
// const myItem = "item3";

// const myJSXElement = (
//   <ul>
//     <li>item1</li>
//     <li>item2</li>
//     <li>{myItem}</li>
//     {/* We can also use JavaScript method */}
//     <li>{myItem.toUpperCase()}</li>
//   </ul>
// );

// ReactDOM.render(myJSXElement, reactContentRoot);


//-- REACT COMPONENTS ---------------------------------------------------------
//-- What is a React's component?
//--   . A container that contains React elements
//--   . A JavaScript function which returns a React element

//-- Code ID: 3
//-- This code will do the same thing as Code ID 2
//-- Create a function named App

//-- Method 1:
// function App() {

// }

//-- Method 2:
const App = () => {
  const myItem = "specialItem";

  return (
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>{myItem.toUpperCase()}</li>
    </ul>
  )
}

//-- To render a component, we need to use it like a tag <App />
//-- or we can use it like calling a function App().
ReactDOM.render(<App />, reactContentRoot);