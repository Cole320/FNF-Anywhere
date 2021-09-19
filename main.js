alert("Prepare For Gaming <3");
html = document.querySelector("html");
document.removeChild(html)

newHTML = document.createElement("html");
newHTML.innerHTML = `
<!DOCTYPE html>
<head>
    <title>FNF Anywhere</title>
   <style>
      html {
        align-items: center;
        background-color: #91a3b0 ;
        color: #313131;
        display: flex;
        font: 22px "Courier Prime", Courier, monospace;
        height: 100%;
        justify-content: center;
        margin: 0;
      }
      
      body {
        display: flex;
        margin: 1em;
        padding: 1em;
      }
  
      h1 {
        font-size: 2em;
        grid-column: 1 / -1;
        margin: 0;
        text-align: center;
      }
  
      a {
        color: inherit;
        text-decoration: none;
      }
      
      a:focus,
      a:hover {
        color: #1d81b2;
      }
  
      nav {
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: 1fr 1fr;
        margin: 0 1em;
        min-width: 24em;
        padding: 1em 0;
      }
  
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        white-space: nowrap;
      }
  
      li:first-child {
        font-weight: bold;
        line-height: 2em;
      }   
      
      img {
        border: 8px solid #313131;
        height: auto;
        object-fit: cover;
        object-position: 50% 100%;
        width: 10em;
      }

      .bookmarklet {
        position: absolute;
        top: 8px;
        left: 16px;
      }

    </style>  
  </head>
  <b class="bookmarklet">drag this into your bookmarks bar: <a href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='https://fnf-anywhere.netlify.app/main.js'})()">FNF Anywhere</a> </b>
  <body>
    <nav>
    <ul>
      <h1>FNF Anywhere</h1>
      <li><a onclick="load();">vanilla fnf</a><li>
      <li><a onclick="load();">kade engine</a><li>
      <li><a onclick="load();">whitty</a><li>
      <li><a onclick="load();">electro</a><li>
      <li><a onclick="load();">cheeky</a><li>
      <li><a onclick="load();">shaggy</a><li>
      <li><a onclick="load();">vs peppino (coming soon) </a><li>
    </ul> 
    </nav>
   
   
   <img src="https://fnf-anywhere.netlify.app/funkin.gif">
  </body>
  
    
`

document.appendChild(newHTML);
body = document.querySelector("body");
body.appendChild(document.createElement('script')).src='https://fnf-anywhere.netlify.app/loader.js';