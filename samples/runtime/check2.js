const host = ["cdn", "animenewsnetwork", "com"];
fetch("https://" + host.join(".") + "/encyclopedia/api.xml?anime=1")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    const item = data.querySelector("anime");
    const name = item.getAttribute("name");
    const genres = Array.from(item.querySelectorAll('info[type="Genres"]')).map(
      (genre) => genre.textContent,
    );

    document.body.innerHTML += `<h1>${name}</h1>`;
    document.body.innerHTML += `<p>${genres.join(", ")}</p>`;
  });
