<h1><b>STRMGK </b></h1>

<hr />
<img src = "https://img.shields.io/badge/strmgk-String%20magic-brightgreen" alt="genericBadge"/>
<img src = "https://img.shields.io/badge/License-MIT-blue" alt = "licenseBadge">

<p>
  STRMGK is your full fledged library for all string operations at one place. It
  consists of all the basic string operations that developers use almost
  everyday in their code. I have tried to simplify the operations and keep it
  simple, subtle and easy to use.
</p>

<h3> Methods</h3>
<div style="color: grey; padding:10px">
  <ul>
    <li><b>trimSpaces(string)</b>: Removes all the spaces from a string</li>
    <li>
      <b>isSubstringPresent(string, substring)</b>: Returns true if the input string
      contains a given substring
    </li>
    <li><b>toggleCase(string)</b>: Toggles the case in a given string.</li>
    <li><b>reverseString(string)</b>: Reverses a given string </li>
    <li><b>removeSpecialChars4mString(string)</b>: Removes all the special characters from an input string and returns a string with only [a-z][A-Z] characters.</li>
    <li><b>capitalize(string)</b>: This method capitalizes a string. i.e; It changes the first alphabet of every word to upper case</li>
    <li><b>equalIgnoreCase(string1, string2)</b>:  This method compares two strings regardless of the case. It equates "hello" and "HELLO" as equal </li>
  </ul>
</div>

<h3>Install</h3>
<div style="color:grey; padding:10px"><p>npm install strmgk</p></div>

<h3>Usage</h3>

<p>
  <h5><i><b>const strmgk = require("strmgk"); </b></i></h5>
  <h5><i><b>let toggleStringCase = strmgk.toggleCase("TestString")</b></i></h5>
</p>

<p>
<h3> Testing </h3>
For testing, we have used <b>Jest</b> Javascript testing framework. To run the unit tests, use the below command in the root folder<br/> <i><b>sudo npm run test</b></i>
</p>

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you
can.
<h5>
  <a href="https://github.com/aedelkhanday/strmgk/tree/master"> Take me to github!</a>
</h5>

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Adil Khanday - <img src = "https://www.matrixgroup.net/snackoclock/wp-content/uploads/2012/07/twitter-bird-light-bgs.png" width="20" height = "20"/> - <a href= "https://twitter.com/aedel_kh"> Follow on twitter @aedel_kh</a></li>
</ul>
<h3>License</h3>

This project is licensed under the MIT License
