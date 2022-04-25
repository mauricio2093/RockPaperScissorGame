var btn_rock = document.getElementById("Rock");
var btn_paper = document.getElementById("Paper");
var btn_scissor = document.getElementById("Scissor");
var btn_star = document.getElementById("StarGame");
var img_player = document.getElementById("Player");
var img_cpu = document.getElementById("Cpu");
var playerScore= document.getElementById("playerPoint").innerText;
var cpuScore = document.getElementById("cpuPoint").innerText;
var text__game = document.getElementById("textGame").innerText;
var text__player = document.getElementById("textPlayer").innerText;
var text__cpu = document.getElementById("textCpu").innerText;
var menu = "wait";
var playerOption;
var cpuOption;




init_images();
btn_star.onclick = function() {
    cpuOption = pickRandom('rock',
        'paper',
        'scissor',);
    text_Game();
    setTimeout(()=>{
        menu = "star";
        console.log(playerOption);
        display_option_cpu(cpuOption);
        game(playerOption, cpuOption);
        playerOption = ' ';
    },2000);
    
}

function text_Game(){
    if (playerOption === 'rock' || playerOption === 'paper' || playerOption === 'scissor'){
        setTimeout(()=>{
            text__game = 'Rock';
            document.getElementById("textGame").innerText = text__game;
            img_cpu.src = "../assets/img/cpuRock.png";
        },500);
        setTimeout(()=>{
            text__game = 'Paper';
            document.getElementById("textGame").innerText = text__game;
            img_cpu.src = "../assets/img/cpuPaper.png";
        },1000);
        setTimeout(()=>{
            text__game = 'Scissor';
            document.getElementById("textGame").innerText = text__game;
            img_cpu.src = "../assets/img/cpuScissors.png";
        },1500);
        setTimeout(()=>{
            text__game = '';
            document.getElementById("textGame").innerText = text__game;
            
                document.getElementById("textCpu").innerText = cpuOption;
                document.getElementById("textPlayer").innerText = playerOption;
        },2000);
    }else{
        setTimeout(()=>{
            text__game = 'Waiting.';
            document.getElementById("textGame").innerText = text__game;
        },500);
        setTimeout(()=>{
            text__game = 'Waiting..';
            document.getElementById("textGame").innerText = text__game;
        },1000);
        setTimeout(()=>{
            text__game = 'Waiting...';
            document.getElementById("textGame").innerText = text__game;
        },1500);
        setTimeout(()=>{
            text__game = ' ';
            document.getElementById("textGame").innerText = text__game;
        },2000);
    }

}
const pickRandom = (...srting) => srting.reduce((result, str) => {
    if(result !== ''){   
        result += ', ';
    }
    result += str; 
    result=result.split(', '); 
    var rand = Math.floor(Math.random()*result.length);
    return `${result[rand]}`;
}, '');

btn_rock.onclick = function() {
    playerOption = 'rock';
    img_player.src = "../assets/img/playerRock.png";
    
    
}
btn_paper.onclick = function() {
    playerOption = 'paper';
    img_player.src = "../assets/img/playerPaper.png";
    
}
btn_scissor.onclick = function() {
    playerOption = 'scissor';
    img_player.src = "../assets/img/playerScissors.png";
    
}

    


switch (menu) {
    case "wait":
        console.log("waiting ...");
        break;
    case "star":
        console.log("Sarting Game ...");
        break;
}


function init_images() {
    btn_rock.style.backgroundImage = " url('../assets/img/playerRock.png')";
    btn_paper.style.backgroundImage = " url('../assets/img/playerPaper.png')";
    btn_scissor.style.backgroundImage = "url('../assets/img/playerScissors.png')";
}


function display_option_cpu(option) {
    if (option === 'rock') {
        img_cpu.src = "../assets/img/cpuRock.png";
    } else if (option === 'paper') {
        img_cpu.src = "../assets/img/cpuPaper.png";
    } else {
        img_cpu.src = "../assets/img/cpuScissors.png";
    }
}

function game(playerOption, cpuOption){
    var a = 'rock';
    var b = 'paper';
    var c = 'scissor';
    var d = 0;
    if (playerOption === cpuOption){
        setTimeout(()=>{
            Swal.fire({
                title:'DRAW!',
                text:'Try Again!',
                icon:'question',
                color: '#fff',
                background: 'rgba(27, 27, 27, 0.98)',
                backdrop: `rgba(0,0,123,0.4)`,
            });
            text__cpu = '';
            document.getElementById("textCpu").innerText = text__cpu;
            text__player = '';
            document.getElementById("textPlayer").innerText = text__player;
        },1500);
        d=1;
    }else if (cpuOption == a && playerOption == b || cpuOption == c && playerOption == a || cpuOption == b && playerOption == c){
        setTimeout(()=>{
            //alert("Player Win");
            Swal.fire({
                title:'Player Win!',
                text:'Well Play!',
                icon:'success',
                color: '#fff',
                background: 'rgba(27, 27, 27, 0.98)',
                backdrop: `rgba(55, 221, 64,0.4)`,
            });
            playerScore++;
            document.getElementById("playerPoint").innerText = playerScore;
            text__cpu = '';
            document.getElementById("textCpu").innerText = text__cpu;
            text__player = '';
            document.getElementById("textPlayer").innerText = text__player;
            
        },1500);
        d=1;
    }else if ((cpuOption == b && playerOption == a || cpuOption == a && playerOption == c || cpuOption == c && playerOption == b)){
        setTimeout(()=>{
            Swal.fire({
                title:'CPU Win!',
                text:'Try Again!',
                icon:'error',
                color: '#fff',
                background: 'rgba(27, 27, 27, 0.98)',
                backdrop: `rgba(250, 250, 0,0.7)`,
            });
            cpuScore++;
            document.getElementById("cpuPoint").innerText = cpuScore;
            text__cpu = '';
            document.getElementById("textCpu").innerText = text__cpu;
            text__player = '';
            document.getElementById("textPlayer").innerText = text__player;
            
        },1500);
        d=1;
    }else{
        Swal.fire({
            title: 'Error ',
            text: "Please Chose an Option !",
            icon: 'warning',
            color: '#fff',
            background: 'rgba(27, 27, 27, 0.98)',
            backdrop: `rgba(212, 29, 29,0.7)`,
        });
        text__cpu = '';
        document.getElementById("textCpu").innerText = text__cpu;
        text__player = '';
        document.getElementById("textPlayer").innerText = text__player;
        img_cpu.src = "../assets/img/cpu.svg";
        d=1;
    }
    if(d===1){
        setTimeout(()=>{
            img_player.src = "../assets/img/player.svg";
            img_cpu.src = "../assets/img/cpu.svg"; 
        },1500);
    }
}


