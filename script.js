[].forEach.call(document.querySelectorAll("li > a"), function(link) {
    link.addEventListener("mouseover", function(event) {
        $("#title").empty().append(this.href)
        console.log(this.href); 
    });
});

$( "ul#carousel" ).children().mouseout(() => {
    $("#title").empty().append("My Projects")
})