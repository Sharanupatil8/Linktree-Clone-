const shareButtons = document.querySelectorAll(".tile-share-button");
const shareLinktree = document.querySelector(".share-button");


async function copyLink(e) {
  e.preventDefault;
  const link = this.getAttribute("link");


  try {
    await navigator.clipboard.writeText(link);
    alert("Copy the text  " + link)
  } catch (err) {
    console.log(err)
  }
}

shareLinktree.addEventListener("click", copyLink)

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");

  try {
    await navigator.clipboard.writeText(link);
    alert("Copy the text  " + link)
  } catch (err) {
    console.log(err)
  }
}

shareButtons.forEach(btn => {
  btn.addEventListener("click", copyText)
})