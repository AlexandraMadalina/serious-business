This is a class exercise created by our coach [Lambelin Rafael](https://github.com/rafaello104)

I followed this exercises during my training as JuniorWeb Developer at BeCode in maart 2019.
This is our initiation exercise in Javascript to manipulate DOM elements.

## Objectives

- Learn how to use if statements and combine them 


## Instructions

- Create a simple html page
- Add some styling so it looks good
- Add two columns:
    - One column has a table containing the business hours of a company (just pick some random business hours)
    - The second column has a simple paragraph, containing a phrase declaring the business currently open / closed.
    
So basically:

- When you load the page:
    - Check the day
    - Check the time
    - Compare it to the business hours
    - Declare if the business is open
    

## BONUS Objective

- Add a live updating clock of the current time (digital)
- Add a button "Close early"
- When you click this button, the current day's business hours end at the current time in the table
(So on thursday if I click this button at 14:45, the table's business hours for thursday will change to end at 14:45)

## My approach

First I get the current date. Depending on what day is today, I toggle through the html table and compare the current hours and minutes with the opening and closing hours. If the current time is betwen opening and closing hours, then the status is change to "Open", in any other situation, the status is "Close".

You can see the results [here](https://alexandramadalina.github.io/serious-business/.)

## Things I learned

You can create a Date object using `new Date() ` constructor witch returns current date and time. You can access a specific property of that object with [Date Object methods](https://javascript.info/date).

DOM table element has the rows and cells properties which is the array. Rows property has the collections of the all row of the table. Cells has the collections of the all cells of the specific row. For example, if you want to access the value of the first table cell, you can write `document.getElementById("myTable").rows[0].cells[0].innerHTML`.



## Documentation

[w3schools](https://www.w3schools.com/jsref/coll_table_rows.asp)

[stackoverflow](https://stackoverflow.com/questions/26675107/javascript-dates-how-do-i-compare-the-current-date-time-against-a-recurring-eve)

[How to Compare Two Dates In JavaScript](https://www.c-sharpcorner.com/UploadFile/8911c4/how-to-compare-two-dates-using-javascript/)

[javascript.info](https://javascript.info/date)

