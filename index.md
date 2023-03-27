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
function appeartext() {
    document.getElementById("result").style.opacity = 1
}
function genplaceholder() {
    var numbers = ['69420', '666', '123456', '010101', '1337', '80085', '8008135', '1273', '0112358' ];
    var randomIndex = Math.floor(Math.random() * numbers.length); 
    var randomn = numbers[randomIndex];
    document.getElementById("ip2").placeholder = randomn
}
const dbids2 = [{"date":"1-Oct-12","number":4828},{"date":"2-Nov-12","number":7067},{"date":"26-Jan-13","number":15922},{"date":"27-Feb-13","number":19399},{"date":"29-Mar-13","number":21636},{"date":"2-Jun-13","number":27194},{"date":"3-Jun-13","number":27347},{"date":"8-Jun-13","number":27933},{"date":"8-Jul-13","number":33341},{"date":"10-Aug-13","number":34961},{"date":"28-Aug-13","number":36182},{"date":"11-Dec-13","number":207482},{"date":"9-Jan-14","number":233104},{"date":"14-Jun-14","number":377174},{"date":"6-Aug-14","number":412712},{"date":"11-Aug-14","number":416111},{"date":"18-Aug-14","number":420554},{"date":"22-Aug-14","number":424096},{"date":"27-Aug-14","number":428600},{"date":"1-Sep-14","number":432321},{"date":"6-Sep-14","number":437444},{"date":"14-Sep-14","number":444701},{"date":"20-Sep-14","number":451389},{"date":"28-Sep-14","number":460207},{"date":"9-Oct-14","number":473143},{"date":"16-Oct-14","number":480829},{"date":"22-Oct-14","number":488405},{"date":"27-Oct-14","number":495573},{"date":"28-Oct-14","number":497077},{"date":"1-Nov-14","number":503304},{"date":"5-Nov-14","number":508652},{"date":"10-Nov-14","number":515908},{"date":"15-Nov-14","number":524845},{"date":"1-Dec-14","number":550816},{"date":"5-Dec-14","number":557998},{"date":"16-Dec-14","number":580255},{"date":"21-Dec-14","number":595568},{"date":"25-Dec-14","number":602663},{"date":"28-Dec-14","number":606951},{"date":"1-Jan-15","number":611699},{"date":"6-Jan-15","number":617276},{"date":"10-Jan-15","number":624781},{"date":"17-Jan-15","number":638222},{"date":"21-Jan-15","number":644190},{"date":"5-Feb-15","number":678344},{"date":"6-Feb-15","number":681574},{"date":"14-Feb-15","number":698782},{"date":"17-Feb-15","number":704427},{"date":"21-Feb-15","number":713912},{"date":"24-Feb-15","number":719239},{"date":"27-Feb-15","number":726578},{"date":"2-Mar-15","number":733123},{"date":"5-Mar-15","number":740725},{"date":"8-Mar-15","number":748884},{"date":"12-Mar-15","number":757510},{"date":"15-Mar-15","number":766518},{"date":"16-Mar-15","number":768223},{"date":"21-Mar-15","number":783552},{"date":"25-Mar-15","number":794654},{"date":"31-Mar-15","number":809730},{"date":"1-Apr-15","number":812608},{"date":"8-Apr-15","number":828664},{"date":"9-Apr-15","number":831198},{"date":"20-Apr-15","number":861149},{"date":"26-Apr-15","number":879484},{"date":"30-Apr-15","number":889494},{"date":"3-May-15","number":898810},{"date":"7-May-15","number":909819},{"date":"10-May-15","number":919686},{"date":"15-May-15","number":926193},{"date":"23-May-15","number":948752},{"date":"27-May-15","number":955151},{"date":"31-May-15","number":966043},{"date":"8-Jun-15","number":983384},{"date":"13-Jun-15","number":995511},{"date":"28-Jun-15","number":1018444},{"date":"4-Jul-15","number":1025301},{"date":"8-Jul-15","number":1030537},{"date":"15-Jul-15","number":1038249},{"date":"21-Jul-15","number":1044996},{"date":"2-Aug-15","number":1056311},{"date":"6-Sep-15","number":1092848},{"date":"6-Oct-15","number":1136249},{"date":"11-Oct-15","number":1145703},{"date":"16-Oct-15","number":1153297},{"date":"21-Oct-15","number":1160524},{"date":"25-Oct-15","number":1168833},{"date":"30-Oct-15","number":1177401},{"date":"4-Nov-15","number":1185066},{"date":"9-Nov-15","number":1194166},{"date":"14-Nov-15","number":1204946},{"date":"19-Nov-15","number":1212870},{"date":"24-Nov-15","number":1222317},{"date":"1-Dec-15","number":1231999},{"date":"5-Dec-15","number":1241591},{"date":"10-Dec-15","number":1249194},{"date":"17-Dec-15","number":1265355},{"date":"21-Dec-15","number":1276665},{"date":"25-Dec-15","number":1281941},{"date":"29-Dec-15","number":1285054},{"date":"2-Jan-16","number":1288062},{"date":"6-Jan-16","number":1292314},{"date":"10-Jan-16","number":1300454},{"date":"15-Jan-16","number":1309481},{"date":"19-Jan-16","number":1315696},{"date":"21-Jan-16","number":1319963},{"date":"23-Jan-16","number":1325248},{"date":"28-Jan-16","number":1334342},{"date":"2-Feb-16","number":1342309},{"date":"4-Feb-16","number":1347900},{"date":"8-Feb-16","number":1357901},{"date":"11-Feb-16","number":1367953},{"date":"16-Feb-16","number":1376637},{"date":"21-Feb-16","number":1390129},{"date":"26-Feb-16","number":1404417},{"date":"1-Mar-16","number":1413803},{"date":"5-Mar-16","number":1429015},{"date":"6-Mar-16","number":1430402},{"date":"10-Mar-16","number":1442875},{"date":"11-Mar-16","number":1447097},{"date":"14-Mar-16","number":1454232},{"date":"17-Mar-16","number":1461293},{"date":"19-Mar-16","number":1468637},{"date":"22-Mar-16","number":1475974},{"date":"26-Mar-16","number":1486401},{"date":"31-Mar-16","number":1494242},{"date":"4-Apr-16","number":1501640},{"date":"8-Apr-16","number":1513534},{"date":"12-Apr-16","number":1520548},{"date":"16-Apr-16","number":1532804},{"date":"19-Apr-16","number":1538728},{"date":"23-Apr-16","number":1550466},{"date":"27-Apr-16","number":1557570},{"date":"30-Apr-16","number":1569512},{"date":"2-May-16","number":1571192},{"date":"4-May-16","number":1576641},{"date":"5-May-16","number":1581315},{"date":"9-May-16","number":1593110},{"date":"11-May-16","number":1597318},{"date":"13-May-16","number":1609073},{"date":"17-May-16","number":1616896},{"date":"21-May-16","number":1635360},{"date":"24-May-16","number":1644843},{"date":"29-May-16","number":1659819},{"date":"1-Jun-16","number":1665441},{"date":"2-Jun-16","number":1669079},{"date":"7-Jun-16","number":1683278},{"date":"11-Jun-16","number":1693754},{"date":"16-Jun-16","number":1703537},{"date":"20-Jun-16","number":1709324},{"date":"25-Jun-16","number":1717279},{"date":"30-Jun-16","number":1724110},{"date":"4-Jul-16","number":1730213},{"date":"9-Jul-16","number":1735619},{"date":"13-Jul-16","number":1740434},{"date":"14-Jul-16","number":1741678},{"date":"19-Jul-16","number":1746583},{"date":"25-Jul-16","number":1751751},{"date":"30-Jul-16","number":1756649},{"date":"5-Aug-16","number":1761867},{"date":"10-Aug-16","number":1766244},{"date":"15-Aug-16","number":1771927},{"date":"21-Aug-16","number":1778986},{"date":"26-Aug-16","number":1787473},{"date":"27-Aug-16","number":1789059},{"date":"29-Aug-16","number":1790360},{"date":"1-Sep-16","number":1796303},{"date":"6-Sep-16","number":1804116},{"date":"10-Sep-16","number":1815795},{"date":"16-Sep-16","number":1828936},{"date":"17-Sep-16","number":1833500},{"date":"22-Sep-16","number":1846888},{"date":"27-Sep-16","number":1867670},{"date":"2-Oct-16","number":1891255},{"date":"7-Oct-16","number":1912793},{"date":"12-Oct-16","number":1930746},{"date":"17-Oct-16","number":1951109},{"date":"21-Oct-16","number":1972353},{"date":"24-Oct-16","number":1985282},{"date":"29-Oct-16","number":2017327},{"date":"3-Nov-16","number":2043856},{"date":"9-Nov-16","number":2114955},{"date":"11-Nov-16","number":2132030},{"date":"16-Nov-16","number":2176988},{"date":"18-Nov-16","number":2197519},{"date":"16-Dec-16","number":2473753},{"date":"19-Dec-16","number":2497063},{"date":"20-Feb-17","number":3144159},{"date":"9-May-17","number":3815192},{"date":"5-Aug-18","number":7091564},{"date":"14-Jan-19","number":7986092},{"date":"25-Jul-19","number":9117802},{"date":"18-Mar-20","number":10242309},{"date":"11-Jul-20","number":10544159},{"date":"21-Sep-20","number":10709069},{"date":"1-Nov-20","number":10844894},{"date":"15-Nov-20","number":10914347},{"date":"18-Feb-21","number":11136377},{"date":"20-Feb-21","number":11165248},{"date":"11-Mar-21","number":11241154},{"date":"19-Mar-21","number":11243504},{"date":"13-Apr-21","number":11305937},{"date":"15-Apr-21","number":11317614},{"date":"23-Apr-21","number":11337572},{"date":"28-Apr-21","number":11353908},{"date":"12-May-21","number":11414286},{"date":"22-Jun-21","number":11499483},{"date":"21-Jul-21","number":11532164},{"date":"22-Oct-21","number":11679511},{"date":"5-Nov-21","number":11758690},{"date":"5-Dec-21","number":11825856},{"date":"14-Dec-21","number":11889868},{"date":"16-Jan-22","number":11947177},{"date":"18-Jan-22","number":11962994},{"date":"24-Jan-22","number":11978228},{"date":"29-Jan-22","number":11992244},{"date":"30-Jan-22","number":11993606},{"date":"1-Feb-22","number":11997790},{"date":"3-Feb-22","number":12005487},{"date":"11-Feb-22","number":12026003},{"date":"12-Feb-22","number":12027777},{"date":"11-Mar-22","number":12085042},{"date":"20-Apr-22","number":12182435},{"date":"27-Apr-22","number":12558827},{"date":"30-Apr-22","number":12567759},{"date":"03-Jul-22","number":12677125},{"date":"27-Mar-23","number":13119153}]

function dbid2date(number) {
  dbids2.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  var index = 0;
  while (index < dbids2.length && dbids2[index].number < number) {
    index++;
  }
  if (index === 0) {
    return "Before October 1st 2012"
  }
  if (index === dbids2.length) {
    return "After March 27th 2023"
  }
  var date1 = new Date(dbids2[index - 1].date);
  var date2 = new Date(dbids2[index].date);
  var number1 = dbids2[index - 1].number;
  var number2 = dbids2[index].number;

  var diff = (number - number1) / (number2 - number1);
  var time = date1.getTime() + diff * (date2.getTime() - date1.getTime());
  var interpolatedDate = new Date(time);

  return interpolatedDate.toDateString();
}

let linkDbid = window.location.search
if (linkDbid.startsWith("?dbid=")) {
    dbid = parseInt(linkDbid.split('=')[1])
    date = dbid2date(dbid)
    document.querySelector('meta[property="og:title"]').setAttribute("content", date);
}



const node = document.getElementById("ip2");
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let dbid = node.value;
        date = dbid2date(dbid)
        document.getElementById("result").innerHTML = date;
    }
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
