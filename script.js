const links = [
    { naam: "instagram", link: "https://www.instagram.com/the_real_nols/", color: "#ee2a7b", icon:"fa-brands fa-instagram" },
    { naam: "steam", link: "https://steamcommunity.com/profiles/76561199086952972/", color: "#1b2838", icon:"fa-brands fa-steam" },
    { naam: "reddit", link: "https://www.reddit.com/user/Dramgamermurf100000/", color: "#ff6314", icon:"fa-brands fa-reddit"},
    { naam: "github", link: "https://github.com/TheRealN0ls/portfolio", color: "#0d74e7", icon:"fa-brands fa-github"}
];
let html = "";
links.forEach(element => {
    html +=
        `
        <div class="container-element">
        <a target="_blank" href="${element.link}" style="background-color: ${element.color}"><i class="${element.icon}"></i></a>
        <h1>${element.naam}</h1>
        </div>
        `;
});
document.getElementById('linksContainer').innerHTML = html;
