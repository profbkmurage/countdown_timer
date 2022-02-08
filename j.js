
function countdown(){
	let music = false;
	let myaudio = document.getElementById('myaudio');
	let now =new Date();
	let eventDate = new Date(2021, 3, 24,15 ,15);

	let currentTime= now.getTime();
	let eventTime = eventDate.getTime();

	let remTime= eventTime- currentTime;
	if(remTime==0){
		console.log('time up')
        }	let s= Math.floor(remTime/1000);
	let m= Math.floor(s/60);
	let h= Math.floor(m/60);
	let d= Math.floor(h/24);


    h%=24;
    m%=60;
    s%=60;

    h= (h<10) ? "0"+ h: h;
    m= (m<10) ? "0"+ m: m;
    s= (s<10) ? "0"+ s: s;


    document.getElementById("days").innerText=d;
    document.getElementById("hours").innerText=h;
    document.getElementById("minutes").innerText=m;
    document.getElementById("seconds").innerText=s;
	

		// function playmusic(){
		// 	myaudio.play();
		// }
	    setTimeout(countdown,1000)
    
}


countdown();

const deg = 6;
		const hr = document.querySelector('#hr');
		const mn = document.querySelector('#mn');
		const sc = document.querySelector('#sc');


		setInterval(()=> {
			let day = new Date();
			let hh = day.getHours()*30;
			let mm = day.getMinutes()*deg;
			let ss = day.getSeconds()*deg;

			hr.style.transform =`rotateZ(${(hh)+(mm/12)}deg)`;
			mn.style.transform = `rotateZ(${mm}deg)`;
			sc.style.transform = `rotateZ(${ss}deg)`;
		})
		