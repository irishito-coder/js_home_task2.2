let time = parseInt(prompt("Введите время в часах (от 0 до 23):"));

switch (true) {
    case (time >= 0 && time <= 6):
        alert(time + " часа ночи");
        break;
    case (time >= 7 && time <= 10):
        alert(time + " часов утра");
        break;
    case (time >= 11 && time <= 17):
        let afternoonHour = time - 12;
        alert(afternoonHour + " часа дня");
        break;
    case (time >= 18 && time <= 23):
        let eveningHour = time - 12;
        alert(eveningHour + " часов вечера");
        break;
    default:
        alert("Введите корректное значение времени (от 0 до 23).");
}
