function updateContdown() {
    const countdown = document.getElementById("countdown")

    const newYear = new Date("January 1, 2025 00:00:00")
    const now = new Date()
    const time = newYear - now

    const day = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor(time / 1000 % 60)

    console.log(seconds)
    console.log(minutes)
    console.log(hours)
    console.log(day)

    countdown.innerHTML = `${day}_Днів ${hours}_Часів ${minutes}_хвилин ${seconds}_Секунд`


    let message = "";
    if (time <= 0) {
        message = "З Новим Роком!";
    } else if (day <= 1) {
        message = "Наближається Новий рік!";
    } else {
        message = `До Нового року залишилось ${day} днів!`;
    }
    document.getElementById('message').innerHTML = message;
}



 function createSnowFlakes() {

  for (let i = 0; i < 50; i++) {
    const snowFlake = document.createElement("div")
    snowFlake.innerHTML = "❄️🤩😎😎🤩❄️"
    snowFlake.style.animationDuration = `${Math.random() * 10 + 5}s` 
    snowFlake.stayle.left = `${Math.random() * 100}%`
    // snowFlake.stayle.fontSize = `${}`
    document.body.appendChild(snowFlake)
  }
} 


  
cetInterval(updateContdown, 1000)
createSnowFlakes()





