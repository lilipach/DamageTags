function getDate(){
    var date = new Date();

    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}

function runTags(){
    //allow check box to be checked with enter
    $('input:checkbox').keypress(function(e){
        e.preventDefault();
        if((e.keyCode ? e.keyCode : e.which) == 13){
            $(this).trigger('click');
        }
    });

    
    $('input:text').ready(function() {
        $(window).keydown(function(event){
          if(event.keyCode == 13) {
            event.preventDefault();
            return false;
          }
        });
      });

    //Sign Tag
    console.log(getDate());
    document.getElementById("sign").innerHTML = "Name: Liliana Pacheco <br>Date:  " + getDate();           
}

function printForm(toPrint){
    console.log(document.getElementById("fAssetTag").value);

    var content = document.getElementById(toPrint).innerHTML;
    var original = document.body.innerHTML;

   // document.body.innerHTML = content;
    window.print();
    document.body.innerHTML = original;
    runTags();
}

function clearForm(){
    document.getElementById("fAssetTag").value = "";
    document.getElementById("fDescription").value = "";
    document.getElementById("fNextStep").value = "";
    document.getElementById("fMemoryYes").checked = "";
    document.getElementById("fMemoryNo").checked = "";
    document.getElementById("fMemoryNA").checked = "";
}

