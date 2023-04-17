var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
var commands = [];


setTimeout(function() {
  loopLines(banner2,"", 40);
  textarea.focus();
}, 5);



window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("root@Utku:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "random":
      const random1 = Math.floor(Math.random() * sarki.length);
      videoUrl=sarki[random1];
      // var player = document.getElementById("player");
      // player.play();
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "instagram":
        addLine("Opening Instagram...", "color2", 0);
        newTab(insta);
        break;
    case "github":
        addLine("Opening GitHub...", "color2", 0);
        newTab(github);
        break;
    case "youtube":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtubee);
      break;
    case "credit":
      addLine("Opening GitHub...🌹", "color2", 0);
      newTab("https://github.com/forrestknight/");
      break;
    default:
      addLine("<span class=\"inherit\">Komut bulunamadı... => <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
