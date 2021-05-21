function clearData() {
    $(".resultados").html('');
}

$(document).ready(function() {
    $("img").click(function() {
        let id = $(this).attr("id");
        let url = "https://www.anapioficeandfire.com/api/houses/" + id;
        clearData();
        $.get(url, function(res) {
            $(".resultados").append("<h1>House Details " + "</h1><br><br>");
            $(".resultados").append("<h2>Name: " + res.name + "</h2><br>");
            $(".resultados").append("<h2>Words: " + res.words + "</h2><br><br>");
            $(".resultados").append("Titles:");
            for (var i = 0; i < res.titles.length; i++) {
                $(".resultados").append(" " + res.titles[i] + ",");
            }
            $(".resultados").append("</ul>");
        }, "json");
    })
});