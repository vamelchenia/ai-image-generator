// fetch(
//   'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
//   {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({ inputs: 'a flying Cat' }),
//   }
// )
//   .then((res) => res.blob())
//   .then((blob) => {
//     const tab = window.open((target = '_blank'));
//     tab.location.href = window.URL.createObjectURL(blob);
//   });

// const dotenv = require('dotenv');

import dotenv from 'dotenv';
dotenv.config();

const generateImageButton = document.getElementById('generate-btn');

generateImageButton.addEventListener('click', () => {
  console.log('!!!!');
  console.log('process.env.HUGGING_API_KEY = ' + process.env.HUGGING_API_KEY);
});
