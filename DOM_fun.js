<article>
    <section class="article__section article__header smallText">
        Welcome to Nashville Software School
    </section>

    <section class="article__section article__body">
        We are ecstatic that you chose us to guide you through your journey to being a software developer.
    </section>

    <section class="article__section article__footer">
        Contact us at info@nashvillesoftwareschool.com
    </section>
</article>

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEl = document.querySelector(".article__section")

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll(".article__section")
console.log("All Sections".sectionEl)
// NodeList(3)
// 0 : section.article__section.article__header
// 1 : section.article__section.article__body
// 2 : section.article__section.article__footer