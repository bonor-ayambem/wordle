// const fs = require("fs");

let wordAnswer = "";
let guesses = 6;
let won = true;
let streak_number = 0;
let num_wins = 0;
let num_lose = 0;

let num_ones = 0;
let num_twos = 0;
let num_threes = 0;
let num_fours = 0;
let num_fives = 0;
let num_sixes = 0;

function parseWord(word){
    won = true;
    let str = `<div style="display: flex; justify-content: space-evenly;">`;
    let validLetters = new Set()
    for(var i = 0; i < 5; i++){
        validLetters.add(wordAnswer.charAt(i).toLowerCase());
    }

    for(var i = 0; i < 5; i++){
        if(word.charAt(i).toLowerCase() == wordAnswer.charAt(i).toLowerCase()){
            str += `<p class="correct">` + word.charAt(i).toUpperCase() + `</p>`
        }
        else if(validLetters.has(word.charAt(i))){
            str += `<p class="almost">` + word.charAt(i).toUpperCase() + `</p>`;
            won = false;
        }
        else{
            str += `<p class="wrong">` + word.charAt(i).toUpperCase() + `</p>`;
            won = false;
        }
    }
    
    str += `</div>`
    return str;
}

function assign_num_win(num){
    let val = 6-num;
    switch(val){
        case 1:
            num_ones++;
            $("#num_ones").html("1: " + num_ones);
            break;
        case 2:
            num_twos++;
            $("#num_twos").html("2: " + num_twos);
            break;
        case 3:
            num_threes++;
            $("#num_threes").html("3: " + num_threes);
            break;
        case 4:
            num_fours++;
            $("#num_fours").html("4: " + num_fours);
            break;
        case 5:
            num_five++;
            $("#num_five").html("5: " + num_five);
            break;
        case 6:
            num_sixes++;
            $("#num_sixes").html("6: " + num_sixes);
            break;
    }
}

// function search_dict(word, dictn){
//     for(var i = 0; i < dictn.length; i++){
//         if(dictn[i].toLowerCase() === word.toLowerCase()) return true;
//     }
//     return false;
// }

$(function (){
    var $newWord = $('#guess');

    $.ajax(
        "/load",
        {
        type: "GET",
        dataType: "text",
        success: function(answer){
            wordAnswer = answer;
            console.log(wordAnswer);
        },
        error: function(){
            alert('error loading word answer');
        }
    });

    $('#guessBtn').on('click', function(){
        $.ajax(
            "/addWord",
            {
            type: "GET",
            data: {
                newWord: $newWord.val(),
            },
            success: function(newWord){
                // let exists = false;
                // let dictionary = fs.readFileSync('words.csv').toString().split("\n");
                // exists = search_dict(newWord, dictionary)

                if(newWord.length != 5){
                    $("#error_message").html(`<h3 class="lose"> ERROR: Invalid Guess. Word must contain five letters </h3>`)
                }
                // else if(!exists){
                //     $("#error_message").html(`<h3 class="lose"> ERROR: Invalid Guess. Word does not exist in dictionary </h3>`)
                // }
                else{
                    guesses--;
                    let guessString = parseWord(newWord)
                    $("#error_message").html(`<p> </p>`) 
                    if(won) {
                        $("#error_message").html(`<h3 class="win"> CONGRATULATIONS!!! YOU WON WORDLE </h3>`)
                        num_wins++;
                        streak_number++;
                        assign_num_win(guesses)
                    }
                    else if(guesses == 0) {
                        $("#error_message").html(`<h3 class="lose"> SORRY :(( YOU HAVE LOST THE GAME. THE ANSWER IS <h3 class="win">${wordAnswer}</h3></h3>`)
                        num_lose++;
                        streak_number = 0;
                    }

                    $("#guesses").append(guessString)
                    $("#guesses_left").html("Number of Guesses Left: " + guesses)
                    $("#current_streak").html("Current Streak: " + streak_number)
                    $("#num_wins").html("Wins: " + num_wins)
                    $("#num_lose").html("Losses: " + num_lose)
                }                
            },
            error: function() {
                alert('error submitting guess');
            }
        });
    });

    $('#newGameBtn').on('click', function(){
        $.ajax(
            "/load",
            {
            dataType: "text",
            type: "GET",
            success: function(answer){
                guesses = 6
                $("#error_message").html("")
                $("#guesses").html("")
                $("#guesses_left").html("Number of Guesses Left: " + guesses)
                wordAnswer = answer;
                console.log(wordAnswer);
            },
            error: function() {
                alert('error generating new game');
            }
        });
    });

    $('#resetBtn').on('click', function(){
        $.ajax(
            "/resetStats",
            {
            dataType: "text",
            type: "GET",
            success: function(){
                streak_number = 0;
                num_wins = 0;
                num_lose = 0;
                num_ones = 0;
                num_twos = 0;
                num_threes = 0;
                num_fours = 0;
                num_fives = 0;
                num_sixes = 0;

                $("#current_streak").html("Current Streak: " + streak_number)
                $("#num_wins").html("Wins: " + num_wins)
                $("#num_lose").html("Losses: " + num_lose)
                $("#num_ones").html("1: " + num_ones);
                $("#num_twos").html("2: " + num_twos);
                $("#num_threes").html("3: " + num_threes);
                $("#num_fours").html("4: " + num_fours);
                $("#num_fives").html("5: " + num_fives);
                $("#num_sixes").html("6: " + num_sixes);

            },
            error: function() {
                alert('error reseting stats');
            }
        });
    });
});