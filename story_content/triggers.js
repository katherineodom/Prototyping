function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5VRarIHTchX":
        Script1();
        break;
      case "6JHCIZLzRRN":
        Script2();
        break;
      case "5vAaprhoZox":
        Script3();
        break;
      case "5g8u9RE9StS":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5vlj8DmJJMY');
const duration = 750;
const easing = 'ease-out';
const id = '6nj6jWk10XE';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5vlj8DmJJMY');
const duration = 750;
const easing = 'ease-out';
const id = '6nj6jWk10XE_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5oYBbc5oDvE');
const duration = 750;
const easing = 'ease-out';
const id = '6MrUZGU0uB9';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5oYBbc5oDvE');
const duration = 750;
const easing = 'ease-out';
const id = '6MrUZGU0uB9_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
