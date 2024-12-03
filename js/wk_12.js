
let myData = {};

function getJoke(){
fetch('https://api.chucknorris.io/jokes/random')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("value").innerHTML = myData.value;
    })
    .catch(error => {console.log(error)})
}
getJoke();

document.getElementById("generate").addEventListener("click", e=> {getJoke();})

console.log(myData);
