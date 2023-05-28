const options = {
    bottom : '64px',
    right : '12px',
    left : '12px',
    time : '0.5s',
    mixColor : '#fff',
    backgroundColor : '#fff',
    buttonColorDark : '#100f2c',
    buttonColorLight : '#fff',
    saveInCookies : false,
    label : '<ion-icon name="invert-mode-outline" style="font-size: 18px; color: white;"></ion-icon><span style="font-family: Montserrat;">Dark Mode</span>'

}

const darkmode = new Darkmode(options);
darkmode.showWidget();

// For Preloader

var preloader = document.getElementById('loading');
        function myFunction(){
            preloader.style.display = 'none';
        }

// For Sliding Images in Flipkart

var slideImg = document.getElementById("slideImg");
        
        var img = new Array(
            "C:/Users/Akash/Python/CSS/PROJECT 1 (E-Commerce Website)/img/Virat2.png",
            "C:/Users/Akash/Python/CSS/PROJECT 1 (E-Commerce Website)/img/Virat3.png",
            "C:/Users/Akash/Python/CSS/PROJECT 1 (E-Commerce Website)/img/Virat4.jpg",
            "C:/Users/Akash/Python/CSS/PROJECT 1 (E-Commerce Website)/img/Virat5.png",
            "C:/Users/Akash/Python/CSS/PROJECT 1 (E-Commerce Website)/img/Virat.png"

        );
        var len = img.length;
        var i = 0;
        function slider(){
            if (i > len-1){
                i=0
            }
            slideImg.src = img[i];
            i++;
            setTimeout('slider()',3000);
        }
