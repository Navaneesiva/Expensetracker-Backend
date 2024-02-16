fetch("http://localhost:7000/data", { method:
"PUT",credentials: "include" })
.then(res => res.json())
.then(data => console.log(data))