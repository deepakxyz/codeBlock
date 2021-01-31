# Fetch API
Fetch provides a generic definition of [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects (and other things involved with network requests). This will allow them to be used wherever they are needed in the future, whether it’s for service workers, Cache API, and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your responses programmatically (that is, the use of computer program or personal programming instructions).

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request, whether it is successful or not. You can also optionally pass in an `init` options object as the second argument (see [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)).

```javascript
async function Do()=>{
	let AnotherThing = await respose;
	let someOtherThing = await AnotherThing;
}
```