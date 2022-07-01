console.log("Loaded");

const clickElement = document.createElement("div");

const activateAnalyser = () => {
  clickElement.remove();

  const videoElement = document.querySelector("video");
  console.log("Got video element: ", videoElement);

  videoElement.crossOrigin = "anonymous";

  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(videoElement);

  source.connect(analyser).connect(audioContext.destination);

  console.log("Attached audio source to analyser");
};

// Make sure the script is activated by a user interaction
clickElement.addEventListener("click", activateAnalyser);

clickElement.style.position = "fixed";
clickElement.style.top = "0";
clickElement.style.left = "0";
clickElement.style.width = "100vw";
clickElement.style.height = "100vh";
clickElement.style.backgroundColor = "blue";
clickElement.style.zIndex = "9999";
clickElement.style.display = "flex";
clickElement.style.alignItems = "center";
clickElement.style.justifyContent = "center";

clickElement.innerText = "Click to activate";

document.body.appendChild(clickElement);
