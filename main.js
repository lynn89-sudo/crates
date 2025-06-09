
document.getElementById("textInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userInput = document.getElementById("textInput").value;
        
        if (userInput.substring(0, 20) != (">> $ you@hackclub % ") || userInput.length < 20) {
            document.getElementById("window").innerHTML += "<span class='error'>!ERROR cratesAndBarrels: Could not find function start '>> $ you@hackclub % '</span><br>";
            if (userInput.substring(0, 19) === (">> $ you@hackclub %")) {
                document.getElementById("window").innerHTML += "<span class='red'>* Try adding a SPACE after %</span><br>";
            }
        }
        else {

            // Append the input value to the window
            document.getElementById("window").innerHTML += userInput + "<br>";

            // Process command
            processCommand(userInput);

            //if (userInput.substring())

            document.getElementById("textInput").value = ">> $ you@hackclub % "
            window.location.href="#textInput";
            document.getElementById("textInput").focus();
        }

    }
});

function processCommand(k) {
    j = "";
    for (let i = 20; i < k.length; i++) {
        j += k[i];
        if (k[i] === " ") {
            break;
        }
    }
    j = j.trim();

    if (j === "clear") {
        clear();
    }
    else if (j === "home") {
        home();
    }
    else if (j === "new") {
        create(k);
    }
    else if (j === "destroy") {
        smash(k);
    }
    else if (j == "++") {
        add1(k);
    }
    else if (j.substring(0,2) == "+=") {
        let klo88 = 0;
        for (let i = 0; i < k.length; i++) {
            if (k.substring(i, i+1) === " ") {
                klo88 = i;
            }
        }
        addN(k, Number(j.substring(2,klo88)));
    }
    else if (j === "read") {
        read(k);
    }
    else if (j.substring(0,2) == "-=") {
        let klo88 = 0;
        for (let i = 0; i < k.length; i++) {
            if (k.substring(i, i+1) === " ") {
                klo88 = i;
            }
        }
        subN(k, Number(j.substring(2,klo88)));
    }
    else if (j === "read") {
        read(k);
    }
    else if (j === "scan") {
        scan();
    }
    else if (j === "sum") {
        addAll();
    }
    else if(j === "help") {
        help();
    }
    else if(j === "nuke") {
        nuke();
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find command '" + k.substring(20) + "'</span><br>");
    }
}

function clear() {
    document.getElementById("window").innerHTML = "";
}
function home() {
    document.getElementById("window").innerHTML += "Loading page...<br>";
    window.location.href="https://terminalcraft.hackclub.com"
}
function create(k) {
    j = "";
    for (let i = 24; i < k.length; i++) {
        j += k[i];
        if (k[i] === " ") {
            break;
        }
    }
    j = j.trim();

    m = "";
    if (j === "barrel") {
        for (let i = 31; i < k.length; i++) {
            m += k[i];
            if (k[i] === " ") {
                break;
            }
        }
        localStorage.setItem(m, 0);
        let klao = "Created new barrel: " + m + "<br>";
        document.getElementById("window").innerHTML += klao;
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }

}

function smash(k) {
    j = "";
    for (let i = 28; i < k.length; i++) {
        j += k[i];
        if (k[i] === " ") {
            break;
        }
    }
    j = j.trim();

    m = "";
    if (j === "barrel") {
        for (let i = 35; i < k.length; i++) {
            m += k[i];
            if (k[i] === " ") {
                break;
            }
        }
        m = m.trim();
        if (localStorage.getItem(m) == null) {
            document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container</span><br>");
        }
        else {
            localStorage.removeItem(m);
            let klao = "Smashed barrel: " + m + "<br>";
            document.getElementById("window").innerHTML += klao;
        }
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }

}
function add1(k) {
    let take  = k.substring(23);
    let take2 = "";
    let take3 = "";
    
    for (let i = 0; i<take.length; i++) {
        if (take.substring(i, i+1)===(" ")) {
            take2 = take.substring(0, i).trim();
            take3 = take.substring(i).trim();
            break;
        }  
    }

    if (take2 != "") {
        if (take2 === "barrel") {
            let tempVar = localStorage.getItem(take3);
            let created = ""
            if (tempVar === null) {
                created = "Created new barrel and ";
            }
            localStorage.setItem(take3, Number(tempVar)+1);
            document.getElementById("window").innerHTML += (created + "Added 1 to " + take3 + "<br>");
        }
        else {
            document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
        }
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }
}

