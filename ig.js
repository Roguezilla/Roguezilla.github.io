$(document).ready(function() {
    $("#logo_img").on({
        click: function() {
            window.location.href= "index.html";
        }
    });

    $("#submit").on({
        click: function() {
            $.get($("#url_input").val(), function(data) {
                document.getElementById("div1").innerHTML = "";
                try {
                    for(match of regexInput(/"display_url":(".*?")/g, data)) {
                        let link = match.substr('"display_url":"'.length, match.length).slice(0, -1);
                        console.log(link);

                        makeLink("Picture", link);
                    }
                } catch (error) {}
                
                try {
                    for(match of regexInput(/"video_url":(".*?")/g, data)) {
                        let link = match.substr('"video_url":"'.length, match.length).slice(0, -1);
                        console.log(link);

                        makeLink("Video", link);
                    }
                } catch(error) {}
            });
        }
    });
});