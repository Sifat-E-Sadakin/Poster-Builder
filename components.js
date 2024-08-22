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

document;
