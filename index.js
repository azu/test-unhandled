new Promise(() => {
	throw new Error("tttthrow")
});

setTimeout(() => console.log("hi"), 1000);
