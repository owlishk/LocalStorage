
//In your JavaScript, try to read the settings as localStorage[ "LSS_Settings" ]. If you get a string, use JSON.parse() to convert it into an object, say settings. If that object has a non-empty name property, show the Hello page and fill in the user's name. The screen might look like this: 


//source:http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount

//===============================

var items = localStorage.length;
$('#form-page').hide();

//===============================

$('#change').on( 'click', showForm);
$('#submit').on( 'click', storeValues);
$('#clear').on( 'click', clearValues);


//===============================

function showForm( evt ){
  $('#form-page').show(); 
  $('#hello-page').hide(); 
}


function storeValues( evt ){
  var shapePref = $('#shape').val(); 
  console.log(shapePref);
 
  var colorPref = $('#color').val(); 
  console.log(colorPref);
 
  localStorage.setItem('shape', shapePref);
  localStorage.setItem('color', colorPref);
  var UserShape = localStorage.shape;
  var UserColor = localStorage.color;
  console.log(UserShape);
  console.log(UserColor);
  console.log(items);
 
  $('#settings').text("You have chosen " + UserShape + " and " + UserColor + ".");
   
  $('#form-page').hide(); 
  $('#hello-page').show(); 
 
 
}

//=================================

function clearValues( evt ){

  localStorage.clear();
  $('.Form')[0].reset();
 //default user parameters
  $('#settings').text('You have no shape or color selected.');

   console.log(items);
}