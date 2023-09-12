---
layout: default
---
<!--- Hi you should be at https://shaunx777.github.io/dbid2date/ and not here xDxDxDDDD --->
<!--- Code rewrite ez --->
# The Converter
<p>Simply paste your DBID or any number into the input box and press enter!</p>
<p id="result">Your DBID: undefined</p>
<input type="number" placeholder="" id="ip2"/>

<script>
window.addEventListener('load', (event) => {
  genplaceholder()
});
  
let dbids2;
const sexyDate = {weekday:"long", year:"numeric", month:"short", day:"numeric"}
fetch('https://raw.githubusercontent.com/shaunx777/dbid2date/main/dbidanddate.json')
    .then(response => response.json())
    .then(data => {
      dbids2 = data
    })
function appeartext() {
    document.getElementById("result").style.opacity = 1
}
function genplaceholder() {
    var numbers = ['69420', '666', '123456', '010101', '1337', '80085', '8008135', '1273', '0112358', 'Easter Egg'];
    var randomIndex = Math.floor(Math.random() * numbers.length); 
    var randomn = numbers[randomIndex];
    document.getElementById("ip2").placeholder = randomn
}

function dbid2date(number) {
  dbids2.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var index = 0;
  while (index < dbids2.length && dbids2[index].number < number) {
    index++;
  }
  if (index === 0) {
    return "Before " + new Date(dbids2[0].date).toLocaleDateString('en-us', sexyDate)
  }
  if (index === dbids2.length) {
    return "After " + new Date(dbids2[dbids2.length-1].date).toLocaleDateString('en-us', sexyDate)
  }
  var date1 = new Date(dbids2[index - 1].date);
  var date2 = new Date(dbids2[index].date);
  var number1 = dbids2[index - 1].number;
  var number2 = dbids2[index].number;

  var diff = (number - number1) / (number2 - number1);
  var time = date1.getTime() + diff * (date2.getTime() - date1.getTime());
  var interpolatedDate = new Date(time);

  return interpolatedDate.toLocaleDateString('en-us', sexyDate)
}

let linkDbid = window.location.search
if (linkDbid.startsWith("?dbid=")) {
    dbid = parseInt(linkDbid.split('=')[1])
    date = dbid2date(dbid)
    document.querySelector('meta[property="og:title"]').setAttribute("content", date);
    document.querySelector('meta[name="description"]').setAttribute("content", date);
    alert(date)
}



const node = document.getElementById("ip2");
node.addEventListener("keyup", function(event) {
        let dbid = node.value;
        date = dbid2date(dbid)
        document.getElementById("result").innerHTML = date;
        appeartext()
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

To find your friends' DBID, go to the main menu, it's the screen where you see buttons such as "QUICK PLAY" or "FRIEND LIST". Follow the steps above except stay logged in. You should follow it until you are at the stage where you found the "Network" tab. Once there, click it, and then click "FRIEND LIST" in bonk. You should find "friends.php", if you don't, use the filter option. Click "Preview", then click the little triangles that are below it. You should now see your friend list sorted by DBIDs.

A lot of entries will be shown, if you are looking for a specific friend click anywhere in the section with names and press CTRL and F together on your keyboard. Then type in their username and copy their DBID.

# Happy converting!
This project wouldn't be possible without sites such as [http://web.archive.org/](http://web.archive.org/). Back in the age of Tiny Tanks, the website [multiplayer.gg](https://multiplayer.gg) had a "Statistics" section, showing the amount of accounts made among other things. Thankfully, [http://web.archive.org/](http://web.archive.org/) in particular saved the website a truckload of times, making this project possible.

Many thanks to the people in the bonk community as well. While searching for possible refernce points I've found many helpful people who have either pitched in to the projects with DBIDs or advice/suggestions. The hunt for reference points isn't over though. **If you know the day you made your bonk.io account on, you can still be very benefitial for the project.** You can DM me on Discord if you know me, or start an issue on the repository.
