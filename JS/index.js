let currStepForPlayer1 = 0;
let currStepForPlayer2 = 0;
let whosTurn = 1;
let posForPlayer1 = 1;
let posForPlayer2 = 1;
let turn = 1;

// for player 1 

// when btn is clicked for player 1 
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");


function playerturn() {
    if (turn % 2 != 0) {
        btn2.style.display = "none";
        btn1.style.display = "block";
        turn++
    }
    else {
        btn1.style.display = "none";
        btn2.style.display = "block";
        turn++
    }
}

function player1() {
    let random = Math.floor(Math.random() * 6) + 1;


    $(`#id${currStepForPlayer1}`).removeClass("active_1");
    $("#displayOutput").val(random);

    if ((currStepForPlayer1 += random) > 100) {
        currStepForPlayer1 -= random;
    }


    $(`#id${currStepForPlayer1}`).addClass("active_1");

    // ladder check 

    currStepForPlayer1 = ladderCheck(currStepForPlayer1);

    $(`#id${currStepForPlayer1}`).addClass("active_1");

    // snake check 

    currStepForPlayer1 = snakeCheck(currStepForPlayer1);


    // win check 
    if (currStepForPlayer1 == 100) {
        currStepForPlayer1 = 0;
        currStepForPlayer2 = 0;
        alert("player 1 won the match :)")
        alert("player 2 lose the match :(")
        reloadPage();
    }


}


// for player 2

function player2() {
    let random = Math.floor(Math.random() * 6) + 1;


    $(`#id${currStepForPlayer2}`).removeClass("active_2");
    $("#displayOutput").val(random);
    if ((currStepForPlayer2 += random) > 100) {
        currStepForPlayer2 -= random;
    }


    $(`#id${currStepForPlayer2}`).addClass("active_2");

    // ladder check 
    currStepForPlayer2 = ladderCheck(currStepForPlayer2);


    $(`#id${currStepForPlayer2}`).addClass("active_2");


    // snack check 

    currStepForPlayer2 = snakeCheck(currStepForPlayer2);


    // win check 
    if (currStepForPlayer2 == 100) {
        alert("player 2 won the match :)")
        alert("player 1 lose the match :(")
        reloadPage();
    }
}
//relode the page
function reloadPage() {
    setTimeout(() => {
        document.location.reload();
    }, 3000);
}


// function ladder check 

function ladderCheck(increaseBy) {
    if (increaseBy == 5) {
        $(`#id${increaseBy}`).addClass("non_active")
        return 58;
    }
    else if (increaseBy == 14) {
        $(`#id${increaseBy}`).addClass("non_active")
        return 49;
    }

    else if (increaseBy == 53) {
        $(`#id${increaseBy}`).addClass("non_active")
        return 72;
    }
    else if (increaseBy == 64) {
        $(`#id${increaseBy}`).addClass("non_active")
        return 83;
    }
    else {
        return increaseBy;
    }
}


// function snake check 

function snakeCheck(decreaseBy) {
    if (decreaseBy == 38) {
        $(`#id${decreaseBy}`).addClass("non_active")
        return 20;
    }
    else if (decreaseBy == 51) {
        $(`#id${decreaseBy}`).addClass("non_active")
        return 10;
    }

    else if (decreaseBy == 76) {
        $(`#id${decreaseBy}`).addClass("non_active")
        return 54;
    }
    else if (decreaseBy == 91) {
        $(`#id${decreaseBy}`).addClass("non_active")
        return 73;
    }

    else if (decreaseBy == 97) {
        $(`#id${decreaseBy}`).addClass("non_active")
        return 61;

    }

    else {
        return decreaseBy;
    }
}