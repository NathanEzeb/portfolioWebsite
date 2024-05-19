
var currentSlide = 0;

window.onload = function() {
    updateSlideshow();
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('prevButton').addEventListener('click', prevSlide);
    document.getElementById('nextButton').addEventListener('click', nextSlide);
});

var slides = [
    
    {src: 'images/homePageScheduleApp.png', text: 'Text for image 1', size: '21%', header: '1: Start Page', paragraph: 'Click the Edit Terms button to begin editing the database'},
    {src: 'images/termsPage.png', text: 'Text for image 22222', size: '21%', header: '2: Terms Page', paragraph: 'Under the Edit Terms title, there is a list of terms that is filled based on the database. You can click a term to edit the information for it. You can click the add new term button to make a new term.'},
    {src: 'images/addTermPage.png', text: 'Text for image 22222', size: '21%', header: '3: Add Term Page', paragraph: 'When you click the add term button, you are presented with this page. you can add your term information and click the 3 dot button in the upper right to save or delete this term. on the bottom there is a list of courses for this term. you can click a course to edit it or click add a new course to create a new course.'},
    {src: 'images/modifyTermPage.png', text: 'Text for image 22222', size: '21%', header: '4: Modify Term Page', paragraph: 'Wen you select a term, this page is loaded. You can edit term information from this page, and use the dots button in the right hand corner to save or delete this term. near the bottom of the page, there is a courses list of courses in this term. you can select one to edit it or you can click the new course button to add a new course.'},
    {src: 'images/modifyCoursePage.png', text: 'Text for image 22222', size: '21%', header: '5: Modify Course Page', paragraph: 'This page allows you to view, edit, or delete information associated with a selected course. There is a list of assessments associated with each course near the bottom. You can select an assessment or use the button to add a new one.'},
    {src: 'images/addCoursePage.png', text: 'Text for image 22222', size: '21%', header: '6: Add Course Page', paragraph: 'This page allows you to add a new course associated with the term you selected beforehand. '},
    {src: 'images/modifyAssessmentPage.png', text: 'Text for image 22222', size: '21%', header: '7: Modify Assessment Page', paragraph: 'This page allows you to view, update, or delete information associated with a selected assessment.'},
    {src: 'images/AddAssessmentPage.png', text: 'Text for image 22222', size: '21%', header: '7: Add Assessment Page', paragraph: 'This page is loaded after the add assessment button is clicked. it allows you to create an assessment and add information to it. This assessment will be associated with the course that was selected beforehand.'},
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