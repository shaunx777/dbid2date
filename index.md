---
layout: default
---

<!--- Hi you should be at https://shaunx777.github.io/dbid2date/ and not here xDxDxDDDD --->
# The Converter
<p>Simply paste your DBID or any number into the input box and press enter!</p>
<p id="result">Your DBID: undefined</p>
<input type="number" placeholder="" id="ip2"/>

<script>
window.addEventListener('load', (event) => {
  genplaceholder()
});
function appeartext() {
    document.getElementById("result").style.opacity = 1
}
function genplaceholder() {
    var numbers = ['69420', '666', '123456', '010101', '1337', '80085', '8008135', '1273', '0112358' ];
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
</script>

# What is a DBID?
DBID is short for Database ID. In Bonk.io, it's simply an incremental identifier, a number that is assigned to your account when it's made, and then increased by one for the next user that makes their account. DBIDs began at 1 (Chaz, the game's creator) and then became 2, and some time later 100... and on the 1st of February 2022 the number surpassed **12 million**. 

Keep in mind this doesn't mean 12 million different people made an account, as making more than one account is obviously possible. A milestone nonetheless.

# How can I get my or other people's DBID?
**Method A: Bonkonauts**

Logging in to [https://bonkonauts.github.io/login/](https://bonkonauts.github.io/login/) and them turning to the Friends tab will present you with your DBID at the top, and your friends' DBIDs below. At the time of writing this, Bonkonauts has issues with CORS, it can only allow a limited amount of logins per hour.


**Method B: Bonk.io**

To find your own DBID through bonk, go to the login page, right click anywhere on the site and then press "Inspect". Once the inspect element tab has opened, navigate from "Elements" to "Network". This should all be found on the top right of your screen, unless your developer tools launch from the bottom. Note that you may have to click ">>" to find "Network". Once on the "Network" tab, put your username and password on the login section of bonk if it isn't there already, and click login. Under the tab that has "Name" at the top, you should find "login_legacy.php". If you can't find it, type "login" on the filter input box just below "Network". Click "login_legacy.php", then click "Preview", and locate "id". The number next to it is your DBID.

To find your friends' DBID, go to the main menu, it's the screen where you see buttons such as "QUICK PLAY" or "FRIEND LIST". Follow the steps above except stay logged in. You should follow it until you are at the stage where you found the "Network" tab. Once there, click it, and then click "FRIEND LIST" in bonk. You should find "friends.php", if you don't, use the filter option. Click "Preview", then click the little triangles that are below it. You should now see your friend list sorted by DBIDs

A lot of entries will be shown, if you are looking for a specific friend click anywhere in the section with names and press CTRL and F together on your keyboard. Then type in their username and copy their DBID.

# Happy converting!
This project wouldn't be possible without sites such as [http://web.archive.org/](http://web.archive.org/). Back in the age of Tiny Tanks, the website [multiplayer.gg](https://multiplayer.gg) had a "Statistics" section, showing the amount of accounts made among other things. Thankfully, [http://web.archive.org/](http://web.archive.org/) in particular saved the website a truckload of times, making this project possible.

Many thanks to the bonk community as well. While searching for possible refernce points I've found many helpful people who have either pitched in to the projects with DBIDs or advice/suggestions. The hunt for reference points isn't over though. **If you know the day you made your account on, you can still be very benefitial for the project.** You can DM me on Discord if you know me, or start an issue on the repository.
