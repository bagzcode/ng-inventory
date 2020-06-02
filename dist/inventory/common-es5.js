function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/core/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afAuth) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
      }

      _createClass(AuthService, [{
        key: "doLogin",
        value: function doLogin(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
              resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "doLogout",
        value: function doLogout() {
          var _this = this;

          return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser) {
              _this.afAuth.auth.signOut();

              resolve();
            } else {
              reject();
            }
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map