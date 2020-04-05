'use strict';
const video = window.video = document.querySelector('video');
const canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;
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