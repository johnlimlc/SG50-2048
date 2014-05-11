
var sequence = [

    {
        content: 'Enhanced by<a href="http://www.facebook.com/johnlimlc" target="_blank">John Lim</a>'+
        '<br>Specially for <a href="http://changcheng.com.sg" target="_blank">長城集团 Chang Cheng Group</a><br>'+
        '<br><small>Inspired by <a href="http://gabrielecirulli.com" target="_blank">2048 by Gabriele Cirulli</a>'+
        '<br>& based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a>'+
        '<br>& similar to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer</a></small>',
        id: 'credits',
        css: { left: 0, top: '400px' },
        animate: { top: '10px' },
        duration: 10000,
        easing: 'linear',
        pause: 10000
    },

    {
        selector: '#credits',
        animate: { opacity: 0 },
        duration: 2000,
        pause: 900
    },

    {
        content: '',
        id: 'instructions',
        css: { height: '300px', opacity: 0 }
    },

    {
        container: '#instructions',
        content: 'How to play:',
        css: { left: '0px', top: '16px', color: '#f5510a' },
    },

    {
        selector: '#instructions',
        animate: { opacity: 1 },
        duration: 2000,
        pause: 900
    },

    {
        container: '#instructions',
        content: 'Use your arrow keys to move the tiles.',
        css: { left: '0px', top: '52px', opacity: 0 },
        animate: { opacity: 1 },
        duration: 1200,
        pause: 500
    },

    {
        container: '#instructions',
        content: 'When two tiles with the same number touch',
        css: { left: '0px', top: '90px', opacity: 0 },
        animate: { opacity: 1 },
        duration: 1200,
        pause: 500
    },

    {
        container: '#instructions',
        content: 'they merge into one!',
        css: { left: '0px', top: '118px', opacity: 0 },
        animate: { opacity: 1 },
        duration: 1200,
        pause: 500
    },

    {
        container: '#instructions',
        content: 'Join the numbers and get to the <big>2048</big> tile!',
        css: { left: '0px', top: '156px', opacity: 0 },
        animate: { opacity: 1 },
        duration: 1200,
        pause: 500
    },

    {
        selector: '#instructions',
        animate: { opacity: 0 },
        duration: 1200,
        pause: 500
    },

    {
        delete: '#instructions',
    },

    {
        content: '',
        id: 'bg',
        css: { top: 0, left: 0, width: '248px', height: '186px', 'background-color': '#000000', opacity: 0 },
        animate: { opacity: 1 },
        duration: 300
    },

    function(seq) {
        $('#about-box').css({ 'background-color': '#000000' });
        $('#bg').remove();
        seq.next_cue();
    },

    {
        content: '',
        id: 'achievements',
        css: { height: '180px' },
        pause: 800
    },

    {
        container: '#achievements',
        content: 'Once you have achieved the magic number <big>2048</big>',
        css: { left: '-150px', top: '22px', color: '#f5510a' },
        animate: { left: 0 },
        duration: 900,
        no_wait: true
    },

    {
        container: '#achievements',
        content: 'Take a picture of yourself and your achievement',
        css: { left: '150px', top: '56px', color: '#0d8d10' },
        animate: { left: 0 },
        duration: 900,
        no_wait: true
    },

    {
        container: '#achievements',
        content: 'And post a message with your contact on our',
        css: { left: '-150px', top: '90px', color: '#0050ff' },
        animate: { left: 0 },
        duration: 900,
        no_wait: true
    },

    {
        container: '#achievements',
        content: '<a href="http://www.facebook.com/changcheng.sg" target="_blank">facebook</a>',
        css: { left: '-150px', top: '110px', color: '#0050ff' },
        animate: { left: 0 },
        duration: 900,
        no_wait: true
    },

    {
        container: '#achievements',
        content: 'And we will send you a mystery gift!',
        css: { left: '180px', top: '154px', color: '#f00f0f' },
        animate: { left: 0 },
        duration: 900,
        pause: 10000
    },

    {
        selector: '#achievements',
        animate: { opacity: 0 },
        duration: 1600,
        pause: 800
    },

    {
        delete: '#achievements'
    },

    {
        content: '',
        id: 'bg',
        css: { top: 0, left: 0, width: '248px', height: '186px', 'background-color': '#44c735', opacity: 0 },
        animate: { opacity: 1 },
        duration: 300
    },

    function(seq) {
        $('#about-box').css({ 'background-color': '#44c735' });
        $('#bg').remove();
        seq.next_cue();
    },

    {
        content: '',
        id: 'challenge',
        css: { height: '180px' },
        pause: 800
    },

    {
        container: '#challenge',
        content: "Are",
        css: { left: '88px', top: '16px', 'font-family': '"Trebuchet MS", Verdana, sans-serif', 'font-size': '40px', 'font-weight': 'bold', opacity: 0 },
        animate: { opacity: 1 },
        duration: 100,
        pause: 600
    },

    {
        container: '#challenge',
        content: "You",
        css: { left: '40px', top: '23px', 'font-family': '"Times New Roman", Gerogia, serif', 'font-size': '76px', opacity: 0 },
        animate: { opacity: 1 },
        duration: 100,
        pause: 600
    },

    {
        container: '#challenge',
        content: "Ready",
        css: { left: '80px', top: '86px', 'font-family': '"Courier New", monospace', 'font-size': '40px', 'font-weight': 'normal', opacity: 0 },
        animate: { opacity: 1 },
        duration: 100,
        pause: 600
    },

    {
        container: '#challenge',
        content: "for the Challenge?",
        css: { left: '0px', top: '120px', 'font-family': '"Arial Black", sans-serif', 'font-size': '25px', 'font-weight': 'bold' },
        animate: { opacity: 1 },
        duration: 100,
        pause: 600
    },

    {
        selector: '#challenge',
        animate: { opacity: 0 },
        duration: 1600,
        pause: 800
    },

    {
        content: '',
        id: 'snapshot',
        css: {width: '200px', height: '200px', top: '-200px', left: '10px', opacity: 0 },
        animate: {opacity: 1},
        duration: 500
    },

    {
        selector: '#snapshot',
        animate: {top: 20},
        duration: 500,
        no_wait: true
    },

    {
        content: 'All the Best<br>To YOU!',
        id: 'wishes',
        css: {opacity: 0},
        animate: {opacity: 1},
        duration: 800,
        pause: 5000
    },

    function(seq) {
        seq.next_cue();
        $('#about-box').css({ 'background-color': '#eeeeee' });
        $('#about-box').empty().titleSequence(sequence);
    }

];

$('#about-box').empty().titleSequence(sequence);
