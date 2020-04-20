const title = "Brian Cravens"
const titleChange = document.querySelector(".article__header")
titleChange.textContent = `Welcome to the ${title} blog`

const articleHeaderImportant = document.querySelectorAll(".article__header")
for (let i = 0; i< articleHeaderImportant.length; i++){

    articleHeaderImportant[i].classList.add("important")
}

const removeDash = document.querySelector(".dashed");
removeDash.classList.remove('dashed');

const goldFooter = document.querySelector(".article__footer");
goldFooter.classList.add ("goldenrod");

