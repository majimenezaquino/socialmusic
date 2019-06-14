document.addEventListener("DOMContentLoaded",function(){
const btnPlayer= document.getElementById("btn-player")
  	const btnVolumen= document.getElementById("btn-volumen")
  	const labelDuration= document.getElementById("label-duration")
  	const labelCurrentime= document.getElementById("label-corentime")
  	const barVolumen= document.getElementById("bar-volumen")
  	const barCurrent= document.getElementById("bar-current")
  	const btnPoint= document.getElementById("btn-point")
  	const containerList= document.getElementById("playlist_wrapper")

   const  wavesurfer =  WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
	progressColor: 'red',
	barWidth: 3,
	height:32,
	normalize:true,
	scrollParent: false
}) 
  wavesurfer.load('http://localhost:3001/api/files/music/5baad1a1c5144810cff35cf0.mp3');

  //cuando cargue el audio
  wavesurfer.on('ready', function () {
  	wavesurfer.setVolume(0.5);
  	btnPlayer.addEventListener('click',togglePlayer,false)
  	btnVolumen.addEventListener('click',toggleMute,false)
  	barVolumen.addEventListener("click",getDitancaia,false)
});

//funcion play and pause
function togglePlayer(evnet){
	evnet.preventDefault();
	wavesurfer.playPause();
	containerList.classList.toggle('active_play')
	//cambiar icon
	if(wavesurfer.isPlaying()){
		(this).innerHTML='<i class="zmdi zmdi-stop"></i>';
		
		setCourrentimeLabel()
	}else{
		(this).innerHTML='<i class="zmdi zmdi-play"></i>'
		
	}
}

function toggleMute(evnet){
	evnet.preventDefault();
	wavesurfer.toggleMute()
	if(wavesurfer.getMute()){
		
			(this).innerHTML='<i class="zmdi zmdi-volume-off"></i>';
		
	}else{
		(this).innerHTML='<i class="zmdi zmdi-volume-up"></i>'
	}
	
}

function getDurationMinutes(){
	let minutes =wavesurfer.getDuration()/60;
	return parseFloat(minutes).toFixed(2);
}

//set duration
function setCourrentimeLabel(){
	let currentTime;
	labelDuration.innerHTML = getDurationMinutes();
	setInterval(function(){
		currentTime =	parseFloat(wavesurfer.getCurrentTime()/60).toFixed(2);
		labelCurrentime.innerHTML =currentTime;

	},1000)
}

function getDitancaia(event){
	event.preventDefault()
	//let distanceX =event.pageX;
	let distanceX =event.pageX -(this).offsetLeft;
	if(distanceX >100){
		distanceX =100;
	}else if(distanceX <8){
		distanceX=8;
	}
	
	btnPoint.style.marginLeft= (distanceX-9)+'%';
	barCurrent.style.width= distanceX+'%';
    wavesurfer.setVolume(distanceX/100);
    if(wavesurfer.getVolume()>=0.5){
			btnVolumen.innerHTML='<i class="zmdi zmdi-volume-up"></i>';
		}else{
			btnVolumen.innerHTML='<i class="zmdi zmdi-volume-down"></i>';
	}

}

// function togglePlayList(){

// }
});