# YouTube-s-Mini-Search-Engine

### Introduction

This simple web app serves the same function as a search engine for Youtube videos.
The app requests the content (videos) from YouTube, however the YouTube API allows
the author's app to fetch data from their website. The app is allowed to display a 
maximum of 45 results (videos). This app will work as long as the program runs in a 
local web server.

### How to run local web server for testing purposes?

`python -m SimpleHTTPServer 9500`

if you are on Mac, use terminal and type the previous command; but first 
make sure you are in the correct directory (the folder containing your project).
NOTE that you don't need to request port 9500, you may use (e.g.) 8000.

### Technologies

1. HTML
2. CSS
   * Responsive Framework: Materialize
3. JavaScript (ES6)
4. YouTube Data API v3
5. Python 2 (via Live/local Server)
