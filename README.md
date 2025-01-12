# Game Panel
![image](https://github.com/user-attachments/assets/d26aee69-a801-4274-bcc0-fd6044323bc1)

# Play Again Window
![image](https://github.com/user-attachments/assets/2375525e-2dae-4927-91dc-b23e1d46c322)

- Page reloads after pressing the button and the game restarts.

# Concepts Learned
- ## Event Bubbling :
     - Event Bubbling or Event Propogation is default behaviour of an event is handled in JS, for example if a h1 is inside a div, and div has a click listener to it, so even if h1, its child element is clicked, the event is propogated till the root(html) element so also covering div.
     - so if the final take is the event on an element bubbles up to the root element.
     - sometimes, we must prevent it,
     - in that case, we use "event.stopPropogation()",
     - though i actually used "eventPropogation" as an aid in this project by adding click event on "#panel-bottom" and then accessed the content inside target bubble using "event.target"
