
window.onscroll = function() {
    const em = document.querySelector('body').style.fontSize;
    const header = document.querySelector('header');
    var top = window.scrollY;
    if ( top > 100 && top < ( 1*window.innerHeight - 4.1*em)){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}