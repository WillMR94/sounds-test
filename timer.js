const playButton=document.querySelector('.play')
const playOn=document.querySelector('.playOn')
const stopButton=document.querySelector('.stop')
const addButton=document.querySelector('.add')
const subButton=document.querySelector('.sub')
const page=document.querySelector('.page')
const lightButton=document.querySelector('.lightMode')
const nightButton=document.querySelector('.nightMode')
const svd1=document.querySelector('.svd1')
const svd2=document.querySelector('.svd2')
const svd3=document.querySelector('.svd3')
const svd4=document.querySelector('.svd4')
const point=document.querySelector('.point')
const forestButton=document.querySelector('.forestCard')
const rainButton=document.querySelector('.rainCard')
const coffeButton=document.querySelector('.coffeCard')
const fireButton=document.querySelector('.fireCard')
const forestButtonON=document.querySelector('.forestCardON')
const rainButtonON=document.querySelector('.rainCardON')
const coffeButtonON=document.querySelector('.coffeCardON')
const fireButtonON=document.querySelector('.fireCardON')
const forestAudio =new Audio ("./audio/Floresta.wav")
const rainAudio =new Audio ("./audio/Chuva.wav")
const coffeAudio =new Audio ("./audio/Cafeteria.wav")
const fireAudio =new Audio ("./audio/Lareira.wav")
const alarm = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
let min=document.querySelector('.min')
let sec=document.querySelector('.sec')
let minute = Number(min.textContent)

function add(){
  minute = minute + 5;
  min.textContent=String(minute).padStart(2,'0')
}

function sub(){
  if (minute >= 5){
  minute = minute - 5;
  min.textContent=String(minute).padStart(2,'0')}
    else {
    minute = 0
    String(minute).padStart(2,'0')}
}

function alarmPlay(){
  alarm.play()
}

function forestAudioPlay(){
  forestAudio.loop=true
  forestAudio.play()
}

function forestAudioPause(){
  forestAudio.pause()
}

function rainAudioPlay(){
  rainAudio.loop=true
  rainAudio.play()
}

function rainAudioPause(){
  rainAudio.pause()
}

function coffeAudioPlay(){
  coffeAudio.loop=true
  coffeAudio.play()
}

function coffeAudioPause(){
  coffeAudio.pause()
}

function fireAudioPlay(){
  fireAudio.loop=true
  fireAudio.play()
}

function fireAudioPause(){
  fireAudio.pause()
}


function countsec(){
let minutes=Number(min.textContent)
let seconds=Number(sec.textContent)
  if(minutes==0 && seconds==0){
  alarmPlay()
  forestAudioPause()
  rainAudioPause()
  coffeAudioPause()
  fireAudioPause()
  forestButton.classList.remove('hide')
  forestButtonON.classList.add('hide')
  rainButton.classList.remove('hide')
  rainButtonON.classList.add('hide')
  coffeButton.classList.remove('hide')
  coffeButtonON.classList.add('hide')
  fireButton.classList.remove('hide')
  fireButtonON.classList.add('hide')
  playButton.classList.remove('hide')
  playOn.classList.add('hide')
  //som de alarme
  return
  }
    timerTimeOut=setTimeout(function(){
    if(minutes > 0 && seconds <= 0){
    seconds=60,
    minutes=minutes-1}
    seconds=seconds-1,
    min.textContent=String(minutes).padStart(2,'0')
    sec.textContent=String(seconds).padStart(2,'0')
    countsec()
    },1000)
}

function pauseTime (){clearTimeout(timerTimeOut)}

function stop(){
  min.textContent=String(minute).padStart(2,'0')
  sec.textContent=String(0).padStart(2,'0')
}

lightButton.addEventListener('click',function(){
  lightButton.classList.add('hide')
  nightButton.classList.remove('hide')
  nightButton.classList.add('darkMode')
  nightButton.classList.remove('button')
  page.classList.add('darkMode')
  playButton.classList.add('darkMode')
  playOn.classList.add('darkMode')
  stopButton.classList.add('darkMode')
  addButton.classList.add('darkMode')
  subButton.classList.add('darkMode')
  playButton.classList.remove('button')
  playOn.classList.remove('button')
  stopButton.classList.remove('button')
  addButton.classList.remove('button')
  subButton.classList.remove('button')
  min.classList.remove('textColor')
  min.classList.add('darkMode')
  point.classList.remove('textColor')
  point.classList.add('darkMode')
  sec.classList.remove('textColor')
  sec.classList.add('darkMode')
  svd1.classList.add('darkMode')
  svd1.classList.remove('fillLight')
  svd2.classList.add('darkMode')
  svd2.classList.remove('fillLight')
  svd3.classList.add('darkMode')
  svd3.classList.remove('fillLight')
  svd4.classList.add('darkMode')
  svd4.classList.remove('fillLight')
});

nightButton.addEventListener('click',function(){
  lightButton.classList.remove('hide')
  nightButton.classList.add('hide')
  page.classList.remove('darkMode')
  playButton.classList.remove('darkMode')
  playOn.classList.remove('darkMode')
  stopButton.classList.remove('darkMode')
  addButton.classList.remove('darkMode')
  subButton.classList.remove('darkMode')
  playButton.classList.add('button')
  playOn.classList.add('button')
  stopButton.classList.add('button')
  addButton.classList.add('button')
  subButton.classList.add('button')
  min.classList.add('textColor')
  min.classList.remove('darkMode')
  point.classList.add('textColor')
  point.classList.remove('darkMode')
  sec.classList.add('textColor')
  sec.classList.remove('darkMode')
  svd1.classList.remove('darkMode')
  svd1.classList.add('fillLight')
  svd2.classList.remove('darkMode')
  svd2.classList.add('fillLight')
  svd3.classList.remove('darkMode')
  svd3.classList.add('fillLight')
  svd4.classList.remove('darkMode')
  svd4.classList.add('fillLight')
});


playButton.addEventListener('click',function(){
  playButton.classList.add('hide')
  playOn.classList.remove('hide')
  countsec()
});

playOn.addEventListener('click',function(){
  pauseTime()
  playButton.classList.remove('hide')
  playOn.classList.add('hide')
});

stopButton.addEventListener('click',function(){
  stop()
});

addButton.addEventListener('click',function(){
  add()
});

subButton.addEventListener('click',function(){
  sub()
})

forestButton.addEventListener('click',function(){
  forestAudioPlay()
  forestButton.classList.add('hide')
  forestButtonON.classList.remove('hide')
})

forestButtonON.addEventListener('click',function(){
  forestAudioPause()
  forestButton.classList.remove('hide')
  forestButtonON.classList.add('hide')
})

rainButton.addEventListener('click',function(){
  rainAudioPlay()
  rainButton.classList.add('hide')
  rainButtonON.classList.remove('hide')
})

rainButtonON.addEventListener('click',function(){
  rainAudioPause()
  rainButton.classList.remove('hide')
  rainButtonON.classList.add('hide')
})

coffeButton.addEventListener('click',function(){
  coffeAudioPlay()
  coffeButton.classList.add('hide')
  coffeButtonON.classList.remove('hide')
})

coffeButtonON.addEventListener('click',function(){
  coffeAudioPause()
  coffeButton.classList.remove('hide')
  coffeButtonON.classList.add('hide')
})

fireButton.addEventListener('click',function(){
  fireAudioPlay()
  fireButton.classList.add('hide')
  fireButtonON.classList.remove('hide')
})

fireButtonON.addEventListener('click',function(){
  fireAudioPause()
  fireButton.classList.remove('hide')
  fireButtonON.classList.add('hide')
})
