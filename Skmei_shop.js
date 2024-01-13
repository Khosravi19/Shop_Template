const button = document.querySelector("#button_Admin");
const div = document.querySelector("#div_Admin");

async function admin() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/2`
    );
    const admin_info = await response.json();
    if (!response.ok) {
      throw new Error(`error :${response.status}`);
    }
    let output = `
            <div class="Info"> 
                <p> Name  : ${admin_info.name}</p>             
                <p> Phone : ${admin_info.phone}</p>
                <p> Email : ${admin_info.email}</p>
            </div>`;

    div.innerHTML = output;
  } catch (error) {
    console.log("User details could not be fetched.");
  }
}

button.addEventListener("focus", function () {
  admin();
});

button.addEventListener("blur", function () {
  div.innerHTML = "";
});
