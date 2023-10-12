// Select the element with the class "generate-form"
const generateForm = document.querySelector(".generate-form");

// Select the button within the "generate-form" with the class "generate-btn"
const generateBtn = generateForm.querySelector(".generate-btn");

// Select the element with the class "image-gallery"
const imageGallery = document.querySelector(".image-gallery");

// Set your OpenAI API key (replace "sk-" with your actual API key)
const OPENAI_API_KEY = "sk-"; 

// Variable to track whether image generation is in progress
let isImageGenerating = false;

// Function to update image cards in the image gallery based on provided image data array
const updateImageCard = (imgDataArray) => {
  // Iterate through each image data object in the array
  imgDataArray.forEach((imgObject, index) => {
    // Select the image card for the current image based on index
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    
    // Select the image element within the image card
    const imgElement = imgCard.querySelector("img");
    
    // Select the download button within the image card
    const downloadBtn = imgCard.querySelector(".download-btn");
