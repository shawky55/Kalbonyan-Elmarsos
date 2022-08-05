# Encapsulation

- **The idea of encapsulation** is about containing the elements of an object. Not just to keep them together, but to also protect them.

- We bundle an object's attributes or data along with the methods that operate on that data within the same unit or the same class.

- One reason for doing that is to restrict access to some of the object's components. -

## Example

_ex_:Like how you're restricting me from taking a cookie? - No, you can have a cookie, but you'll have to use my method to get to it. My cookie jar class has an attribute that represents the number of cookies in the jar. When I create an instance of my cookie jar, I don't want you or any other part of my application to be able to reach in and directly change the number of cookies.

- You can trust me. - It's not only about trust. If I let you directly change things, like the number, you might unknowingly change it to something invalid, like a negative one. That value doesn't make sense for the number of cookies and might cause my program to crash. Another reason to restrict access is that, well, maybe I want to limit the number of cookies you can have.

- So what do I have to do to get a cookie\_?

- Well, to control access to that attribute, I'll hide it so it's only accessible from inside the cookie jar object itself. Then, I'll add a method called 'request cookie' that can be accessed from other parts of the application. When you use the 'request cookie' method, you'll get a cookie, and the method will modify the number of cookies attribute accordingly.

- One of the principles of encapsulation is that an object should not make anything about itself available except what is absolutely necessary for other parts of the application to work.This is a concept referred to as 'black boxing!

- One of the main benefits with object orientation is that it allows us to more safely change the way the object works without changing the rest of the application.

## case

Perhaps, when I first wrote my cookie jar class, I represented the total number of cookies as a single value. Then, later on, I decide to use three separate values to keep track of each type of cookie individually. Since I hid those attributes, I don't have to worry about breaking the other 20 parts of my application that have been using the 'request cookie' method to grab cookies

- I'll just need to modify the 'request cookie' method and the class to handle the change. - Well, if you're the person writing these classes, why would you want to hide your own code? Why keep secrets from yourself? - It's not about being secretive. It's about reducing dependencies between different parts of the application. The change in one place won't cause a domino effect and require multiple changes elsewhere. - Then how much should you hide? - Well, different languages have different levels of support for hiding properties and methods. But the general rule is to encapsulate as much as possible.
