---
layout: default
---

# The Converter
<p>Simply paste your dbid or any number into the input box and press enter!</p>
<p id="result">Your DBID: 69420</p>
<input type="number" placeholder='69420' id="ip2"/>

<script>
function appeartext() {
    document.getElementById("result").style.opacity = 1
}
const node = document.getElementById("ip2");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let dbid = node.value;
        document.getElementById("result").innerHTML = "Your DBID: " + dbid;
        appeartext()
    }
});
</script>

# What is a DBID?
DBID is short for Database ID. In Bonk.io, it's simply an incremental identifier, a number that is assigned to your account when it's made, and then increased by one for the next user that makes their account. DBIDs began at 1 (Chaz, the game's creator) and then became 2, and then 3... and then hit 12 million on the 1st of February, 2022.
# How can I get my DBID?
i will write stuff here later just checking if all the formatting works xdddddd
<!--- Hi you should be at https://shaunx777.github.io/dbid2date/ and not here xDxDxDDDD --->
