const getHours = () => {
    let relogio = document.getElementById('relogio')

    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    let hour = hours<10?`0${hours}` : hours
    let minute = minutes<10?`0${minutes}` : minutes
    let second = seconds<10?`0${seconds}` : seconds

    relogio.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
    getHours()
  }, 1000)