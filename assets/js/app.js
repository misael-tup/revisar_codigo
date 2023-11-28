const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); // Se agregó un . para indicar que es una clase
const $b = document.querySelector(".blog"); // Se cambió a . en vez de #
const $l = document.querySelector(".location"); // Se agregó en el HTML

async function displayUser(username) {
  // Se agregó la palabra async porque se estaba usando await
  $n.textContent = "cargando...";
  try {
    //Se agrega try
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Se convierte el tipo de dato
    console.log(data);
    $n.textContent = "${data.name}";
    $b.textContent = "${data.blog}";
    $l.textContent = "${data.location}";
  } catch (error) {
    //se agrega catch
    handleError(error);
  }
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
