import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
let currentTime = player.on('timeupdate', throttle(onVideoPlaying, 1000));

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

function onVideoPlaying(evn) {
  currentTime = evn.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
