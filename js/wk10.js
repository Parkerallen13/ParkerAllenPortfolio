let my_var = 100;
var other_var = "hello world";
console.log("hello world");
console.log(other_var);
other_var += "?";
// alert("this is an alert");

// how to interact with the DOM

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e)
{
    alert("clicked the h1");
    document.getElementById("paragraph").innerHTML = "this is the paragraph";
    document.getElementById("paragraph").style.color = "blue";
    document.getElementById("image").src = "/img/DSC_0505.jpeg";

})

console.log(document.getElementById("my_head").innerHTML);

