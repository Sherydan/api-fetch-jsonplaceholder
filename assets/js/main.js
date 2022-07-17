const listUsers = async () => {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();


    let content = ``;

    users.forEach( (user, index) => {
        content += `
        <div class="col-md-3">

        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">${user.email}</p>
              <a href="${user.website}" class="btn btn-primary">${user.website}</a>
            </div>
          </div>

    </div>`;

    document.querySelector("#productsRowContainer").innerHTML = content;
    });
}

window.addEventListener("load", function () {
    console.log("documento cargado");
    listUsers()
});