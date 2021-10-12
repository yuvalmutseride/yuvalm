var context;
var osc;
var lfo_gain;
var osc_lfo;

function startAudiocontext() {
    context = new AudioContext();
    osc1 = context.createOscillator();
    osc_lfo = context.createOscillator();

    osc1.frequency.value = 441;
    osc_lfo.frequency.value = 2;

    lfo_gain = context.createGain();
    gain = context.createGain();

    osc_lfo.connect(lfo_gain);
    lfo_gain.connect(osc1.frequency);

    osc1.connect(gain);
    gain.connect(context.destination)

    osc_lfo.start();
    osc1.start();
}
function stopAudiocontext() {
    osc1.stop();
    osc_lfo.stop();

};

function changeGain(e){
    gain.gain.value = e.target.value;

};

function setPitch(e){
osc1.frequency.value = 100*e.target.innerHTML;

};

function setShape(e){
osc1.type = e.target.innerHTML;
};

function changeLFOGain(e){
    console.log(e.target.value);
    lfo_gain.gain.value = e.target.value;
};

function changeLFOPitch(e){

    osc_lfo.frequency.value = e.target.value;

};