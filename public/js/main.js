$(document).ready(function(){
    $("#flexCheckDefault").click(function(){
        console.log('checks');
        if($("#flexCheckDefault").val() == "false") {
            $("#flexCheckDefault").val("true");
            $("flexCheckDefault").prop("checked", true);
        } else {
            $("#flexCheckDefault").val("false");
            $("#flexCheckDefault").prop("checked", false);
        }
    });
});