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

