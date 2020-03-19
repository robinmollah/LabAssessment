$(document).ready(function(){
    $.ajax({
        url: "/selector",
        success: function(result){
            console.log(result);
            $("#list").html(result[1].filter(value => value[0] != ".").map((value) => {
                return $("<li onclick=\"openPath()\">").html(value).prepend("<i class=\"fa fa-folder\" style=\"font-size:15px; padding: 3px 8px;\"></i>");
            }));
        }
    });
});

function openPath() {
    $("#list").empty();
    $.ajax({
        url: "/selector",
        success: function(result){
            console.log(result);
            $("#list").html(result.filter(value => value[0] != ".").map((value) => {
                return $("<li onclick=\"openPath()\">").html(value).prepend("<i class=\"fa fa-folder\" style=\"font-size:15px; padding: 3px 8px;\"></i>");
            }));
        }
    })

}