function addN(k, num) {
    
    
    let take  = k.substring(20);
    console.log(take);
    let take2 = "";
    let take3 = "";
    
    let kk = 0;
    console.log(num);
    while (take.substring(kk, kk+1) != " ") {
        kk++;
        //document.getElementById("window").innerHTML += (`${kk}<br>`); // DEBUG
    }
   // document.getElementById("window").innerHTML += (`<br>`); //DEBUG
    for (let i = kk+1; i<take.length; i++) {
       // document.getElementById("window").innerHTML += (`${i}<br>`); // DEBUG
        if (take.substring(i, i+1)===(" ")) {
          //  document.getElementById("window").innerHTML += (`<br>`); // DEBUG
            take2 = take.substring(kk+1, i).trim();
            take3 = take.substring(i).trim();
          //  document.getElementById("window").innerHTML += (`${take2}<br>`); // DEBUG
           // document.getElementById("window").innerHTML += (`${take3}<br>`); // DEBUG
            break;
        }  
    }

    if (take2 != "") {
        if (take2 === "barrel") {
            let tempVar = localStorage.getItem(take3);
            let created = ""
            if (tempVar === null) {
                created = "Created new barrel and ";
            }
            localStorage.setItem(take3, Number(tempVar)+num);
            document.getElementById("window").innerHTML += (created + `Added ${num} to ` + take3 + "<br>");
        }
        else {
            document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
        }
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }
    //document.getElementById("window").innerHTML += ("**" + take2);
}

function subN(k, num) {
    
    
    let take  = k.substring(20);
    console.log(take);
    let take2 = "";
    let take3 = "";
    
    let kk = 0;
    console.log(num);
    while (take.substring(kk, kk+1) != " ") {
        kk++;
    }
    for (let i = kk+1; i<take.length; i++) {
        if (take.substring(i, i+1)===(" ")) {
            take2 = take.substring(kk+1, i).trim();
            take3 = take.substring(i).trim();
            break;
        }  
    }

    if (take2 != "") {
        if (take2 === "barrel") {
            let tempVar = localStorage.getItem(take3);
            let created = ""
            if (tempVar === null) {
                created = "Created new barrel and ";
            }
            localStorage.setItem(take3, Number(tempVar)-num);
            document.getElementById("window").innerHTML += (created + `Subtracted ${num} from ` + take3 + "<br>");
        }
        else {
            document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
        }
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }
    //document.getElementById("window").innerHTML += ("**" + take2);
    
}

function addAll() {
    let sum = 0;
    for (let i = 0; i<localStorage.length; i++) {
        sum += Number(localStorage.getItem(localStorage.key(i)));
    }
    document.getElementById("window").innerHTML += (`Barrels: ${sum}`);
}

function read(k) {
    let take  = k.substring(25);
    let take2 = "";
    let take3 = "";
    
    for (let i = 0; i<take.length; i++) {
        if (take.substring(i, i+1)===(" ")) {
            take2 = take.substring(0, i).trim();
            take3 = take.substring(i).trim();
            break;
        }  
    }

    if (take2 != "") {
        if (take2 === "barrel") {
            let tempVar = localStorage.getItem(take3);
            //let created = ""
            if (tempVar === null) {
                document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container</span><br>");
            }
            else {
                document.getElementById("window").innerHTML += (tempVar + "<br>");
            }
        }
        else {
            document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
        }
    }
    else {
        document.getElementById("window").innerHTML += ("<span class='error'>!ERROR cratesAndBarrels: Could not find container type</span><br>");
    }
    //document.getElementById("window").innerHTML += ("**" + take2);
}

function scan() {
    document.getElementById("window").innerHTML += ("Barrels:<br>");
    for (let i = 0; i<localStorage.length; i++) {
        document.getElementById("window").innerHTML += (`- ${localStorage.key(i)}<br>`);
    }
    if (localStorage.length === 0) {
        document.getElementById("window").innerHTML += ("NONE");
    }
}

function nuke() {
    localStorage.clear();
    document.getElementById("window").innerHTML += ("<span class='red'>**All containers destroyed**</span><br>");
}

function help() {
    document.getElementById("window").innerHTML += ("-=-=-=-=-=-=-=-=-<br>");
    document.getElementById("window").innerHTML += ("<br>Current available container types:<br> - barrel<br><br>");
    document.getElementById("window").innerHTML += ("help: Guide on all commands<br>");
    document.getElementById("window").innerHTML += ("home: Go to terminalcraft website<br>");
    document.getElementById("window").innerHTML += ("scan: Lists all containers<br>");
    document.getElementById("window").innerHTML += ("read [container_type] [name]: Prints the value of the container<br>");
    document.getElementById("window").innerHTML += ("new [container_type] [name]: Creates new container<br>");
    document.getElementById("window").innerHTML += ("destroy [container_type] [name]: Removes container<br>");
    document.getElementById("window").innerHTML += ("++ [container_type] [name]: Adds +1 to container and creates if not existent<br>");
    document.getElementById("window").innerHTML += ("+=[number] [container_type] [name]: Adds number to container and creates if not existent<br>");
    document.getElementById("window").innerHTML += ("-=[number] [container_type] [name]: Subtracts number from container and creates if not existent<br>");
    document.getElementById("window").innerHTML += ("nuke: Destroys all containers<br><br>");
    document.getElementById("window").innerHTML += ("-=-=-=-=-=-=-=-=-<br>");
}


