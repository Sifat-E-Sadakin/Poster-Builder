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
});

getById("file-upload").addEventListener("change", () => {
  getById("image").style.display = "block";
  const file = getById("file-upload").files[0];
  getById("image").src = URL.createObjectURL(file);
});

getById("description-input").addEventListener("keyup", () => {
  getById("description").innerText = getById("description-input").value;
});

getById("download-btn").addEventListener("click", () => {
  
});
