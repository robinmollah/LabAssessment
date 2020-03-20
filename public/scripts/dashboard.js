$(document).ready(function(){
    $.ajax({
        url: "/selector",
        success: function(result){
            let cwd = result.cwd;
            $("#dir").html(cwd);
            result = result.list;
            $("#list").html(result.filter(value => value[0] != ".").map((value) => {
                return $("<li onclick=\"openPath(this)\">").html(value).prepend("<i class=\"fa fa-folder\" style=\"font-size:15px; padding: 3px 8px;\"></i>");
            }));
        }
    });
});

function openPath(tag) {
    let root = document.getElementById('dir').innerText;
    let current = tag.innerText;
    let extension = encodeURIComponent(root+"\\"+current);
    $.ajax(
        {
        url: "/selector/"+extension,
        success: function(result){
            let cwd = result.cwd;
            $("#dir").html(cwd);
            result = result.list;
            $("#list").html(result.filter(value => value[0] != ".").map((value) => {
                return $("<li onclick=\"openPath(this)\">").html(value).prepend("<i class=\"fa fa-folder\" style=\"font-size:15px; padding: 3px 8px;\"></i>");
            }));
        }
    })
}

