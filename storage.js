let films;
class Storage{
    constructor(){}

    getFilmsFromStorage(){// Storage dan todoları almak.
        
    
        if(localStorage.getItem("films") === null){
            films=[];
        }
        else{
            films=JSON.parse(localStorage.getItem("films"));
            
        }
        return films;
    }
    
    addFilmsToStorage(newFilm){
        films=this.getFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
        //Storage string olarak tuutuğu için verileri. Storage a atarken
        //JSON.stringify ile uyun hale getirdik. 
        console.log(newFilm)
        
    }

    deleteFilmFromStorage(deleteFilm){
        
        films=this.getFilmsFromStorage();
        
        films.forEach(function(film,index){
           if (film.title===deleteFilm) {
               
            films.splice(index,1);
           
          
           }
            
        });
        localStorage.setItem("films",JSON.stringify(films));
    }


    deleteAllFilmFromStorage(){
        localStorage.removeItem("films");
    }
}