# Typing-Game
Created with CodeSandbox

Programming Concepts Involved:

So, we use html and  direct it with css and javasvript. We use some font and images from Google Font and FontAwesome. 

We write css by changing background color, color, padding, margin, hover, border style and so on.

We also use bootstrap such as the button (btn).

The coding concept:
1) The words are loaded from "words.txt" and stored into an array

2) An event handler is attached to the button and it is trigerred when the button is clicked.

3) Another event handler is attached to the page itself to detect keyboard input.

4) When the button is clicked:
  a) Background music is started
  b) A random word is given and each characters is declared as a new hidden element and appended to the word.
  c) The timer is started to count down for every second.
  d) The button is disabled.
  
5) As long as the timer doesn't reach 0:
  a) If the keyboard input matches the character at the set position, the background of the character will be highlighted and the position is set to the next character.
  b) If the all of the characters are matched successfully, effect sound will be played, score counter will be incremented by 1, another random word will be assigned and Step 5a is repeated.
  
6) If the timer reach 0:
   a) The word assigned will be removed.
   b) Timer reset to default value (20 seconds in this case)
   c) Score reset to 0.
   d) Background music is paused.
   e) The button is enabled.
