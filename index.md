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
fetch('https://raw.githubusercontent.com/shaunx777/dbid2date/main/dbidanddate.json?' + Math.random())
    .then(response => response.json())
    .then(data => {
      dbids2 = data
      drawGraph(data)
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

# DBID Data
<p>Every point below is a reference point from the JSON dataset used by the converter. Hover over a point to see the recorded DBID and date.</p>

<div class="dbid-graph-wrap">
  <svg id="dbid-graph" class="dbid-graph" role="img" aria-labelledby="dbid-graph-title dbid-graph-desc" viewBox="0 0 900 430" preserveAspectRatio="none">
    <title id="dbid-graph-title">DBID reference points over time</title>
    <desc id="dbid-graph-desc">A graph showing recorded Bonk.io database IDs increasing over time.</desc>
    <g id="dbid-grid"></g>
    <g id="dbid-axis"></g>
    <path id="dbid-line" class="dbid-line" d=""></path>
    <g id="dbid-points"></g>
  </svg>
  <div id="dbid-tooltip" class="dbid-tooltip" aria-hidden="true"></div>
</div>

<style>
.dbid-graph-wrap {
  position: relative;
  width: 100%;
  margin: 1.5em 0 2em;
  overflow: hidden;
}

.dbid-graph {
  display: block;
  width: 100%;
  min-height: 320px;
  overflow: visible;
  font-family: inherit;
}

.dbid-grid line,
.dbid-axis line {
  stroke: rgba(181, 232, 83, 0.22);
  stroke-width: 1;
  shape-rendering: crispEdges;
}

.dbid-axis text,
.dbid-grid text {
  fill: #B5E853;
  font-size: 12px;
  font-family: inherit;
}

.dbid-line {
  fill: none;
  stroke: #B5E853;
  stroke-width: 2.5;
  vector-effect: non-scaling-stroke;
}

.dbid-point {
  fill: #151515;
  stroke: #B5E853;
  stroke-width: 2;
  cursor: crosshair;
  vector-effect: non-scaling-stroke;
  transition: r 0.1s ease;
}

.dbid-point:hover,
.dbid-point:focus {
  fill: #B5E853;
  outline: none;
}

.dbid-tooltip {
  position: absolute;
  display: none;
  pointer-events: none;
  padding: 8px 10px;
  border: 1px solid #B5E853;
  background: #151515;
  color: #B5E853;
  font-size: 13px;
  line-height: 1.4;
  white-space: nowrap;
  box-shadow: 0 0 8px rgba(181, 232, 83, 0.15);
}

.dbid-graph-loading {
  color: #B5E853;
  opacity: 0.7;
}

@media (max-width: 600px) {
  .dbid-graph { min-height: 280px; }
  .dbid-axis text, .dbid-grid text { font-size: 10px; }
}
</style>

<script>
function drawGraph(data) {
  const svg = document.getElementById('dbid-graph');
  const grid = document.getElementById('dbid-grid');
  const axis = document.getElementById('dbid-axis');
  const line = document.getElementById('dbid-line');
  const points = document.getElementById('dbid-points');
  const tooltip = document.getElementById('dbid-tooltip');
  const width = 900;
  const height = 430;
  const margin = { top: 25, right: 25, bottom: 55, left: 78 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  const parsed = data
    .map(item => ({
      date: new Date(item.date),
      number: Number(item.number)
    }))
    .filter(item => !Number.isNaN(item.date.getTime()) && Number.isFinite(item.number))
    .sort((a, b) => a.date - b.date);

  if (!parsed.length) return;

  const minDate = parsed[0].date.getTime();
  const maxDate = parsed[parsed.length - 1].date.getTime();
  const minNumber = Math.min(...parsed.map(item => item.number));
  const maxNumber = Math.max(...parsed.map(item => item.number));
  const numberRange = Math.max(1, maxNumber - minNumber);

  const x = date => margin.left + ((date.getTime() - minDate) / Math.max(1, maxDate - minDate)) * plotWidth;
  const y = number => margin.top + plotHeight - ((number - minNumber) / numberRange) * plotHeight;
  const formatNumber = number => number.toLocaleString('en-US');
  const formatDate = date => date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

  grid.innerHTML = '';
  axis.innerHTML = '';
  points.innerHTML = '';

  const NS = 'http://www.w3.org/2000/svg';
  const make = (tag, attrs) => {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  };

  // Horizontal gridlines and Y labels.
  for (let i = 0; i <= 4; i++) {
    const value = minNumber + (numberRange * i / 4);
    const yy = y(value);
    grid.appendChild(make('line', { x1: margin.left, x2: width - margin.right, y1: yy, y2: yy }));
    const label = make('text', { x: margin.left - 10, y: yy + 4, 'text-anchor': 'end' });
    label.textContent = formatNumber(Math.round(value));
    axis.appendChild(label);
  }

  // X labels: start, middle and end dates.
  [parsed[0], parsed[Math.floor((parsed.length - 1) / 2)], parsed[parsed.length - 1]].forEach((item, index) => {
    const xx = x(item.date);
    axis.appendChild(make('line', { x1: xx, x2: xx, y1: margin.top, y2: margin.top + plotHeight }));
    const label = make('text', { x: xx, y: height - 20, 'text-anchor': index === 0 ? 'start' : (index === 2 ? 'end' : 'middle') });
    label.textContent = item.date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    axis.appendChild(label);
  });

  // Connect reference points with a line.
  line.setAttribute('d', parsed.map((item, index) => `${index ? 'L' : 'M'} ${x(item.date).toFixed(2)} ${y(item.number).toFixed(2)}`).join(' '));

  // Plot each JSON reference point.
  parsed.forEach(item => {
    const circle = make('circle', {
      cx: x(item.date),
      cy: y(item.number),
      r: parsed.length > 250 ? 2.5 : 4,
      class: 'dbid-point',
      tabindex: '0',
      'aria-label': `DBID ${formatNumber(item.number)} on ${formatDate(item.date)}`
    });

    const showTooltip = event => {
      const rect = svg.getBoundingClientRect();
      const scaleX = rect.width / width;
      const left = x(item.date) * scaleX;
      const top = y(item.number) * (rect.height / height);
      tooltip.innerHTML = `<strong>DBID ${formatNumber(item.number)}</strong><br>${formatDate(item.date)}`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${Math.min(Math.max(8, left + 10), rect.width - tooltip.offsetWidth - 8)}px`;
      tooltip.style.top = `${Math.max(8, top - tooltip.offsetHeight - 10)}px`;
      tooltip.setAttribute('aria-hidden', 'false');
    };

    const hideTooltip = () => {
      tooltip.style.display = 'none';
      tooltip.setAttribute('aria-hidden', 'true');
    };

    circle.addEventListener('mouseenter', showTooltip);
    circle.addEventListener('focus', showTooltip);
    circle.addEventListener('mouseleave', hideTooltip);
    circle.addEventListener('blur', hideTooltip);
    points.appendChild(circle);
  });
}
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
