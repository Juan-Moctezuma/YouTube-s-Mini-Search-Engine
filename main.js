// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB4qx04WUmiEFouL5l3tqQxL07a8xIryEk
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB4qx04WUmiEFouL5l3tqQxL07a8xIryEk&type=video&q=ajax
// Note that q stands for query
// "videoId" is what's needed to get video embedded
// Note that $get.() extracts data from video-item.html

function init() {
    gapi.client.setApiKey("AIzaSyB4qx04WUmiEFouL5l3tqQxL07a8xIryEk");
    gapi.client.load("youtube", "v3", function() {
        console.log("Api is ready");
    });
}

function concatHtmlJson(e, t) {
    res = e;
    // e = template;
    // for each data key, replace the content of the brackets with the data
    for (var n = 0; n < t.length; n++) {
        // use regex (regular expressions)
        res = res.replace(/\{\{(.*?)\}\}/g, function(e,r) {
            return t[n][r]})}
    return res
}

$(document).ready(function(){
    $('#submitButton').attr('disabled',true);
    $('#search').keyup(function(){
        if($(this).val().length !=0){
            $('#submitButton').attr('disabled', false);
        }
        else
        {
            $('#submitButton').attr('disabled', true);        
        }
    })
});

$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 45,
            order: "viewCount",
            publishedAfter: "2005-01-01T00:00:00Z"
        });

        // Execute the request
        request.execute(function(response) {
            console.log(response);
            var results = response.result;
            $("#results").html("");
            $.each(results.items, function(index, item) {
                console.log(item);
                $.get("./video-item.html", function(data) {
                    $('#results').append(concatHtmlJson(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
                });
                //$("#results").append(item.id.videoId + " " + item.snippet.title + "<br>");
            });
            resetVideoHeight();
        });
    });
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}
