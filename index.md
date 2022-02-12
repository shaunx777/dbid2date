---
layout: default
---

# The Converter
Simply paste your dbid into the input box and press enter!
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
