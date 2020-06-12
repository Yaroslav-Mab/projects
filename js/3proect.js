/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let answers;

function start() {

    answers = +prompt('Сколько фильмов вами просмотрено?', '');

    while (answers == '' || answers == null || isNaN(answers)) {
        answers = +prompt('Сколько фильмов вами просмотрено?', '');

    }
}

start();

const personalMovieDB = {
    count: answers,
    movies:{},
    actors:{},
    genre:[],
    privat:false
};
          console.log(personalMovieDB);
        
function rememberFilms() { 

    let i = 0;
      while (i < 2) {

    const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько его оцените?', '');
          i++;

      if (a != null && b != null && a != '' && b != '' && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log('done');

    }  else {
    
      console.log('error');
      i--; }
    }
    
}

rememberFilms();

    function detectPersonal() {

        if (personalMovieDB.count < 10) {

            console.log ("Просмотрено довольно мало фильмов");
    
          } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30  ) {

            console.log ("Вы классический зритель"); 
          } else if (personalMovieDB.count > 30) {
            console.log ("Вы киномен");
            
          } else { console.log ('error');
    }
 }

 detectPersonal();

 function ShowMyDB (hidden) {

    if (!hidden) {

        console.log(personalMovieDB);

    }
 }
 ShowMyDB(personalMovieDB.privat);

 function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genre[i - 1] = genres;
        
 }
}
writeYourGenres();