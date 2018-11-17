$(document).ready(function(){
    $("#feedbacklist").click(function(){
        $("#list").toggle(2000,"linear")     
        
    });
});

function aa(){
    if (document.getElementById("name").value == "" | document.getElementById("slidename").value == "" | 
    document.getElementById("input_message").value == "" ) {
        alert("fill out the empty field ! ");
    }
    else {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var track = document.getElementById("track_selected");
    cell1.innerHTML = track.options[track.selectedIndex].text;
    cell2.innerHTML = document.getElementById("name").value;
    cell3.innerHTML = document.getElementById("slidename").value;
    cell4.innerHTML = document.getElementById("input_message").value;   

    document.getElementById("name").value = "";
    document.getElementById("slidename").value = "";
    document.getElementById("input_message").value = "";
}
}