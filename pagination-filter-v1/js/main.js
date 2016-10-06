var $studentsList = $('.student-list');
var $position;

//jquery pagination plugin
$(function() {
    var pageParts = $(".student-item");

    // How many parts do we have?
    var numPages = pageParts.length;

    // How many parts do we want per page?
    var perPage = 10;

    // When the document loads we're on page 1
    // So to start with... hide everything else
    pageParts.slice(perPage).hide();

    $('.pagination').pagination({
        items: numPages,
        itemsOnPage: perPage,
        cssStyle: 'light-theme',
        onPageClick: function(pageNum) {
            // Which page parts do we show?
            var start = perPage * (pageNum - 1);
            var end = start + perPage;

            // First hide all page parts
            // Then show those just for our page
            pageParts.hide().slice(start, end).show();
        }
    });
});


// var nameStudents = $(".student-list li h3");
// var emailStudents = $(".student-list li span");
//
// /*for(i=0; i<=$studentsList.children().length; i+=1){
//   var nameStudents = nameStudents[i].textContent;
//
// }*/
// // loop through the h3s and make one array
// for (var i = 0; i<=$studentsList.children().length; i+=1){
//   var newArray = [];
//       newArray = nameStudents.innerText;
//
// }
//
//   //Add Keyup to array so it shows results based on characters typed
//   $( "#search-query" ).keyup(function() {
//   //Select search box query
//     var value = document.getElementById("search-query").value.toLowerCase();
//
//     console.log(value);
//
//   //Run a loop in the whole query li
//     for(var i = 0; i<=$studentsList.children().length; i+=1) {
//   //Obtain an Index from the array and match it to the query
//     var match = nameStudents[i].textContent
//
//     }
//       // if -1
//       if(position = -1) {
//         console.log('fail');
//       } else {
//         console.log('pass');
//       }
//
//   });

// dynamically show list of students as you type on search box

// get an array of our names
var studentNames = $(".student-item h3");
for ( var i = 0; i <= studentNames.length; i++ ) {
  var studentArray = [];
      studentArray.push().studentNames[i].text();
}



// on submit, hide student does not match at least one value in their name string
$('#searchForm').on('submit', function(event){
  event.preventDefault();
  var value = document.getElementById("search-query").value.toLowerCase();

  // go through array

  // look in each h3

});

// on sumbit, hide all students that does not match at least one value in their email

// paginate results








  /*for (student in nameStudents){
    var matchList = [];
    var name = $studentsList[student].children[0].children[1].innerText.toLowerCase();
    var email = $studentsList[student].children[0].children[2].innerText.toLowerCase();
    var match = param.toLowerCase()
                if(name.indexOf(match) !=-1 || email.indexOf(match) !=-1){

                matchList.push(studentList[student]);

              }*/
