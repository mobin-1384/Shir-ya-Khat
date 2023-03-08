

var game_1_btn = document.querySelectorAll('.game1-buttom button');
var game_1_score = ["0","0"];

for(i = 0 ; i < game_1_btn.length ; i++ ) {
    game_1_btn[i].addEventListener("click" , game_1_click);
    function game_1_click() {

        var user_selected = this.innerHTML;
        var game1_rnm = Math.floor(Math.random()*2);
        var game_1_object = ["شیر" , "خط"];
        var pc_selected = game_1_object[game1_rnm];

        if(pc_selected === "شیر"){
            document.querySelector('.active-game-1').classList.remove('active-game-1');
            document.querySelector('.game1-logo-lion').classList.add('active-game-1');
        }else {
            document.querySelector('.active-game-1').classList.remove('active-game-1');
            document.querySelector('.game1-logo-line').classList.add('active-game-1');
        }

        if(user_selected === pc_selected) {
            game_1_score[0]++;
            document.getElementById('game-1-result').innerHTML = "بردی!";
            document.getElementById('game-1-result').style.color = "rgb(3 201 0)";
        } else {
            game_1_score[1]++;
            document.getElementById('game-1-result').innerHTML = "باختی!";
            document.getElementById('game-1-result').style.color = "red";
        }

        var game_1_score_panel = "کاربر : " + game_1_score[0] + " | " + game_1_score[1] + " : سیستم";
        document.getElementById('game1-score').innerHTML = game_1_score_panel;

    }
}


