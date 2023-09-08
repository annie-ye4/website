function changeColor(){
    const aboutButton = document.getElementById('aboutButton');
    aboutButton.classList.add('clicked');
}

function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(`dropdown-paragraph-${dropdownId}`);
  var sfImages = document.getElementById("bridge-content");// Get the San Francisco images container
  var hobbyImages = document.getElementById("lifting-content");
  var collegeImages = document.getElementById("brown-content");
  var allDropdownContents = document.querySelectorAll('.dropdown-content');
  var hobbiesButton = document.getElementById("hobbies-button");
  var collegeButton = document.getElementById("college-button");
  var fromButton = document.getElementById("from-button");


  
  allDropdownContents.forEach(function (content) {
      if (content !== dropdownContent) {
          content.style.display = 'none';
      }
  });
  
  dropdownContent.classList.toggle('show');
  
  if (dropdownContent.style.display === "none") {
      dropdownContent.style.display = "block";
      sfImages.style.display = "block";
      hobbyImages.style.display = "block";
      collegeImages.style.display = "block"; 
      // hobbiesButton.style.display = "show";
  } else {
      dropdownContent.style.display = "none";
      sfImages.style.display = "none";
      hobbyImages.style.display = "none";
      collegeImages.style.display = "none";
  }

  
  

  if (dropdownId === "from" && dropdownContent.style.display === "block") {
    hobbiesButton.style.display = "none";
    collegeButton.style.display = "none";
} 
if (dropdownId === "hobbies" && dropdownContent.style.display === "block") {
    fromButton.style.display = "none";
    collegeButton.style.display = "none";
    hobbiesButton.style.display = "block";
} 
if (dropdownId === "education" && dropdownContent.style.display === "block") {
  fromButton.style.display = "none";
  hobbiesButton.style.display = "none";
  collegeButton.style.display = "block";
} 

if (dropdownContent.style.display === "none") {
    fromButton.style.display = "block";
    hobbiesButton.style.display = "block";
    collegeButton.style.display = "block";
}


  
 
}



// function toggleIcon(id) {

//     const hobbiesButton = document.getElementById('hobbies-button');
//     const collegeButton = document.getElementById('college-button');
//     const fromButton = document.getElementById('from-button');
//     const heading = document.getElementById('heading');

//     var content = document.getElementById(id + "-content");
//     if (content.style.display === "none") {
//         content.style.display = "block";
//     } else {
//         content.style.display = "none";
//     }

    
//     if (id == "bridge"){
//       if (content.style.display === "block"){
//         hobbiesButton.style.display = "none";
//         collegeButton.style.display = "none";
//         heading.style.display ="none";
//       }
//       else{
//         hobbiesButton.style.display = "block";
//         collegeButton.style.display = "block";
//         heading.style.display ="block";
//       }
//     }

//     else if (id == "lifting"){
//       if (content.style.display === "block"){
//         collegeButton.style.display = "none";
//         fromButton.style.display = "none";
//         heading.style.display ="none";
//       }
//       else{
//         collegeButton.style.display = "block";
//         fromButton.style.display = "block";
//         heading.style.display ="block";
//       }
//     }

//     if (id == "brown"){
//       if (content.style.display === "block"){
//         hobbiesButton.style.display = "none";
//         fromButton.style.display = "none";
//         heading.style.display ="none";
//       }
//       else{
//         hobbiesButton.style.display = "block";
//         fromButton.style.display = "block";
//         heading.style.display ="block";
//       }
//     }

    

const messages = [
    "welcome to my personal website!",
    "feel free to explore!",
    "contact me for any inquiries.",
  ];
  const typingSpeed = 100;
  let messageIndex = 0;
  
  function typeMessage() {
    const messageElement = document.getElementById("typingMessage");
    messageElement.textContent = "";
  
    let index = 0;
    const lineHeightOffset = 4;
    const typingInterval = setInterval(() => {
      if (index < messages[messageIndex].length) {
        messageElement.textContent += messages[messageIndex].charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(() => {
          typeMessage();
        }, 2000);
      }
    }, typingSpeed);
  }
  
  window.onload = () => {
    typeMessage();
  };


function scrollToSection(sectionId, offset) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const top = targetSection.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: top - offset,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var dicVideo = document.querySelector(".dic-video");
  dicVideo.pause();
});

