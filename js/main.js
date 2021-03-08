const H_audio1 = new Audio('/audio/hod/Hod battle1.mp3');
const H_audio2 = new Audio('/audio/hod/Hod battle2.mp3');
const H_audio3 = new Audio('/audio/hod/Hod battle 3.mp3');

const Y_audio1 = new Audio('/audio/yesod/Yesod battle1.mp3');
const Y_audio2 = new Audio('/audio/yesod/Yesod battle2.mp3');
const Y_audio3 = new Audio('/audio/yesod/Yesod battle 3.mp3');

const M_audio1 = new Audio('/audio/Malkuth/Malkuth battle1.mp3');
const M_audio2 = new Audio('/audio/Malkuth/Malkuth battle2.mp3');
const M_audio3 = new Audio('/audio/Malkuth/Malkuth battle 3.mp3');

const R_audio1 = new Audio('/audio/kether/Kether battle1.mp3');
const R_audio2 = new Audio('/audio/kether/Kether battle2.mp3');

const floor_name= {Malkuth, Yesod, Hod, Roland};


function phase1() {
    M_audio1.play();
    M_audio1.loop = true;
    M_audio2.load();
    M_audio3.load();
}
function phase2() {

    M_audio2.play();
    M_audio1.loop = true;
    M_audio1.load();
    M_audio3.load();
}
function phase3() {

    M_audio3.play();
    M_audio1.loop = true;
    M_audio2.load();
    M_audio1.load();
}