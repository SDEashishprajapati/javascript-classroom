const obj = {
    message: "Hello",
    arrowFn: () => console.log(this.message)
};

obj.arrowFn(); 