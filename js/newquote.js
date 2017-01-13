
// Array with quotes
var arrQuote = [
    {"Oscar Wilde": "To live is the rarest thing in the world. Most people exist, that is all."},
    {"Albert Einstein": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."},
    {"Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving."}
];

// Add quote on click
$(document).ready(function() {
    $("#newQuote").on("click", function() {
        var html = "";
        var i = 0;
        function genNumberOfQuote() {
            i = Math.floor(Math.random()*arrQuote.length);
            return i;
        }
        genNumberOfQuote();
        var quoteObject = arrQuote[i];
        var keyAuthor = Object.getOwnPropertyNames(arrQuote[i]).toString();
        var keyQuote = arrQuote[i][keyAuthor];
        html += "<div>\"" + keyQuote + "\"<br>" + keyAuthor + "<br></div>";
        $(".quote").html(html);
    });
});