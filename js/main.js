'use strict';
const video = window.video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

function drawFrame() {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const faces = ccv.detect_objects({ // detect faces
    canvas: ccv.pre(canvas),
    cascade: cascade,
    interval: 5,
    min_neighbors: 1
  });

  faces.forEach(face => { // draw rectangles on detected faces
    context.lineWidth = "10";
    context.strokeStyle = "blue";
    context.strokeRect(face.x, face.y, face.width, face.height);
  });
  
}
const constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

function handleError(error) {
  console.log('Error: ', error.message, error.name);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError); // Get user video