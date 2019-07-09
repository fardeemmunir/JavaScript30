# Lessons Learned

1. Putting webcam footage onto video player
   getUserMedia returns a promise that you can put as the srcObject of a video element and everything just works.

2. Messing around with webcam footage
   Put video data onto a canvas (drawImage(video)) and then get the pixels out with getImageData. Returns a huge 1.2M item array which is organized by channel (RGBA RGBA RGBA ...). You can change the pixel data however you want and then put back the pixels using putImageData.

3. Taking images from canvas
   canvas.toDataURL creates the base64 thing.
   Then you just put that as a image href and then set a download attribute.

4. Image filters
   Image filters are the simplest thing. You just take the pixel data and then change them in some meaningful way.
