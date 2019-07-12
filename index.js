//senor dont kill me por favor
function copyToClipboard(elementId) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

$(document).ready(function(){
    $('#background').fadeIn();

    $("#discord_img").on({
        mouseenter: function() {
            $("#discord_name").text("𝕣𝕠𝕘𝕦𝕖#0001");
            $(this).hide()
            $("#contacts").text("Click to copy")
        },
        mouseleave: function() {
            $("#discord_name").text("");
            $(this).show()
            $("#contacts").text("Contacts:")
        }
    });
    $("#discord_name").on({
        mouseenter: function() {
            $(this).text("𝕣𝕠𝕘𝕦𝕖#0001");
            $("#discord_img").hide()
            $("#contacts").text("Click to copy")
        },
        mouseleave: function() {
            $(this).text("");
            $("#discord_img").show()
            $("#contacts").text("Contacts:")
        },
        click: function() {
            copyToClipboard("discord_name");
        }
    });

    $("#mail_img").on({
        mouseenter: function() {
            $("#mail").text("roguezilla@protonmail.com");
            $(this).hide()
            $("#contacts").text("Click to copy")
        },
        mouseleave: function() {
            $("#mail").text("");
            $(this).show()
            $("#contacts").text("Contacts:")
        }
    });
    $("#mail").on({
        mouseenter: function() {
            $(this).text("roguezilla@protonmail.com");
            $("#mail_img").hide()
            $("#contacts").text("Click to copy")
        },
        mouseleave: function() {
            $(this).text("");
            $("#mail_img").show()
            $("#contacts").text("Contacts:")
        },
        click: function() {
            copyToClipboard("mail");
        }
    });

    $("#gh_svg").on({
        mouseenter: function() {
            $("#gh").text("GitHub");
            $(this).hide()
        },
        mouseleave: function() {
            $("#gh").text("");
            $(this).show()
        }
    });
    $("#gh").on({
        mouseenter: function() {
            $(this).text("GitHub");
            $("#gh_svg").hide()
        },
        mouseleave: function() {
            $(this).text("");
            $("#gh_svg").show()
        }
    });

    $("#steam_img").on({
        mouseenter: function() {
            $("#steam").text("Steam");
            $(this).hide()
        },
        mouseleave: function() {
            $("#steam").text("");
            $(this).show()
        }
    });
    $("#steam").on({
        mouseenter: function() {
            $(this).text("Steam");
            $("#steam_img").hide()
        },
        mouseleave: function() {
            $(this).text("");
            $("#steam_img").show()
        }
    });
});