webpackJsonp([2],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  width: 100%; }\n  .content:after {\n    content: \"\";\n    display: block;\n    clear: both;\n    visibility: hidden;\n    height: 0; }\n\n.title {\n  text-align: center;\n  color: #249bcb;\n  width: 100%;\n  margin-top: 10vh;\n  font-size: 35px;\n  margin-bottom: 40px; }\n\n.img-col {\n  width: 30%;\n  height: 100%;\n  padding-left: 10%;\n  float: left;\n  transition: width 1s ease; }\n  .img-col .img {\n    margin-bottom: 5em;\n    width: 100%; }\n  .img-col img {\n    border-radius: 50%;\n    display: block;\n    max-width: 100%;\n    height: auto;\n    transition: width 1s ease, border .2s ease, padding .2s ease; }\n\n.content-col {\n  width: calc(95% - (((30% + 10%) + 50px ) + 25px) );\n  height: 100%;\n  float: left;\n  padding-left: 50px;\n  margin-right: 25px;\n  transition: width 1s ease; }\n  .content-col .about-me-content {\n    margin-bottom: 2em;\n    font-size: 18px;\n    text-align: justify;\n    line-height: 2;\n    color: #c4dce6;\n    font-family: \"Lato\", sans-serif; }\n    .content-col .about-me-content h2 {\n      margin-left: -20px; }\n    .content-col .about-me-content div {\n      display: inline-block; }\n  .content-col .fa {\n    margin: 15px 5px 0 5px; }\n  .content-col a {\n    color: #7499b2; }\n    .content-col a:hover {\n      color: #0e7aa9; }\n\n@media screen and (max-width: 835px) {\n  .img-col {\n    width: 20%; }\n\n  .content-col {\n    width: calc(calc(95% - (((30% + 10%) + 50px ) + 25px) ) + 10%); } }\n@media screen and (max-width: 710px) {\n  .img-col {\n    width: 0; }\n    .img-col img {\n      display: none; }\n\n  .content-col {\n    width: 80%; }\n\n  .about-me-content span {\n    display: none; }\n  .about-me-content div {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about-me\">\n  <div class=\"content\">\n    <h1 class=\"title\">About Me</h1>\n\n    <div class=\"img-col\">\n      <div class=\"img\">\n        <picture>\n          <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 600w\"\n                  sizes=\"30vw\">\n          <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 600w\"\n                  sizes=\"20vw\"\n                  media=\"(max-width: 835px)\">\n          <!-- <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 1x, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 2x\"> -->\n          <img src=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg\"\n               alt=\"Me standing inside a cruise ship in one of my vacations\"\n               srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 600w\"\n               sizes=\"30vw\">\n        </picture>\n      </div>\n      <div class=\"img\">\n        <picture>\n          <source srcset=\"../../assets/media/about-me/pic2-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic2-600x600_small_2x.jpg 600w\"\n                  sizes=\"30vw\">\n          <source srcset=\"../../assets/media/about-me/pic2-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic2-600x600_small_2x.jpg 600w\"\n                  sizes=\"20vw\"\n                  media=\"(max-width: 835px)\">\n          <!-- <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 1x, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 2x\"> -->\n          <img src=\"../../assets/media/about-me/pic2-300x300_small_1x.jpg\"\n               alt=\"Picture of the me giving a thumbs up whilewearing a barong tagalog, the Philippines national dress\"\n               srcset=\"../../assets/media/about-me/pic2-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic2-600x600_small_2x.jpg 600w\"\n               sizes=\"30vw\">\n        </picture>\n      </div>\n      <div class=\"img\">\n        <picture>\n          <source srcset=\"../../assets/media/about-me/pic3-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic3-600x600_small_2x.jpg 600w\"\n                  sizes=\"30vw\">\n          <source srcset=\"../../assets/media/about-me/pic3-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic3-600x600_small_2x.jpg 600w\"\n                  sizes=\"20vw\"\n                  media=\"(max-width: 835px)\">\n          <!-- <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 1x, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 2x\"> -->\n          <img src=\"../../assets/media/about-me/pic3-300x300_small_1x.jpg\"\n               alt=\"Picture of me in front of bunch of heart padlocks and pointing to one that says forever\"\n               srcset=\"../../assets/media/about-me/pic3-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic3-600x600_small_2x.jpg 600w\"\n               sizes=\"30vw\">\n        </picture>\n      </div>\n      <div class=\"img\">\n        <picture>\n          <source srcset=\"../../assets/media/about-me/pic4-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic4-600x600_small_2x.jpg 600w\"\n                  sizes=\"30vw\">\n          <source srcset=\"../../assets/media/about-me/pic4-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic4-600x600_small_2x.jpg 600w\"\n                  sizes=\"20vw\"\n                  media=\"(max-width: 835px)\">\n          <!-- <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 1x, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 2x\"> -->\n          <img src=\"../../assets/media/about-me/pic4-300x300_small_1x.jpg\"\n               alt=\"Picture of me in front of a mirror taking a picture of myself in our hotel room using a DSLR camera\"\n               srcset=\"../../assets/media/about-me/pic4-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic4-600x600_small_2x.jpg 600w\"\n               sizes=\"30vw\">\n        </picture>\n      </div>\n      <div class=\"img\">\n        <picture>\n          <source srcset=\"../../assets/media/about-me/pic5-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic5-600x600_small_2x.jpg 600w\"\n                  sizes=\"30vw\">\n          <source srcset=\"../../assets/media/about-me/pic5-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic5-600x600_small_2x.jpg 600w\"\n                  sizes=\"20vw\"\n                  media=\"(max-width: 835px)\">\n          <!-- <source srcset=\"../../assets/media/about-me/pic1-300x300_small_1x.jpg 1x, ../../assets/media/about-me/pic1-600x600_small_2x.jpg 2x\"> -->\n          <img src=\"../../assets/media/about-me/pic5-300x300_small_1x.jpg\"\n               alt=\"Candid picture of me in Guam with my back to the camera, looking at a view of the sea and some forest or mountain\"\n               srcset=\"../../assets/media/about-me/pic5-300x300_small_1x.jpg 300w, ../../assets/media/about-me/pic5-600x600_small_2x.jpg 600w\"\n               sizes=\"30vw\">\n        </picture>\n      </div>\n    </div>\n\n    <div class=\"content-col\">\n      <!-- Basic Info -->\n      <div class=\"about-me-content\">\n        <p><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i>Name: Mark Paolo Bautista Libunao</p>\n        <p><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>Nickname: MP</p>\n        <p><i class=\"fa fa-gift\" aria-hidden=\"true\"></i>Age: 24</p>\n        <p><i class=\"fa fa-birthday-cake\" aria-hidden=\"true\"></i>Birthday: October 20, 1992</p>\n        <p><i class=\"fa fa-id-card-o\" aria-hidden=\"true\"></i>Nationality: Filipino</p>\n        <p><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>Location: Balagtas, Bulacan / Taft Avenue, Manila</p>\n        <div><a class=\"about-me-link\" href=\"https://github.com/mplibunao\" target=\"_blank\"><i class=\"fa fa-github about-me-fa\" aria-hidden=\"true\"></i>GitHub</a></div>\n        <span>|</span>\n        <div><a class=\"about-me-link\" href=\"https://www.facebook.com/mplibunao\" target=\"_blank\"><i class=\"fa fa-facebook-official about-me-fa\" aria-hidden=\"true\"></i>Facebook</a></div>\n        <span>|</span>\n        <div><a class=\"about-me-link\" href=\"https://www.freecodecamp.com/mplibunao\" target=\"_blank\"><i class=\"fa fa-free-code-camp about-me-fa\" aria-hidden=\"true\"></i>Free Code Camp</a></div>\n      </div>\n\n      <!-- Education -->\n      <div class=\"about-me-content\">\n        <h2><i class=\"fa fa-university about-me-fa about-me-content-header\" aria-hidden=\"true\"></i>Education:</h2>\n        <p class=\"about-me-content\"><i class=\"fa fa-free-code-camp about-me-fa about-me-fa\" aria-hidden=\"true\"></i>Present - Free Code Camp</p>\n        <p class=\"about-me-content\"><i class=\"fa fa-graduation-cap about-me-fa\" aria-hidden=\"true\"></i>2017 - De La Salle University Manila, BS Information Systems</p>\n      </div>\n\n      <!-- Hobbies and Interest -->\n      <div class=\"about-me-content\">\n        <h2><i class=\"fa fa-puzzle-piece about-me-fa about-me-fa about-me-content-header\" aria-hidden=\"true\"></i>Hobbies and Interests:</h2>\n        \n        <h3><i class=\"fa fa-book about-me-fa\" aria-hidden=\"true\"></i>Reading</h3>\n        <p class=\"about-me-content\">Mostly articles from the internet. I particularly like to read and browse through <a class=\"about-me-link\" href=\"https://reddit.com\" target=\"_blank\">Reddit</a>,  <a class=\"about-me-link\" href=\"https://medium.com\" target=\"_blank\">Medium</a> and <a class=\"about-me-link\" href=\"http://lifehack.org\" target=\"_blank\">Lifehack.org.</a></p>\n\n        <h3><i class=\"fa fa-laptop about-me-fa\" aria-hidden=\"true\"></i>Technology</h3>\n        <p class=\"about-me-content\">I specifically love to read articles about technology even those about other fields or specializiations. I love finding out how things work behind the scenes and learning about simple yet practical hacks I can use in my everyday life that can save me time or effort. Aside from the previously mentioned sites, I also like to browse <a class=\"about-me-link\" href=\"https://news.ycombinator.com\" target=\"_blank\">Hacker News</a> and <a class=\"about-me-link\" href=\"https://techcrunch.com\" target=\"_blank\">Tech Crunch</a> every now and then but try to limit myself since there's so much to read.</p> \n        \n        <h3><i class=\"fa fa-youtube-play about-me-fa\" aria-hidden=\"true\"></i>Movies / TV Shows</h3>\n        <p class=\"about-me-content\">I don't watch as often as I did a few years back but every now and then I like to watch a few movies or tv series. Some of my recent favorites are Mr. Robot, Silicon Valley, Stranger Things and Westworld. I really like in particular Mr. Robot and Silicon Valley.</p>\n\n        <h3><i class=\"fa fa-gamepad about-me-fa\" aria-hidden=\"true\"></i>Games</h3>\n        <p class=\"about-me-content\">I love games!! Whether it be MOBA, mobile or even browser games. I think I have around 500-1000 hours on DOTA 2, all level 10 walls (and a few level 11) on Clash of Clans, Dragons B10 on Summoners War etc.\n          I even use gamified apps for my productivity apps like <a class=\"about-me-link\" href=\"https://habitica.com\" target=\"_blank\">Habitica</a> and <a class=\"about-me-link\" href=\"https://www.forestapp.cc/\" target=\"_blank\">ForestApp</a>\n          just to add an element of fun to my work and make it more enjoyable. Although I don't get to play much these days except for an occassional game or two of Mobile Legends because you know.. Code is Life\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
        // Stores the class name for img
        this.imgEffect = "imgMouseLeave";
    }
    AboutMeComponent.prototype.imgToggleEffect = function () {
        this.imgEffect === "imgMouseLeave" ? this.imgEffect = "imgMouseEnter" : this.imgEffect = "imgMouseLeave";
    };
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__("./src/app/about-me/about-me.component.html"),
        styles: [__webpack_require__("./src/app/about-me/about-me.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);

//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_me_about_me_component__ = __webpack_require__("./src/app/about-me/about-me.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_4__about_me_about_me_component__["a" /* AboutMeComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-active {\n  background-color: #c4dce6;\n  border-bottom: 3px solid #249bcb; }\n\n.nav {\n  width: 100%;\n  position: fixed;\n  height: 3em;\n  z-index: 10;\n  top: 0;\n  background: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.9);\n  line-height: 3; }\n  .nav a {\n    text-decoration: none;\n    color: #249bcb; }\n  .nav ul {\n    display: inline-block; }\n\n.navbar-brand {\n  float: left;\n  padding: 0;\n  margin: 0;\n  width: 30%;\n  color: #249bcb;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n  transition: display 1s ease; }\n\n.nav-list {\n  width: 50%;\n  margin: 0;\n  padding: 0;\n  float: right;\n  transition: width 1s ease, display 1s ease, -webkit-transform .1s;\n  transition: width 1s ease, transform .1s, display 1s ease;\n  transition: width 1s ease, transform .1s, display 1s ease, -webkit-transform .1s; }\n\n.nav-menu {\n  color: #249bcb;\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  left: 20px;\n  z-index: 1000;\n  display: none;\n  cursor: pointer; }\n\n.nav-item {\n  display: inline-block;\n  margin-right: -4px;\n  text-align: center;\n  transition: width .3s ease, border-bottom .3 ease, background-color .3 ease, display 1s ease; }\n  .nav-item:hover {\n    background-color: #c4dce6;\n    border-bottom: 3px solid #249bcb; }\n  .nav-item a {\n    padding: 10px; }\n\n@media screen and (max-width: 750px) {\n  .nav-list {\n    transform: translate(0, -500px);\n    -webkit-transform: translate(0, -500px);\n    position: relative;\n    display: block;\n    width: 100%;\n    z-index: 11; }\n\n  .navbar-brand {\n    width: 100%;\n    display: block; }\n\n  .nav-list-open {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n  .nav-list-close {\n    -webkit-transform: translate(0, -500px);\n    transform: translate(0, -500px); }\n\n  .nav-item {\n    display: list-item;\n    text-align: center;\n    border-top: 1px solid #c4dce6;\n    border-bottom: 1px solid #c4dce6;\n    background: rgba(0, 0, 0, 0.8); }\n    .nav-item a {\n      padding-left: 30%;\n      padding-right: 30%; }\n\n  .nav-menu {\n    display: inline-block;\n    z-index: 900; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" class=\"nav\">\n  <span class=\"navbar-brand\">Portfolio</span>\n  <ul class=\"nav-list\" [ngClass]=\"navClass\">\n    <li class=\"nav-item\" [routerLinkActive]=\"['nav-active']\"><a [routerLink]=\"['/home']\">Home</a></li>\n    <li class=\"nav-item\" [routerLinkActive]=\"['nav-active']\"><a [routerLink]=\"['/about-me']\">About Me</a></li>\n    <li class=\"nav-item\" [routerLinkActive]=\"['nav-active']\"><a [routerLink]=\"['/portfolio']\">Portfolio</a></li>\n    <li class=\"nav-item\" [routerLinkActive]=\"['nav-active']\"><a [routerLink]=\"['/contact-me']\">Contact Me</a></li>\n  </ul>\n  <i class=\"fa fa-bars nav-menu\" (click)=\"toggleSideNav()\"></i>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.navClass = 'nav-list-close';
    }
    AppComponent.prototype.toggleSideNav = function () {
        this.navClass === "nav-list-close" ? this.navClass = "nav-list-open" : this.navClass = "nav-list-close";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_me_about_me_component__ = __webpack_require__("./src/app/about-me/about-me.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_me_about_me_component__["a" /* AboutMeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  padding: 40vh 30vw 30vh 30vw;\n  text-align: center;\n  color: #c4dce6;\n  font-size: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"content\">\n    <h1 class=\"title\">Mark Paolo B. Libunao</h1>\n    <hr>\n    <h1 class=\"title\">Aspiring Web Developer</h1>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map