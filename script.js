let clock = () => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes(); // исправлено: добавлены скобки ()
            let seconds = date.getSeconds(); // исправлено: добавлены скобки ()

   hours = hours.toString().padStart(2, '0');
minutes = minutes.toString().padStart(2, '0');
seconds = seconds.toString().padStart(2, '0');

            document.getElementById("clockBlock").innerHTML = (hours + ":" + minutes + ":" + seconds);
}
        clock();
        setInterval(clock, 1000)