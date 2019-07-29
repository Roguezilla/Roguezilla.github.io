let clean = (array) => array.filter((v,i) => array.indexOf(v) === i)

$(document).ready(function() {
    $("#logo_img").on({
        click: function() {
            window.location.href= "index.html";
        }
    });

    $("#submit").on({
        click: function() {
            url_array = []
            $.get($("#url_input").val(), function(data) {
                document.getElementById("div1").innerHTML = "";
                try {
                    let pic_reg = /"display_url":(".*?")/g;
                    let pic_matches = data.match(pic_reg);
                    clean(pic_matches);
                    for(match of pic_matches) {
                        let new_match = match.substr(15, match.length);
                        let new_match2 = new_match.slice(0, -1);
                        console.log(new_match2);

                        let br = document.createElement("br");
                        let link = document.createElement("a");
                        link.setAttribute("style", "color:black");
                        link.setAttribute("target", "_blank");
                        link.setAttribute("rel", "noopener noreferrer");
                        link.setAttribute("href", new_match2);
                        let node = document.createTextNode("Picture");
                        link.appendChild(node);
                        link.appendChild(br);
                        let element = document.getElementById("div1");
                        element.appendChild(link);
                    }
                } catch (error) {}
                
                try {
                    let vid_reg = /"video_url":(".*?")/g;
                    let vid_matches = data.match(vid_reg);
                    clean(vid_matches);
                    for(match of vid_matches) {
                        let new_match = match.substr(13, match.length);
                        let new_match2 = new_match.slice(0, -1);
                        console.log(new_match2);

                        let br = document.createElement("br");
                        let link = document.createElement("a");
                        link.setAttribute("style", "color:black");
                        link.setAttribute("target", "_blank");
                        link.setAttribute("rel", "noopener noreferrer");
                        link.setAttribute("href", new_match2);
                        let node = document.createTextNode("Video");
                        link.appendChild(node);
                        link.appendChild(br);
                        let element = document.getElementById("div1");
                        element.appendChild(link);
                    }
                } catch(error) {}
            });
        }
    });
});