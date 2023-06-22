# Introduction to JavaScript: Final Project Assignment

## Overview:

For your final project, you will use your cumulative knowledge from this course to build a unique version of an Organic Vegetables website. This is your chance to bring together everything you've learned and create a functional, interactive, and aesthetically pleasing website.

## Project Requirements:

1. **Database Integration**: Your website will interface with a pre-existing remote database containing many different types of vegetables, five users with wallets, and some other items. The data from this database should be used to populate your website with dynamic content. You should use asynchronous JavaScript (AJAX) or fetch API to retrieve data from this database. <br /><br />**You can access the database at the following endpoint:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**GET** https://my-json-server.typicode.com/mrkiley/cwb2023-onlineshop/db

2. **Shopping Cart**: Each time the web page loads, a random user should be selected from the list of users that is stored in the database. That user should then have 5-10 random vegetables added to their shopping cart. The following information about the selected user and the vegetables in their shopping cart should be displayed in the console:
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* The full name of the selected user
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* A list of all of the vegetables in the cart, and the price associated with each one
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* The subtotal of all of the vegetables in the cart
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* The tax percentage (%) and amount that the user will need to pay
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* The total amount that the user needs to pay _(hint: do some math using subtotal and tax)_

3. **Displaying Images**: Each vegetable in the database is associated with an image. You should figure out how to display this image along with the relevant information for each vegetable.

4. **Content Organization**: The items on your website should be sorted alphabetically whenever they are displayed. At any given time, your website should only display a limited number of items (pagination).

5. **Github Workflow**: You will use Github for version control. Your repository should have two branches: a "main" branch and a "development" branch. All the code that is ready for review should be in the "development" branch. You should make a pull request to the branch with your corresponding name on the "upstream" repository (e.g., Kiley would make a pull request to the branch named “kiley” in the “https://github.com/mrkiley/cwb2023-onlineshop” repository). However, you will be provided a special repository for which you must add a new remote. This will prevent any student from seeing any other student's work. You will be given several hints on how to do this during the first week of July.

## JavaScript Fundamental Skills:

As you work on your project, you should ensure your code displays the following JavaScript fundamental skills:

1. **Data Types and Variables**: Use of numbers, strings, booleans, arrays, and objects. 

2. **Operators**: Use of arithmetic and logical operators.

3. **Control Structures**: Effective use of conditional statements (if, else if, else, switch) and loops (for, while, do-while).

4. **Functions**: Defining and calling functions, understanding of scope and closure.

5. **Object-Oriented Programming**: Use of constructors, prototypes, and the `this` keyword.

6. **Asynchronous JavaScript**: Understanding and use of callbacks, promises, async/await, and the Fetch API or AJAX.

7. **DOM Manipulation**: Selection and modification of DOM elements, event handling, form validation.

## Deliverables:

1. Link to your Github repository containing the code for your website.
2. Create a pull request with your code to the special Github repository assigned to you
3. A brief written explanation of your website (no more than 500 words), which should include what you've learned over the course, how you implemented the JavaScript fundamental skills, and any challenges you faced and how you overcame them.

**Remember to ask questions if you get stuck!**

This project is due on July 10. Good luck, and we look forward to seeing what you create!
