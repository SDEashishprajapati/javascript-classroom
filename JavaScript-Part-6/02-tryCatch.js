try {
    let result = 10 / 0;
    console.log(result);
    throw new Error("This is an error!");
} catch (err) {
    console.log("Caught an error: " + err.message);
} finally {
    console.log("This runs anyway");
}
