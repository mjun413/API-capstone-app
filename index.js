<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="index.css" rel="stylesheet" type="text/css" />
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="upper-section-container">
      <div id="search-container">
        <h1 id="search-line-text">Yum!Choice</h1>
        <form id="js-form">
          <div id="search-elements">
            <div id="search-section1">
            <label for="search-term" >Find</label>
            <input type="text" class="search-box" name="search-term-name" id="js-search-name" placeholder="pizza"required>
            </div>
            <div id="search-section2">
            <label for="search-term" >Near</label>
            <input type="text" class="search-box" name="search-term-location" id="js-search-location" placeholder="livingston, new jersey"required>
            </div>
          </div>
          <div id="summit-container">
            <input type="submit" id="submit-button" value="Search">
          </div>
        </form>   
      </div>      
    </div>
    <section id="results" class="hidden">
      <ul id="results-list">
      </ul>
    </section>   
    <script src="index.js"></script>
  </body>
</html>
