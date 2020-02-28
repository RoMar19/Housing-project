$("button").click(function() {
$.getJSON("assets/js/listing.json", function(obj) {
    $.each(obj, function(key, value) {
        $("select").append("<option>"+value.type+"</option>");
        });
    });
});