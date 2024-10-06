// function myFun(){
//     document.getElementById("click").src= '/PRODIGY_WD_01/cources.html';
// }


document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const button = document.getElementById('click');
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Redirect to the courses page
        window.location.href = '/PRODIGY_WD_01/cources.html';
    });
});
