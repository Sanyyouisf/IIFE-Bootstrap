# IIFE-Bootstrap

##Walk-A-Thon Donations

##Instructions

Create a donation submission page for a Walk-A-Thon that allows donors to enter their name, email and dollar amount & whether their donation is lump sum or per lap

Your project should have one HTML file that has:

1- a form for user information submission
2- the ability to select whether the donation will be a single amount or per lap
3- a table to display each donor's submission information
4- a button labeled Donate to process the submission
5- a button labeled Cancel to clear the submission form
6- The donor information should be stored as JS objects that contain their content type as keys and the submitted information as the value. {name: "John Donut", pledge: 70}
7- All donor information objects should be stored in a private array in an IIFE
8- Make sure the donor array cannot be accessed by the other modules except through an accessor (getter) method.
9- The IIFE should expose, in its public interface, a method named addDonor that accepts a single argument. That argument's value should be the user information object.
You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

