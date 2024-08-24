const getById = id => {
  return document.getElementById(id);
};

getById("heading-btn").addEventListener("click", () => {
  getById("heading-box").style.display = "block";
  getById("heading-wrapper").style.display = "none";
});

getById("heading-x").addEventListener("click", () => {
  getById("heading-box").style.display = "none";
  getById("heading-wrapper").style.display = "block";
});

getById("image-btn").addEventListener("click", () => {
  getById("image-box").style.display = "block";
  getById("image-wrapper").style.display = "none";
});

getById("image-x").addEventListener("click", () => {
  getById("image-box").style.display = "none";
  getById("image-wrapper").style.display = "block";
});

getById("description-btn").addEventListener("click", () => {
  getById("description-box").style.display = "block";
  getById("description-wrapper").style.display = "none";
});

getById("description-x").addEventListener("click", () => {
  getById("description-box").style.display = "none";
  getById("description-wrapper").style.display = "block";
});

getById("heading-input").addEventListener("keyup", () => {
  getById("heading").innerText = getById("heading-input").value;
  getById("download-btn").style.display = "block";
});

getById("heading-left").addEventListener("click", () => {
  getById("heading").style.textAlign = "left";
});

getById("heading-center").addEventListener("click", () => {
  getById("heading").style.textAlign = "center";
});

getById("heading-right").addEventListener("click", () => {
  getById("heading").style.textAlign = "right";
});

getById("heading-blue").addEventListener("click", () => {
  getById("heading").style.color = "blue";
});

getById("heading-black").addEventListener("click", () => {
  getById("heading").style.color = "black";
});

getById("heading-green").addEventListener("click", () => {
  getById("heading").style.color = "green";
});
getById("file-upload").addEventListener("change", () => {
  getById("image").style.display = "block";
  const file = getById("file-upload").files[0];
  getById("image").src = URL.createObjectURL(file);
  getById("download-btn").style.display = "block";
});

getById("description-input").addEventListener("keyup", () => {
  getById("description").innerText = getById("description-input").value;
  getById("download-btn").style.display = "block";
});

const downloadURI = (uri, name) => {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
  document.body.removeChild(link);
  delete link;
};

getById("download-btn").addEventListener("click", () => {
  convertHtmlToImage(getById("preview")).then(poster => {
    var myImage = poster.toDataURL("image/png");
    downloadURI("data:" + myImage, "preview.png");
  });
});
