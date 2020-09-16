//enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
$(function() {
  //button submits form
  $('#js-shopping-list-form').submit(function(event) {
    //Stop form from sending info normally
    event.preventDefault();
    //create variable to hold text input from shopping list entry
    const listItem = $('input[id="shopping-list-entry"]').val();
    //create variable to add shopping list entry to html with buttons and stuff
    const listSelection = $('<li><span class="shopping-item">' + listItem + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
    //enter text into form submission
    $('input[name="shopping-list-entry"]').val('');
    //take text and add to the end of the list
    $('.shopping-list').append(listSelection);

  });
});


//check and uncheck items on the list by clicking the "Check" button
//permanently remove items from the list
