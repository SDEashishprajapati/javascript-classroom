let count = 0;
const interval = setInterval(() => {
    console.log("Count: " + count);
    count++;
    if (count > 5) clearInterval(interval);
}, 1000);
