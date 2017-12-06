$(document).ready(function() {
        console.log("let's go!");
        getQuoteApi();
        $("#quoteButton").on("click", getQuoteApi);
    });

    var getQuoteApi = function() {
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(jd) {
            console.log("Success!")
            $("#quoteContainer").fadeOut(500, function() {
            $("#quote").text(jd.quoteText);
            $("#author").text(jd.quoteAuthor);
            $("#quoteContainer").fadeIn(500);
                $("#tweetText").attr("href", "https://twitter.com/share?text=" + "\"" + jd.quoteText + "\"  - " + jd.quoteAuthor + ".");
            });
        });
    };