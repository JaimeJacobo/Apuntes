$(document).ready(function){





    //This should grab the list id, and into this list append (add to the bottom) and add a '<li> new task </li>' to the list.
    $('#the-list').append('<li> new task </li>')


    //prepend is like append, but it adds the elements at the beginning, not at the end.



    // .val is used to take the value of the input 


    //This is the way you have to do it if you want to add a li with some other variable on the inside. You have to put it outside the ''
    $('#the-list').append('<li>' + variable + '</li>')






//This sets a timer to something to happen. This is telling us that it is going to take 1000 ms to the console to log 'blah'

setTimeout(()=>{
	console.log('blah')
}, 1000)









}