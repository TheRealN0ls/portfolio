const links = [
    { naam: "instagram", link: "https://www.instagram.com/the_real_nols/", color: "red" },
    { naam: "reddit", link: "https://www.reddit.com/user/Dramgamermurf100000/", color: "orange"},
    { naam: "github", link: "", color: "blue"}
];
let html = "";
links.forEach(element => {
    html +=
        `
        <div class="container-element">
        <h1>${element.naam}</h1>
        <a target="_blank" href="${element.link}" style="background-color: ${element.color}">${element.naam}</a>
        </div>
        `;
});
document.getElementById('linksContainer').innerHTML = html;
