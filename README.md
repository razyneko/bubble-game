# Game Panel
![image](https://github.com/user-attachments/assets/d26aee69-a801-4274-bcc0-fd6044323bc1)

# Play Again Window
- Page reloads after pressing the button and the game restarts.

# Concepts Learned
- ## Event Bubbling :
     - Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree        until it gets to the root element.
     - This is the default behavior of events on elements unless you stop the propagation 
     - When elements receive events, such events propagate to their parents and ancestors upward in the DOM tree. This is the concept of Event Bubbling, and it allows parent elements to handle events that occur on their children's elements.      - Event objects also have the stopPropagation method which you can use to stop the bubbling of an event. This is useful in cases where you want an element to receive a click event only when it is clicked and not when any of its       
       children elements are clicked.
     - stopPropagation and preventDefault are methods of the event object for stopping default behaviors. 
