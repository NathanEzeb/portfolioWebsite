
var currentSlide = 0;

window.onload = function() {
    updateSlideshow();
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('prevButton').addEventListener('click', prevSlide);
    document.getElementById('nextButton').addEventListener('click', nextSlide);
});

var slides = [
    
    {src: 'images/page1DAapp.png', text: 'Text for image 1', size: '55%', header: '1: Login Page', paragraph: 'This page allows the user to log in with valid creditials. If the user enters an incorrect username or password, an appropriate error message will be displayed. Their region is detected and displayed in the left hand corner.'},
    {src: 'images/page2DAapp.png', text: 'Text for image 22222', size: '85%', header: '2: Main Menu', paragraph: 'The Main Menu page allows the user to view appointments and filter them by different criteria using the radio buttons above the table. The user can also add, modify, or delete appointments by selecting an appointment and clicking the buttons below.'},
    {src: 'images/addApmt3.png', text: 'Text for image 22222', size: '58%', header: '3: Add Appointment Page', paragraph: 'This page allows the user to add an appointment to the database. They may do so by entering the information required information and pressing the save button, or the cancel button to return to the Main Menu.'},
    {src: 'images/modifyApmt4.png', text: 'Text for image 22222', size: '58%', header: '4: Modify Appointment Page', paragraph: 'This page allows the user to modify a selected appointment.'},
    {src: 'images/customersTable5.png', text: 'Text for image 22222', size: '95%', header: '5: Customers Page', paragraph: 'This page allows the user to add, delete, modify, and view customers. The customer information can be viewed by different criteria using the radio buttons.'},
    {src: 'images/addCustomer6.png', text: 'Text for image 22222', size: '59%', header: '6: Add Customer Page', paragraph: 'This page allows the user to add a customer to the database.'},
    {src: 'images/modifyCustomer7.png', text: 'Text for image 22222', size: '59%', header: '7: Modify Customer Page', paragraph: 'This page allows the user to modify a selected customer.'},
    // Add more objects for more slides
    /*
    {src: 'images/page1DAapp.png', text: 'Text for image 1', size: '80%', header: 'Login Page', paragraph: 'Paragraph 1'},
    {src: 'images/page2DAapp.png', text: 'Text for image 22222', size: '110%', header: 'Main Menu', paragraph: 'Paragraph 2'},
    // Add more objects for more slides
    */
];
function updateSlide(index) {
    /*
    document.getElementById('slideshowImage').src = slides[index].src; // Update the image maybe document needs to get changed
    document.getElementById('slideshowText').textContent = slides[index].text; // Update the text
    */
    var slide = slides[index];
    var img = document.getElementById('slideshowImage');
    img.src = slide.src; // Update the image
    img.style.maxWidth = slide.size; // Update the max-width
    document.getElementById('slideshowText').textContent = slide.text; // Update the text
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //updateSlide(currentSlide);
    updateSlideshow();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
   // updateSlide(currentSlide);
   updateSlideshow();
}

function updateSlideshow() {
    /*
    var slide = slides[currentSlide];
    var slideshowImage = document.getElementById('slideshowImage');
    slideshowImage.src = slide.src;
    slideshowImage.alt = slide.text;
    slideshowImage.style.width = slide.size; // Set the width of the image
    */
    var slide = slides[currentSlide];
    document.getElementById('slideshowImage').src = slide.src;
    document.getElementById('slideshowImage').alt = slide.text;
    document.getElementById('slideshowImage').style.width = slide.size;
    document.getElementById('slideshowHeader').textContent = slide.header; // Update the header
    document.getElementById('slideshowParagraph').textContent = slide.paragraph; // Update the paragraph
}