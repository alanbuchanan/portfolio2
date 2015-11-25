var app = angular.module('app', ['ngAnimate', 'ngMaterial', 'ngAria']);

    app.controller('mobAppCtrl', function ($scope) {

        $scope.items = [
            {url: 'http://codepen.io/alanbuchanan/full/XmKNmG/', imgLink: 'http://i.imgur.com/KwgnYSn.png', title: 'WikiSearch', desc: 'Lightweight Google-esque Wikipedia Search.'},
            {url: 'http://codepen.io/alanbuchanan/full/wKvazM/', imgLink: 'http://i.imgur.com/ZPGP1b2.png', title: 'Weather App', desc: 'Fancy weather in your area.'},
            {url: 'http://www.endbeginband.net/', imgLink: 'http://i.imgur.com/dkHSh3n.png', title: 'End Begin', desc: 'Progressive rock band page.'},
            {url: 'http://www.depositadvisoryservice.com/', imgLink: 'http://i.imgur.com/ryNvX4B.png', title: 'Deposit Advisory Service', desc: 'Corporate claims firm site.'},
            {url: 'http://stocktastic.herokuapp.com/', imgLink: 'http://i.imgur.com/1CekVTh.png', title: 'StockTastic', desc: 'Stocks and shares index updated by you.'},
            {url: 'https://github.com/alanbuchanan', imgLink: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png', title: 'Fork Me', desc: 'on Github'},
            {url: 'https://www.facebook.com/roryplaysmusic', imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Facebook_Circle.svg/2000px-Facebook_Circle.svg.png', title: 'Stalk Me', desc: 'on Facebook'},
        ];


    });
