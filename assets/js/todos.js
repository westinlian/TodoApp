// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class=\"fas fa-eraser\"></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$(".fa-pencil-alt").on("click", function() {
    $("input[type='text']").fadeToggle(300);
});
