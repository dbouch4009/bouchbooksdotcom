//Scripts here
//import hype from '../resources/hype';
var hypeIndex = 0;
var hype = [
    "\"The author has disclosed in an intuitive, visceral style the experience and wisdom it has taken this pediatrician thirty-five years of clinical practice to acquire.\" \n -Dr. Anthony Kovatch, MD",
    "\"In summary, this debut novel entertains and educates in a positive and ultimately satisfying way, and is free of much of the puerile nonsense that afflicts much of current fiction.\" \n - Harry, Amazon.com Review",
    "\"We live in a society where discussing mental illness is frowned upon. I think it's time to change that, and this book is a great way to start!\" \n -Pamela, Amazon.com Review",
    "\"I would recommend this book to everyone, but especially those with an interest in psychology, education, or counseling.\" \n -Caitlin, Amazon.com Review \""
]
var hypeCount = hype.length;

var reviews = [
    ""
]

function nextHype(index){
    console.log(hype[hypeIndex]);

    if(index >= hypeCount){
        hypeIndex = 0;
    }

    const myEle = document.getElementById("mtc-hype");
    
    myEle.innerText = hype[hypeIndex];
    //myEle.classList.remove('animated','fadeOutRight');
    
    myEle.classList.add('animated','fadeInLeft');

    setTimeout(() => {
        myEle.classList.remove('animated','fadeInLeft');    
    }, 1000);  

    setTimeout(() => {
        hypeIndex++;
        //myEle.classList.add('animated','fadeOutRight');        
        nextHype(hypeIndex);
    }, 8000);    
}