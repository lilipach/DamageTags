$(document).ready(function(){
    $('input:checkbox, input:radio').keypress(function(e){
        e.stopImmediatePropagation();
        console.log(e);
        if(e.keyCode== 13){
            $(this).trigger('click');
            console.log("Click")
        }
    });

    $("#clearBtn").click(function(){
        console.log("clear");
        $("input:text, textarea").val("");
        $("input:checkbox, input:radio")
            .prop('checked', false)
            .prop('selected', false);
    });

    console.log(getDate()); 
    document.getElementById("sign").innerHTML = "Name: Liliana Pacheco <br>Date:  " + getDate();
});

function getDate(){
    var date = new Date();

    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}



