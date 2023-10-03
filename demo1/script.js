document.getElementById("btn").addEventListener("click", function () {
  console.log("before");
 
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
        let output = "<ul>";
        json.forEach(element => {
            output += "<li>" + element.title + "</li>";
        });
        output += "</ul>";
        document.getElementById("content").innerHTML = output;
   
    });

  console.log("after");
});
