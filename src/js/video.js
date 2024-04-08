let video = document.getElementById('videoId');

if (window.innerWidth < 1024) {
    video.poster = './src/video/imagetablet.png';
} else if (window.innerWidth < 600) {
    video.poster = './src/video/imagemobile.png';
} else {
    video.poster = './src/video/poster.png';
}