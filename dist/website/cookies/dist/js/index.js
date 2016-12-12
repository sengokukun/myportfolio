$(function() {
    //sp時ヘッダーナビゲーションメニュー
    $('.togglebutton').click(function() {
        $('.Headnavi').slideToggle();
    });

    //PCabout表示
    if (window.matchMedia('(min-width: 1025px)').matches) {
        $('.Cloudbox').hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 730) {
                $('.Cloudbox').fadeIn();
            }
        });
    } else {
        $('.Cloudbox').show();
    }

    //goto-topボタン
    $('.Gototop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Masterhead スクロール隠し表示
    var menuHeight = $(".Masterhead").height();
    var startPos = 0;
    $(window).scroll(function() {
        var currentPos = $(this).scrollTop();
        if (currentPos > startPos) {
            if ($(window).scrollTop() >= 200) {
                $(".Masterhead").css("top", "-" + menuHeight + "px");
            }
        } else {
            $(".Masterhead").css("top", 0 + "px");
        }
        startPos = currentPos;
    });
});

//googlemap
function googleMap() {
    var coordinate = new google.maps.LatLng(35.698651, 139.766582); /*座標の指定*/

    var mapOptions = {
        zoom: 18,
        center: coordinate,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('area-google-map'), mapOptions);

    var styleOptions = [{
        "stylers": [{
            "hue": "#fc973d"
        }]
    }];

    var styleType = new google.maps.StyledMapType(styleOptions);
    map.mapTypes.set('genius', styleType);
    map.setMapTypeId('genius');

    var icon = new google.maps.MarkerImage('dist/img/icon.png',
        new google.maps.Size(100, 100),
        new google.maps.Point(0, 0)
    );
    var markerOptions = {
        position: coordinate,
        map: map,
        icon: icon,
    };

    var marker = new google.maps.Marker(markerOptions);
}
