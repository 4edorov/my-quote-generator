
// Array with quotes
var arrQuote = [
    {"Oscar Wilde": "To live is the rarest thing in the world. Most people exist, that is all."},
    {"Albert Einstein": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."},
    {"Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    {"Mark Twain": "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time."},
    {"Isaac Asimov": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."},
    {"George Bernard Shaw": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing."},
    {"Ralph Waldo Emerson": "Do not go where the path may lead, go instead where there is no path and leave a trail."},
    {"Gordon B. Hinckley": "Life is to be enjoyed, not endured"},
    {"John Lennon": "The more I see, the less I know for sure."},
    {"Albert Einstein": "Try not to become a man of success. Rather become a man of value."},
    {"Herman Melville": "It is better to fail in originality than to succeed in imitation."},
    {"Mark Twain": "All you need in this life is ignorance and confidence; then success is sure."},
    {"Robert F. Kennedy": "Only those who dare to fail greatly can ever achieve greatly."},
    {"Winston S. Churchill": "Kites rise highest against the wind, not with it."},
    {"Dalai Lama XIV": "Judge your success by what you had to give up in order to get it."},
    {"Abraham Lincoln": "Always bear in mind that your own resolution to succeed is more important than any one thing."},
    {"Mark Twain": "If you tell the truth, you don't have to remember anything."},
    {"Oscar Wilde": "The truth is rarely pure and never simple."},
    {"Leo Tolstoy": "Everyone thinks of changing the world, but no one thinks of changing himself."},
    {"Leo Tolstoy": "If you want to be happy, be."},
    {"Confucius": "It does not matter how slowly you go as long as you do not stop."},
    {"Walter White": "I did it for me. I liked it. I was good at it. And I was really… I was alive."},
    {"Murphy's law": "Every solution breeds new problems."},
    {"Aesop": "We hang the petty thieves and appoint the great ones to public office."},
    {"Sir Winston Churchill": "I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals."}
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
        html += "<div class='quoteField'>\"" + keyQuote + "\"<br>" + "<i>" + keyAuthor + "</i>" + "<br></div>";
        $(".quote").html(html);
    });
});

//Change body background depend from time
var nowTime = new Date();
var nowHour = nowTime.getHours(nowTime);
var bgItem = (nowHour >= 6 && nowHour < 12) ? 'url(http://svoya.ucoz.ru/_ph/24/943750254.jpg)' : (nowHour >= 12 && nowHour < 18) ? 'url(http://www.gandex.ru/upl/oboi/gandex.ru-20989_8bc6916761c579dcbe15b96123f1e4b2.jpg)' : (nowHour >= 18 && nowHour <= 23) ? 'url(http://wallpaperpixel.com/tr/download/g%C3%BCn-bat%C4%B1m%C4%B1-yol-1920x1080.jpg)' : 'url(http://pokupkivinternete.ru/poleznye-sovety/img/49817.jpg)';
$(document).ready(function() {
    $('body').css('background-image', bgItem);
});