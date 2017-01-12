
// Array with quotes
var arrQuote = [
    {"Oscar Wilde": "To live is the rarest thing in the world. Most people exist, that is all."},
    {"Albert Einstein": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."},
    {"Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving."}
];

// Add quote
$(document).ready(function() {
    $("#newQuote").on("click", function() {
        //var str = JSON.stringify(arrQuote);
        //$(".quote").html(str);
        var html = "";
        arrQuote.forEach(function(val) {
            var keys = Object.keys(val);
            html += "<div>";
            keys.forEach(function(key) {
                html += "\"" + val[key] + "\"" + "<br>" + key + "<br>";
            });
            html += "</div";
        });
        $(".quote").html(html);
    });
});