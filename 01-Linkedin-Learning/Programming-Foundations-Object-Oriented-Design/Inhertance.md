# Inheritance

- When I need to create a new class it may not always be necessary to build it from scratch. If my program has an existing class that's similar to what I need, then I can use **inheritance** to base my new class on that existing one. I
- Inheritance enables a new class to receive or inherit the attributes and methods of existing classes using the same implementation which is a great form of code reuse

---

## EX;

- Let's say for example I want to model the characters present in a bakery. I might start by defining a class for customers, which has attributes for the customer's name, phone number, email address, and a customer ID number. Additionally I give that customer class a method to update their contact information, and a method to purchase items. The bakery also has employees so I create an employee class with attributes for the employee's name, phone number, email address, and employee ID number. The employee can update their contact information, get promoted, or retire. Now, looking at these two classes side by side, you might have noticed that they have quite a few similarities. Employee's and customer's both have a name, phone number, email address, and a method to update their contact information. Which are things that are common to all people.

---

- **solution** :So rather then defining those attributes separately in each class, I can create a person class with all of those common attributes and methods. And then base the customer and employee classes on it. The phrase to use here is customer inherits from person. Which means the new customer class automatically gets everything in the person class. All of it's attributes and behavior's without having to write any extra code. From there, I can add any additional attributes, and methods that are unique to customer's and employee's

---

### Relations;

- The term that's most commonly used for this relationship is that the person class is the super class, and the new customer and employee classes are subclasses of it. You'll also hear these described as the parent class, and the child class, which is typically used when there's only a single level of inheritance, or the base class and the derived class. Which better captures the concept of inheritance that's multiple levels deep. That said there's no limit to the number of child classes I can create based off of a single parent.

---

I'll Now a few languages like Python, and C++, allow you to inherit from more then one super class. Bringing in attributes and behaviors from multiple other classes. However, multiple inheritance can get confusing so it's much more common to see single inheritance where a subclass only inherits from one parent or superclass. Languages like Java, C#, Swift, and Ruby enforce single inheritance with classes and that's what we'll be using in this course.
