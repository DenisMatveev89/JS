//Работа с переменными
//var num = 1.45;
//var bool = true;
//var string = "string";
////var name = prompt("Как вас зовут?");
////console.log("Ваше имя: " + name);
//var firstNum = 14;
//var secindNum = 23;
//document.write("Результат: " + firstNum + secindNum);
//document.write("<br> Результат: ", firstNum + secindNum);
//document.write("<br> PI: ", Math.PI);
//document.write("<br> PI: ", Math.E);
//
//
////МАССИВЫ   
//var colors = ["red", "green", "blue"];
//document.write("<br>" + colors[0]);
////второй метод записи массивов
//var colors = new Array("red", "blue", "green");
//document.write("<br>" + colors[1]);
//colors[3]="grey";//добавляем элемент в массив
//document.write("<br>" + colors[3]);
//colors.push ("black");//добавляем элемент в массив
//document.write("<br>" + colors[4]);
//
////ЦИКЛЫ
//for (var i=0; i<=10; i++){
//    document.write("<br>" + i);
//}
//
//var i = 0;
//while (i<10){
//    i++;
//    document.write("<br>" + i);
//}
//
////вывод содержимого массива в цикле
////var colors = new Array("red", "blue", "green");
////document.write("<br> Вывод из массива в цикле <br>");
////for (var i=0; i<colors.length; i++){
////    document.writeln(colors[i]);
////}
//
////УСЛОВИЯ
//if (1==1){
//    document.write("1=1");
//}

//ФУНКЦИИ
function write (word){
    document.write(word);
}

write ("Hello");
write ("<br>World<br>");

function summ (a, b){
    return a + b;
}
document.write (summ(25, 25));

//ОБЪЕКТЫ
var person = {
    firstName: 'Den',
    age: 30,
    children:['Kate', 'Sasha', 'Dasha'],
    adress: {
        city: 'spb',
        street: 'Leninsky st.'
    },
    NameAge: function(){
        return this.firstName + " age is: " + this.age;
    }
}
console.log(person.firstName);
console.log(person.adress.city);
console.log(person.NameAge());



console.log("Детей: " + person.children.length);
console.log("Их зовут: ");

for (var i=0; i < person.children.length; i++){
    console.log(person.children[i]);
}



function Fruit (color, shape){ //функция Fruit
    this.color = color; //Параметры функции
    this.shape = shape;
}

var melon = new Fruit('Yellow', 'Round');//создаем новый объект и сразу объявляем параметры
var apple = new Fruit('Green', 'Round');


//var apple = new Object();
//apple.color = 'green';
//apple.shape = 'round';

apple.describe = function(){   //Функция вывода заданных параметров заданного объекта
    return 'An apple is ' + this.shape + ' and ' + this.color;
}
console.log(apple.describe());

melon.describe = function(){
    return 'A melon is ' + this.shape + ' and ' + this.color;
}
console.log(melon.describe());

//пишем функцию изменения цывета текста по привязке к ID
//название функции changeColor, параметры newColor
//создаем переменную element и присваиваем ей элемент из html у которого
//ID называется нашем "text"
//далее функции changeColor меняем параметр newColor на style.color - blue или red
function changeColor(newColor){
    var element = document.getElementById("text");
    element.style.color = newColor;
}





