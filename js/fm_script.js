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

function changeRadio(radio) {
        var audio = document.querySelector('audio');
        var liveStreamUrl = "";
        var coverSrc;
    switch (radio) {
        case 'radio1':
            liveStreamUrl = 'http://128.199.184.111:12496/stream/1/';
            coverSrc = 'assets/jago_fm.png';
            break;
        case 'radio2':
            liveStreamUrl = 'https://stream-152.zeno.fm/cwa3vg8s8druv?zs=-t-ksJSnQQe1gx36NpTtsw&zt=eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJaZW5vTWVkaWEiLCJtYXhBZ2UiOjg2NDAwMDAwLCJob3N0IjoiaHR0cHM6Ly9zdHJlYW0tMTUyLnplbm8uZm0iLCJpZCI6Ii10LWtzSlNuUVFlMWd4MzZOcFR0c3ciLCJ0dGwiOjEwMDAwLCJqdGkiOiItdC1rc0pTblFRZTFneDM2TnBUdHN3IiwiaWF0IjoxNzEyMzcyMTkzLCJleHAiOjE3MTI0NTg1OTN9.d5RZSGepjMfGZoYb6kMVTLGL0NDU2TkB221WpoUzljM';
            coverSrc = 'assets/radio_foorti.png';
            break;
        case 'radio3':
            liveStreamUrl = 'https://as-dash-ww.live.cf.md.bbci.co.uk/pool_904/live/ww/bbc_world_service/bbc_world_service.isml/dash/bbc_world_service-audio=96000-267551494.m4s';
            coverSrc = 'assets/abc_radio.png';
            break;
        case 'radio4':
            liveStreamUrl = 'http://103.43.151.163:6020/;stream.mp3=';
            coverSrc = 'assets/album_cover4.png';
            break;
        case 'radio5':
            liveStreamUrl = 'assets/your_audio_file.mp3';
            coverSrc = 'assets/album_cover5.png';
            break;
        case 'radio6':
            liveStreamUrl = 'assets/audio.mp3';
            coverSrc = 'assets/album_cover6.png';
            break;
        case 'radio7':
            liveStreamUrl = 'assets/video.mp4';
            coverSrc = 'assets/album_cover7.png';
            break;
        case 'radio8':
            liveStreamUrl = 'assets/video2.mp4';
            coverSrc = 'assets/album_cover8.png';
            break;
        case 'radio9':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/discovery_hd_576/discovery_hd_576.m3u8?bitrate=1000000&channel=discovery_hd_576&gp_id=';
            coverSrc = 'assets/album_cover9.png';
            break;
        case 'radio10':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/zee_bangla_576/zee_bangla_576.m3u8?bitrate=1000000&channel=zee_bangla_576&gp_id=';
            coverSrc = 'assets/album_cover10.png';
            break;
        case 'radio11':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/pogo_sd_576/pogo_sd_576.m3u8?bitrate=1000000&channel=pogo_sd_576&gp_id=';  // Replace with the actual URL for Channel 11
            coverSrc = 'assets/album_cover11.png';
            break;
        case 'radio12':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover12.png';
            break;
        case 'radio13':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover13.png';
            break;
        case 'radio14':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover14.png';
            break;
        case 'radio15':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
             coverSrc = 'assets/album_cover15.png';
           break;
        case 'radio16':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover16.png';
          break;
        case 'radio17':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover17.png';
            break;
        case 'radio18':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover18.png';
            break;
        case 'radio19':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover19.png';
            break;
        case 'radio20':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            coverSrc = 'assets/album_cover20.png';
            break;
        default:
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/pogo_sd_576/pogo_sd_576.m3u8?bitrate=1000000&channel=pogo_sd_576&gp_id=';
            coverSrc = 'assets/album_cover0.png';
    }
document.getElementById('album-cover').src = coverSrc;

// Update the source URL of the audio element 
     if (liveStreamUrl !== "") {
           audio.src = liveStreamUrl;
           audio.play();
 // Optionally start playing the audio automatically
      }
}
