const infoMessage = document.querySelector("#card-message");
const filmList = document.querySelector("#films");
class UI {
  constructor() {}

  addFilmToUi(newFilm) {
    console.log(newFilm);

    filmList.innerHTML += `
    <tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" width="200" height="200"></td>
     <td>${newFilm.title}</td>
     <td>${newFilm.director}</td>
     <td><a  id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
    `; //Template Literal
  }

  deleteFilmToFromUi(filmTarget){
    filmTarget.parentElement.parentElement.remove();
  }

  displayMessage(message, messageType) {
    infoMessage.style.display = "none";
    infoMessage.innerHTML = `
        <div class="alert alert-${messageType}" role="alert">
        ${message}
      </div>
      `;
    infoMessage.style.display = "inline";
    setTimeout(function () {
      infoMessage.style.display = "none";
    }, 2000);
  }

  clearInputs(titleInput, directorInput, urlInput) {
    titleInput.value = "";
    directorInput.value = "";
    urlInput.value = "";
  }

  loadAllFilms(films) {
      films.forEach(film => {
          filmList.innerHTML+=`
          <tr >
     <td><img src="${film.url}" class="img-fluid img-thumbnail" width="200" height="200"></td>
     <td>${film.title}</td>
     <td>${film.director}</td>
     <td><a  id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
          `
          
      });
  }

  clearAllFilms(){
    if (confirm("Bütün filmleri silmek istediğinize emin misiniz?")) {
        while(filmList.firstElementChild!=null)
        {
            filmList.firstElementChild.remove();
        }
        
    }
}
}
