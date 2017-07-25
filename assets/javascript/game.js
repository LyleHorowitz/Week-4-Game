$(document).ready(function(){

var sofar = 0;
var endresult = Math.floor((Math.random() * 200) + 1);


function createRandomNumber(){
return Math.floor((Math.random() * 12) + 1);
}

$("#random").html(endresult)


$(".number").click (function(){
        if (!$(this).val())
    {
        $(this).val(createRandomNumber());

    }

            sofar +=  parseInt($(this).val())
        console.log(sofar)

        $("#result").html(sofar)

            if (sofar>endresult) {
                alert("You Lose")

            }

            if (sofar==endresult) {
                alert("You Win")
            }

}