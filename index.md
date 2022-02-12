---
layout: default
---

# The Converter
<p>Simply paste your dbid or any number into the input box and press enter!</p>
<input type="number" name="dbidInput" placeholder='69420' id="ip2"/>

<script>
const node = document.getElementById("ip2");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let dbid = document.getElementById("ip2").value;
        alert("For now this does nothing xd dbid: " + dbid)
    }
});
</script>

# Just a test xd
