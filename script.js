const you = ['You', 'Your'];
const yourWords = ['day', 'romance', 'life', 'academic life'];
const youWords = ['will', 'will not'];
const lastYourWords = ['will suck', 'will be amazing'];
const lastYouWords = ['be happy', 'be sad', 'be loved'];

const run = () => {
    let string = '';
    let youYour;
    let randomInt = Math.floor(Math.random() * 2);
    if(randomInt === 0) {
        youYour = false;
    } else {
        youYour = true;
    }

    if(youYour === false) {
        string = you[0] + ' ' + youWords[Math.floor(Math.random() * youWords.length)] + ' ' + lastYouWords[Math.floor(Math.random() * lastYouWords.length)];
    } else {
        string = you[1] + ' ' + yourWords[Math.floor(Math.random() * yourWords.length)] + ' ' + lastYourWords[Math.floor(Math.random() * lastYourWords.length)];
    }

    return string;
};

console.log(run());