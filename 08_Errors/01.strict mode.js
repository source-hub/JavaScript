
// С помощью директивы "use strict" можно включить строгий режим выполнения
// JavaScript кода. В этом режиме некоторый код выдаёт ошибки, которые без
// этого режима были бы проигнорированы. Директиву можно использовать как
// на уровне файла, так и на уровне функции. Например, в следующей функции
// в цикле for переменная counter не объявляется с помощью let'а, но без
// строгого режима была бы создана глобальная переменная и программа продолжала
// бы выполняться дальше:
//
//    function canYouSpotTheProblem() {
//        "use strict";
//        for (counter = 0; counter < 3; ++counter)
//            console.log(counter);
//    }
//    canYouSpotTheProblem();

// Также в строгом режиме при вызове функции без new связывание this внутри
// неё будет хранить значение undefined. В нестрогом режиме this указывало бы
// на объект в глобальной области видимости, т.е. на объект, свойствами
// которого являются глобальные связывания. Пример:

function Person(name) {
    this.name = name;
}

// Забыли указать new.
let ferdinand = Person("Ferdinand");

// Будет выведено "Ferdinand" хотя мы и не создавали явно связывание name в
// глобальной области видимости. В строгом режиме была бы выведена ошибка.
console.log(name); // Ferdinand
