# Basic func
Every element should be enclosed with a single top div or a `<Reach.Fragment>` or `<>`
```javascript
function Greeting(){
	return(
		<React.Fragment>
			<h1> This is the component</h1>
			<div className="head">This is setting up class </div>
			// calling new component
			<Person/>
		</React.Fragment>
		);
	
}
```

## arrow func component
```javascript
const Person = () => <h2>Arrow func component</h2>;

```

## [[BookList]]
Create a Booklist app from json data

# Advanced React - Hooks
- [[useStates]]
- [[useEffect]]