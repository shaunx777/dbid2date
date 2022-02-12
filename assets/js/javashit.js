window.addEventListener('load', (event) => {
  genplaceholder()
});
function appeartext() {
    document.getElementById("result").style.opacity = 1
}
function genplaceholder() {
    var numbers = ['69420', '666', '123456', '010101', '1337', '80085' ];
    var randomIndex = Math.floor(Math.random() * numbers.length); 
    var randomn = numbers[randomIndex];
    document.getElementById("ip2").placeholder = randomn
}
const node = document.getElementById("ip2");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let dbid = node.value;
        document.getElementById("result").innerHTML = "WORK IN PROGRESS!";
        appeartext()
    }
});
