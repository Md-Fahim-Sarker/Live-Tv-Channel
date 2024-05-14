document.getElementById("openYouTubeChannel").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior of following the link
  
  var channelUrl = "https://youtube.com/@TheInnovationsofFahim"; // Replace CHANNEL_ID with your channel's ID
  var appUrl = "vnd.youtube://" + channelUrl.split("/").pop();
  
  // Attempt to open the app
  window.location.href = appUrl;
  
  // If the app is not installed, open in browser
  setTimeout(function() {
    if (!document.webkitHidden && !document.hidden) {
      window.location.href = channelUrl;
    }
  }, 2000); // 2 seconds timeout to redirect to the browser
});

      const navBar = document.querySelector("nav"),
        menuBtns = document.querySelectorAll(".menu-icon"),
        overlay = document.querySelector(".overlay");

      menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", () => {
          navBar.classList.toggle("open");
        });
      });

      overlay.addEventListener("click", () => {
        navBar.classList.remove("open");
      });

function exitButton() {
    window.close();
}


function changeChannel(channel) {
        var video = document.querySelector('video');
        var liveStreamUrl = "";
    switch (channel) {
        case 'channel1':
            liveStreamUrl = 'https://ythls-v2.onrender.com/video/e_BQWtx15qI.m3u8';
            break;
        case 'channel2':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCATUkaOHwO9EP_W87zCiPbA.m3u8';
            break;
        case 'channel3':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel4':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel5':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel6':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel7':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCos52azQNBgW63_9uDJoPDA.m3u8';
            break;
        case 'channel8':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCROKYPep-UuODNwyipe6JMw.m3u8';
            break;
        case 'channel9':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel10':
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
        case 'channel11':
            liveStreamUrl = 'https://amg01448-samsungin-pogo-samsungin-dzccl.amagi.tv/playlist/amg01448-samsungin-pogo-samsungin/playlist.m3u8';  // Replace with the actual URL for Channel 11
            break;
        case 'channel12':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel13':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UC0V3IJCnr6ZNjB9t_GLhFFA.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel14':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel15':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel16':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel17':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UC8NcXMG3A3f2aFQyGTpSNww.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel18':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel19':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCN6sm8iHiPd0cnoUardDAnw.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel20':
            liveStreamUrl = 'assets/Coming_soon.mp4';  // Replace with the actual URL for Channel 12
            break;
        case 'channel21':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCWVqdPTigfQ-cSNwG7O9MeA.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel22':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCHLqIOMPk20w-6cFgkA90jw.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel23':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCUvXoiDEKI8VZJrr58g4VAw.m3u8';  // Replace with the actual URL for Channel 12
            break;
        case 'channel24':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCtqvtAVmad5zywaziN6CbfA.m3u8';
            break;
        case 'channel25':
            liveStreamUrl = 'https://ythls-v2.onrender.com/channel/UCktaw9L-f65LzUUdjmCFkbQ.m3u8';
            break;

        default:
            liveStreamUrl = 'assets/Coming_soon.mp4';
            break;
    }

// Update the source URL of the video element 
     if (liveStreamUrl !== "") {
           video.src = liveStreamUrl;
           video.play();
 // Optionally start playing the video automatically
      } 
}


