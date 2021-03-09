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

const floor_name= ["Malkuth", "Yesod", "Hod", "Roland"];
let floor = -1;


let audio1 ;
let audio2 ;
let audio3 ;

function move_left() {
    floor = floor - 1;
    sound_remover()
    alert(floor)
    now_floor_music(floor)
}
function move_right() {
    floor = floor + 1;
    alert(floor)
    now_floor_music(floor)
}
function sound_remover() {
        audio1.load(); audio2.load(); audio3.load();
    alert("1")

}
function now_floor_music(fl) {

    switch (fl) {
        case 0:
            audio1 = R_audio1;
            audio2 = R_audio2;
            audio3 = null;
            break;
        case 1:
            audio1 = M_audio1;
            audio2 = M_audio2;
            audio3 = M_audio3;
            break;
        case 2:
            audio1 = Y_audio1;
            audio2 = Y_audio2;
            audio3 = Y_audio3;
            break;
        case 3:
            audio1 = H_audio1;
            audio2 = H_audio2;
            audio3 = H_audio3;
            break;
        default:
            audio1 = R_audio1;
            audio2 = R_audio2;
            audio3 = null;
            break;
    }
}

let phase;
let background_img = document.getElementsByTagName("body");
let floor_now = document.getElementsByClassName("now_floor");
let start_s = document.getElementsByClassName("start_1")


function phase1() {
    phase = 1;
    audio_play1(phase);
}
function phase2() {
    phase = 2;
    audio_play2(phase);
}
function phase3() {
    phase = 3;
    audio_play3(phase);
}

function audio_play1(p) {
    audio1.play();
    audio1.loop = true;
    audio2.load();
    audio3.load();

}
function audio_play2(p) {
    audio2.play();
    audio2.loop = true;
    audio1.load();
    audio3.load();

}
function audio_play3(p) {
    audio3.play();
    audio3.loop = true;
    audio2.load();
    audio1.load();

}
function start() {
}