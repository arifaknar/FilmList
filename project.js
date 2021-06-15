const form = document.querySelector("#film-form");
const film_title = document.querySelector("#title");
const film_director = document.querySelector("#director");
const film_url = document.querySelector("#url");
const secondCard = document.querySelectorAll(".card-body")[1];
const clearAllFilms=document.querySelector("#clear-films");

console.log(secondCard);

//UI sınıfından ui adında bir obje türettik.
const ui = new UI();

//Storage objesinden storage nesnesi türettik
const storage = new Storage();

//Tüm eventleri yükleme
eventListeners();

//Tüm Eventler
function eventListeners() {
  form.addEventListener("submit", addFilm);

  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });

  secondCard.addEventListener("click", deleteFilm);
  clearAllFilms.addEventListener("click",function(){
      storage.deleteAllFilmFromStorage();
      ui.clearAllFilms()
  })
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmToFromUi(e.target);
    storage.deleteFilmFromStorage(
    e.target.parentElement.previousElementSibling.previousElementSibling.textContent
  );
  }

  
}
function addFilm(e) {
  const title = film_title.value;
  const director = film_director.value;
  const url = film_url.value;

  if (title === "" || director === "" || url === "") {
    const message =
      "Lütfen gerekli alanları kontrol ederek yeniden doldurunuz.";
    ui.displayMessage(message, "danger");
  } else {
    const newFilm = new Film(title, director, url);
    const message = "Yeni filminiz başarıyla eklendi. Tebrikler :)";
    ui.addFilmToUi(newFilm); //Arayüze film Ekleme
    storage.addFilmsToStorage(newFilm);
    ui.clearInputs(film_title, film_director, film_url);
    ui.displayMessage(message, "success");
  }

  e.preventDefault();
  /* Submit işleminden önce fonksiyona yazdığımız olayların gerçekleşmesi için
    bu fonksiyon kullanılır.*/
}
