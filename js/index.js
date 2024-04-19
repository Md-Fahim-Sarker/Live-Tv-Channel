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
        localStorage.setItem('selectedChannel', channel);
        window.location.href = 'home_live_tv.html';
    }