let url = "https://api.github.com/users/paulreece";
let repos = "https://api.github.com/orgs/Momentum-Team-11/repos";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(
      "#head"
    ).innerHTML = `<img src= ${data.avatar_url}> Paul Reece`;
    document.querySelector("#user-name").innerHTML = `
    <p class="small"><strong>GitHub username:</strong> ${data.login} </p> `;
    document.querySelector("#html").innerHTML = `
    <p class="small"><strong>GitHubURL: </strong><a href=${data.html_url}>paul.reece</a> </p> `;
    document.querySelector("#location").innerHTML = `
    <p class="small"><strong>Location: </strong>${data.location} </p> `;
    return data.repos_url;
  })
  .then((reposUrl) => fetch(reposUrl))
  .then((res) => res.json())
  .then((data) => {
    for (let repo of data) {
      document.querySelector(
        "#repos"
      ).innerHTML += `<p class="repoitem"><i class="fa-solid fa-book"></i>    <a href=${repo.url}>${repo.name}</a></p>`;
    }
  });

// fetch(repos)
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.id === 451997958)
//       document.querySelector(
//         "#repos"
//       ).innerHTML += `<p><a href=${repo.url}>${repo.name}</a></p>`;
//   });
