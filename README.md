# Typing-Game
Created with CodeSandbox

Programming Concept:

So, we use html and  direct it with css and javasvript. We use some font and images from Google Font and FontAwesome. 

We write css by changing background color, color, padding, margin, hover, border style and so on.

We also use bootstrap such as the button (btn).

Coding logic:

1) Assign event handler for click event to the button, and event handler for detecting keyboard input to the page itself.

2) Initilallize timer and score to 0, and an array of words is read from "words.txt".

3) If it is clicked:
- Background music is played.
- Timer start to countdown every second.
- Random word is assigned.
- Button is disabled.

4) While the timer haven't reach 0:
- Compare keyboard input with the character on the current position. If it matches, add background color to the characters and play the effect music.
- Move to character in the next position.
- If all characters are matched, increment the score by 1 and assign another random word.

5) If the timer reach 0:
- Alert the score.
- Reset the score and timer to 0.
- Stop the background music.
- Enable the button.
