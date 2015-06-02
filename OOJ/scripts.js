/**
 * Created by callie on 6/1/15.
 */
/*
var imageArr = ['img/bigeyes.jpg', 'img/catmilk.jpg', 'img/catwithglasses.jpeg', 'img/cutecat.jpg', 'img/fivekiteems1.jpg'];
var elem = document.getElementById('catPictures');
elem.addEventListener('click', function(imageArr){
    for (i = 0; i <imageArr.length; ++i) {
        var an_image = new Image();
        elem.src = imageArr[i];
    }
}, false);*/


$(document).ready(function(){
    $('.PicOfCats').click(function() {
        $('.catPictures').attr('src', 'img/bigeyes.jp');
    });
});