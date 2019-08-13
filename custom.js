function makeLink(text, adr) {
    let br = document.createElement("br");
    let link = document.createElement("a");
    link.setAttribute("style", "text-decoration: underline; text-transform: uppercase;");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("href", adr);
    let node = document.createTextNode(text);
    link.appendChild(node);
    link.appendChild(br);
    let element = document.getElementById("div1");
    element.appendChild(link);
}

function regexInput(pattern, input) {
    return [...new Set(input.match(pattern))];
}

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};