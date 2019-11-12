//Scripts here
//import hype from '../resources/hype';
var hypeIndex = 0;
var hype = [
    "\"No Delight In Fools is a fascinating and intriguing story of a post-apocalypse community that beautifully captures the fundamental tension between man's moral and material prospering under liberty and his destructive longing for security.\" \n -Dr. Per L. Bylund, the John F. Baugh Center Research Professor in Entrepreneurship, Baylor University and mises.org contributor",
    "\"An absolutely riveting story, Bouch reminds us all that the dangers of trading liberty for security will still be an incredibly significant issue to humanity in a post-collapse world.\" \n-Ryan Brooks, The Sound of Freedom Radio",
    "\"...but suffice to say, one can learn a lot about humanity in this book - or, at the least, it will force one to consider such topics.\" \n-Andy Hoffman, MilesFranklin Blog",
    "\"In his latest book, No Delight In Fools, Damian has written a fascinating and creative fictional account of everyday life in a post-fiat currency world.\" \n-Jerry Robinson, author of \"Bankruptcy of Our Nation\""
]

var mtcHype = [
    "\"The author has disclosed in an intuitive, visceral style the experience and wisdom it has taken this pediatrician thirty-five years of clinical practice to acquire.\" \n -Dr. Anthony Kovatch, MD",
    "\"In summary, this debut novel entertains and educates in a positive and ultimately satisfying way, and is free of much of the puerile nonsense that afflicts much of current fiction.\" \n - Harry, Amazon.com Review",
    "\"We live in a society where discussing mental illness is frowned upon. I think it's time to change that, and this book is a great way to start!\" \n -Pamela, Amazon.com Review",
    "\"I would recommend this book to everyone, but especially those with an interest in psychology, education, or counseling.\" \n -Caitlin, Amazon.com Review \""
]
var hypeCount = hype.length;

var reviews = [
    ""
]

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click',function(e){
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior:'smooth'
//         });
//     });
// });

function nextHype(index){
    //console.log(hype[hypeIndex]);

    if(index >= hypeCount){
        hypeIndex = 0;
    }

    const myEle = document.getElementById("ndif-hype");
    const mtcEle = document.getElementById("mtc-hype");
    
    myEle.innerText = hype[hypeIndex];
    mtcEle.innerText = mtcHype[hypeIndex];
    //myEle.classList.remove('animated','fadeOutRight');
    
    myEle.classList.add('animated','fadeInLeft');
    mtcEle.classList.add('animated','fadeInLeft');

    setTimeout(() => {
        myEle.classList.remove('animated','fadeInLeft');    
        mtcEle.classList.remove('animated','fadeInLeft');
    }, 1000);  

    setTimeout(() => {
        hypeIndex++;
        //myEle.classList.add('animated','fadeOutRight');        
        nextHype(hypeIndex);
    }, 8000);    
}

window.onscroll = function() {
    stickyFunction();
}

function stickyFunction(){
    
    var navbar = document.getElementById("navbar");
    var navbarSticky = document.getElementById("navbarSticky");
    var stickyInterval = navbar.offsetTop + 250;
    navbarSticky.classList.add("sticky");
    navbarSticky.classList.remove("invisible");
    //console.log(stickyInterval);
    if(window.pageYOffset >= stickyInterval){
        navbarSticky.classList.remove("invisible");
       
    } else{
        navbarSticky.classList.add("invisible");       
    }
}
