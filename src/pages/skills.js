class Skills {

    constructor() {
        this.initializeComponent();
    }

    initializeComponent() {
        $('#skill').append(this.getAllSkills());
    }

    skillList = [
        {
            title: enumSkills.html,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png',
        },
        {
            title: enumSkills.css,
            image: 'https://i2.wp.com/majalasna.org/wp-content/uploads/2016/03/css-logo.png?ssl=1',
        },
        {
            title: enumSkills.bootstrap,
            image: 'data:image/png;base64,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',
        },
        {
            title: enumSkills.angularMaterial,
            image: 'https://image.winudf.com/v2/image/YW5ndWxhcjUuYW5ndWxhcl9tYXRlcmlhbC5hbmd1bGFyNi5hbmd1bGFyLm1hdGVyaWFsLmRlc2lnbi5jb21wb25lbnRzLmxlYXJuLmFwcHJlbmRyZS5hbmd1bGFyLmpzLnR1dG9yaWFsLmlvbmljMy5vbWVnYWRldl9zY3JlZW5fNV8xNTI5MzI0MTc5XzA1Ng/screen-5.jpg?fakeurl=1&type=.jpg',
        },
        {
            title: enumSkills.materialize,
            image: 'https://pbs.twimg.com/profile_images/532662364613525504/GN559Lfb_400x400.png',
        },
        {
            title: enumSkills.vanilla,
            image: 'https://miro.medium.com/max/420/1*QK8occqESlZkP7L-GilS7Q.png',
        },
        {
            title: enumSkills.jQuery,
            image: 'data:image/png;base64,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',
        },
        {
            title: enumSkills.jQueryUI,
            image: 'https://www.pngkey.com/png/full/274-2741866_jquery-ui-jquery-ui-logo-png.png',
        },

        {
            title: enumSkills.angular,
            image: 'data:image/png;base64,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',
        },
        {
            title: enumSkills.vue,
            image: 'https://i.imgur.com/scrcyJ3.png',
        },
        {
            title: enumSkills.react,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png',
        },
        {
            title: enumSkills.reactNative,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png',
        },
        {
            title: enumSkills.ionic,
            image: 'https://ionicframework.com/img/meta/logo.png',
        },
        {
            title: enumSkills.flutter,
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///9B0P1A0P0JWp0fvP0OUZkszf36/v8AU5pa1f3b9v6IosSV4v4Auf153P5x2/4AVpscv/8fwv/m+P/w+/9J0v0PSZK26/6l5/71/f981P4PSpMATpdU1P3N8f+/7v6H3/6U2/5sz/5Xyf00puEkltXj7PMejc2btdFkj7rL8f6d5f6D1v5Jzf1v0P4/xv3N2+gZYqHm7fQmaKQ6c6uazOoAP45BeK2Rr81OgLKlvdZnkby5y94p6fsnAAAE00lEQVR4nO3dCVvaQBAG4BDDWQ8Ih1LBo9Vqta09bbX+/99VQtASyO5OJsSdGeb7ATz7PvMthCxHEGg0Go1Go9FoNBqNhkma+PheOiy70zYu0/bA99pB2W3UcAnDvu+1g6JAI3AoHSh+ggqkkRLAju+1g4IG1qQDtaJEohU1+hrCgeInKB4o/klG9yCRlKjoie+1g1KiouKBWlESUaARKH8PSgeGN77XDkqJCYoHakVJRCuqQOIpATz1vXZQFKhA4lGgAomnBPDQ99pBUaACiUeBCiQeBZqBR77XDgr++Ew6UPwExQPFV1Q8UHxFxQPFV7TWuPW9dlBKVFQ4UPwEtwC463vtoOgEt3iCCiQRBW4x8Mz32kFRoBmoFSURBSqQeBSoQOIpAdz3vXZQFKhA4lGgAolHgWbgge+1g6JAM3CfxS+rlZmgeKD1gccddDb6i3TVAacNbDZajcoqOmiHyGz22as64JQ/0PrAgyEauNEriOomKAA4tj1wHw+kUtG2dYL9Go0JdhphNcAO1rdhYBCcIomNtrWidIBBcIgihpUBK7iKxxAdFT0hNEEc0VHRkwYtYEIsBnRUtMQEK3ujeVRoig7gDUFgMWJo34M35Cqa5hZcVMcET4kC4cRwan1jWgJY+c0e2OVbOLVO8JDsBKFE1kAI0VHREsBXuh955iCGQ+ZAFzEcWit6RLyiaWxER0V5AINg30h0AM9j7Fv61z4TODAQHXvwfC9CEl//0CN/ig7gp70oimLMfQsP53LNvCk6/lHjPAFGUa/4FP0cPK4TYUAE0de5XLuxCnRXdEEsVlRvR8crRYUDZylC9Hg2Pm6H4IpmgUWIXo+Om9MXouMPJ1aBUfSZA3BpimForejbNSCU6P3jG4OU6KhoHhBG9A6cn/05K5oPhBBJfHxjfjiGArqJBCaYZEa0Ar8YgS4iEWAQ9K2/BW8DRtGd5fKGDNAeO9BGJLEH3XnnAEZ7d4bXfiYTdAKNRDlAA1FKRRdZJzIBvgcC14mSKrpI9uaNQGCWKK6iq0QmEywK/H/zhgewWRz4TOQBREzwmchkD96hgLMw+ULGGDfB+RR5THAQY4W9i52vvlcPyhhJnAG7XSZE1EacAWeZ8CAOEFsxBe7siJ1i76K7EDLZi82CxOcJJkQmUyx2WbMEnBFbH3yvHpQixAyQT1HhlzYrwBnxG48pQi9P14DJXuRBhBU1XgcmReVBhEwxvuzmCAUVNb48rvMmOm7XxJejet1A5FJUKzEFmogCpphUNE0rn/jd9+JhMR4/9RYT5E80HALHS0BjUZkQc6eYBZqIP/gS46vjejb5ReVCXCtq72pUhwj5FHXlQ1HxKrCVW9J0ihv91YTqkpniyh4085K0fvKbYmaCdt6cyGWKL8QlYNfJS4nWLzjQyeJDwi9AGC8tKpMpzokLoLucWSKLX7dJv42QAIvxeBGjq1FxHivir3sMb078zYT451g88XqCJnIp6vUWTHGEJj5wIeKLymaKJYi+1w4Mvqj1B99rB6bMXvS9dmAe0UVlM0U8kc8U8Xvxo++1A/OIf+lnQ6zrFI2ZsCHi9+Jf32sHBv+MymeK8olP6KJO2BQV/3TDhfiEftHgQ5y0kLlnQ3yDDpOPwGk0Go1Go9FoNBoNg/wD3zy1H66aaH0AAAAASUVORK5CYII=',
        },
        {
            title: enumSkills.netCore,
            image: 'https://www.archer.com.mt/wp-content/uploads/1200px-.NET_Core_Logo.svg_.png',
        },
        {
            title: enumSkills.php,
            image: 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2132470731553750209-512.png',
        },
        {
            title: enumSkills.codeigniter,
            image: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_codeigniter-512.png',
        },
        {
            title: enumSkills.sql,
            image: 'https://www.bajalogics.com/wp-content/uploads/2018/04/SQL-Server-Logo.png',
        },
        {
            title: enumSkills.mySql,
            image: 'https://cdn.iconscout.com/icon/free/png-256/mysql-6-226028.png',
        },
        {
            title: enumSkills.firebase,
            image: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',
        }
    ]

    getAllSkills() {
        let innerHtml = '';
        this.skillList.forEach(skill => innerHtml += new Card().buildCard(skill));
        return innerHtml;
    }

}


