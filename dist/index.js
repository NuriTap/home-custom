(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@ng-bootstrap/ng-bootstrap"), require("tabby-core"), (function webpackLoadOptionalExternalModule() { try { return require("net"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "@ng-bootstrap/ng-bootstrap", "tabby-core", "net", "fs"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@ng-bootstrap/ng-bootstrap"), require("tabby-core"), (function webpackLoadOptionalExternalModule() { try { return require("net"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }())) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@ng-bootstrap/ng-bootstrap"], root["tabby-core"], root["net"], root["fs"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, (__WEBPACK_EXTERNAL_MODULE__860__, __WEBPACK_EXTERNAL_MODULE__358__, __WEBPACK_EXTERNAL_MODULE__182__, __WEBPACK_EXTERNAL_MODULE__765__, __WEBPACK_EXTERNAL_MODULE__650__, __WEBPACK_EXTERNAL_MODULE__403__, __WEBPACK_EXTERNAL_MODULE__947__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 71
/*!*********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/components/hostEditor.component.scss ***!
  \*********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 161);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 975);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-body{padding:20px}.modal-body .form-label{font-size:12px;font-weight:600;margin-bottom:4px}.jump-chain{display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:var(--bs-secondary-bg);font-size:12px;color:var(--bs-secondary)}.jump-chain span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.jump-chain i{font-size:11px;color:var(--bs-primary);flex-shrink:0}", "",{"version":3,"sources":["webpack://./src/components/hostEditor.component.scss"],"names":[],"mappings":"AAAA,YACI,YAAA,CAEA,wBACI,cAAA,CACA,eAAA,CACA,iBAAA","sourcesContent":[".modal-body {\r\n    padding: 20px;\r\n\r\n    .form-label {\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n        margin-bottom: 4px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 132
/*!******************************************************!*\
  !*** ./src/components/connectionPanel.component.pug ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var req = __webpack_require__(/*! !!../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/connectionPanel.component.pug */ 801);
module.exports = (req['default'] || req).apply(req, [])

/***/ },

/***/ 141
/*!***************************************************!*\
  !*** ./src/components/multiExecTab.component.pug ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var req = __webpack_require__(/*! !!../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/multiExecTab.component.pug */ 318);
module.exports = (req['default'] || req).apply(req, [])

/***/ },

/***/ 161
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ 182
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__182__;

/***/ },

/***/ 283
/*!***********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/components/multiExecTab.component.scss ***!
  \***********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 161);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 975);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host{display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;background:var(--bs-body-bg)}.me-layout{display:flex;flex-direction:column;height:100%;min-height:0;overflow:hidden;position:relative}.me-layout--drag-over{outline:2px dashed var(--bs-primary);outline-offset:-3px}.me-drag-overlay{position:absolute;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(var(--bs-primary-rgb),.15);border:2px dashed var(--bs-primary);font-size:1.1rem;font-weight:600;color:var(--bs-primary);pointer-events:none}.me-drop-hint,.me-loading{flex:1 1 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--bs-secondary);min-height:0}.me-drop-hint{font-size:.85rem;gap:4px;border:2px dashed rgba(255,255,255,.12);margin:12px;border-radius:8px}.me-panes{flex:1 1 auto;display:grid;gap:3px;overflow:hidden;background:#000;min-width:0;min-height:0;width:100%;height:100%;align-items:stretch;align-content:stretch;grid-auto-rows:minmax(0,1fr);grid-auto-columns:minmax(0,1fr)}.me-pane{display:flex;flex-direction:column;overflow:hidden;min-width:0;min-height:0;width:100%;height:100%;border-top:3px solid rgba(255,255,255,.1);transition:border-top-color .15s}.me-pane--active{border-top-color:var(--bs-primary)}.me-pane--drag-over{border-top-color:var(--bs-warning);outline:1px dashed var(--bs-warning)}.me-pane-header{display:flex;align-items:center;gap:5px;padding:2px 6px;background:rgba(255,255,255,.05);font-size:.7rem;color:var(--bs-secondary);flex:0 0 auto;cursor:grab}.me-pane-header:active{cursor:grabbing}.me-pane-header i{font-size:.65rem}.me-pane-title{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.me-pane-close{display:inline-flex;align-items:center;justify-content:center;flex:0 0 18px;width:18px;height:18px;margin-left:4px;background:transparent;border:1px solid transparent;border-radius:4px;color:var(--bs-body-color);cursor:pointer;padding:0;font-size:.65rem;line-height:1;opacity:.6;transition:opacity .15s,background .15s}.me-pane-close:hover{background:rgba(220,53,69,.12);border-color:rgba(220,53,69,.35);color:var(--bs-danger);opacity:1}.me-pane-body{display:contents}.me-pane ::ng-deep ssh-tab,.me-pane ::ng-deep telnet-tab,.me-pane ::ng-deep serial-tab,.me-pane ::ng-deep base-terminal-tab,.me-pane ::ng-deep [class*=-tab]{flex:1 1 auto;min-width:0;min-height:0;width:100%;height:100%;overflow:hidden;display:flex;flex-direction:column}.me-pane ::ng-deep .content{flex:1 1 auto;min-width:0;min-height:0;width:100%;overflow:hidden}.me-pane ::ng-deep terminal-toolbar{flex-shrink:0}.me-pane ::ng-deep .terminal-toolbar-spacer{display:none}.me-cmdbar{flex:0 0 auto;border-top:1px solid rgba(255,255,255,.1);background:var(--bs-body-bg);padding:8px 12px;display:flex;flex-direction:column;gap:7px}.me-cmdbar-top{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.me-cmdbar-label{font-size:.75rem;font-weight:700;color:var(--bs-secondary);text-transform:uppercase;letter-spacing:.04em;white-space:nowrap;flex-shrink:0}.me-chips{display:flex;flex-wrap:wrap;gap:4px;flex:1 1 auto;min-width:0}.me-chip-wrap{display:inline-flex;align-items:center}.me-chip-wrap:hover .me-chip-remove{opacity:1;width:12px;margin-left:4px}.me-chip-remove{background:none;border:none;color:var(--bs-body-color);cursor:pointer;padding:0;font-size:.55rem;line-height:1;opacity:.6;width:12px;overflow:hidden;transition:opacity .15s,width .15s,color .15s;margin-left:4px}.me-chip-remove:hover{color:var(--bs-danger);opacity:1}.me-chip{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:100px;font-size:.75rem;font-weight:600;border:1px solid rgba(255,255,255,.3);background:var(--bs-secondary-bg);color:var(--bs-body-color);opacity:.85;cursor:pointer;transition:all .15s;user-select:none}.me-chip i{font-size:.6rem}.me-chip--on{border-color:var(--bs-primary);background:rgba(var(--bs-primary-rgb),.18);color:var(--bs-body-color);opacity:1}.me-chip:hover:not(.me-chip--on){border-color:rgba(255,255,255,.5);color:var(--bs-body-color);opacity:1}.me-addhost-wrap{position:relative;flex-shrink:0}.me-addhost-input-wrap{display:flex;align-items:center;gap:5px;background:var(--bs-secondary-bg);border:1px solid rgba(255,255,255,.15);border-radius:4px;padding:2px 7px;transition:border-color .15s}.me-addhost-input-wrap:focus-within{border-color:var(--bs-primary)}.me-addhost-icon{font-size:.65rem;color:var(--bs-secondary);flex-shrink:0}.me-addhost-input{background:none;border:none;outline:none;color:var(--bs-body-color);font-size:.72rem;font-weight:600;width:90px;min-width:0}.me-addhost-input::placeholder{color:var(--bs-secondary)}.me-addhost-clear{font-size:.6rem;color:var(--bs-secondary);cursor:pointer;flex-shrink:0;transition:color .1s}.me-addhost-clear:hover{color:var(--bs-body-color)}.me-addhost-results{position:absolute;bottom:calc(100% + 6px);right:0;min-width:210px;max-height:240px;overflow-y:auto;background:var(--bs-body-bg);border:1px solid rgba(255,255,255,.15);border-radius:6px;box-shadow:0 -6px 20px rgba(0,0,0,.45);z-index:200;padding:4px 0}.me-addhost-item{display:flex;align-items:center;width:100%;padding:5px 12px;background:none;border:none;color:var(--bs-body-color);font-size:.8rem;text-align:left;cursor:pointer;transition:background .1s,color .1s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.me-addhost-item:hover,.me-addhost-item--active{background:rgba(var(--bs-primary-rgb),.15);color:var(--bs-primary)}.me-addhost-empty{padding:6px 12px;font-size:.75rem;color:var(--bs-secondary)}.me-btn{padding:2px 9px;border-radius:4px;font-size:.72rem;font-weight:600;border:1px solid rgba(255,255,255,.3);background:var(--bs-secondary-bg);color:var(--bs-body-color);opacity:.8;cursor:pointer;white-space:nowrap;transition:all .15s}.me-btn:hover{background:var(--bs-primary);border-color:var(--bs-primary);color:#fff;opacity:1}.me-broadcast-row{display:flex;align-items:center;gap:7px;padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.12);background:var(--bs-secondary-bg);color:var(--bs-secondary);font-size:.78rem;cursor:text;outline:none;transition:border-color .15s,background .15s;user-select:none}.me-broadcast-row:focus,.me-broadcast-row--active{border-color:var(--bs-primary);background:rgba(var(--bs-primary-rgb),.08);color:var(--bs-body-color)}.me-broadcast-row--empty{opacity:.5;cursor:default}.me-broadcast-icon{font-size:.72rem;flex-shrink:0}.me-broadcast-hint{font-style:italic}.me-broadcast-typing{display:flex;align-items:center;gap:4px;color:var(--bs-primary);font-weight:600}.me-broadcast-cursor{animation:me-blink 1s step-end infinite}@keyframes me-blink{0%,100%{opacity:1}50%{opacity:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 310
/*!*****************************************************************************************************************!*\
  !*** ../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/hostEditor.component.pug ***!
  \*****************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ 757);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"modal-header\"\u003E\n  \u003Ch5 class=\"modal-title\"\u003E\u003Ci class=\"fas fa-server me-2\"\u003E\u003C\u002Fi\u003E{{ bulkHosts.length > 1 ? 'Edit Credentials' : (editMode ? 'Edit Host' : 'Add New Host') }}\u003C\u002Fh5\u003E\n  \u003Cbutton class=\"btn-close\" (click)=\"cancel()\"\u003E\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"modal-body\"\u003E\n  \u003Cdiv class=\"alert alert-warning\" *ngIf=\"!vaultEnabled\"\u003E\u003Ci class=\"fas fa-exclamation-triangle me-2\"\u003E\u003C\u002Fi\u003EVault chưa được bật. Password và private key sẽ không được lưu.\n    \n    Vào Settings → Security → Vault để bật.\n  \u003C\u002Fdiv\u003E\n  \u003Cform\u003E\n    \u003Cdiv class=\"alert alert-info\" *ngIf=\"bulkHosts.length > 1\"\u003E\u003Ci class=\"fas fa-layer-group me-2\"\u003E\u003C\u002Fi\u003EUsername and credentials will be applied to {{ bulkHosts.length }} selected SSH hosts. Other host fields stay unchanged.\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"row g-3 mb-3\" *ngIf=\"bulkHosts.length > 1\"\u003E\n      \u003Cdiv class=\"col-12\"\u003E\n        \u003Clabel class=\"form-label\"\u003EUsername\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"text\" [(ngModel)]=\"host.username\" name=\"bulkHostUser\" [placeholder]=\"usernamePlaceholder\"\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"row g-3\" *ngIf=\"bulkHosts.length <= 1\"\u003E\n      \u003Cdiv class=\"col-12\"\u003E\n        \u003Clabel class=\"form-label\"\u003EName *\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"text\" [(ngModel)]=\"host.name\" name=\"hostName\" placeholder=\"e.g. Production Server\" required\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-md-4\"\u003E\n        \u003Clabel class=\"form-label\"\u003EType *\u003C\u002Flabel\u003E\n        \u003Cselect class=\"form-select\" [(ngModel)]=\"host.type\" name=\"hostType\" (ngModelChange)=\"onTypeChange()\"\u003E\n          \u003Coption *ngFor=\"let t of availableTypes\" [value]=\"t.id\"\u003E{{ t.label }}\u003C\u002Foption\u003E\n        \u003C\u002Fselect\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-md-5\"\u003E\n        \u003Clabel class=\"form-label\"\u003E{{ hostLabel }} *\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"text\" [(ngModel)]=\"host.host\" name=\"hostAddr\" [placeholder]=\"host.type === 'serial' ? 'COM3 or \u002Fdev\u002FttyUSB0' : '192.168.1.1'\" required\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-md-3\"\u003E\n        \u003Clabel class=\"form-label\"\u003E{{ portLabel }}\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"number\" [(ngModel)]=\"host.port\" name=\"hostPort\" min=\"1\"\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-12\"\u003E\n        \u003Clabel class=\"form-label\"\u003EUsername\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"text\" [(ngModel)]=\"host.username\" name=\"hostUser\" [placeholder]=\"usernamePlaceholder\"\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    <hr class=\"my-3\" *ngIf=\"host.type === 'ssh' && bulkHosts.length <= 1\">\n    <div class=\"row g-3\" *ngIf=\"host.type === 'ssh' && bulkHosts.length <= 1\"><div class=\"col-12\"><label class=\"form-label\">Connection Type</label><select class=\"form-select\" [ngModel]=\"host.jumpHost?.enabled ? 'jump' : 'direct'\" name=\"connectionMode\" (ngModelChange)=\"setJumpHostEnabled($event === 'jump')\"><option value=\"direct\">Direct connection</option><option value=\"jump\">Via Jump Host</option></select></div><ng-container *ngIf=\"host.jumpHost?.enabled\"><div class=\"col-12\"><label class=\"form-label\">Jump host</label><select class=\"form-select\" [(ngModel)]=\"host.jumpHost.mode\" name=\"jumpHostMode\" (ngModelChange)=\"onJumpModeChange()\"><option value=\"existing\">Select existing jump host</option><option value=\"manual\">Create inline jump host config</option></select></div><div class=\"col-12\" *ngIf=\"host.jumpHost.mode !== 'manual'\"><select class=\"form-select\" [(ngModel)]=\"host.jumpHost.hostId\" name=\"jumpHostId\"><option [ngValue]=\"null\">Select</option><option *ngFor=\"let h of jumpHostCandidates\" [ngValue]=\"h.id\">{{ h.name }} - {{ h.username || 'user' }}@{{ h.host }}:{{ h.port || 22 }}</option></select></div><ng-container *ngIf=\"host.jumpHost.mode === 'manual'\"><div class=\"col-md-5\"><label class=\"form-label\">Jump Host/IP *</label><input class=\"form-control\" type=\"text\" [(ngModel)]=\"host.jumpHost.host\" name=\"jumpHostAddr\" placeholder=\"172.22.19.20\"></div><div class=\"col-md-3\"><label class=\"form-label\">Port</label><input class=\"form-control\" type=\"number\" [(ngModel)]=\"host.jumpHost.port\" name=\"jumpHostPort\" min=\"1\" placeholder=\"22\"></div><div class=\"col-md-4\"><label class=\"form-label\">Username</label><input class=\"form-control\" type=\"text\" [(ngModel)]=\"host.jumpHost.username\" name=\"jumpHostUser\" placeholder=\"jumpuser\"></div><div class=\"col-12\"><label class=\"form-label\">Jump auth type</label><select class=\"form-select\" [(ngModel)]=\"jumpHostCredentials.authType\" name=\"jumpAuthType\"><option value=\"none\">None (ask at connect time)</option><option value=\"password\">Password</option><option value=\"privateKey\">Private Key</option><option value=\"agent\">Agent</option></select></div><div class=\"col-12\" *ngIf=\"jumpHostCredentials.authType === 'password'\"><label class=\"form-label\">Jump password</label><input class=\"form-control\" type=\"password\" [(ngModel)]=\"jumpHostCredentials.password\" name=\"jumpPassword\" placeholder=\"Enter password\" [disabled]=\"!vaultEnabled\"></div><ng-container *ngIf=\"jumpHostCredentials.authType === 'privateKey'\"><div class=\"col-12\"><label class=\"form-label\">Jump Private Key File</label><input class=\"form-control\" type=\"file\" name=\"jumpPrivateKeyFile\" (change)=\"onJumpPrivateKeyFileChange($event)\" [disabled]=\"!vaultEnabled\"><small class=\"text-secondary mt-1 d-block\" *ngIf=\"jumpHostCredentials.privateKey\"><i class=\"fas fa-check-circle text-success me-1\"></i>Key loaded</small></div><div class=\"col-12\"><label class=\"form-label\">Jump passphrase</label><input class=\"form-control\" type=\"password\" [(ngModel)]=\"jumpHostCredentials.passphrase\" name=\"jumpPassphrase\" placeholder=\"Leave empty if key has no passphrase\" [disabled]=\"!vaultEnabled\"></div></ng-container></ng-container><div class=\"col-12\"><div class=\"jump-chain\"><span>{{ jumpHostLabel }}</span><i class=\"fas fa-arrow-right\"></i><span>{{ targetHostLabel }}</span></div></div></ng-container></div>\n    <hr class=\"my-3\">\n    <h6 class=\"mb-3\"><i class=\"fas fa-key me-2\"></i>Authentication\u003Cspan class=\"badge bg-success ms-2\" *ngIf=\"vaultEnabled\"\u003EEncrypted\u003C\u002Fspan\u003E\u003Cspan class=\"badge bg-secondary ms-2\" *ngIf=\"!vaultEnabled\"\u003EVault disabled\u003C\u002Fspan\u003E\u003C\u002Fh6\u003E\n    \u003Cdiv class=\"row g-3\" *ngIf=\"host.type === 'ssh'\"\u003E\n      \u003Cdiv class=\"col-12\"\u003E\n        \u003Clabel class=\"form-label\"\u003EAuth type\u003C\u002Flabel\u003E\n        \u003Cselect class=\"form-select\" [(ngModel)]=\"credentials.authType\" name=\"authType\"\u003E\n          \u003Coption value=\"none\"\u003ENone (ask at connect time)\u003C\u002Foption\u003E\n          \u003Coption value=\"password\"\u003EPassword\u003C\u002Foption\u003E\n          \u003Coption value=\"privateKey\"\u003EPrivate Key\u003C\u002Foption\u003E\n          \u003Coption value=\"agent\"\u003EAgent\u003C\u002Foption\u003E\n        \u003C\u002Fselect\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-12\" *ngIf=\"credentials.authType === 'password'\"\u003E\n        \u003Clabel class=\"form-label\"\u003EPassword\u003C\u002Flabel\u003E\n        \u003Cdiv class=\"input-group\"\u003E\n          \u003Cinput class=\"form-control\" [type]=\"showPassword ? &quot;text&quot; : &quot;password&quot;\" [(ngModel)]=\"credentials.password\" name=\"hostPassword\" placeholder=\"Enter password\" [disabled]=\"!vaultEnabled\"\u003E\n          \u003Cbutton class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"showPassword = !showPassword\" [title]=\"showPassword ? &quot;Hide password&quot; : &quot;Show password&quot;\"\u003E\u003Ci [class]=\"showPassword ? &quot;fas fa-eye-slash&quot; : &quot;fas fa-eye&quot;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cng-container *ngIf=\"credentials.authType === 'privateKey'\"\u003E\n        \u003Cdiv class=\"col-12\"\u003E\n          \u003Clabel class=\"form-label\"\u003EPrivate Key File\u003C\u002Flabel\u003E\n          \u003Cinput class=\"form-control\" type=\"file\" name=\"privateKeyFile\" (change)=\"onPrivateKeyFileChange($event)\" [disabled]=\"!vaultEnabled\"\u003E\u003Csmall class=\"text-secondary mt-1 d-block\" *ngIf=\"credentials.privateKey\"\u003E\u003Ci class=\"fas fa-check-circle text-success me-1\"\u003E\u003C\u002Fi\u003EKey loaded\u003C\u002Fsmall\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"col-12\"\u003E\n          \u003Clabel class=\"form-label\"\u003EPassphrase\u003C\u002Flabel\u003E\u003Csmall class=\"text-secondary ms-2\"\u003E(optional)\u003C\u002Fsmall\u003E\n          \u003Cdiv class=\"input-group\"\u003E\n            \u003Cinput class=\"form-control\" [type]=\"showPassphrase ? &quot;text&quot; : &quot;password&quot;\" [(ngModel)]=\"credentials.passphrase\" name=\"hostPassphrase\" placeholder=\"Leave empty if key has no passphrase\" [disabled]=\"!vaultEnabled\"\u003E\n            \u003Cbutton class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"showPassphrase = !showPassphrase\" [title]=\"showPassphrase ? &quot;Hide passphrase&quot; : &quot;Show passphrase&quot;\"\u003E\u003Ci [class]=\"showPassphrase ? &quot;fas fa-eye-slash&quot; : &quot;fas fa-eye&quot;\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fng-container\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"text-secondary small\" *ngIf=\"host.type !== 'ssh'\"\u003E\u003Ci class=\"fas fa-info-circle me-1\"\u003E\u003C\u002Fi\u003EAuthentication chỉ áp dụng cho SSH.\u003C\u002Fdiv\u003E\n    \u003Chr class=\"my-3\" *ngIf=\"bulkHosts.length <= 1\"\u003E\n    \u003Cdiv class=\"row g-3\" *ngIf=\"bulkHosts.length <= 1\"\u003E\n      \u003Cdiv class=\"col-md-6\"\u003E\n        \u003Clabel class=\"form-label\"\u003EGroup\u003C\u002Flabel\u003E\n        \u003Cselect class=\"form-select\" [(ngModel)]=\"host.groupId\" name=\"hostGroup\"\u003E\n          \u003Coption [ngValue]=\"null\"\u003E— No group —\u003C\u002Foption\u003E\n          \u003Coption *ngFor=\"let g of groups\" [ngValue]=\"g.id\"\u003E{{ g.name }}\u003C\u002Foption\u003E\n        \u003C\u002Fselect\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-md-6\"\u003E\n        \u003Clabel class=\"form-label\"\u003ETags\u003Csmall class=\"text-secondary ms-2\"\u003E(comma separated)\u003C\u002Fsmall\u003E\u003C\u002Flabel\u003E\n        \u003Cinput class=\"form-control\" type=\"text\" [ngModel]=\"(host.tags || []).join(', ')\" (ngModelChange)=\"parseTags($event)\" name=\"hostTags\" placeholder=\"production, linux, web\"\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"col-12\"\u003E\n        \u003Clabel class=\"form-label\"\u003ENotes\u003C\u002Flabel\u003E\n        \u003Ctextarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"host.notes\" name=\"hostNotes\" placeholder=\"Optional notes...\"\u003E\u003C\u002Ftextarea\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"modal-footer\"\u003E\n  \u003Cbutton class=\"btn btn-secondary\" (click)=\"cancel()\"\u003ECancel\u003C\u002Fbutton\u003E\n  \u003Cbutton class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!isValid\"\u003E\u003Ci class=\"fas fa-save me-1\"\u003E\u003C\u002Fi\u003E{{ bulkHosts.length > 1 ? 'Apply Credentials' : (editMode ? 'Save Changes' : 'Add Host') }}\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ },

/***/ 318
/*!*******************************************************************************************************************!*\
  !*** ../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/multiExecTab.component.pug ***!
  \*******************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ 757);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"me-layout\" (dragover)=\"onLayoutDragOver($event)\" (dragleave)=\"onLayoutDragLeave($event)\" (drop)=\"onLayoutDrop($event)\" [class.me-layout--drag-over]=\"isDragOver\"\u003E\n  \u003C!-- Loading state--\u003E\n  \u003Cdiv class=\"me-loading\" *ngIf=\"isConnecting\"\u003E\u003Ci class=\"fas fa-circle-notch fa-spin fa-2x mb-3\"\u003E\u003C\u002Fi\u003E\n    \u003Cp\u003EConnecting to {{ hosts.length }} host{{ hosts.length !== 1 ? 's' : '' }}...\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n  \u003C!-- Drop hint when no panes--\u003E\n  \u003Cdiv class=\"me-drop-hint\" *ngIf=\"!isConnecting &amp;&amp; panes.length === 0\"\u003E\u003Ci class=\"fas fa-arrow-down fa-2x mb-2\"\u003E\u003C\u002Fi\u003E\n    \u003Cp\u003EDrop a host here or use Add button below\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n  \u003C!-- Drag over overlay--\u003E\n  \u003Cdiv class=\"me-drag-overlay\" *ngIf=\"isDragOver\"\u003E\u003Ci class=\"fas fa-plus-circle me-2\"\u003E\u003C\u002Fi\u003EDrop to add host\u003C\u002Fdiv\u003E\n  \u003C!-- Panes grid--\u003E\n  \u003Cdiv class=\"me-panes\" *ngIf=\"!isConnecting &amp;&amp; panes.length &gt; 0\" [ngStyle]=\"gridStyle\"\u003E\n    \u003Cdiv class=\"me-pane\" *ngFor=\"let pane of panes; let i = index; trackBy: trackByPane\" [class.me-pane--active]=\"isTarget(pane.host)\" [class.me-pane--drag-over]=\"dragOverPaneIndex === i\" (dragover)=\"onPaneDragOver($event, i)\" (dragleave)=\"onPaneDragLeave()\" (drop)=\"onPaneDrop($event, i)\"\u003E\n      \u003Cdiv class=\"me-pane-header\" draggable=\"true\" (dragstart)=\"onPaneHeaderDragStart($event, i)\" (dragend)=\"onPaneDragEnd()\" title=\"Drag to reorder\"\u003E\u003Ci class=\"me-1\" [class]=\"getHostIcon(pane.host)\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"me-pane-title\"\u003E{{ pane.host.name }}\u003C\u002Fspan\u003E\n        \u003Cbutton class=\"me-pane-close\" (mousedown)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); removePane(pane)\" title=\"Remove host\"\u003E\u003Ci class=\"fas fa-times\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"me-pane-body\" #paneBody\u003E\u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003C!-- Command bar--\u003E\n  \u003Cdiv class=\"me-cmdbar\" *ngIf=\"!isConnecting\"\u003E\n    \u003Cdiv class=\"me-broadcast-row\" #broadcastCapture tabindex=\"0\" (keydown)=\"onBroadcastKeyDown($event)\" (focus)=\"broadcastFocused = true\" (blur)=\"broadcastFocused = false\" [class.me-broadcast-row--active]=\"broadcastFocused &amp;&amp; targetIds.size &gt; 0\" [class.me-broadcast-row--empty]=\"targetIds.size === 0\"\u003E\u003Ci class=\"fas fa-keyboard me-broadcast-icon\"\u003E\u003C\u002Fi\u003E\u003Cspan class=\"me-broadcast-hint\" *ngIf=\"targetIds.size === 0\"\u003ESelect targets below...\u003C\u002Fspan\u003E\u003Cspan class=\"me-broadcast-hint\" *ngIf=\"targetIds.size &gt; 0 &amp;&amp; !broadcastFocused\"\u003EClick to broadcast to {{ targetIds.size }} terminal{{ targetIds.size !== 1 ? 's' : '' }}...\u003C\u002Fspan\u003E\u003Cspan class=\"me-broadcast-typing\" *ngIf=\"targetIds.size &gt; 0 &amp;&amp; broadcastFocused\"\u003EBroadcasting to {{ targetIds.size }} terminal{{ targetIds.size !== 1 ? 's' : '' }}\u003Cspan class=\"me-broadcast-cursor\"\u003E▌\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"me-cmdbar-top\"\u003E\u003Cspan class=\"me-cmdbar-label\"\u003E\u003Ci class=\"fas fa-broadcast-tower me-1\"\u003E\u003C\u002Fi\u003EBroadcast\u003C\u002Fspan\u003E\n      \u003Cdiv class=\"me-chips\"\u003E\n        \u003Cdiv class=\"me-chip-wrap\" *ngFor=\"let pane of panes; trackBy: trackByPane\"\u003E\n          \u003Cbutton class=\"me-chip\" [class.me-chip--on]=\"isTarget(pane.host)\" (click)=\"toggleTarget(pane.host)\"\u003E\u003Ci class=\"fas fa-check me-1\" *ngIf=\"isTarget(pane.host)\"\u003E\u003C\u002Fi\u003E{{ pane.host.name }}\u003C\u002Fbutton\u003E\n          \u003Cbutton class=\"me-chip-remove\" (mousedown)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); removePane(pane)\" title=\"Remove host\"\u003E\u003Ci class=\"fas fa-times\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"ms-auto d-flex gap-1\"\u003E\n        \u003Cbutton class=\"me-btn\" (click)=\"toggleToolbar()\" [title]=\"toolbarPinned ? &quot;Hide toolbar&quot; : &quot;Show toolbar&quot;\"\u003E\u003Ci class=\"fas fa-thumbtack me-1\"\u003E\u003C\u002Fi\u003E{{ toolbarPinned ? 'Unpin' : 'Pin' }}\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"me-btn\" (click)=\"selectAll()\"\u003EAll\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"me-btn\" (click)=\"deselectAll()\"\u003ENone\u003C\u002Fbutton\u003E\n        \u003Cdiv class=\"me-addhost-wrap\"\u003E\n          \u003Cdiv class=\"me-addhost-input-wrap\"\u003E\u003Ci class=\"fas fa-plus me-addhost-icon\"\u003E\u003C\u002Fi\u003E\n            \u003Cinput class=\"me-addhost-input\" type=\"text\" placeholder=\"Add host...\" [(ngModel)]=\"addHostQuery\" (focus)=\"addHostFocused = true\" (blur)=\"onAddHostBlur()\" (keydown)=\"onAddHostKeyDown($event)\"\u003E\u003Ci class=\"fas fa-times me-addhost-clear\" *ngIf=\"addHostQuery\" (mousedown)=\"$event.preventDefault()\" (click)=\"addHostQuery = &quot;&quot;; addHostFocused = true\"\u003E\u003C\u002Fi\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"me-addhost-results\" *ngIf=\"addHostFocused &amp;&amp; addHostQuery\"\u003E\n            \u003Cbutton class=\"me-addhost-item\" *ngFor=\"let h of addHostResults; let i = index\" [class.me-addhost-item--active]=\"i === addHostHighlightIndex\" (mousedown)=\"$event.preventDefault()\" (click)=\"selectAddHost(h)\"\u003E\u003Ci class=\"me-2\" [class]=\"getHostIcon(h)\"\u003E\u003C\u002Fi\u003E{{ h.name }}\u003C\u002Fbutton\u003E\n            \u003Cdiv class=\"me-addhost-empty\" *ngIf=\"addHostResults.length === 0\"\u003ENo matches\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ },

/***/ 324
/*!**************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./src/components/connectionPanel.component.scss ***!
  \**************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 161);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 975);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":host{display:flex;flex-direction:column;height:100%;overflow:hidden}.content{display:flex;flex-direction:column;height:100%;padding:1.5rem 2rem;overflow:hidden;width:100%;box-sizing:border-box}.header-section{flex-shrink:0;width:100%;margin-bottom:.5rem}.header-section .header-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem}.header-section .header-left{display:flex;align-items:center;gap:.5rem}.header-section .header-right{display:flex;align-items:center;gap:4px}.header-section h3{font-size:1.8rem;font-weight:800;color:var(--bs-body-color);margin:0}.header-section .search-wrap{position:relative;display:flex;align-items:center}.header-section .search-clear{position:absolute;right:12px;background:none;border:none;color:var(--bs-secondary);cursor:pointer;font-size:12px;padding:4px}.header-section .search-clear:hover{color:var(--bs-body-color)}.header-section .form-control{border-radius:8px;padding:.75rem 1.25rem;transition:all .3s;background:var(--bs-secondary-bg);border-color:rgba(255,255,255,.35);color:var(--bs-body-color)}.header-section .form-control:focus{border-color:var(--bs-primary);box-shadow:0 0 0 .2rem rgba(var(--bs-primary-rgb), 0.15)}.header-section .form-control::placeholder{color:var(--bs-secondary)}.back-btn{width:32px;height:32px;border:none;background:var(--bs-secondary-bg);border-radius:6px;color:var(--bs-body-color);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.back-btn:hover{background:var(--bs-tertiary-bg)}.view-btn{width:32px;height:32px;border:none;background:rgba(0,0,0,0);border-radius:6px;color:var(--bs-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;transition:all .15s}.view-btn.active{background:var(--bs-primary);color:#fff}.view-btn:not(.active):hover{background:var(--bs-secondary-bg)}.scroll-container{flex-grow:1;flex-shrink:1;overflow-y:auto;overflow-x:hidden;margin-top:1rem;padding-right:8px}.scroll-container::-webkit-scrollbar{width:6px}.scroll-container::-webkit-scrollbar-thumb{background:#ced4da;border-radius:10px}.group-title{position:sticky;top:0;z-index:5;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;font-weight:700;color:var(--bs-body-color);background:var(--bs-body-bg);padding-bottom:.5rem;border-bottom:2px solid rgba(255,255,255,.35);margin-bottom:1rem}.btn-new{display:flex;align-items:center;gap:6px;padding:5px 12px;background:var(--bs-secondary-bg);border:1px solid rgba(255,255,255,.35);border-radius:6px;font-size:.8rem;font-weight:600;color:var(--bs-body-color);cursor:pointer;transition:all .15s;white-space:nowrap}.btn-new i{font-size:.7rem}.btn-new:hover{background:var(--bs-primary);border-color:var(--bs-primary);color:#fff}.connection-group{display:grid;gap:12px;margin-bottom:2.5rem;grid-template-columns:repeat(auto-fill, minmax(160px, 280px))}@media(max-width: 400px){.connection-group{grid-template-columns:1fr}}.connection-group--recent{max-height:90px;overflow:hidden}.card{position:relative;overflow:visible;z-index:1;height:90px;box-sizing:border-box;width:100%;border:1px solid rgba(255,255,255,.35);border-radius:8px;background:var(--bs-body-bg);cursor:pointer;transition:background .15s}.card:hover,.card.show{background-color:var(--bs-secondary-bg)}.card:hover .btn-dots,.card.show .btn-dots{opacity:1}.card:has(.show){z-index:100}.card .card-body{padding:1rem .75rem;height:100%;display:flex;flex-direction:column;justify-content:space-between}.card .card-top{display:flex;align-items:center;gap:8px;min-width:0}.card .icon{width:1.25rem;height:1.25rem;display:inline-flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;color:var(--bs-secondary)}.card h6{font-size:1.1rem;font-weight:600;margin:0;padding-right:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--bs-body-color)}.card .info-text p{font-size:.85rem;margin:0;color:var(--bs-body-color);opacity:.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card .card-options{position:absolute;top:.4rem;right:.4rem;z-index:5}.list-group{display:flex;flex-direction:column;gap:2px;margin-bottom:2.5rem;border-radius:0;border:none}.list-item{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;cursor:pointer;position:relative;transition:background .1s}.list-item:hover{background:var(--bs-secondary-bg)}.list-item:hover .btn-dots{opacity:1}.list-item .icon{width:1.25rem;height:1.25rem;display:inline-flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;color:var(--bs-secondary)}.list-item .list-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.list-item .list-title{font-size:1rem;font-weight:600;color:var(--bs-body-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-item .list-sub{font-size:.8rem;color:var(--bs-body-color);opacity:.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-item .card-options{position:relative;flex-shrink:0}.list-group-tag{display:inline-flex;align-items:center;margin-top:3px;font-size:.75rem;color:var(--bs-primary);opacity:.8;cursor:pointer}.list-group-tag:hover{opacity:1;text-decoration:underline}.btn-dots{width:24px;height:24px;border:none;background:rgba(0,0,0,0);border-radius:4px;color:var(--bs-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;opacity:.6;transition:opacity .15s,background .15s}.btn-dots:hover,.btn-dots[aria-expanded=true]{background:var(--bs-secondary-bg);color:var(--bs-body-color);opacity:1 !important}::ng-deep .dropdown-menu{z-index:1050;box-shadow:0 5px 15px rgba(0,0,0,.2);border:none;min-width:120px}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 1rem;color:var(--bs-secondary);text-align:center}.header-divider{width:1px;height:20px;background:rgba(255,255,255,.2);margin:0 2px}.status-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;background:rgba(0,0,0,0)}.status-dot.status-online{background:#a3be8c}.status-dot.status-offline{background:#bf616a}.status-dot.status-checking{background:#ebcb8b;animation:status-pulse 1s ease-in-out infinite}.card-status-dot{position:absolute;bottom:7px;left:9px}@keyframes status-pulse{0%,100%{opacity:1}50%{opacity:.3}}[draggable=true]{cursor:grab}[draggable=true]:active{cursor:grabbing}.card.drag-over,.list-item.drag-over{border-color:var(--bs-primary) !important;background:rgba(var(--bs-primary-rgb), 0.12) !important}.list-item.keyboard-selected{background:var(--bs-secondary-bg);outline:1px solid var(--bs-primary);outline-offset:-1px}.connection-group--recent-list{max-height:90px;overflow:hidden;margin-bottom:1.5rem}.card--selectable{cursor:pointer !important;-webkit-user-select:none;user-select:none}.card--selected{border-color:var(--bs-primary) !important;background:rgba(var(--bs-primary-rgb), 0.15) !important}.list-item--selected{background:rgba(var(--bs-primary-rgb), 0.15) !important;outline:1px solid var(--bs-primary);outline-offset:-1px}.card--active{box-shadow:inset 3px 0 0 var(--bs-primary),0 0 0 1px rgba(var(--bs-primary-rgb), 0.25)}.list-item--active{box-shadow:inset 3px 0 0 var(--bs-primary)}.card--selected:hover,.list-item--selected:hover{background:rgba(var(--bs-primary-rgb), 0.22) !important}.host-context-menu{position:fixed;display:block;z-index:2000;min-width:190px;padding:6px 0;background:var(--bs-body-bg);color:var(--bs-body-color);border:1px solid rgba(255,255,255,.16);border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,.35);user-select:none}.host-context-menu .dropdown-item{display:flex;align-items:center;width:100%;gap:2px;padding:7px 12px;border:0;background:transparent;color:inherit;text-align:left;font-size:.86rem}.host-context-menu .dropdown-item:hover{background:var(--bs-secondary-bg)}.host-context-menu .dropdown-divider{height:1px;margin:5px 0;background:rgba(255,255,255,.12)}.host-checkbox{position:absolute;top:6px;left:8px;z-index:10;cursor:pointer;margin:0}.host-checkbox input[type=checkbox]{width:16px;height:16px;cursor:pointer;accent-color:var(--bs-primary)}.list-checkbox{width:16px;height:16px;flex-shrink:0;cursor:pointer;accent-color:var(--bs-primary)}.selection-count{font-size:.85rem;color:var(--bs-secondary);align-self:center;white-space:nowrap}.multiexec-bar{flex-shrink:0;border-top:1px solid rgba(255,255,255,.12);padding:10px 0 0 0;margin-top:4px}.multiexec-bar .multiexec-header{display:flex;align-items:center;font-size:.8rem;font-weight:700;color:var(--bs-secondary);text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px}.multiexec-bar .multiexec-target-count{font-weight:400;text-transform:none;letter-spacing:0}.multiexec-bar .multiexec-targets{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px}.multiexec-bar .multiexec-chip{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:100px;font-size:.78rem;font-weight:600;border:1px solid rgba(255,255,255,.3);background:var(--bs-secondary-bg);color:var(--bs-body-color);cursor:pointer;transition:all .15s;-webkit-user-select:none;user-select:none;opacity:.85}.multiexec-bar .multiexec-chip i{font-size:.65rem}.multiexec-bar .multiexec-chip.active{border-color:var(--bs-primary);background:rgba(var(--bs-primary-rgb), 0.18);color:var(--bs-body-color)}.multiexec-bar .multiexec-chip:hover:not(.active){border-color:rgba(255,255,255,.5);color:var(--bs-body-color);opacity:1}.multiexec-bar .multiexec-empty{font-size:.8rem;color:var(--bs-secondary);font-style:italic;padding:4px 0 8px}.multiexec-bar .multiexec-input-row{display:flex;gap:8px}.multiexec-bar .multiexec-input-row .form-control{font-size:.85rem;padding:6px 12px;background:var(--bs-secondary-bg);border-color:rgba(255,255,255,.2);color:var(--bs-body-color);border-radius:6px}.multiexec-bar .multiexec-input-row .form-control:focus{border-color:var(--bs-primary);box-shadow:0 0 0 .15rem rgba(var(--bs-primary-rgb), 0.2)}.multiexec-bar .multiexec-input-row .form-control::placeholder{color:var(--bs-secondary)}.multiexec-bar .btn-send{flex-shrink:0;padding:6px 14px;background:var(--bs-primary);border:none;border-radius:6px;color:#fff;font-size:.82rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;white-space:nowrap;transition:opacity .15s}.multiexec-bar .btn-send:hover:not(:disabled){opacity:.85}.multiexec-bar .btn-send:disabled{opacity:.4;cursor:default}.btn-new--primary{background:var(--bs-primary) !important;border-color:var(--bs-primary) !important;color:#fff !important}.btn-new--primary:hover{opacity:.85}.search-suggestions{position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:1000;background:var(--bs-body-bg);border:1px solid rgba(255,255,255,.13);border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.35),0 2px 8px rgba(0,0,0,.2);overflow:hidden;will-change:opacity,transform;animation:suggestions-in .12s ease-out}.search-suggestions .suggestions-header{display:flex;align-items:center;gap:7px;padding:8px 12px 6px;font-size:.72rem;color:var(--bs-secondary);border-bottom:1px solid rgba(255,255,255,.07)}.search-suggestions .suggestions-header .suggestions-trigger{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:var(--bs-primary);color:#fff;border-radius:3px;font-size:.7rem;font-weight:700;flex-shrink:0;line-height:1}.search-suggestions .suggestions-section-label{padding:6px 12px 2px;font-size:.63rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--bs-secondary);opacity:.55}.search-suggestions .suggestion-item{display:flex;align-items:center;gap:10px;padding:7px 12px;cursor:pointer;border-left:2px solid rgba(0,0,0,0);transition:background .1s,border-color .1s}.search-suggestions .suggestion-item:hover{background:var(--bs-secondary-bg)}.search-suggestions .suggestion-item.active{background:rgba(var(--bs-primary-rgb), 0.1);border-left-color:var(--bs-primary)}.search-suggestions .suggestion-item.active .suggestion-label{color:var(--bs-primary)}.search-suggestions .suggestion-item .suggestion-icon{width:18px;text-align:center;flex-shrink:0;font-size:.78rem;color:var(--bs-secondary);opacity:.7}.search-suggestions .suggestion-item .suggestion-body{flex:1;min-width:0;display:flex;align-items:baseline;gap:10px}.search-suggestions .suggestion-item .suggestion-label{font-family:\"Cascadia Code\",\"Fira Code\",\"Consolas\",monospace;font-size:.82rem;font-weight:600;color:var(--bs-body-color);white-space:nowrap;transition:color .1s}.search-suggestions .suggestion-item .suggestion-hint{font-size:.74rem;color:var(--bs-secondary);opacity:.65;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.search-suggestions .suggestions-footer{display:flex;align-items:center;gap:5px;padding:5px 12px 6px;border-top:1px solid rgba(255,255,255,.07);font-size:.67rem;color:var(--bs-secondary);opacity:.6}.search-suggestions .suggestions-footer kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:16px;padding:0 4px;background:var(--bs-secondary-bg);border:1px solid rgba(255,255,255,.15);border-radius:3px;font-size:.64rem;font-family:inherit;color:var(--bs-body-color);line-height:1}.search-suggestions .suggestions-footer span{margin-right:6px}@keyframes suggestions-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}", "",{"version":3,"sources":["webpack://./src/components/connectionPanel.component.scss"],"names":[],"mappings":"AAAA,MACI,YAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CAGJ,SACI,YAAA,CACA,qBAAA,CACA,WAAA,CACA,mBAAA,CACA,eAAA,CACA,UAAA,CACA,qBAAA,CAIJ,gBACI,aAAA,CACA,UAAA,CACA,mBAAA,CAEA,4BACI,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,oBAAA,CAGJ,6BACI,YAAA,CACA,kBAAA,CACA,SAAA,CAGJ,8BACI,YAAA,CACA,kBAAA,CACA,OAAA,CAGJ,mBACI,gBAAA,CACA,eAAA,CACA,0BAAA,CACA,QAAA,CAGJ,6BACI,iBAAA,CACA,YAAA,CACA,kBAAA,CAGJ,8BACI,iBAAA,CACA,UAAA,CACA,eAAA,CACA,WAAA,CACA,yBAAA,CACA,cAAA,CACA,cAAA,CACA,WAAA,CACA,oCAAA,0BAAA,CAGJ,8BACI,iBAAA,CACA,sBAAA,CACA,kBAAA,CACA,iCAAA,CACA,kCAAA,CACA,0BAAA,CAEA,oCACI,8BAAA,CACA,wDAAA,CAGJ,2CAAA,yBAAA,CAIR,UACI,UAAA,CACA,WAAA,CACA,WAAA,CACA,iCAAA,CACA,iBAAA,CACA,0BAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,gBAAA,gCAAA,CAGJ,UACI,UAAA,CACA,WAAA,CACA,WAAA,CACA,wBAAA,CACA,iBAAA,CACA,yBAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,mBAAA,CAEA,iBACI,4BAAA,CACA,UAAA,CAEJ,6BAAA,iCAAA,CAIJ,kBACI,WAAA,CACA,aAAA,CACA,eAAA,CACA,iBAAA,CACA,eAAA,CACA,iBAAA,CAEA,qCAAA,SAAA,CACA,2CACI,kBAAA,CACA,kBAAA,CAKR,aACI,eAAA,CACA,KAAA,CACA,SAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,gBAAA,CACA,eAAA,CACA,0BAAA,CACA,4BAAA,CACA,oBAAA,CACA,6CAAA,CACA,kBAAA,CAGJ,SACI,YAAA,CACA,kBAAA,CACA,OAAA,CACA,gBAAA,CACA,iCAAA,CACA,sCAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,0BAAA,CACA,cAAA,CACA,mBAAA,CACA,kBAAA,CAEA,WAAA,eAAA,CACA,eACI,4BAAA,CACA,8BAAA,CACA,UAAA,CAKR,kBACI,YAAA,CACA,QAAA,CACA,oBAAA,CACA,6DAAA,CAEA,yBANJ,kBAOQ,yBAAA,CAAA,CAKR,0BACI,eAAA,CACA,eAAA,CAIJ,MACI,iBAAA,CACA,gBAAA,CACA,SAAA,CACA,WAAA,CACA,qBAAA,CACA,UAAA,CACA,sCAAA,CACA,iBAAA,CACA,4BAAA,CACA,cAAA,CACA,0BAAA,CAEA,uBACI,uCAAA,CACA,2CAAA,SAAA,CAGJ,iBACI,WAAA,CAGJ,iBACI,mBAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAGJ,gBACI,YAAA,CACA,kBAAA,CACA,OAAA,CACA,WAAA,CAGJ,YACI,aAAA,CACA,cAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,aAAA,CACA,yBAAA,CAGJ,SACI,gBAAA,CACA,eAAA,CACA,QAAA,CACA,kBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,0BAAA,CAGJ,mBACI,gBAAA,CACA,QAAA,CACA,0BAAA,CACA,UAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAGJ,oBACI,iBAAA,CACA,SAAA,CACA,WAAA,CACA,SAAA,CAKR,YACI,YAAA,CACA,qBAAA,CACA,OAAA,CACA,oBAAA,CACA,eAAA,CACA,WAAA,CAGJ,WACI,YAAA,CACA,kBAAA,CACA,QAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,iBAAA,CACA,yBAAA,CAEA,iBACI,iCAAA,CACA,2BAAA,SAAA,CAGJ,iBACI,aAAA,CACA,cAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,aAAA,CACA,yBAAA,CAGJ,sBACI,MAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,OAAA,CAGJ,uBACI,cAAA,CACA,eAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAGJ,qBACI,eAAA,CACA,0BAAA,CACA,UAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAGJ,yBACI,iBAAA,CACA,aAAA,CAIR,gBACI,mBAAA,CACA,kBAAA,CACA,cAAA,CACA,gBAAA,CACA,uBAAA,CACA,UAAA,CACA,cAAA,CAEA,sBACI,SAAA,CACA,yBAAA,CAKR,UACI,UAAA,CACA,WAAA,CACA,WAAA,CACA,wBAAA,CACA,iBAAA,CACA,yBAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,SAAA,CACA,uCAAA,CAEA,8CACI,iCAAA,CACA,0BAAA,CACA,oBAAA,CAKR,yBACI,YAAA,CACA,oCAAA,CACA,WAAA,CACA,eAAA,CAIJ,aACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,yBAAA,CACA,iBAAA,CAIJ,gBACI,SAAA,CACA,WAAA,CACA,+BAAA,CACA,YAAA,CAIJ,YACI,SAAA,CACA,UAAA,CACA,iBAAA,CACA,aAAA,CACA,wBAAA,CAEA,0BAAA,kBAAA,CACA,2BAAA,kBAAA,CACA,4BACI,kBAAA,CACA,8CAAA,CAIR,iBACI,iBAAA,CACA,UAAA,CACA,QAAA,CAGJ,wBACI,QAAA,SAAA,CACA,IAAA,UAAA,CAAA,CAIJ,iBAAA,WAAA,CACA,wBAAA,eAAA,CAEA,qCAEI,yCAAA,CACA,uDAAA,CAIJ,6BACI,iCAAA,CACA,mCAAA,CACA,mBAAA,CAIJ,+BACI,eAAA,CACA,eAAA,CACA,oBAAA,CAIJ,kBACI,yBAAA,CACA,wBAAA,CACA,gBAAA,CAGJ,gBACI,yCAAA,CACA,uDAAA,CAGJ,qBACI,uDAAA,CACA,mCAAA,CACA,mBAAA,CAGJ,eACI,iBAAA,CACA,OAAA,CACA,QAAA,CACA,UAAA,CACA,cAAA,CACA,QAAA,CAEA,oCACI,UAAA,CACA,WAAA,CACA,cAAA,CACA,8BAAA,CAIR,eACI,UAAA,CACA,WAAA,CACA,aAAA,CACA,cAAA,CACA,8BAAA,CAGJ,iBACI,gBAAA,CACA,yBAAA,CACA,iBAAA,CACA,kBAAA,CAIJ,eACI,aAAA,CACA,0CAAA,CACA,kBAAA,CACA,cAAA,CAEA,iCACI,YAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CACA,yBAAA,CACA,wBAAA,CACA,oBAAA,CACA,iBAAA,CAGJ,uCACI,eAAA,CACA,mBAAA,CACA,gBAAA,CAGJ,kCACI,YAAA,CACA,cAAA,CACA,OAAA,CACA,iBAAA,CAGJ,+BACI,mBAAA,CACA,kBAAA,CACA,OAAA,CACA,gBAAA,CACA,mBAAA,CACA,gBAAA,CACA,eAAA,CACA,sCAAA,CACA,iCAAA,CACA,yBAAA,CACA,cAAA,CACA,mBAAA,CACA,wBAAA,CACA,gBAAA,CAEA,iCAAA,gBAAA,CAEA,sCACI,8BAAA,CACA,4CAAA,CACA,0BAAA,CAGJ,kDACI,iCAAA,CACA,0BAAA,CAIR,gCACI,eAAA,CACA,yBAAA,CACA,iBAAA,CACA,iBAAA,CAGJ,oCACI,YAAA,CACA,OAAA,CAEA,kDACI,gBAAA,CACA,gBAAA,CACA,iCAAA,CACA,iCAAA,CACA,0BAAA,CACA,iBAAA,CAEA,wDACI,8BAAA,CACA,wDAAA,CAGJ,+DAAA,yBAAA,CAIR,yBACI,aAAA,CACA,gBAAA,CACA,4BAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,gBAAA,CACA,eAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,OAAA,CACA,kBAAA,CACA,uBAAA,CAEA,8CAAA,WAAA,CACA,kCAAA,UAAA,CAAA,cAAA,CAIR,kBACI,uCAAA,CACA,yCAAA,CACA,qBAAA,CAEA,wBACI,WAAA,CAKR,oBACI,iBAAA,CACA,oBAAA,CACA,MAAA,CACA,OAAA,CACA,YAAA,CACA,4BAAA,CACA,sCAAA,CACA,kBAAA,CACA,8DAAA,CACA,eAAA,CACA,6BAAA,CACA,sCAAA,CAEA,wCACI,YAAA,CACA,kBAAA,CACA,OAAA,CACA,oBAAA,CACA,gBAAA,CACA,yBAAA,CACA,6CAAA,CAEA,6DACI,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,4BAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,aAAA,CACA,aAAA,CAIR,+CACI,oBAAA,CACA,gBAAA,CACA,eAAA,CACA,oBAAA,CACA,wBAAA,CACA,yBAAA,CACA,WAAA,CAGJ,qCACI,YAAA,CACA,kBAAA,CACA,QAAA,CACA,gBAAA,CACA,cAAA,CACA,mCAAA,CACA,0CAAA,CAEA,2CACI,iCAAA,CAGJ,4CACI,2CAAA,CACA,mCAAA,CAEA,8DAAA,uBAAA,CAGJ,sDACI,UAAA,CACA,iBAAA,CACA,aAAA,CACA,gBAAA,CACA,yBAAA,CACA,UAAA,CAGJ,sDACI,MAAA,CACA,WAAA,CACA,YAAA,CACA,oBAAA,CACA,QAAA,CAGJ,uDACI,4DAAA,CACA,gBAAA,CACA,eAAA,CACA,0BAAA,CACA,kBAAA,CACA,oBAAA,CAGJ,sDACI,gBAAA,CACA,yBAAA,CACA,WAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CAIR,wCACI,YAAA,CACA,kBAAA,CACA,OAAA,CACA,oBAAA,CACA,0CAAA,CACA,gBAAA,CACA,yBAAA,CACA,UAAA,CAEA,4CACI,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,cAAA,CACA,WAAA,CACA,aAAA,CACA,iCAAA,CACA,sCAAA,CACA,iBAAA,CACA,gBAAA,CACA,mBAAA,CACA,0BAAA,CACA,aAAA,CAGJ,6CACI,gBAAA,CAKZ,0BACI,KAAA,SAAA,CAAA,0BAAA,CACA,GAAA,SAAA,CAAA,uBAAA,CAAA","sourcesContent":[":host {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    padding: 1.5rem 2rem;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n// ── Header ────────────────────────────────────────────────────────────────────\r\n.header-section {\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    margin-bottom: 0.5rem;\r\n\r\n    .header-top {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        margin-bottom: 0.75rem;\r\n    }\r\n\r\n    .header-left {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 0.5rem;\r\n    }\r\n\r\n    .header-right {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 4px;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.8rem;\r\n        font-weight: 800;\r\n        color: var(--bs-body-color);\r\n        margin: 0;\r\n    }\r\n\r\n    .search-wrap {\r\n        position: relative;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    .search-clear {\r\n        position: absolute;\r\n        right: 12px;\r\n        background: none;\r\n        border: none;\r\n        color: var(--bs-secondary);\r\n        cursor: pointer;\r\n        font-size: 12px;\r\n        padding: 4px;\r\n        &:hover { color: var(--bs-body-color); }\r\n    }\r\n\r\n    .form-control {\r\n        border-radius: 8px;\r\n        padding: 0.75rem 1.25rem;\r\n        transition: all 0.3s;\r\n        background: var(--bs-secondary-bg);\r\n        border-color: rgba(255,255,255,0.35);\r\n        color: var(--bs-body-color);\r\n\r\n        &:focus {\r\n            border-color: var(--bs-primary);\r\n            box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.15);\r\n        }\r\n\r\n        &::placeholder { color: var(--bs-secondary); }\r\n    }\r\n}\r\n\r\n.back-btn {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    background: var(--bs-secondary-bg);\r\n    border-radius: 6px;\r\n    color: var(--bs-body-color);\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 14px;\r\n    &:hover { background: var(--bs-tertiary-bg); }\r\n}\r\n\r\n.view-btn {\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    background: transparent;\r\n    border-radius: 6px;\r\n    color: var(--bs-secondary);\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 13px;\r\n    transition: all 0.15s;\r\n\r\n    &.active {\r\n        background: var(--bs-primary);\r\n        color: #fff;\r\n    }\r\n    &:not(.active):hover { background: var(--bs-secondary-bg); }\r\n}\r\n\r\n// ── Scroll container ──────────────────────────────────────────────────────────\r\n.scroll-container {\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    margin-top: 1rem;\r\n    padding-right: 8px;\r\n\r\n    &::-webkit-scrollbar { width: 6px; }\r\n    &::-webkit-scrollbar-thumb {\r\n        background: #ced4da;\r\n        border-radius: 10px;\r\n    }\r\n}\r\n\r\n// ── Group title ───────────────────────────────────────────────────────────────\r\n.group-title {\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 5;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: var(--bs-body-color);\r\n    background: var(--bs-body-bg);\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 2px solid rgba(255,255,255,0.35);\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.btn-new {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 6px;\r\n    padding: 5px 12px;\r\n    background: var(--bs-secondary-bg);\r\n    border: 1px solid rgba(255,255,255,0.35);\r\n    border-radius: 6px;\r\n    font-size: 0.8rem;\r\n    font-weight: 600;\r\n    color: var(--bs-body-color);\r\n    cursor: pointer;\r\n    transition: all 0.15s;\r\n    white-space: nowrap;\r\n\r\n    i { font-size: 0.7rem; }\r\n    &:hover {\r\n        background: var(--bs-primary);\r\n        border-color: var(--bs-primary);\r\n        color: #fff;\r\n    }\r\n}\r\n\r\n// ── Grid ──────────────────────────────────────────────────────────────────────\r\n.connection-group {\r\n    display: grid;\r\n    gap: 12px;\r\n    margin-bottom: 2.5rem;\r\n    grid-template-columns: repeat(auto-fill, minmax(160px, 280px));\r\n\r\n    @media (max-width: 400px) {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n// Recent: giới hạn đúng 1 hàng bất kể màn hình\r\n.connection-group--recent {\r\n    max-height: 90px;\r\n    overflow: hidden;\r\n}\r\n\r\n// ── Card ──────────────────────────────────────────────────────────────────────\r\n.card {\r\n    position: relative;\r\n    overflow: visible;\r\n    z-index: 1;\r\n    height: 90px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    border: 1px solid rgba(255,255,255,0.35);\r\n    border-radius: 8px;\r\n    background: var(--bs-body-bg);\r\n    cursor: pointer;\r\n    transition: background 0.15s;\r\n\r\n    &:hover, &.show {\r\n        background-color: var(--bs-secondary-bg);\r\n        .btn-dots { opacity: 1; }\r\n    }\r\n\r\n    &:has(.show) {\r\n        z-index: 100;\r\n    }\r\n\r\n    .card-body {\r\n        padding: 1rem 0.75rem;\r\n        height: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .card-top {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 8px;\r\n        min-width: 0;\r\n    }\r\n\r\n    .icon {\r\n        width: 1.25rem;\r\n        height: 1.25rem;\r\n        display: inline-flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-size: 1.1rem;\r\n        flex-shrink: 0;\r\n        color: var(--bs-secondary);\r\n    }\r\n\r\n    h6 {\r\n        font-size: 1.1rem;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        padding-right: 24px;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        color: var(--bs-body-color);\r\n    }\r\n\r\n    .info-text p {\r\n        font-size: 0.85rem;\r\n        margin: 0;\r\n        color: var(--bs-body-color);\r\n        opacity: 0.5;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card-options {\r\n        position: absolute;\r\n        top: 0.4rem;\r\n        right: 0.4rem;\r\n        z-index: 5;\r\n    }\r\n}\r\n\r\n// ── List ──────────────────────────────────────────────────────────────────────\r\n.list-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n    margin-bottom: 2.5rem;\r\n    border-radius: 0;\r\n    border: none;\r\n}\r\n\r\n.list-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 10px 12px;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: background 0.1s;\r\n\r\n    &:hover {\r\n        background: var(--bs-secondary-bg);\r\n        .btn-dots { opacity: 1; }\r\n    }\r\n\r\n    .icon {\r\n        width: 1.25rem;\r\n        height: 1.25rem;\r\n        display: inline-flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        font-size: 1.1rem;\r\n        flex-shrink: 0;\r\n        color: var(--bs-secondary);\r\n    }\r\n\r\n    .list-body {\r\n        flex: 1;\r\n        min-width: 0;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2px;\r\n    }\r\n\r\n    .list-title {\r\n        font-size: 1rem;\r\n        font-weight: 600;\r\n        color: var(--bs-body-color);\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .list-sub {\r\n        font-size: 0.8rem;\r\n        color: var(--bs-body-color);\r\n        opacity: 0.5;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n\r\n    .card-options {\r\n        position: relative;\r\n        flex-shrink: 0;\r\n    }\r\n}\r\n\r\n.list-group-tag {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    margin-top: 3px;\r\n    font-size: 0.75rem;\r\n    color: var(--bs-primary);\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n        opacity: 1;\r\n        text-decoration: underline;\r\n    }\r\n}\r\n\r\n// ── Menu button ───────────────────────────────────────────────────────────────\r\n.btn-dots {\r\n    width: 24px;\r\n    height: 24px;\r\n    border: none;\r\n    background: transparent;\r\n    border-radius: 4px;\r\n    color: var(--bs-secondary);\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 12px;\r\n    opacity: 0;\r\n    transition: opacity 0.15s, background 0.15s;\r\n\r\n    &:hover, &[aria-expanded='true'] {\r\n        background: var(--bs-secondary-bg);\r\n        color: var(--bs-body-color);\r\n        opacity: 1 !important;\r\n    }\r\n}\r\n\r\n// ── Dropdown ──────────────────────────────────────────────────────────────────\r\n::ng-deep .dropdown-menu {\r\n    z-index: 1050;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n    border: none;\r\n    min-width: 120px;\r\n}\r\n\r\n// ── Empty state ───────────────────────────────────────────────────────────────\r\n.empty-state {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 3rem 1rem;\r\n    color: var(--bs-secondary);\r\n    text-align: center;\r\n}\r\n\r\n// ── Header divider ─────────────────────────────────────────────────────────────\r\n.header-divider {\r\n    width: 1px;\r\n    height: 20px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    margin: 0 2px;\r\n}\r\n\r\n// ── Status dots ────────────────────────────────────────────────────────────────\r\n.status-dot {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    background: transparent;\r\n\r\n    &.status-online  { background: #a3be8c; }\r\n    &.status-offline { background: #bf616a; }\r\n    &.status-checking {\r\n        background: #ebcb8b;\r\n        animation: status-pulse 1s ease-in-out infinite;\r\n    }\r\n}\r\n\r\n.card-status-dot {\r\n    position: absolute;\r\n    bottom: 7px;\r\n    left: 9px;\r\n}\r\n\r\n@keyframes status-pulse {\r\n    0%, 100% { opacity: 1; }\r\n    50%       { opacity: 0.3; }\r\n}\r\n\r\n// ── Drag & drop ────────────────────────────────────────────────────────────────\r\n[draggable='true'] { cursor: grab; }\r\n[draggable='true']:active { cursor: grabbing; }\r\n\r\n.card.drag-over,\r\n.list-item.drag-over {\r\n    border-color: var(--bs-primary) !important;\r\n    background: rgba(var(--bs-primary-rgb), 0.12) !important;\r\n}\r\n\r\n// ── Keyboard-selected search result ────────────────────────────────────────────\r\n.list-item.keyboard-selected {\r\n    background: var(--bs-secondary-bg);\r\n    outline: 1px solid var(--bs-primary);\r\n    outline-offset: -1px;\r\n}\r\n\r\n// ── Recent list mode (limit height) ───────────────────────────────────────────\r\n.connection-group--recent-list {\r\n    max-height: 90px;\r\n    overflow: hidden;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n// ── Selection mode ─────────────────────────────────────────────────────────────\r\n.card--selectable {\r\n    cursor: pointer !important;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.card--selected {\r\n    border-color: var(--bs-primary) !important;\r\n    background: rgba(var(--bs-primary-rgb), 0.15) !important;\r\n}\r\n\r\n.list-item--selected {\r\n    background: rgba(var(--bs-primary-rgb), 0.15) !important;\r\n    outline: 1px solid var(--bs-primary);\r\n    outline-offset: -1px;\r\n}\r\n\r\n.host-checkbox {\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 8px;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n    margin: 0;\r\n\r\n    input[type='checkbox'] {\r\n        width: 16px;\r\n        height: 16px;\r\n        cursor: pointer;\r\n        accent-color: var(--bs-primary);\r\n    }\r\n}\r\n\r\n.list-checkbox {\r\n    width: 16px;\r\n    height: 16px;\r\n    flex-shrink: 0;\r\n    cursor: pointer;\r\n    accent-color: var(--bs-primary);\r\n}\r\n\r\n.selection-count {\r\n    font-size: 0.85rem;\r\n    color: var(--bs-secondary);\r\n    align-self: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n// ── MultiExec Bar ──────────────────────────────────────────────────────────────\r\n.multiexec-bar {\r\n    flex-shrink: 0;\r\n    border-top: 1px solid rgba(255, 255, 255, 0.12);\r\n    padding: 10px 0 0 0;\r\n    margin-top: 4px;\r\n\r\n    .multiexec-header {\r\n        display: flex;\r\n        align-items: center;\r\n        font-size: 0.8rem;\r\n        font-weight: 700;\r\n        color: var(--bs-secondary);\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.04em;\r\n        margin-bottom: 8px;\r\n    }\r\n\r\n    .multiexec-target-count {\r\n        font-weight: 400;\r\n        text-transform: none;\r\n        letter-spacing: 0;\r\n    }\r\n\r\n    .multiexec-targets {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        gap: 5px;\r\n        margin-bottom: 8px;\r\n    }\r\n\r\n    .multiexec-chip {\r\n        display: inline-flex;\r\n        align-items: center;\r\n        gap: 4px;\r\n        padding: 4px 10px;\r\n        border-radius: 100px;\r\n        font-size: 0.78rem;\r\n        font-weight: 600;\r\n        border: 1px solid rgba(255, 255, 255, 0.15);\r\n        background: var(--bs-secondary-bg);\r\n        color: var(--bs-secondary);\r\n        cursor: pointer;\r\n        transition: all 0.15s;\r\n        -webkit-user-select: none;\r\n        user-select: none;\r\n\r\n        i { font-size: 0.65rem; }\r\n\r\n        &.active {\r\n            border-color: var(--bs-primary);\r\n            background: rgba(var(--bs-primary-rgb), 0.18);\r\n            color: var(--bs-body-color);\r\n        }\r\n\r\n        &:hover:not(.active) {\r\n            border-color: rgba(255, 255, 255, 0.3);\r\n            color: var(--bs-body-color);\r\n        }\r\n    }\r\n\r\n    .multiexec-empty {\r\n        font-size: 0.8rem;\r\n        color: var(--bs-secondary);\r\n        font-style: italic;\r\n        padding: 4px 0 8px;\r\n    }\r\n\r\n    .multiexec-input-row {\r\n        display: flex;\r\n        gap: 8px;\r\n\r\n        .form-control {\r\n            font-size: 0.85rem;\r\n            padding: 6px 12px;\r\n            background: var(--bs-secondary-bg);\r\n            border-color: rgba(255, 255, 255, 0.2);\r\n            color: var(--bs-body-color);\r\n            border-radius: 6px;\r\n\r\n            &:focus {\r\n                border-color: var(--bs-primary);\r\n                box-shadow: 0 0 0 0.15rem rgba(var(--bs-primary-rgb), 0.2);\r\n            }\r\n\r\n            &::placeholder { color: var(--bs-secondary); }\r\n        }\r\n    }\r\n\r\n    .btn-send {\r\n        flex-shrink: 0;\r\n        padding: 6px 14px;\r\n        background: var(--bs-primary);\r\n        border: none;\r\n        border-radius: 6px;\r\n        color: #fff;\r\n        font-size: 0.82rem;\r\n        font-weight: 600;\r\n        cursor: pointer;\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        white-space: nowrap;\r\n        transition: opacity 0.15s;\r\n\r\n        &:hover:not(:disabled) { opacity: 0.85; }\r\n        &:disabled { opacity: 0.4; cursor: default; }\r\n    }\r\n}\r\n\r\n.btn-new--primary {\r\n    background: var(--bs-primary) !important;\r\n    border-color: var(--bs-primary) !important;\r\n    color: #fff !important;\r\n\r\n    &:hover {\r\n        opacity: 0.85;\r\n    }\r\n}\r\n\r\n// ── Search suggestions (autocomplete) ──────────────────────────────────────────\r\n.search-suggestions {\r\n    position: absolute;\r\n    top: calc(100% + 6px);\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1000;\r\n    background: var(--bs-body-bg);\r\n    border: 1px solid rgba(255, 255, 255, 0.13);\r\n    border-radius: 10px;\r\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.2);\r\n    overflow: hidden;\r\n    will-change: opacity, transform;\r\n    animation: suggestions-in 0.12s ease-out;\r\n\r\n    .suggestions-header {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 7px;\r\n        padding: 8px 12px 6px;\r\n        font-size: 0.72rem;\r\n        color: var(--bs-secondary);\r\n        border-bottom: 1px solid rgba(255, 255, 255, 0.07);\r\n\r\n        .suggestions-trigger {\r\n            display: inline-flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            width: 16px;\r\n            height: 16px;\r\n            background: var(--bs-primary);\r\n            color: #fff;\r\n            border-radius: 3px;\r\n            font-size: 0.7rem;\r\n            font-weight: 700;\r\n            flex-shrink: 0;\r\n            line-height: 1;\r\n        }\r\n    }\r\n\r\n    .suggestions-section-label {\r\n        padding: 6px 12px 2px;\r\n        font-size: 0.63rem;\r\n        font-weight: 700;\r\n        letter-spacing: 0.07em;\r\n        text-transform: uppercase;\r\n        color: var(--bs-secondary);\r\n        opacity: 0.55;\r\n    }\r\n\r\n    .suggestion-item {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 10px;\r\n        padding: 7px 12px;\r\n        cursor: pointer;\r\n        border-left: 2px solid transparent;\r\n        transition: background 0.1s, border-color 0.1s;\r\n\r\n        &:hover {\r\n            background: var(--bs-secondary-bg);\r\n        }\r\n\r\n        &.active {\r\n            background: rgba(var(--bs-primary-rgb), 0.1);\r\n            border-left-color: var(--bs-primary);\r\n\r\n            .suggestion-label { color: var(--bs-primary); }\r\n        }\r\n\r\n        .suggestion-icon {\r\n            width: 18px;\r\n            text-align: center;\r\n            flex-shrink: 0;\r\n            font-size: 0.78rem;\r\n            color: var(--bs-secondary);\r\n            opacity: 0.7;\r\n        }\r\n\r\n        .suggestion-body {\r\n            flex: 1;\r\n            min-width: 0;\r\n            display: flex;\r\n            align-items: baseline;\r\n            gap: 10px;\r\n        }\r\n\r\n        .suggestion-label {\r\n            font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;\r\n            font-size: 0.82rem;\r\n            font-weight: 600;\r\n            color: var(--bs-body-color);\r\n            white-space: nowrap;\r\n            transition: color 0.1s;\r\n        }\r\n\r\n        .suggestion-hint {\r\n            font-size: 0.74rem;\r\n            color: var(--bs-secondary);\r\n            opacity: 0.65;\r\n            white-space: nowrap;\r\n            overflow: hidden;\r\n            text-overflow: ellipsis;\r\n        }\r\n    }\r\n\r\n    .suggestions-footer {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        padding: 5px 12px 6px;\r\n        border-top: 1px solid rgba(255, 255, 255, 0.07);\r\n        font-size: 0.67rem;\r\n        color: var(--bs-secondary);\r\n        opacity: 0.6;\r\n\r\n        kbd {\r\n            display: inline-flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            min-width: 20px;\r\n            height: 16px;\r\n            padding: 0 4px;\r\n            background: var(--bs-secondary-bg);\r\n            border: 1px solid rgba(255, 255, 255, 0.15);\r\n            border-radius: 3px;\r\n            font-size: 0.64rem;\r\n            font-family: inherit;\r\n            color: var(--bs-body-color);\r\n            line-height: 1;\r\n        }\r\n\r\n        span {\r\n            margin-right: 6px;\r\n        }\r\n    }\r\n}\r\n\r\n@keyframes suggestions-in {\r\n    from { opacity: 0; transform: translateY(-4px); }\r\n    to   { opacity: 1; transform: translateY(0); }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 348
/*!****************************************************!*\
  !*** ./src/components/multiExecTab.component.scss ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./multiExecTab.component.scss */ 283);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 358
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__358__;

/***/ },

/***/ 380
/*!**************************************************!*\
  !*** ./src/components/hostEditor.component.scss ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./hostEditor.component.scss */ 71);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 403
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE__403__ === 'undefined') { var e = new Error("Cannot find module 'net'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE__403__;

/***/ },

/***/ 425
/*!*******************************************************!*\
  !*** ./src/components/connectionPanel.component.scss ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


        var result = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./connectionPanel.component.scss */ 324);

        if (result && result.__esModule) {
            result = result.default;
        }

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 565
/*!******************************************************************************************************************!*\
  !*** ../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/groupEditor.component.pug ***!
  \******************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ 757);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"modal-header\"\u003E\n  \u003Ch5 class=\"modal-title\"\u003E\u003Ci class=\"fas fa-folder me-2\"\u003E\u003C\u002Fi\u003E{{ editMode ? 'Edit Group' : 'New Group' }}\u003C\u002Fh5\u003E\n  \u003Cbutton class=\"btn-close\" (click)=\"cancel()\"\u003E\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"modal-body\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv class=\"mb-3\"\u003E\n      \u003Clabel class=\"form-label\"\u003EGroup Name *\u003C\u002Flabel\u003E\n      \u003Cinput class=\"form-control\" type=\"text\" [(ngModel)]=\"group.name\" name=\"groupName\" placeholder=\"e.g. Production Servers\" required autofocus\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"mb-3\"\u003E\n      \u003Clabel class=\"form-label\"\u003EColor\u003C\u002Flabel\u003E\n      \u003Cdiv class=\"d-flex flex-wrap gap-2 mt-1\"\u003E\n        \u003Cdiv class=\"color-swatch\" *ngFor=\"let c of colorPresets\" [style.background]=\"c\" [class.selected]=\"group.color === c\" (click)=\"group.color = c\" style=\"width:24px;height:24px;border-radius:4px;cursor:pointer;border:2px solid transparent\" [style.border-color]=\"group.color === c ? 'white' : 'transparent'\"\u003E\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"color-swatch\" [class.selected]=\"!group.color\" (click)=\"group.color = ''\" style=\"width:24px;height:24px;border-radius:4px;cursor:pointer;border:2px solid var(--bs-border-color);background:transparent;display:flex;align-items:center;justify-content:center\"\u003E\u003Ci class=\"fas fa-ban text-secondary\" style=\"font-size:10px\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\u003Cdiv class=\"modal-footer\"\u003E\n  \u003Cbutton class=\"btn btn-secondary\" (click)=\"cancel()\"\u003ECancel\u003C\u002Fbutton\u003E\n  \u003Cbutton class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!isValid\"\u003E\u003Ci class=\"fas fa-save me-1\"\u003E\u003C\u002Fi\u003E{{ editMode ? 'Save' : 'Create Group' }}\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ },

/***/ 585
/*!*************************************************!*\
  !*** ./src/components/hostEditor.component.pug ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var req = __webpack_require__(/*! !!../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/hostEditor.component.pug */ 310);
module.exports = (req['default'] || req).apply(req, [])

/***/ },

/***/ 650
/*!*****************************!*\
  !*** external "tabby-core" ***!
  \*****************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__650__;

/***/ },

/***/ 757
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  var context, lines, start, end;
  try {
    str = str || (__webpack_require__(/*! fs */ 947).readFileSync)(filename, {encoding: 'utf8'});
    context = 3;
    lines = str.split('\n');
    start = Math.max(lineno - context, 0);
    end = Math.min(lines.length, lineno + context);
  } catch (ex) {
    err.message +=
      ' - could not read from ' + filename + ' (' + ex.message + ')';
    pug_rethrow(err, null, lineno);
    return;
  }

  // Error context
  context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ },

/***/ 764
/*!**************************************************!*\
  !*** ./src/components/groupEditor.component.pug ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var req = __webpack_require__(/*! !!../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/groupEditor.component.pug */ 565);
module.exports = (req['default'] || req).apply(req, [])

/***/ },

/***/ 765
/*!*********************************************!*\
  !*** external "@ng-bootstrap/ng-bootstrap" ***!
  \*********************************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__765__;

/***/ },

/***/ 801
/*!**********************************************************************************************************************!*\
  !*** ../node_modules/pug-loader/index.js??ruleSet[1].rules[3].use[1]!./src/components/connectionPanel.component.pug ***!
  \**********************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ 757);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cinput id=\"cm-import-file\" type=\"file\" accept=\".json\" style=\"display:none\" (change)=\"importConnections($event)\"\u003E\n\u003Cdiv class=\"content\"\u003E\n  \u003C!-- ── Header ──────────────────────────────────────────────────────────────--\u003E\n  \u003Cdiv class=\"header-section\"\u003E\n    \u003Cdiv class=\"header-top\"\u003E\n      \u003Cdiv class=\"header-left\"\u003E\n        \u003Cbutton class=\"back-btn\" *ngIf=\"selectedGroup\" (click)=\"backToRoot()\"\u003E\u003Ci class=\"fas fa-arrow-left\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Ch3\u003E{{ selectedGroup ? selectedGroup.name : 'Tabby Home' }}\u003C\u002Fh3\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"header-right\"\u003E\n        \u003Cbutton class=\"view-btn\" [title]=\"sortLabel\" (click)=\"cycleSortMode()\"\u003E\u003Ci [class]=\"sortIcon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"view-btn\" title=\"Check connection status\" (click)=\"checkAllStatuses()\" [class.active]=\"isCheckingStatus\"\u003E\u003Ci class=\"fas fa-wifi\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"view-btn\" title=\"Export connections\" (click)=\"exportConnections()\"\u003E\u003Ci class=\"fas fa-file-export\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"view-btn\" title=\"Import connections\" (click)=\"triggerImport()\"\u003E\u003Ci class=\"fas fa-file-import\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Cdiv class=\"header-divider\"\u003E\u003C\u002Fdiv\u003E\n        \u003Cbutton class=\"view-btn\" [class.active]=\"viewMode === 'grid'\" (click)=\"viewMode = 'grid'\" title=\"Grid\"\u003E\u003Ci class=\"fas fa-th-large\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n        \u003Cbutton class=\"view-btn\" [class.active]=\"viewMode === 'list'\" (click)=\"viewMode = 'list'\" title=\"List\"\u003E\u003Ci class=\"fas fa-list\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"search-wrap\"\u003E\n      \u003Cinput class=\"form-control\" #searchInput type=\"text\" placeholder=\"Search connections... (press \u002F for commands)\" [(ngModel)]=\"searchQuery\" (keydown)=\"onSearchKeyDown($event)\" (input)=\"onSearchInput()\" (blur)=\"onSearchBlur()\"\u003E\n      \u003Cbutton class=\"search-clear\" *ngIf=\"searchQuery\" (click)=\"clearSearch()\"\u003E\u003Ci class=\"fas fa-times\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n      \u003Cdiv class=\"search-suggestions\" *ngIf=\"showSuggestions\"\u003E\n        \u003Cdiv class=\"suggestions-header\"\u003E\u003Cspan class=\"suggestions-trigger\"\u003E\u002F\u003C\u002Fspan\u003E\u003Cspan\u003EFilter &amp; operator shortcuts\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n        \u003Cng-container *ngFor=\"let s of searchSuggestions; let i = index\"\u003E\n          \u003Cdiv class=\"suggestions-section-label\" *ngIf=\"i === 0 || s.section !== searchSuggestions[i - 1].section\"\u003E{{ s.section }}\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"suggestion-item\" [class.active]=\"i === suggestionIndex\" (mousedown)=\"applySuggestion(s)\"\u003E\n            \u003Cdiv class=\"suggestion-icon\"\u003E\u003Ci [class]=\"s.icon\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"suggestion-body\"\u003E\u003Ccode class=\"suggestion-label\"\u003E{{ s.label }}\u003C\u002Fcode\u003E\u003Cspan class=\"suggestion-hint\"\u003E{{ s.hint }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fng-container\u003E\n        \u003Cdiv class=\"suggestions-footer\"\u003E\u003Ckbd\u003E↑↓\u003C\u002Fkbd\u003E\u003Cspan\u003Enavigate\u003C\u002Fspan\u003E\u003Ckbd\u003E↵\u003C\u002Fkbd\u003E\u003Cspan\u003Eapply\u003C\u002Fspan\u003E\u003Ckbd\u003EEsc\u003C\u002Fkbd\u003E\u003Cspan\u003Eclose\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n  \u003C!-- ── Scroll body ──────────────────────────────────────────────────────────--\u003E\n  \u003Cdiv class=\"scroll-container\"\u003E\n    \u003C!-- SEARCH RESULTS--\u003E\n    \u003Cng-container *ngIf=\"searchQuery\"\u003E\n      \u003Cdiv class=\"group-title\"\u003E\u003Cspan\u003E{{ searchResults.length }} result{{ searchResults.length !== 1 ? 's' : '' }} for \"{{ searchQuery }}\"\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"list-group\" *ngIf=\"searchResults.length\"\u003E\n        \u003Cdiv class=\"list-item\" *ngFor=\"let host of searchResults; let i = index\" [class.list-item--selected]=\"isHostSelected(host)\" [class.list-item--active]=\"isHostActive(host)\" [class.keyboard-selected]=\"i === selectedSearchIndex\" (click)=\"onSearchResultClick(host, i, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\" draggable=\"true\" (dragstart)=\"onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"onDropOnHost(host)\"\u003E\u003Cspan class=\"status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n          \u003Cdiv class=\"list-body\"\u003E\u003Cspan class=\"list-title\"\u003E{{ host.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-sub\"\u003E{{ getHostDescription(host) }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-group-tag\" *ngIf=\"getHostGroup(host)\" (click)=\"openGroupFromSearch(host, $event)\"\u003E\u003Ci class=\"fas fa-folder me-1\"\u003E\u003C\u002Fi\u003E{{ getHostGroup(host)?.name }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"card-options\" ngbDropdown placement=\"bottom-end\"\u003E\n            \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n            \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"empty-state\" *ngIf=\"!searchResults.length\"\u003E\u003Ci class=\"fas fa-search fa-2x mb-2\"\u003E\u003C\u002Fi\u003E\n        \u003Cp\u003ENo results found\u003C\u002Fp\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fng-container\u003E\n    \u003C!-- ROOT VIEW--\u003E\n    \u003Cng-container *ngIf=\"!selectedGroup &amp;&amp; !searchQuery\"\u003E\n      \u003C!-- Recent--\u003E\n      \u003Cng-container *ngIf=\"recentHosts.length\"\u003E\n        \u003Cdiv class=\"group-title\"\u003E\u003Cspan\u003ERecent\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"connection-group connection-group--recent\" *ngIf=\"viewMode === 'grid'\"\u003E\n          \u003Cdiv class=\"card\" *ngFor=\"let host of recentHosts\" [class.card--selected]=\"isHostSelected(host)\" [class.card--active]=\"isHostActive(host)\" draggable=\"true\" (dragstart)=\"onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\n            \u003Cdiv class=\"card-body\"\u003E\n              \u003Cdiv class=\"card-top\"\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n                \u003Ch6\u003E{{ host.name }}\u003C\u002Fh6\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"info-text\"\u003E\n                \u003Cp\u003E{{ getHostDescription(host) }}\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\u003Cspan class=\"status-dot card-status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\n            \u003Cdiv class=\"card-options\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n                \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"list-group connection-group--recent-list\" *ngIf=\"viewMode === 'list'\"\u003E\n          \u003Cdiv class=\"list-item\" *ngFor=\"let host of recentHosts\" [class.list-item--selected]=\"isHostSelected(host)\" [class.list-item--active]=\"isHostActive(host)\" draggable=\"true\" (dragstart)=\"onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\u003Cspan class=\"status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n            \u003Cdiv class=\"list-body\"\u003E\u003Cspan class=\"list-title\"\u003E{{ host.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-sub\"\u003E{{ getHostDescription(host) }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"card-options\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n                \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fng-container\u003E\n      \u003C!-- Groups--\u003E\n      \u003Cng-container *ngIf=\"visibleGroups.length || !searchQuery\"\u003E\n        \u003Cdiv class=\"group-title\"\u003E\u003Cspan\u003EGroups\u003C\u002Fspan\u003E\n          \u003Cbutton class=\"btn-new\" (click)=\"addGroup()\"\u003E\u003Ci class=\"fas fa-plus\"\u003E\u003C\u002Fi\u003ENew Group\u003C\u002Fbutton\u003E\n        \u003C\u002Fdiv\u003E\n        \u003C!-- Grid--\u003E\n        \u003Cdiv class=\"connection-group\" *ngIf=\"viewMode === 'grid'\"\u003E\n          \u003Cdiv class=\"card\" *ngFor=\"let group of visibleGroups\" [class.drag-over]=\"dragOverGroupId === group.id\" (dragover)=\"onDragOverGroup($event, group.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"onDropOnGroup(group)\" (click)=\"openGroup(group)\"\u003E\n            \u003Cdiv class=\"card-body\"\u003E\n              \u003Cdiv class=\"card-top\"\u003E\u003Cspan class=\"icon\"\u003E\u003Ci class=\"fas fa-folder\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n                \u003Ch6\u003E{{ group.name }}\u003C\u002Fh6\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"info-text\"\u003E\n                \u003Cp\u003E{{ hostCountInGroup(group.id) }} host{{ hostCountInGroup(group.id) !== 1 ? 's' : '' }}\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"card-options\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editGroup(group, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteGroup(group, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003C!-- List--\u003E\n        \u003Cdiv class=\"list-group\" *ngIf=\"viewMode === 'list'\"\u003E\n          \u003Cdiv class=\"list-item\" *ngFor=\"let group of visibleGroups\" [class.drag-over]=\"dragOverGroupId === group.id\" (dragover)=\"onDragOverGroup($event, group.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"onDropOnGroup(group)\" (click)=\"openGroup(group)\"\u003E\u003Cspan class=\"icon\"\u003E\u003Ci class=\"fas fa-folder\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n            \u003Cdiv class=\"list-body\"\u003E\u003Cspan class=\"list-title\"\u003E{{ group.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-sub\"\u003E{{ hostCountInGroup(group.id) }} host{{ hostCountInGroup(group.id) !== 1 ? 's' : '' }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"card-options\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editGroup(group, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteGroup(group, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fng-container\u003E\n      \u003C!-- Hosts--\u003E\n      \u003Cng-container *ngIf=\"rootHosts.length || !searchQuery\"\u003E\n        \u003Cdiv class=\"group-title\"\u003E\u003Cspan\u003EHosts\u003C\u002Fspan\u003E\n          \u003Cdiv class=\"d-flex gap-2\"\u003E\n            \u003Cng-container *ngIf=\"!selectionMode\"\u003E\n              \u003Cng-container *ngIf=\"rootHosts.length\"\u003E\n                \u003Cbutton class=\"btn-new\" (click)=\"toggleSelectionMode()\" title=\"Select hosts to connect\"\u003E\u003Ci class=\"fas fa-check-square me-1\"\u003E\u003C\u002Fi\u003ESelect\u003C\u002Fbutton\u003E\n              \u003C\u002Fng-container\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"addHost()\"\u003E\u003Ci class=\"fas fa-plus\"\u003E\u003C\u002Fi\u003ENew Host\u003C\u002Fbutton\u003E\n            \u003C\u002Fng-container\u003E\n            \u003Cng-container *ngIf=\"selectionMode\"\u003E\u003Cspan class=\"selection-count\"\u003E{{ selectedHosts.length }} selected\u003C\u002Fspan\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"selectAll()\"\u003E\u003Ci class=\"fas fa-check-double me-1\"\u003E\u003C\u002Fi\u003EAll\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"deselectAll()\" *ngIf=\"selectedHosts.length\"\u003E\u003Ci class=\"fas fa-times me-1\"\u003E\u003C\u002Fi\u003ENone\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new btn-new--primary\" (click)=\"connectSelected()\" *ngIf=\"selectedHosts.length\" title=\"Open selected in tabs\"\u003E\u003Ci class=\"fas fa-play-circle me-1\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"bulkEditSelected(selectedHosts)\" *ngIf=\"selectedHosts.length\" title=\"Edit credentials for selected hosts\"\u003E\u003Ci class=\"fas fa-pencil-alt me-1\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new btn-new--primary\" (click)=\"openMultiExecView(selectedHosts)\" *ngIf=\"selectedHosts.length\" title=\"Open MultiExec view with selected hosts\"\u003E\u003Ci class=\"fas fa-broadcast-tower me-1\"\u003E\u003C\u002Fi\u003EMultiExec\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"toggleSelectionMode()\"\u003E\u003Ci class=\"fas fa-times\"\u003E\u003C\u002Fi\u003ECancel\u003C\u002Fbutton\u003E\n            \u003C\u002Fng-container\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003C!-- Grid--\u003E\n        \u003Cdiv class=\"connection-group\" *ngIf=\"viewMode === 'grid'\"\u003E\n          \u003Cdiv class=\"card\" *ngFor=\"let host of rootHosts\" [class.card--selected]=\"isHostSelected(host)\" [class.card--active]=\"isHostActive(host)\" [class.card--selectable]=\"selectionMode\" [attr.draggable]=\"selectionMode ? null : true\" (dragstart)=\"!selectionMode &amp;&amp; onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"!selectionMode &amp;&amp; onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"!selectionMode &amp;&amp; onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\n            \u003Clabel class=\"host-checkbox\" *ngIf=\"selectionMode\" (click)=\"toggleHostSelection(host, $event)\"\u003E\n              \u003Cinput type=\"checkbox\" [checked]=\"isHostSelected(host)\" (click)=\"$event.stopPropagation()\"\u003E\n            \u003C\u002Flabel\u003E\n            \u003Cdiv class=\"card-body\"\u003E\n              \u003Cdiv class=\"card-top\"\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n                \u003Ch6\u003E{{ host.name }}\u003C\u002Fh6\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"info-text\"\u003E\n                \u003Cp\u003E{{ getHostDescription(host) }}\u003C\u002Fp\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\u003Cspan class=\"status-dot card-status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\n            \u003Cdiv class=\"card-options\" *ngIf=\"!selectionMode\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n                \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003C!-- List--\u003E\n        \u003Cdiv class=\"list-group\" *ngIf=\"viewMode === 'list'\"\u003E\n          \u003Cdiv class=\"list-item\" *ngFor=\"let host of rootHosts\" [class.list-item--selected]=\"isHostSelected(host)\" [class.list-item--active]=\"isHostActive(host)\" [attr.draggable]=\"selectionMode ? null : true\" (dragstart)=\"!selectionMode &amp;&amp; onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"!selectionMode &amp;&amp; onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"!selectionMode &amp;&amp; onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\n            \u003Cinput class=\"list-checkbox\" *ngIf=\"selectionMode\" type=\"checkbox\" [checked]=\"isHostSelected(host)\" (click)=\"toggleHostSelection(host, $event)\"\u003E\u003Cspan class=\"status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n            \u003Cdiv class=\"list-body\"\u003E\u003Cspan class=\"list-title\"\u003E{{ host.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-sub\"\u003E{{ getHostDescription(host) }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"card-options\" *ngIf=\"!selectionMode\" ngbDropdown placement=\"bottom-end\"\u003E\n              \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n                \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n                \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fng-container\u003E\n      \u003C!-- Empty--\u003E\n      \u003Cdiv class=\"empty-state\" *ngIf=\"!visibleGroups.length &amp;&amp; !rootHosts.length &amp;&amp; !searchQuery\"\u003E\u003Ci class=\"fas fa-server fa-3x mb-3\"\u003E\u003C\u002Fi\u003E\n        \u003Cp\u003ENo connections yet\u003C\u002Fp\u003E\n        \u003Cdiv class=\"d-flex gap-2 mt-2\"\u003E\n          \u003Cbutton class=\"btn-new\" (click)=\"addGroup()\"\u003E\u003Ci class=\"fas fa-folder-plus me-1\"\u003E\u003C\u002Fi\u003ENew Group\u003C\u002Fbutton\u003E\n          \u003Cbutton class=\"btn-new\" (click)=\"addHost()\"\u003E\u003Ci class=\"fas fa-plus me-1\"\u003E\u003C\u002Fi\u003ENew Host\u003C\u002Fbutton\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fng-container\u003E\n    \u003C!-- GROUP DRILL-DOWN--\u003E\n    \u003Cng-container *ngIf=\"selectedGroup &amp;&amp; !searchQuery\"\u003E\n      \u003Cdiv class=\"group-title\"\u003E\u003Cspan\u003EHosts\u003C\u002Fspan\u003E\n        \u003Cdiv class=\"d-flex gap-2\"\u003E\n          \u003Cng-container *ngIf=\"!selectionMode\"\u003E\n            \u003Cng-container *ngIf=\"groupHosts.length\"\u003E\n              \u003Cbutton class=\"btn-new\" (click)=\"toggleSelectionMode()\" title=\"Select hosts to connect\"\u003E\u003Ci class=\"fas fa-check-square me-1\"\u003E\u003C\u002Fi\u003ESelect\u003C\u002Fbutton\u003E\n            \u003C\u002Fng-container\u003E\n            \u003Cbutton class=\"btn-new\" (click)=\"addHost(selectedGroup.id)\"\u003E\u003Ci class=\"fas fa-plus\"\u003E\u003C\u002Fi\u003ENew Host\u003C\u002Fbutton\u003E\n          \u003C\u002Fng-container\u003E\n          \u003Cng-container *ngIf=\"selectionMode\"\u003E\u003Cspan class=\"selection-count\"\u003E{{ selectedHosts.length }} selected\u003C\u002Fspan\u003E\n            \u003Cbutton class=\"btn-new\" (click)=\"selectAll()\"\u003E\u003Ci class=\"fas fa-check-double me-1\"\u003E\u003C\u002Fi\u003EAll\u003C\u002Fbutton\u003E\n            \u003Cbutton class=\"btn-new\" (click)=\"deselectAll()\" *ngIf=\"selectedHosts.length\"\u003E\u003Ci class=\"fas fa-times me-1\"\u003E\u003C\u002Fi\u003ENone\u003C\u002Fbutton\u003E\n            \u003Cbutton class=\"btn-new btn-new--primary\" (click)=\"connectSelected()\" *ngIf=\"selectedHosts.length\" title=\"Open selected in tabs\"\u003E\u003Ci class=\"fas fa-play-circle me-1\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n            \u003Cbutton class=\"btn-new\" (click)=\"bulkEditSelected(selectedHosts)\" *ngIf=\"selectedHosts.length\" title=\"Edit credentials for selected hosts\"\u003E\u003Ci class=\"fas fa-pencil-alt me-1\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"btn-new btn-new--primary\" (click)=\"openMultiExecView(selectedHosts)\" *ngIf=\"selectedHosts.length\" title=\"Open MultiExec view with selected hosts\"\u003E\u003Ci class=\"fas fa-broadcast-tower me-1\"\u003E\u003C\u002Fi\u003EMultiExec\u003C\u002Fbutton\u003E\n            \u003Cbutton class=\"btn-new\" (click)=\"toggleSelectionMode()\"\u003E\u003Ci class=\"fas fa-times\"\u003E\u003C\u002Fi\u003ECancel\u003C\u002Fbutton\u003E\n          \u003C\u002Fng-container\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003C!-- Grid--\u003E\n      \u003Cdiv class=\"connection-group\" *ngIf=\"viewMode === 'grid'\"\u003E\n        \u003Cdiv class=\"card\" *ngFor=\"let host of groupHosts\" [class.card--selected]=\"isHostSelected(host)\" [class.card--active]=\"isHostActive(host)\" [class.card--selectable]=\"selectionMode\" [attr.draggable]=\"selectionMode ? null : true\" (dragstart)=\"!selectionMode &amp;&amp; onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"!selectionMode &amp;&amp; onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"!selectionMode &amp;&amp; onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\n          \u003Clabel class=\"host-checkbox\" *ngIf=\"selectionMode\" (click)=\"toggleHostSelection(host, $event)\"\u003E\n            \u003Cinput type=\"checkbox\" [checked]=\"isHostSelected(host)\" (click)=\"$event.stopPropagation()\"\u003E\n          \u003C\u002Flabel\u003E\n          \u003Cdiv class=\"card-body\"\u003E\n            \u003Cdiv class=\"card-top\"\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n              \u003Ch6\u003E{{ host.name }}\u003C\u002Fh6\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"info-text\"\u003E\n              \u003Cp\u003E{{ getHostDescription(host) }}\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\u003Cspan class=\"status-dot card-status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\n          \u003Cdiv class=\"card-options\" *ngIf=\"!selectionMode\" ngbDropdown placement=\"bottom-end\"\u003E\n            \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n            \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003C!-- List--\u003E\n      \u003Cdiv class=\"list-group\" *ngIf=\"viewMode === 'list'\"\u003E\n        \u003Cdiv class=\"list-item\" *ngFor=\"let host of groupHosts\" [class.list-item--selected]=\"isHostSelected(host)\" [class.list-item--active]=\"isHostActive(host)\" [attr.draggable]=\"selectionMode ? null : true\" (dragstart)=\"!selectionMode &amp;&amp; onDragStart(host, $event)\" (dragend)=\"onDragEnd($event)\" [class.drag-over]=\"dragOverHostId === host.id\" (dragover)=\"!selectionMode &amp;&amp; onDragOverHost($event, host.id)\" (dragleave)=\"onDragLeave()\" (drop)=\"!selectionMode &amp;&amp; onDropOnHost(host)\" (click)=\"onHostClick(host, $event)\" (contextmenu)=\"onHostContextMenu(host, $event)\" (dblclick)=\"onHostDoubleClick(host, $event)\"\u003E\n          \u003Cinput class=\"list-checkbox\" *ngIf=\"selectionMode\" type=\"checkbox\" [checked]=\"isHostSelected(host)\" (click)=\"toggleHostSelection(host, $event)\"\u003E\u003Cspan class=\"status-dot\" [ngClass]=\"{'status-online': getHostStatus(host) === 'online', 'status-offline': getHostStatus(host) === 'offline', 'status-checking': getHostStatus(host) === 'checking'}\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"icon\" [style.color]=\"getHostIconColor(host)\"\u003E\u003Ci [class]=\"getHostIcon(host)\"\u003E\u003C\u002Fi\u003E\u003C\u002Fspan\u003E\n          \u003Cdiv class=\"list-body\"\u003E\u003Cspan class=\"list-title\"\u003E{{ host.name }}\u003C\u002Fspan\u003E\u003Cspan class=\"list-sub\"\u003E{{ getHostDescription(host) }}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"card-options\" *ngIf=\"!selectionMode\" ngbDropdown placement=\"bottom-end\"\u003E\n            \u003Cbutton class=\"btn-dots\" ngbDropdownToggle (click)=\"$event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-ellipsis-v\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\n            \u003Cdiv class=\"dropdown-menu\" ngbDropdownMenu\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"connect(host); $event.stopPropagation()\"\u003E\u003Ci class=\"fas fa-play me-2\"\u003E\u003C\u002Fi\u003EConnect\u003C\u002Fbutton\u003E\n              \u003Cdiv class=\"dropdown-divider\"\u003E\u003C\u002Fdiv\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"duplicateHost(host, $event)\"\u003E\u003Ci class=\"fas fa-copy me-2\"\u003E\u003C\u002Fi\u003EDuplicate\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item\" ngbDropdownItem (click)=\"editHost(host, $event)\"\u003E\u003Ci class=\"fas fa-pencil-alt me-2\"\u003E\u003C\u002Fi\u003EEdit\u003C\u002Fbutton\u003E\n              \u003Cbutton class=\"dropdown-item text-danger\" ngbDropdownItem (click)=\"deleteHost(host, $event)\"\u003E\u003Ci class=\"fas fa-trash me-2\"\u003E\u003C\u002Fi\u003EDelete\u003C\u002Fbutton\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"empty-state\" *ngIf=\"!groupHosts.length &amp;&amp; !searchQuery\"\u003E\u003Ci class=\"fas fa-server fa-2x mb-2\"\u003E\u003C\u002Fi\u003E\n        \u003Cp\u003ENo hosts in this group\u003C\u002Fp\u003E\n        \u003Cbutton class=\"btn-new mt-2\" (click)=\"addHost(selectedGroup.id)\"\u003E\u003Ci class=\"fas fa-plus me-1\"\u003E\u003C\u002Fi\u003EAdd Host\u003C\u002Fbutton\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fng-container\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ },

/***/ 860
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__860__;

/***/ },

/***/ 947
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
(module) {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE__947__ === 'undefined') { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE__947__;

/***/ },

/***/ 975
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./src/index.ts + 14 modules ***!
  \***********************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ConnectionManagerService: () => (/* reexport */ ConnectionManagerService),
  "default": () => (/* binding */ src)
});

;// ./node_modules/tslib/tslib.es6.js
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind,
    key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _,
    done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function (f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? {
      get: descriptor.get,
      set: descriptor.set
    } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
;
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", {
    configurable: true,
    value: prefix ? "".concat(prefix, " ", name) : name
  });
}
;
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function awaitReturn(f) {
    return function (v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: false
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};
var ownKeys = function (o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function () {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({
      value: value,
      dispose: dispose,
      async: async
    });
  } else if (async) {
    env.stack.push({
      async: true
    });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r,
    s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function (e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
/* harmony default export */ const tslib_es6 = ({
  __extends: __extends,
  __assign: __assign,
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __esDecorate: __esDecorate,
  __runInitializers: __runInitializers,
  __propKey: __propKey,
  __setFunctionName: __setFunctionName,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __createBinding: __createBinding,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __spreadArrays: __spreadArrays,
  __spreadArray: __spreadArray,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault,
  __classPrivateFieldGet: __classPrivateFieldGet,
  __classPrivateFieldSet: __classPrivateFieldSet,
  __classPrivateFieldIn: __classPrivateFieldIn,
  __addDisposableResource: __addDisposableResource,
  __disposeResources: __disposeResources,
  __rewriteRelativeImportExtension: __rewriteRelativeImportExtension
});
// EXTERNAL MODULE: external "@angular/core"
var core_ = __webpack_require__(860);
// EXTERNAL MODULE: external "@angular/common"
var common_ = __webpack_require__(358);
// EXTERNAL MODULE: external "@angular/forms"
var forms_ = __webpack_require__(182);
// EXTERNAL MODULE: external "@ng-bootstrap/ng-bootstrap"
var ng_bootstrap_ = __webpack_require__(765);
// EXTERNAL MODULE: external "tabby-core"
var external_tabby_core_ = __webpack_require__(650);
var external_tabby_core_default = /*#__PURE__*/__webpack_require__.n(external_tabby_core_);
;// external "crypto"
const external_crypto_namespaceObject = require("crypto");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_namespaceObject);
;// ./node_modules/uuid/dist/esm-node/native.js

/* harmony default export */ const esm_node_native = ({
  randomUUID: (external_crypto_default()).randomUUID
});
;// ./node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// ./node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const esm_node_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// ./node_modules/uuid/dist/esm-node/v4.js



function v4(options, buf, offset) {
  if (esm_node_native.randomUUID && !buf && !options) {
    return esm_node_native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
/* harmony default export */ const esm_node_v4 = (v4);
;// ./src/services/connectionManager.service.ts




const VAULT_TYPE = 'connection-manager:credentials';
let ConnectionManagerService = class ConnectionManagerService {
    constructor(config, profilesService, vault, app, tabsService, profileProviders) {
        this.config = config;
        this.profilesService = profilesService;
        this.vault = vault;
        this.app = app;
        this.tabsService = tabsService;
        this.profileProviders = profileProviders;
        this.connectedTabs = new Map();
        this.credentialsCache = new Map();
        this.cacheReady = false;
    }
    // ─── Groups ────────────────────────────────────────────────────────────────
    getGroups() {
        var _a, _b;
        return (_b = (_a = this.config.store.connectionManager) === null || _a === void 0 ? void 0 : _a.groups) !== null && _b !== void 0 ? _b : [];
    }
    addGroup(name, color, parentId) {
        const group = {
            id: esm_node_v4(),
            name,
            color,
            expanded: true,
            parentId: parentId !== null && parentId !== void 0 ? parentId : null,
        };
        this.config.store.connectionManager.groups.push(group);
        this.config.save();
        return group;
    }
    updateGroup(id, changes) {
        const groups = this.config.store.connectionManager.groups;
        const idx = groups.findIndex(g => g.id === id);
        if (idx !== -1) {
            groups[idx] = Object.assign(Object.assign({}, groups[idx]), changes);
            this.config.save();
        }
    }
    deleteGroup(id) {
        const hosts = this.normalizeHosts(true);
        hosts.forEach(h => {
            if (h.groupId === id) {
                h.groupId = null;
            }
        });
        this.config.store.connectionManager.hosts = hosts;
        this.config.store.connectionManager.groups =
            this.config.store.connectionManager.groups.filter((g) => g.id !== id);
        this.config.save();
    }
    toggleGroupExpanded(id) {
        const groups = this.config.store.connectionManager.groups;
        const group = groups.find(g => g.id === id);
        if (group) {
            group.expanded = !group.expanded;
            this.config.save();
        }
    }
    // ─── Hosts ─────────────────────────────────────────────────────────────────
    normalizeHosts(save = false) {
        var _a, _b;
        const cm = (_a = this.config.store.connectionManager) !== null && _a !== void 0 ? _a : (this.config.store.connectionManager = { groups: [], hosts: [] });
        const hosts = Array.isArray(cm.hosts) ? cm.hosts : [];
        const cleaned = [];
        const seen = new Set();
        for (const host of hosts) {
            if (!host || !host.id || host.deleted || host._deleted)
                continue;
            if (seen.has(host.id))
                continue;
            seen.add(host.id);
            cleaned.push(host);
        }
        if (cleaned.length !== hosts.length || !Array.isArray((_b = this.config.store.connectionManager) === null || _b === void 0 ? void 0 : _b.hosts)) {
            this.config.store.connectionManager.hosts = cleaned;
            if (save)
                this.config.save();
        }
        return cleaned;
    }
    getHosts() {
        return this.normalizeHosts(true);
    }
    addHost(host) {
        this.normalizeHosts(true);
        const newHost = Object.assign(Object.assign({}, host), { id: esm_node_v4() });
        this.config.store.connectionManager.hosts.push(newHost);
        this.config.save();
        return newHost;
    }
    updateHost(id, changes) {
        const hosts = this.normalizeHosts(true);
        const idx = hosts.findIndex(h => h.id === id);
        if (idx !== -1) {
            hosts[idx] = Object.assign(Object.assign({}, hosts[idx]), changes);
            this.config.store.connectionManager.hosts = hosts;
            this.config.save();
        }
    }
    deleteHost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hosts = this.normalizeHosts(false);
            this.config.store.connectionManager.hosts = hosts.filter((h) => h.id !== id);
            this.connectedTabs.delete(id);
            this.credentialsCache.delete(id);
            this.config.save();
            yield this.deleteCredentials(id);
        });
    }
    duplicateHost(id) {
        const hosts = this.normalizeHosts(true);
        const original = hosts.find(h => h.id === id);
        if (!original)
            return null;
        const copy = Object.assign(Object.assign({}, original), { id: esm_node_v4(), name: `${original.name} (copy)`, lastConnected: undefined, hasCredentials: false });
        this.config.store.connectionManager.hosts.push(copy);
        this.config.save();
        return copy;
    }
    reorderHost(draggedId, targetId) {
        const hosts = this.normalizeHosts(true);
        const draggedIdx = hosts.findIndex(h => h.id === draggedId);
        const targetIdx = hosts.findIndex(h => h.id === targetId);
        if (draggedIdx === -1 || targetIdx === -1 || draggedIdx === targetIdx)
            return;
        const [dragged] = hosts.splice(draggedIdx, 1);
        const newIdx = hosts.findIndex(h => h.id === targetId);
        hosts.splice(newIdx, 0, dragged);
        this.config.store.connectionManager.hosts = hosts;
        this.config.save();
    }
    // ─── Import / Export ───────────────────────────────────────────────────────
    exportData() {
        return JSON.stringify({
            version: 1,
            exportedAt: new Date().toISOString(),
            groups: this.getGroups(),
            hosts: this.getHosts(),
        }, null, 2);
    }
    importData(json) {
        var _a, _b, _c;
        const data = JSON.parse(json);
        this.normalizeHosts(true);
        const groups = (_a = data.groups) !== null && _a !== void 0 ? _a : [];
        const hosts = ((_b = data.hosts) !== null && _b !== void 0 ? _b : []).filter((h) => h && !h.deleted && !h._deleted);
        const groupIdMap = new Map();
        for (const g of groups) {
            const newId = esm_node_v4();
            groupIdMap.set(g.id, newId);
            this.config.store.connectionManager.groups.push(Object.assign(Object.assign({}, g), { id: newId }));
        }
        for (const h of hosts) {
            const newGroupId = h.groupId ? ((_c = groupIdMap.get(h.groupId)) !== null && _c !== void 0 ? _c : null) : null;
            this.config.store.connectionManager.hosts.push(Object.assign(Object.assign({}, h), { id: esm_node_v4(), groupId: newGroupId, lastConnected: undefined, hasCredentials: false }));
        }
        this.config.save();
        return { groupsAdded: groups.length, hostsAdded: hosts.length };
    }
    // ─── Connection status ─────────────────────────────────────────────────────
    checkHostStatus(host) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!host.host || host.type === 'serial')
                return 'unknown';
            try {
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                const net = __webpack_require__(/*! net */ 403);
                const port = (_a = host.port) !== null && _a !== void 0 ? _a : (host.type === 'ssh' ? 22 : 23);
                return yield new Promise(resolve => {
                    const socket = new net.Socket();
                    const timer = setTimeout(() => { socket.destroy(); resolve('offline'); }, 3000);
                    socket.on('connect', () => { clearTimeout(timer); socket.destroy(); resolve('online'); });
                    socket.on('error', () => { clearTimeout(timer); socket.destroy(); resolve('offline'); });
                    socket.connect(port, host.host);
                });
            }
            catch (_b) {
                return 'unknown';
            }
        });
    }
    // ─── Credentials (Vault) ───────────────────────────────────────────────────
    isVaultEnabled() {
        return this.vault.isEnabled();
    }
    ensureCache() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.cacheReady)
                return;
            if (!this.vault.isEnabled())
                return;
            const vault = yield this.vault.load();
            if (!vault)
                return;
            for (const secret of vault.secrets.filter(s => s.type === VAULT_TYPE)) {
                try {
                    this.credentialsCache.set(secret.key['hostId'], JSON.parse(secret.value));
                }
                catch ( /* skip invalid */_a) { /* skip invalid */ }
            }
            this.cacheReady = true;
        });
    }
    saveCredentials(hostId, creds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.vault.isEnabled())
                return;
            yield this.ensureCache();
            yield this.vault.addSecret({
                type: VAULT_TYPE,
                key: { hostId },
                value: JSON.stringify(creds),
            });
            this.credentialsCache.set(hostId, creds);
        });
    }
    getCredentials(hostId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.vault.isEnabled())
                return null;
            yield this.ensureCache();
            return (_a = this.credentialsCache.get(hostId)) !== null && _a !== void 0 ? _a : null;
        });
    }
    deleteCredentials(hostId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.vault.isEnabled())
                return;
            yield this.vault.removeSecret(VAULT_TYPE, { hostId });
            this.credentialsCache.delete(hostId);
        });
    }
    // ─── Connect ───────────────────────────────────────────────────────────────
    connect(host) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.buildProfile(host);
            if (!profile)
                return null;
            const params = yield this.profilesService.newTabParametersForProfile(profile);
            if (!params)
                return null;
            const tab = this.tabsService.create(params);
            this.app.addTabRaw(tab);
            this.app.selectTab(tab);
            this.updateHost(host.id, { lastConnected: Date.now() });
            this.trackTab(host.id, tab);
            return tab;
        });
    }
    connectAllSplit(hosts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (hosts.length === 0)
                return null;
            if (hosts.length === 1) {
                yield this.connect(hosts[0]);
                return null;
            }
            const splitTab = this.tabsService.create({ type: external_tabby_core_.SplitTabComponent });
            this.app.addTabRaw(splitTab);
            this.app.selectTab(splitTab);
            let prevTab = null;
            for (const host of hosts) {
                const profile = yield this.buildProfile(host);
                if (!profile)
                    continue;
                const params = yield this.profilesService.newTabParametersForProfile(profile);
                if (!params)
                    continue;
                const tab = this.tabsService.create(params);
                this.updateHost(host.id, { lastConnected: Date.now() });
                yield splitTab.addTab(tab, prevTab, 'r');
                this.trackTab(host.id, tab);
                prevTab = tab;
            }
            return splitTab;
        });
    }
    sendMultiExec(command, hostIds) {
        const line = command.endsWith('\n') ? command : command + '\r';
        for (const id of hostIds) {
            const tab = this.connectedTabs.get(id);
            if (!tab)
                continue;
            const session = tab.session;
            if (!(session === null || session === void 0 ? void 0 : session.open))
                continue;
            tab.sendInput(line);
        }
    }
    sendRaw(data, hostIds) {
        for (const id of hostIds) {
            const tab = this.connectedTabs.get(id);
            if (!tab)
                continue;
            const session = tab.session;
            if (!(session === null || session === void 0 ? void 0 : session.open))
                continue;
            tab.sendInput(data);
        }
    }
    createTerminalTab(host) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield this.buildProfile(host);
            if (!profile)
                return null;
            const params = yield this.profilesService.newTabParametersForProfile(profile);
            if (!params)
                return null;
            const tab = this.tabsService.create(params);
            this.updateHost(host.id, { lastConnected: Date.now() });
            this.trackTab(host.id, tab);
            return tab;
        });
    }
    trackTab(hostId, tab) {
        this.connectedTabs.set(hostId, tab);
        tab.destroyed$.subscribe(() => {
            if (this.connectedTabs.get(hostId) === tab) {
                this.connectedTabs.delete(hostId);
            }
        });
    }
    buildProfile(host) {
        return __awaiter(this, void 0, void 0, function* () {
            if (host.profileId) {
                const profiles = yield this.profilesService.getProfiles();
                const found = profiles.find(p => p.id === host.profileId);
                if (found)
                    return found;
            }
            const provider = this.profileProviders.find(p => p.id === host.type);
            if (!provider) {
                console.error(`[ConnectionManager] No provider for type: ${host.type}`);
                return null;
            }
            const credentials = yield this.getCredentials(host.id);
            return {
                id: `connection-manager:temp:${host.id}`,
                type: host.type,
                name: host.name,
                group: '',
                options: yield this.buildProfileOptions(host, credentials),
            };
        });
    }
    getAvailableProviders() {
        return this.profileProviders;
    }
    applySshCredentials(options, creds) {
        var _a, _b;
        if (!creds)
            return;
        if (creds.authType === 'password') {
            options.auth = 'password';
            options.password = (_a = creds.password) !== null && _a !== void 0 ? _a : '';
        }
        else if (creds.authType === 'privateKey' && creds.privateKey) {
            options.auth = 'publicKey';
            options.privateKeys = [creds.privateKey];
            if (creds.passphrase) {
                options.passphrase = creds.passphrase;
            }
        }
        else if (creds.authType === 'agent') {
            options.auth = 'agent';
        }
        else if (((_b = creds.authType) !== null && _b !== void 0 ? _b : 'none') === 'none') {
            options.auth = null;
        }
    }
    getJumpHostCandidates(currentHostId) {
        return this.getHosts().filter(h => h.type === 'ssh' && h.id !== currentHostId);
    }
    ensureRuntimeJumpProfile(profile) {
        var _a;
        const profiles = (_a = this.config.store.profiles) !== null && _a !== void 0 ? _a : (this.config.store.profiles = []);
        const idx = profiles.findIndex(p => p.id === profile.id);
        if (idx === -1) {
            profiles.push(profile);
        }
        else {
            profiles[idx] = Object.assign(Object.assign({}, profiles[idx]), profile);
        }
    }
    resolveJumpHostProfile(host, creds, visited) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            const jump = host.jumpHost;
            if (!(jump === null || jump === void 0 ? void 0 : jump.enabled)) {
                return null;
            }
            const mode = (_a = jump.mode) !== null && _a !== void 0 ? _a : (jump.hostId ? 'existing' : 'manual');
            let jumpHost = null;
            let jumpCreds = (_b = creds === null || creds === void 0 ? void 0 : creds.jumpHost) !== null && _b !== void 0 ? _b : null;
            if (mode === 'existing' && jump.hostId) {
                if (visited.has(jump.hostId)) {
                    console.warn(`[ConnectionManager] Jump host cycle detected for ${jump.hostId}`);
                    return null;
                }
                const existing = this.getHosts().find(h => h.id === jump.hostId && h.type === 'ssh');
                if (!existing) {
                    return null;
                }
                jumpHost = existing;
                jumpCreds = yield this.getCredentials(existing.id);
            }
            else {
                jumpHost = {
                    id: `inline:${host.id}`,
                    type: 'ssh',
                    name: (_c = jump.name) !== null && _c !== void 0 ? _c : 'Jump Host',
                    host: (_d = jump.host) !== null && _d !== void 0 ? _d : '',
                    port: (_e = jump.port) !== null && _e !== void 0 ? _e : 22,
                    username: (_f = jump.username) !== null && _f !== void 0 ? _f : '',
                    jumpHost: jump.next,
                };
            }
            if (!jumpHost.host) {
                return null;
            }
            visited.add(jumpHost.id);
            const jumpOptions = yield this.buildProfileOptions(jumpHost, jumpCreds, visited);
            const profile = {
                id: `connection-manager:jump:${host.id}:${jumpHost.id}`,
                type: 'ssh',
                name: `${jumpHost.name || jumpHost.host} (jump)`,
                group: '',
                options: jumpOptions,
            };
            this.ensureRuntimeJumpProfile(profile);
            return profile;
        });
    }
    buildProfileOptions(host, creds, visited = new Set()) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
        if (host.type === 'ssh') {
            if (host.id) {
                visited.add(host.id);
            }
            const options = {
                host: (_a = host.host) !== null && _a !== void 0 ? _a : '',
                port: (_b = host.port) !== null && _b !== void 0 ? _b : 22,
                user: (_c = host.username) !== null && _c !== void 0 ? _c : '',
                jumpHost: null,
                proxyCommand: null,
            };
            this.applySshCredentials(options, creds);
            const jumpProfile = yield this.resolveJumpHostProfile(host, creds, visited);
            if (jumpProfile) {
                options.jumpHost = jumpProfile.id;
            }
            return options;
        }
        if (host.type === 'telnet') {
            return {
                host: (_d = host.host) !== null && _d !== void 0 ? _d : '',
                port: (_e = host.port) !== null && _e !== void 0 ? _e : 23,
            };
        }
        if (host.type === 'serial') {
            return {
                port: (_f = host.host) !== null && _f !== void 0 ? _f : '',
                baudrate: (_g = host.port) !== null && _g !== void 0 ? _g : 9600,
            };
        }
        return {};
        });
    }
};
ConnectionManagerService.ctorParameters = () => [
    { type: external_tabby_core_.ConfigService },
    { type: external_tabby_core_.ProfilesService },
    { type: external_tabby_core_.VaultService },
    { type: external_tabby_core_.AppService },
    { type: external_tabby_core_.TabsService },
    { type: Array, decorators: [{ type: core_.Inject, args: [external_tabby_core_.ProfileProvider,] }] }
];
ConnectionManagerService = __decorate([
    (0,core_.Injectable)({ providedIn: 'root' }),
    __metadata("design:paramtypes", [external_tabby_core_.ConfigService,
        external_tabby_core_.ProfilesService,
        external_tabby_core_.VaultService,
        external_tabby_core_.AppService,
        external_tabby_core_.TabsService, Array])
], ConnectionManagerService);


;// ./src/components/hostEditor.component.ts




let HostEditorComponent = class HostEditorComponent {
    constructor(activeModal, manager) {
        this.activeModal = activeModal;
        this.manager = manager;
        this.editMode = false;
        this.host = {
            type: 'ssh',
            port: 22,
            groupId: null,
        };
        this.groups = [];
        this.bulkHosts = [];
        this.credentials = { authType: 'none' };
        this.jumpHostCredentials = { authType: 'none' };
        this.vaultEnabled = false;
        this.showPassword = false;
        this.showPassphrase = false;
        this.showJumpPassword = false;
        this.showJumpPassphrase = false;
        this.bulkUsernameMixed = false;
        this.jumpHostCandidates = [];
        this.connectionTypes = [
            { id: 'ssh', label: 'SSH', defaultPort: 22 },
            { id: 'telnet', label: 'Telnet', defaultPort: 23 },
            { id: 'serial', label: 'Serial', defaultPort: 9600 },
        ];
        this.availableTypes = this.connectionTypes;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.groups = this.manager.getGroups();
            this.jumpHostCandidates = this.manager.getJumpHostCandidates(this.host.id);
            if (this.host.type === 'ssh' && !this.host.jumpHost) {
                this.host.jumpHost = { enabled: false, mode: 'existing', port: 22, authType: 'none' };
            }
            const installedTypes = this.manager.getAvailableProviders().map(p => p.id);
            this.availableTypes = this.connectionTypes.filter(t => installedTypes.includes(t.id));
            this.vaultEnabled = this.manager.isVaultEnabled();
            if (this.editMode && this.host.id) {
                const creds = yield this.manager.getCredentials(this.host.id);
                if (creds) {
                    this.credentials = creds;
                    if (creds.jumpHost) {
                        this.jumpHostCredentials = creds.jumpHost;
                    }
                }
            }
        });
    }
    onTypeChange() {
        const t = this.availableTypes.find(t => t.id === this.host.type);
        if (t && !this.host.port) {
            this.host.port = t.defaultPort;
        }
        if (this.host.type !== 'ssh') {
            this.credentials.authType = 'none';
            if (this.host.jumpHost) {
                this.host.jumpHost.enabled = false;
            }
        }
    }
    get portLabel() {
        return this.host.type === 'serial' ? 'Baud rate' : 'Port';
    }
    get hostLabel() {
        return this.host.type === 'serial' ? 'Serial port (e.g. COM3)' : 'Hostname / IP';
    }
    get usernamePlaceholder() {
        if (this.bulkHosts.length > 1 && this.bulkUsernameMixed)
            return 'Multiple values';
        return this.editMode ? '' : 'root';
    }
    get isValid() {
        var _a, _b, _c;
        if (this.bulkHosts.length > 1)
            return !!(this.host.username && this.host.username.trim());
        if (!(this.host.name && this.host.type && this.host.host))
            return false;
        if (this.host.type !== 'ssh' || !((_a = this.host.jumpHost) === null || _a === void 0 ? void 0 : _a.enabled))
            return true;
        const jump = this.host.jumpHost;
        if (((_b = jump.mode) !== null && _b !== void 0 ? _b : 'existing') === 'existing') {
            return !!jump.hostId;
        }
        return !!((_c = jump.host) === null || _c === void 0 ? void 0 : _c.trim());
    }
    onPrivateKeyFileChange(event) {
        var _a;
        const input = event.target;
        if (!((_a = input.files) === null || _a === void 0 ? void 0 : _a.length))
            return;
        const reader = new FileReader();
        reader.onload = () => {
            this.credentials.privateKey = reader.result;
        };
        reader.readAsText(input.files[0]);
    }
    onJumpPrivateKeyFileChange(event) {
        var _a;
        const input = event.target;
        if (!((_a = input.files) === null || _a === void 0 ? void 0 : _a.length))
            return;
        const reader = new FileReader();
        reader.onload = () => {
            this.jumpHostCredentials.privateKey = reader.result;
        };
        reader.readAsText(input.files[0]);
    }
    setJumpHostEnabled(enabled) {
        var _a, _b, _c;
        if (!this.host.jumpHost) {
            this.host.jumpHost = { enabled, mode: 'existing', port: 22, authType: 'none' };
        }
        this.host.jumpHost.enabled = enabled;
        this.host.jumpHost.mode = (_a = this.host.jumpHost.mode) !== null && _a !== void 0 ? _a : 'existing';
        this.host.jumpHost.port = (_b = this.host.jumpHost.port) !== null && _b !== void 0 ? _b : 22;
        this.host.jumpHost.authType = (_c = this.host.jumpHost.authType) !== null && _c !== void 0 ? _c : 'none';
    }
    onJumpModeChange() {
        var _a;
        if (!this.host.jumpHost) {
            this.host.jumpHost = { enabled: true, mode: 'existing', port: 22, authType: 'none' };
        }
        if (this.host.jumpHost.mode === 'manual') {
            this.host.jumpHost.port = (_a = this.host.jumpHost.port) !== null && _a !== void 0 ? _a : 22;
            this.host.jumpHost.hostId = undefined;
        }
    }
    get selectedJumpHost() {
        var _a, _b;
        const id = (_b = (_a = this.host.jumpHost) === null || _a === void 0 ? void 0 : _a.hostId) !== null && _b !== void 0 ? _b : null;
        return id ? this.jumpHostCandidates.find(h => h.id === id) : null;
    }
    get jumpHostLabel() {
        var _a, _b, _c, _d, _e;
        const selected = this.selectedJumpHost;
        if (selected) {
            return `${(_a = selected.username) !== null && _a !== void 0 ? _a : 'user'}@${selected.host}:${(_b = selected.port) !== null && _b !== void 0 ? _b : 22}`;
        }
        const jump = this.host.jumpHost;
        if (jump === null || jump === void 0 ? void 0 : jump.host) {
            return `${(_c = jump.username) !== null && _c !== void 0 ? _c : 'user'}@${jump.host}:${(_d = jump.port) !== null && _d !== void 0 ? _d : 22}`;
        }
        return (_e = jump === null || jump === void 0 ? void 0 : jump.hostId) !== null && _e !== void 0 ? _e : 'Select jump host';
    }
    get targetHostLabel() {
        var _a, _b;
        return `${(_a = this.host.username) !== null && _a !== void 0 ? _a : 'user'}@${this.host.host || 'target'}:${(_b = this.host.port) !== null && _b !== void 0 ? _b : 22}`;
    }
    parseTags(value) {
        this.host.tags = value.split(',').map(t => t.trim()).filter(t => t);
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValid)
                return;
            var _a, _b, _c;
            if ((_a = this.host.jumpHost) === null || _a === void 0 ? void 0 : _a.enabled) {
                this.host.jumpHost.authType = (_b = this.jumpHostCredentials.authType) !== null && _b !== void 0 ? _b : 'none';
            }
            else if (this.host.jumpHost) {
                this.host.jumpHost = Object.assign(Object.assign({}, this.host.jumpHost), { enabled: false });
            }
            const credentialsToSave = Object.assign(Object.assign({}, this.credentials), { jumpHost: this.jumpHostCredentials });
            const hasCredentials = this.vaultEnabled && (this.credentials.authType !== 'none' || (((_c = this.host.jumpHost) === null || _c === void 0 ? void 0 : _c.enabled) && this.jumpHostCredentials.authType !== 'none'));
            if (this.bulkHosts.length > 1) {
                for (const host of this.bulkHosts) {
                    this.manager.updateHost(host.id, { username: this.host.username, hasCredentials });
                    if (this.vaultEnabled) {
                        if (hasCredentials)
                            yield this.manager.saveCredentials(host.id, credentialsToSave);
                        else
                            yield this.manager.deleteCredentials(host.id);
                    }
                }
                this.activeModal.close();
                return;
            }
            if (this.editMode && this.host.id) {
                this.manager.updateHost(this.host.id, Object.assign(Object.assign({}, this.host), { hasCredentials }));
                if (this.vaultEnabled) {
                    if (hasCredentials)
                        yield this.manager.saveCredentials(this.host.id, credentialsToSave);
                    else
                        yield this.manager.deleteCredentials(this.host.id);
                }
            }
            else {
                const newHost = this.manager.addHost(Object.assign(Object.assign({}, this.host), { hasCredentials }));
                if (this.vaultEnabled) {
                    if (hasCredentials)
                        yield this.manager.saveCredentials(newHost.id, credentialsToSave);
                    else
                        yield this.manager.deleteCredentials(newHost.id);
                }
            }
            this.activeModal.close();
        });
    }
    cancel() {
        this.activeModal.dismiss();
    }
    onEscape() {
        this.cancel();
    }
};
HostEditorComponent.ctorParameters = () => [
    { type: ng_bootstrap_.NgbActiveModal },
    { type: ConnectionManagerService }
];
HostEditorComponent.propDecorators = {
    onEscape: [{ type: core_.HostListener, args: ['keydown.escape',] }]
};
HostEditorComponent = __decorate([
    (0,core_.Component)({
        selector: 'host-editor',
        template: __webpack_require__(/*! ./hostEditor.component.pug */ 585),
        styles: [__webpack_require__(/*! ./hostEditor.component.scss */ 380)]
    }),
    __metadata("design:paramtypes", [ng_bootstrap_.NgbActiveModal,
        ConnectionManagerService])
], HostEditorComponent);


;// ./src/components/groupEditor.component.ts




let GroupEditorComponent = class GroupEditorComponent {
    constructor(activeModal, manager) {
        this.activeModal = activeModal;
        this.manager = manager;
        this.editMode = false;
        this.group = {
            name: '',
            color: '',
        };
        this.colorPresets = [
            '#e74c3c', '#e67e22', '#f1c40f',
            '#2ecc71', '#1abc9c', '#3498db',
            '#9b59b6', '#e91e63', '#607d8b',
        ];
    }
    get isValid() {
        var _a;
        return !!((_a = this.group.name) === null || _a === void 0 ? void 0 : _a.trim());
    }
    save() {
        if (!this.isValid)
            return;
        if (this.editMode && this.group.id) {
            this.manager.updateGroup(this.group.id, this.group);
        }
        else {
            this.manager.addGroup(this.group.name, this.group.color);
        }
        this.activeModal.close();
    }
    cancel() {
        this.activeModal.dismiss();
    }
};
GroupEditorComponent.ctorParameters = () => [
    { type: ng_bootstrap_.NgbActiveModal },
    { type: ConnectionManagerService }
];
GroupEditorComponent = __decorate([
    (0,core_.Component)({
        selector: 'group-editor',
        template: __webpack_require__(/*! ./groupEditor.component.pug */ 764),
    }),
    __metadata("design:paramtypes", [ng_bootstrap_.NgbActiveModal,
        ConnectionManagerService])
], GroupEditorComponent);


;// ./src/components/multiExecTab.component.ts
var MultiExecTabComponent_1;




/** @hidden */
let MultiExecTabComponent = MultiExecTabComponent_1 = class MultiExecTabComponent extends external_tabby_core_.BaseTabComponent {
    constructor(injector, manager) {
        super(injector);
        this.manager = manager;
        this.hosts = [];
        this.panes = [];
        this.targetIds = new Set();
        this.broadcastFocused = false;
        this.toolbarPinned = true;
        this.isConnecting = false;
        // ─── Drag & drop ───────────────────────────────────────────────────────────
        this.isDragOver = false;
        this.draggedPaneIndex = null;
        this.dragOverPaneIndex = null;
        this.paneBodySub = null;
        this.autoScrollTimer = null;
        this.resizeTimer = null;
        // ─── Add host search ────────────────────────────────────────────────────────
        this.addHostQuery = '';
        this.addHostFocused = false;
        this.addHostHighlightIndex = -1;
        this.title = 'MultiExec';
        this.icon = 'fas fa-broadcast-tower';
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isConnecting = true;
            for (const host of this.hosts) {
                const tab = yield this.manager.createTerminalTab(host);
                if (!tab)
                    continue;
                this.panes.push({ host, tab, followBottom: true, attached: false });
                this.targetIds.add(host.id);
            }
            this.isConnecting = false;
        });
    }
    ngAfterViewInit() {
        this.paneBodySub = this.paneBodies.changes.subscribe(() => {
            this.attachTerminals();
        });
        if (this.paneBodies.length > 0) {
            this.attachTerminals();
        }
        MultiExecTabComponent_1.instances.push(this);
        this.autoScrollTimer = setInterval(() => {
            this.panes.forEach(pane => {
                try {
                    const frontend = pane.tab.frontend;
                    const xterm = frontend === null || frontend === void 0 ? void 0 : frontend.xterm;
                    if (!xterm)
                        return;
                    // Keep cursor visible even when terminal doesn't have DOM focus
                    if (xterm.options.cursorInactiveStyle !== 'block') {
                        xterm.options.cursorInactiveStyle = 'block';
                    }
                    // Detect overflow: if .xterm is taller than its parent .content,
                    // the cell height updated after fitAddon ran (stale-dimensions bug).
                    // Re-trigger fitAddon to compute the correct row count.
                    const xtermEl = xterm.element;
                    const contentEl = xtermEl === null || xtermEl === void 0 ? void 0 : xtermEl.parentElement;
                    if (xtermEl && contentEl && xtermEl.offsetHeight > contentEl.offsetHeight + 2) {
                        this.scheduleResize(40);
                        return;
                    }
                    if (!pane.followBottom)
                        return;
                    frontend.scrollToBottom();
                }
                catch ( /* ignore */_a) { /* ignore */ }
            });
        }, 150);
    }
    attachTerminals() {
        const containers = this.paneBodies.toArray();
        this.panes.forEach((pane, i) => {
            const container = containers[i];
            if (!container)
                return;
            if (!pane.attached) {
                this.attachPane(pane, container);
            }
            else {
                pane.container = container;
            }
        });
    }
    attachPane(pane, container) {
            const containerEl = container.element.nativeElement;
            const paneEl = containerEl.closest('.me-pane');
            const panesEl = containerEl.closest('.me-panes');
            if (panesEl) {
                panesEl.style.gridAutoRows = 'minmax(0, 1fr)';
                panesEl.style.gridAutoColumns = 'minmax(0, 1fr)';
            }
            if (paneEl) {
                paneEl.style.minWidth = '0';
                paneEl.style.minHeight = '0';
                paneEl.style.width = '100%';
                paneEl.style.height = '100%';
            }
            containerEl.style.display = 'contents';
            containerEl.style.flex = '0 0 auto';
            containerEl.style.width = 'auto';
            containerEl.style.height = 'auto';
            containerEl.style.minHeight = '0';
            containerEl.style.minWidth = '0';
            containerEl.style.overflow = 'visible';
            if (!pane.attached) {
                pane.tab.insertIntoContainer(container);
                pane.attached = true;
                pane.container = container;
                const frontendReady = pane.tab.frontendReady;
                if (frontendReady === null || frontendReady === void 0 ? void 0 : frontendReady.subscribe) {
                    frontendReady.subscribe(() => {
                        if (!this.panes.includes(pane))
                            return;
                        pane.tab.emitVisibility(true);
                        this.normalizePaneLayout(pane);
                        this.setupScrollTracking(pane);
                        this.fitPane(pane);
                    });
                }
                setTimeout(() => {
                    if (!this.panes.includes(pane))
                        return;
                    pane.tab.emitFocused();
                    pane.tab.emitVisibility(true);
                    this.normalizePaneLayout(pane);
                    this.setupScrollTracking(pane);
                    this.fitPane(pane);
                }, 0);
                setTimeout(() => {
                    if (!this.panes.includes(pane))
                        return;
                    pane.tab.emitVisibility(true);
                    this.fitPane(pane);
                }, 300);
            }
            else {
                pane.container = container;
                this.normalizePaneLayout(pane);
            }
        setTimeout(() => this.fitPane(pane), 80);
    }
    normalizePaneLayout(pane) {
        var _a;
        try {
            const xtermEl = (_a = pane.tab.frontend) === null || _a === void 0 ? void 0 : _a.xterm.element;
            if (!xtermEl)
                return;
            const paneEl = xtermEl.closest('.me-pane');
            let containerEl = xtermEl.parentElement;
            while (containerEl && !containerEl.classList.contains('me-pane-body') && !containerEl.classList.contains('me-pane')) {
                containerEl = containerEl.parentElement;
            }
            if (!containerEl && paneEl)
                containerEl = paneEl;
            if (!containerEl)
                return;
            const tabEl = (paneEl !== null && paneEl !== void 0 ? paneEl : containerEl).querySelector('ssh-tab, telnet-tab, serial-tab, base-terminal-tab, [class*="-tab"]');
            const contentEl = (paneEl !== null && paneEl !== void 0 ? paneEl : containerEl).querySelector('.content');
            for (const el of [paneEl, containerEl, tabEl, contentEl]) {
                if (!el)
                    continue;
                el.style.minWidth = '0';
                el.style.minHeight = '0';
                el.style.width = '100%';
                el.style.overflow = 'hidden';
            }
            if (paneEl)
                paneEl.style.height = '100%';
            if (tabEl) {
                tabEl.style.display = 'flex';
                tabEl.style.flex = '1 1 auto';
                tabEl.style.flexDirection = 'column';
            }
            if (contentEl) {
                contentEl.style.display = 'flex';
                contentEl.style.flex = '1 1 auto';
                contentEl.style.flexDirection = 'column';
            }
        }
        catch ( /* ignore */_b) { /* ignore */ }
    }
    setupScrollTracking(pane) {
        if (pane.cleanupScroll)
            return; // already set up, skip
        let attempts = 0;
        const trySetup = () => {
            var _a;
            if (pane.cleanupScroll)
                return; // set up by another caller meanwhile
            const xterm = (_a = pane.tab.frontend) === null || _a === void 0 ? void 0 : _a.xterm;
            if (!xterm) {
                // First attempt: subscribe to frontendReady if available
                if (attempts === 0) {
                    const fr = pane.tab.frontendReady;
                    if (fr === null || fr === void 0 ? void 0 : fr.subscribe) {
                        fr.subscribe(() => setTimeout(() => trySetup(), 0));
                    }
                }
                // Always poll as fallback (covers dynamically added panes)
                attempts++;
                if (attempts < 50)
                    setTimeout(trySetup, 100);
                return;
            }
            const xtermEl = xterm.element;
            if (!xtermEl)
                return;
            // Detect user scrolling UP via wheel → disable auto-follow
            const onWheel = (e) => {
                if (e.deltaY < 0)
                    pane.followBottom = false;
            };
            // Touch: finger moving down = scrolling up in content
            let touchStartY = 0;
            const onTouchStart = (e) => {
                var _a, _b;
                touchStartY = (_b = (_a = e.touches[0]) === null || _a === void 0 ? void 0 : _a.clientY) !== null && _b !== void 0 ? _b : 0;
            };
            const onTouchMove = (e) => {
                var _a, _b;
                const currentY = (_b = (_a = e.touches[0]) === null || _a === void 0 ? void 0 : _a.clientY) !== null && _b !== void 0 ? _b : 0;
                if (currentY > touchStartY)
                    pane.followBottom = false;
            };
            xtermEl.addEventListener('wheel', onWheel, { passive: true });
            xtermEl.addEventListener('touchstart', onTouchStart, { passive: true });
            xtermEl.addEventListener('touchmove', onTouchMove, { passive: true });
            // Re-enable follow when user scrolls back to bottom
            xterm.onScroll((newViewportY) => {
                var _a, _b, _c;
                const baseY = (_c = (_b = (_a = xterm.buffer) === null || _a === void 0 ? void 0 : _a.active) === null || _b === void 0 ? void 0 : _b.baseY) !== null && _c !== void 0 ? _c : newViewportY;
                if (newViewportY >= baseY)
                    pane.followBottom = true;
            });
            pane.cleanupScroll = () => {
                xtermEl.removeEventListener('wheel', onWheel);
                xtermEl.removeEventListener('touchstart', onTouchStart);
                xtermEl.removeEventListener('touchmove', onTouchMove);
            };
        };
        trySetup();
    }
    triggerResize() {
        const delays = [80, 250, 700];
        for (const delay of delays)
            this.scheduleResize(delay);
        setTimeout(() => { var _a, _b; return (_b = (_a = this.broadcastCapture) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus(); }, 700);
    }
    scheduleResize(delay = 0) {
        if (this.resizeTimer)
            clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.resizeTimer = null;
            window.dispatchEvent(new Event('resize'));
            this.fitAllPanes();
        }, delay);
    }
    fitPane(pane) {
        var _a, _b;
        try {
            const frontend = pane.tab.frontend;
            if (!(frontend === null || frontend === void 0 ? void 0 : frontend.fitAddon) || !((_a = frontend === null || frontend === void 0 ? void 0 : frontend.xterm) === null || _a === void 0 ? void 0 : _a.element))
                return;
            const xtermEl = frontend.xterm.element;
            const paneEl = xtermEl.closest('.me-pane');
            let containerEl = xtermEl.parentElement;
            while (containerEl && !containerEl.classList.contains('me-pane-body') && !containerEl.classList.contains('me-pane')) {
                containerEl = containerEl.parentElement;
            }
            if (!containerEl && paneEl)
                containerEl = paneEl;
            if (containerEl) {
                this.normalizePaneLayout(pane);
                const layoutEl = paneEl !== null && paneEl !== void 0 ? paneEl : containerEl;
                const header = layoutEl.querySelector('.me-pane-header');
                const toolbar = layoutEl.querySelector('terminal-toolbar, .terminal-toolbar');
                const headerH = containerEl.classList.contains('me-pane') ? ((_b = header === null || header === void 0 ? void 0 : header.offsetHeight) !== null && _b !== void 0 ? _b : 0) : 0;
                const toolbarH = (_b = toolbar === null || toolbar === void 0 ? void 0 : toolbar.offsetHeight) !== null && _b !== void 0 ? _b : 0;
                const stableXtermParent = xtermEl.parentElement;
                if (stableXtermParent) {
                    const baseHeight = containerEl.clientHeight || layoutEl.clientHeight;
                    const nextHeight = Math.max(0, baseHeight - headerH - toolbarH);
                    stableXtermParent.style.height = `${nextHeight}px`;
                    stableXtermParent.style.maxHeight = `${nextHeight}px`;
                    stableXtermParent.style.minHeight = '0';
                    stableXtermParent.style.overflow = 'hidden';
                }
            }
            frontend.fitAddon.fit();
        }
        catch ( /* ignore */_c) { /* ignore */ }
    }
    fitAllPanes() {
        var _a, _b;
        for (const pane of this.panes) {
            try {
                const frontend = pane.tab.frontend;
                if (!(frontend === null || frontend === void 0 ? void 0 : frontend.fitAddon) || !((_a = frontend === null || frontend === void 0 ? void 0 : frontend.xterm) === null || _a === void 0 ? void 0 : _a.element))
                    continue;
                const xtermEl = frontend.xterm.element;
                // Walk up to the pane; the ViewContainerRef anchor may be display: contents.
                const paneEl = xtermEl.closest('.me-pane');
                let containerEl = xtermEl.parentElement;
                while (containerEl && !containerEl.classList.contains('me-pane-body') && !containerEl.classList.contains('me-pane')) {
                    containerEl = containerEl.parentElement;
                }
                if (!containerEl && paneEl)
                    containerEl = paneEl;
                if (containerEl) {
                    this.normalizePaneLayout(pane);
                    const layoutEl = paneEl !== null && paneEl !== void 0 ? paneEl : containerEl;
                    const header = layoutEl.querySelector('.me-pane-header');
                    const toolbar = layoutEl.querySelector('terminal-toolbar, .terminal-toolbar');
                    const headerH = containerEl.classList.contains('me-pane') ? ((_b = header === null || header === void 0 ? void 0 : header.offsetHeight) !== null && _b !== void 0 ? _b : 0) : 0;
                    const toolbarH = (_b = toolbar === null || toolbar === void 0 ? void 0 : toolbar.offsetHeight) !== null && _b !== void 0 ? _b : 0;
                    const stableXtermParent = xtermEl.parentElement;
                    if (stableXtermParent) {
                        const baseHeight = containerEl.clientHeight || layoutEl.clientHeight;
                        const nextHeight = Math.max(0, baseHeight - headerH - toolbarH);
                        stableXtermParent.style.height = `${nextHeight}px`;
                        stableXtermParent.style.maxHeight = `${nextHeight}px`;
                        stableXtermParent.style.minHeight = '0';
                        stableXtermParent.style.overflow = 'hidden';
                    }
                    if (false && toolbarH > 0) {
                        // Ép xterm parent xuống đúng phần height còn lại sau toolbar
                        const xtermParent = xtermEl.parentElement;
                        xtermParent.style.maxHeight = `${containerEl.offsetHeight - toolbarH}px`;
                        xtermParent.style.overflow = 'hidden';
                    }
                }
                frontend.fitAddon.fit();
            }
            catch ( /* ignore */_c) { /* ignore */ }
        }
    }
    ngOnDestroy() {
        var _a, _b, _c, _d;
        MultiExecTabComponent_1.instances = MultiExecTabComponent_1.instances.filter(i => i !== this);
        if (this.autoScrollTimer)
            clearInterval(this.autoScrollTimer);
        if (this.resizeTimer)
            clearTimeout(this.resizeTimer);
        (_a = this.paneBodySub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        for (const pane of this.panes) {
            (_b = pane.cleanupScroll) === null || _b === void 0 ? void 0 : _b.call(pane);
            try {
                pane.tab.removeFromContainer();
                (_d = (_c = pane.tab.session) === null || _c === void 0 ? void 0 : _c.close) === null || _d === void 0 ? void 0 : _d.call(_c);
                pane.tab.destroy();
            }
            catch ( /* ignore */_e) { /* ignore */ }
        }
    }
    // ─── Host management ───────────────────────────────────────────────────────
    get availableHosts() {
        const inPanes = new Set(this.panes.map(p => p.host.id));
        return this.manager.getHosts().filter(h => !inPanes.has(h.id));
    }
    get addHostResults() {
        const q = this.addHostQuery.toLowerCase().trim();
        if (!q)
            return [];
        const groups = this.manager.getGroups();
        return this.availableHosts.filter(h => {
            var _a, _b, _c, _d, _e, _f;
            const groupName = (_b = (_a = groups.find(g => g.id === h.groupId)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
            return h.name.toLowerCase().includes(q) ||
                ((_c = h.host) !== null && _c !== void 0 ? _c : '').toLowerCase().includes(q) ||
                ((_d = h.username) !== null && _d !== void 0 ? _d : '').toLowerCase().includes(q) ||
                ((_e = h.type) !== null && _e !== void 0 ? _e : '').toLowerCase().includes(q) ||
                ((_f = h.notes) !== null && _f !== void 0 ? _f : '').toLowerCase().includes(q) ||
                groupName.toLowerCase().includes(q) ||
                (h.tags || []).some(tag => tag.toLowerCase().includes(q));
        });
    }
    onAddHostKeyDown(event) {
        const results = this.addHostResults;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.addHostHighlightIndex = Math.min(this.addHostHighlightIndex + 1, results.length - 1);
        }
        else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.addHostHighlightIndex = Math.max(this.addHostHighlightIndex - 1, -1);
        }
        else if (event.key === 'Enter') {
            event.preventDefault();
            const idx = this.addHostHighlightIndex >= 0 ? this.addHostHighlightIndex : 0;
            const host = results[idx];
            if (host)
                this.selectAddHost(host);
        }
        else if (event.key === 'Escape') {
            this.addHostQuery = '';
            this.addHostFocused = false;
            this.addHostHighlightIndex = -1;
        }
        else {
            this.addHostHighlightIndex = -1;
        }
    }
    selectAddHost(host) {
        this.addHostQuery = '';
        this.addHostFocused = false;
        this.addHostHighlightIndex = -1;
        this.addHost(host);
    }
    onAddHostBlur() {
        setTimeout(() => {
            this.addHostFocused = false;
            this.addHostHighlightIndex = -1;
        }, 150);
    }
    attachPaneWhenReady(pane, attempts = 0) {
        if (!this.panes.includes(pane) || pane.attached)
            return;
        const idx = this.panes.indexOf(pane);
        const container = this.paneBodies.toArray()[idx];
        if (container) {
            this.attachPane(pane, container);
            return;
        }
        if (attempts < 50)
            setTimeout(() => this.attachPaneWhenReady(pane, attempts + 1), 50);
    }
    removePane(pane) {
        var _a, _b, _c;
        const idx = this.panes.indexOf(pane);
        if (idx === -1)
            return;
        this.panes.splice(idx, 1);
        this.targetIds.delete(pane.host.id);
        (_a = pane.cleanupScroll) === null || _a === void 0 ? void 0 : _a.call(pane);
        try {
            pane.tab.removeFromContainer();
            (_c = (_b = pane.tab.session) === null || _b === void 0 ? void 0 : _b.close) === null || _c === void 0 ? void 0 : _c.call(_b);
            pane.tab.destroy();
        }
        catch ( /* ignore */_d) { /* ignore */ }
        this.triggerResize();
    }
    addHost(host) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.panes.some(p => p.host.id === host.id))
                return;
            const tab = yield this.manager.createTerminalTab(host);
            if (!tab)
                return;
            const pane = { host, tab, followBottom: true, attached: false };
            this.panes.push(pane);
            // Don't add to targetIds yet — wait until the session is open so that
            // a broadcast sent immediately after addHost() doesn't silently drop
            // because the terminal hasn't been attached / the SSH handshake isn't done.
            this.waitForSessionOpen(tab, host.id);
            // Scroll tracking: attachTerminals() fires via paneBodies.changes but may
            // expire before xterm is ready on slow connections. Re-try after session open.
            this.waitForXtermThenSetupScroll(pane);
            setTimeout(() => this.attachPaneWhenReady(pane), 0);
        });
    }
    waitForXtermThenSetupScroll(pane) {
        let attempts = 0;
        const timer = setInterval(() => {
            var _a, _b;
            attempts++;
            if (!this.panes.includes(pane)) {
                clearInterval(timer);
                return;
            }
            if (pane.cleanupScroll) {
                clearInterval(timer);
                return;
            }
            if ((_b = (_a = pane.tab.frontend) === null || _a === void 0 ? void 0 : _a.xterm) === null || _b === void 0 ? void 0 : _b.element) {
                clearInterval(timer);
                this.setupScrollTracking(pane);
            }
            if (attempts >= 150)
                clearInterval(timer); // give up after 30 s
        }, 200);
    }
    waitForSessionOpen(tab, hostId) {
        let done = false;
        tab.destroyed$.subscribe(() => { done = true; });
        const pollInterval = 200; // ms
        const maxAttempts = 150; // 30 s total
        let attempts = 0;
        const timer = setInterval(() => {
            attempts++;
            const session = tab.session;
            if (session === null || session === void 0 ? void 0 : session.open) {
                clearInterval(timer);
                this.targetIds.add(hostId);
                return;
            }
            if (done || attempts >= maxAttempts || !this.panes.some(p => p.host.id === hostId)) {
                clearInterval(timer);
            }
        }, pollInterval);
    }
    // ─── Grid layout ───────────────────────────────────────────────────────────
    trackByPane(index, pane) {
        var _a, _b;
        return (_b = (_a = pane === null || pane === void 0 ? void 0 : pane.tab) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (pane === null || pane === void 0 ? void 0 : pane.host.id);
    }
    get gridStyle() {
        const n = this.panes.length;
        const usableWidth = Math.max(320, window.innerWidth || 0);
        const usableHeight = Math.max(240, (window.innerHeight || 0) - 110);
        const aspect = usableWidth / usableHeight;
        const cols = Math.max(1, Math.min(n || 1, Math.ceil(Math.sqrt((n || 1) * aspect))));
        const rows = Math.ceil(n / cols);
        return {
            'grid-template-columns': Array(cols).fill('minmax(0, 1fr)').join(' '),
            'grid-template-rows': Array(rows).fill('minmax(0, 1fr)').join(' '),
            'grid-auto-rows': 'minmax(0, 1fr)',
            'grid-auto-columns': 'minmax(0, 1fr)',
        };
    }
    // ─── Target management ─────────────────────────────────────────────────────
    isTarget(host) {
        return this.targetIds.has(host.id);
    }
    toggleTarget(host) {
        if (this.targetIds.has(host.id)) {
            this.targetIds.delete(host.id);
        }
        else {
            this.targetIds.add(host.id);
        }
    }
    selectAll() {
        this.panes.forEach(p => this.targetIds.add(p.host.id));
    }
    deselectAll() {
        this.targetIds.clear();
    }
    toggleToolbar() {
        var _a, _b, _c, _d, _e, _f, _g;
        this.toolbarPinned = !this.toolbarPinned;
        for (const pane of this.panes) {
            // Try Angular elementRef first, then internal _elementRef
            let el = (_d = (_b = (_a = pane.tab.elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement) !== null && _b !== void 0 ? _b : (_c = pane.tab._elementRef) === null || _c === void 0 ? void 0 : _c.nativeElement) !== null && _d !== void 0 ? _d : null;
            // Fallback: walk up from xterm element to find the tab host element
            if (!el) {
                const xtermEl = (_f = (_e = pane.tab.frontend) === null || _e === void 0 ? void 0 : _e.xterm) === null || _f === void 0 ? void 0 : _f.element;
                if (xtermEl) {
                    let cur = xtermEl.parentElement;
                    while (cur && !cur.classList.contains('me-pane')) {
                        cur = cur.parentElement;
                    }
                    // tab element is a child of .me-pane (sibling of .me-pane-body)
                    el = (_g = cur === null || cur === void 0 ? void 0 : cur.querySelector('ssh-tab, telnet-tab, serial-tab, [class*="-tab"]')) !== null && _g !== void 0 ? _g : null;
                }
            }
            if (el)
                el.classList.toggle('toolbar-pinned', this.toolbarPinned);
        }
        setTimeout(() => this.fitAllPanes(), 100);
    }
    // ─── Broadcast keyboard input ───────────────────────────────────────────────
    onBroadcastKeyDown(event) {
        if (this.targetIds.size === 0)
            return;
        let data = null;
        if (event.ctrlKey && !event.altKey) {
            const k = event.key.toLowerCase();
            if (k.length === 1 && k >= 'a' && k <= 'z') {
                data = String.fromCharCode(k.charCodeAt(0) - 96); // Ctrl+A=\x01 … Ctrl+Z=\x1a
            }
            else if (k === '[') {
                data = '\x1b';
            }
            else if (k === '\\') {
                data = '\x1c';
            }
            else if (k === ']') {
                data = '\x1d';
            }
            else if (k === '^' || k === '6') {
                data = '\x1e';
            }
            else if (k === '_' || k === '-') {
                data = '\x1f';
            }
        }
        else if (!event.ctrlKey && !event.altKey && !event.metaKey) {
            // Shift+PageUp/Down = scroll viewport in xterm — let pass through
            if (event.shiftKey && (event.key === 'PageUp' || event.key === 'PageDown'))
                return;
            switch (event.key) {
                case 'Enter':
                    data = '\r';
                    break;
                case 'Backspace':
                    data = '\x7f';
                    break;
                case 'Tab':
                    data = '\t';
                    break;
                case 'Escape':
                    data = '\x1b';
                    break;
                case 'Delete':
                    data = '\x1b[3~';
                    break;
                case 'ArrowUp':
                    data = event.shiftKey ? '\x1b[1;2A' : '\x1b[A';
                    break;
                case 'ArrowDown':
                    data = event.shiftKey ? '\x1b[1;2B' : '\x1b[B';
                    break;
                case 'ArrowRight':
                    data = event.shiftKey ? '\x1b[1;2C' : '\x1b[C';
                    break;
                case 'ArrowLeft':
                    data = event.shiftKey ? '\x1b[1;2D' : '\x1b[D';
                    break;
                case 'Home':
                    data = '\x1b[H';
                    break;
                case 'End':
                    data = '\x1b[F';
                    break;
                case 'PageUp':
                    data = '\x1b[5~';
                    break;
                case 'PageDown':
                    data = '\x1b[6~';
                    break;
                case 'F1':
                    data = '\x1bOP';
                    break;
                case 'F2':
                    data = '\x1bOQ';
                    break;
                case 'F3':
                    data = '\x1bOR';
                    break;
                case 'F4':
                    data = '\x1bOS';
                    break;
                case 'F5':
                    data = '\x1b[15~';
                    break;
                case 'F6':
                    data = '\x1b[17~';
                    break;
                case 'F7':
                    data = '\x1b[18~';
                    break;
                case 'F8':
                    data = '\x1b[19~';
                    break;
                case 'F9':
                    data = '\x1b[20~';
                    break;
                case 'F10':
                    data = '\x1b[21~';
                    break;
                case 'F11':
                    data = '\x1b[23~';
                    break;
                case 'F12':
                    data = '\x1b[24~';
                    break;
                default:
                    if (event.key.length === 1)
                        data = event.key;
            }
        }
        if (data !== null) {
            event.preventDefault();
            this.sendToTargets(data);
        }
    }
    // ─── External drop (host from connectionPanel) ─────────────────────────────
    sendToTargets(data) {
        for (const pane of this.panes) {
            if (!this.targetIds.has(pane.host.id))
                continue;
            const session = pane.tab.session;
            if (!(session === null || session === void 0 ? void 0 : session.open))
                continue;
            pane.tab.sendInput(data);
        }
    }
    onLayoutDragOver(event) {
        if (this.draggedPaneIndex !== null)
            return;
        event.preventDefault();
        this.isDragOver = true;
    }
    onLayoutDragLeave(event) {
        const related = event.relatedTarget;
        const current = event.currentTarget;
        if (!related || !(current === null || current === void 0 ? void 0 : current.contains(related))) {
            this.isDragOver = false;
        }
    }
    onLayoutDrop(event) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.draggedPaneIndex !== null)
                return;
            event.preventDefault();
            this.isDragOver = false;
            const hostId = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/plain');
            if (!hostId)
                return;
            const host = this.manager.getHosts().find(h => h.id === hostId);
            if (!host)
                return;
            if (this.panes.some(p => p.host.id === hostId))
                return;
            yield this.addHost(host);
        });
    }
    // ─── Pane reorder drag ─────────────────────────────────────────────────────
    onPaneHeaderDragStart(event, index) {
        var _a;
        this.draggedPaneIndex = index;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('application/x-me-pane', String(index));
        event.stopPropagation();
    }
    onPaneDragOver(event, index) {
        if (this.draggedPaneIndex === null)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.dragOverPaneIndex = index;
    }
    onPaneDragLeave() {
        this.dragOverPaneIndex = null;
    }
    onPaneDrop(event, targetIndex) {
        event.stopPropagation();
        const srcIdx = this.draggedPaneIndex;
        this.draggedPaneIndex = null;
        this.dragOverPaneIndex = null;
        if (srcIdx === null || srcIdx === targetIndex)
            return;
        const moved = this.panes.splice(srcIdx, 1)[0];
        this.panes.splice(targetIndex, 0, moved);
        this.scheduleResize(100);
    }
    onPaneDragEnd() {
        this.draggedPaneIndex = null;
        this.dragOverPaneIndex = null;
    }
    getHostIcon(host) {
        switch (host.type) {
            case 'ssh': return 'fas fa-terminal';
            case 'telnet': return 'fas fa-network-wired';
            case 'serial': return 'fas fa-plug';
            default: return 'fas fa-server';
        }
    }
};
MultiExecTabComponent.instances = [];
MultiExecTabComponent.ctorParameters = () => [
    { type: core_.Injector },
    { type: ConnectionManagerService }
];
MultiExecTabComponent.propDecorators = {
    hosts: [{ type: core_.Input }],
    broadcastCapture: [{ type: core_.ViewChild, args: ['broadcastCapture',] }],
    paneBodies: [{ type: core_.ViewChildren, args: ['paneBody', { read: core_.ViewContainerRef },] }]
};
MultiExecTabComponent = MultiExecTabComponent_1 = __decorate([
    (0,core_.Component)({
        selector: 'multi-exec-tab',
        template: __webpack_require__(/*! ./multiExecTab.component.pug */ 141),
        styles: [__webpack_require__(/*! ./multiExecTab.component.scss */ 348)]
    }),
    __metadata("design:paramtypes", [core_.Injector,
        ConnectionManagerService])
], MultiExecTabComponent);


;// ./src/components/connectionPanel.component.ts
class HostSelectionStore {
    constructor() {
        this.selectedHostIds = new Set();
        this.activeHostId = null;
        this.lastSelectedHostId = null;
    }
    clear() {
        this.selectedHostIds.clear();
        this.activeHostId = null;
        this.lastSelectedHostId = null;
    }
    selectOnly(hostId) {
        this.selectedHostIds.clear();
        this.selectedHostIds.add(hostId);
        this.activeHostId = hostId;
        this.lastSelectedHostId = hostId;
    }
    toggle(hostId) {
        if (this.selectedHostIds.has(hostId)) {
            this.selectedHostIds.delete(hostId);
            if (this.activeHostId === hostId)
                this.activeHostId = null;
        }
        else {
            this.selectedHostIds.add(hostId);
        }
    }
    select(ids, additive = false) {
        if (!additive)
            this.selectedHostIds.clear();
        ids.forEach(id => this.selectedHostIds.add(id));
    }
    prune(existingIds) {
        for (const id of [...this.selectedHostIds]) {
            if (!existingIds.has(id))
                this.selectedHostIds.delete(id);
        }
        if (this.activeHostId && !existingIds.has(this.activeHostId))
            this.activeHostId = null;
        if (this.lastSelectedHostId && !existingIds.has(this.lastSelectedHostId))
            this.lastSelectedHostId = null;
    }
}








let ConnectionPanelComponent = class ConnectionPanelComponent extends external_tabby_core_.BaseTabComponent {
    constructor(injector, manager, ngbModal, zone, app) {
        super(injector);
        this.manager = manager;
        this.ngbModal = ngbModal;
        this.zone = zone;
        this.app = app;
        this.searchQuery = '';
        this.groups = [];
        this.hosts = [];
        this.viewMode = 'grid';
        this.selectedGroup = null;
        // ─── Keyboard nav ──────────────────────────────────────────────────────────
        this.selectedSearchIndex = -1;
        // ─── Search suggestions ────────────────────────────────────────────────────
        this.searchSuggestions = [
            { label: 'type:ssh', hint: 'SSH connections', icon: 'fas fa-terminal', section: 'Filters' },
            { label: 'type:telnet', hint: 'Telnet connections', icon: 'fas fa-network-wired', section: 'Filters' },
            { label: 'type:serial', hint: 'Serial connections', icon: 'fas fa-plug', section: 'Filters' },
            { label: 'name:', hint: 'Filter by name', icon: 'fas fa-id-badge', section: 'Filters' },
            { label: 'user:', hint: 'Filter by username', icon: 'fas fa-user', section: 'Filters' },
            { label: 'tag:', hint: 'Filter by tag', icon: 'fas fa-tag', section: 'Filters' },
            { label: 'group:', hint: 'Filter by group', icon: 'fas fa-folder', section: 'Filters' },
            { label: '&&', hint: 'Match ALL terms', icon: 'fas fa-check-double', section: 'Operators' },
            { label: '||', hint: 'Match ANY term', icon: 'fas fa-code-branch', section: 'Operators' },
        ];
        this.showSuggestions = false;
        this.suggestionIndex = 0;
        // ─── Sort ──────────────────────────────────────────────────────────────────
        this.sortMode = 'lastConnected';
        // ─── Connection status ─────────────────────────────────────────────────────
        this.hostStatuses = {};
        this.isCheckingStatus = false;
        // ─── Selection mode ────────────────────────────────────────────────────────
        this.selection = new HostSelectionStore();
        this.selectionMode = false;
        this.selectedHostIds = this.selection.selectedHostIds;
        this.contextMenuEl = null;
        // ─── MultiExec ─────────────────────────────────────────────────────────────
        this.multiExecMode = false;
        this.multiExecCommand = '';
        this.multiExecTargetIds = new Set();
        // ─── Drag & drop ───────────────────────────────────────────────────────────
        this.draggedHost = null;
        this.dragOverHostId = null;
        this.dragOverGroupId = null;
        this.title = 'Tabby Home';
        this.icon = 'fas fa-server';
    }
    get activeHostId() {
        return this.selection.activeHostId;
    }
    set activeHostId(value) {
        this.selection.activeHostId = value;
    }
    get lastSelectedHostId() {
        return this.selection.lastSelectedHostId;
    }
    set lastSelectedHostId(value) {
        this.selection.lastSelectedHostId = value;
    }
    ngOnInit() {
        this.refresh();
        this.focused$.subscribe(() => {
            this.refresh();
            setTimeout(() => {
                var _a, _b;
                if (document.querySelector('.modal.show'))
                    return;
                (_b = (_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus();
            }, 50);
        });
    }
    refresh() {
        var _a;
        this.groups = this.manager.getGroups();
        this.hosts = this.manager.getHosts();
        const existingIds = new Set(this.hosts.map(h => h.id));
        this.hostStatuses = Object.fromEntries(Object.entries(this.hostStatuses).filter(([id]) => existingIds.has(id)));
        for (const id of [...this.multiExecTargetIds]) {
            if (!existingIds.has(id))
                this.multiExecTargetIds.delete(id);
        }
        if (this.selectedGroup) {
            this.selectedGroup = (_a = this.groups.find(g => g.id === this.selectedGroup.id)) !== null && _a !== void 0 ? _a : null;
        }
        if (this.searchQuery && this.selectedSearchIndex >= this.searchResults.length)
            this.selectedSearchIndex = -1;
        this.reconcileSelection();
    }
    // ─── Navigation ────────────────────────────────────────────────────────────
    openGroup(group) {
        this.selectedGroup = group;
        this.searchQuery = '';
        this.selectedSearchIndex = -1;
        this.hideContextMenu();
    }
    backToRoot() {
        this.selectedGroup = null;
        this.searchQuery = '';
        this.selectedSearchIndex = -1;
        this.hideContextMenu();
    }
    onKeyDown(event) {
        const active = document.activeElement;
        const isTextInput = (active === null || active === void 0 ? void 0 : active.tagName) === 'INPUT' || (active === null || active === void 0 ? void 0 : active.tagName) === 'TEXTAREA' || (active === null || active === void 0 ? void 0 : active.isContentEditable);
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'a' && !isTextInput) {
            event.preventDefault();
            this.selectAll();
            return;
        }
        if (event.key === 'Escape') {
            if (this.contextMenuEl) {
                event.preventDefault();
                this.hideContextMenu();
                return;
            }
            if (this.selectedHostIds.size > 0 && !isTextInput) {
                event.preventDefault();
                this.deselectAll();
                return;
            }
        }
        if ((event.key === 'Delete' || event.key === 'Backspace') && this.selectedHostIds.size > 0 && !isTextInput) {
            if (event.key === 'Delete') {
                event.preventDefault();
                this.deleteSelected();
                return;
            }
        }
        if (event.key === 'Enter' && this.selectedHostIds.size > 0 && !isTextInput) {
            event.preventDefault();
            this.connectSelected(false);
            return;
        }
        if (event.key === 'Backspace' && this.selectedGroup && !this.searchQuery) {
            if ((active === null || active === void 0 ? void 0 : active.tagName) === 'INPUT' || (active === null || active === void 0 ? void 0 : active.tagName) === 'TEXTAREA')
                return;
            event.preventDefault();
            this.backToRoot();
        }
    }
    onMouseUp(event) {
        if (event.button === 3 && this.selectedGroup) {
            event.preventDefault();
            this.backToRoot();
        }
    }
    onDocumentClick(event) {
        var _a;
        if (this.contextMenuEl && !((_a = this.contextMenuEl) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            this.hideContextMenu();
        }
    }
    // ─── Search keyboard nav ───────────────────────────────────────────────────
    onSearchKeyDown(event) {
        if (this.showSuggestions) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                this.suggestionIndex = (this.suggestionIndex + 1) % this.searchSuggestions.length;
                return;
            }
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                this.suggestionIndex = (this.suggestionIndex - 1 + this.searchSuggestions.length) % this.searchSuggestions.length;
                return;
            }
            if (event.key === 'Enter' || event.key === 'Tab') {
                event.preventDefault();
                this.applySuggestion(this.searchSuggestions[this.suggestionIndex]);
                return;
            }
            if (event.key === 'Escape') {
                event.preventDefault();
                this.showSuggestions = false;
                return;
            }
        }
        if (!this.searchQuery)
            return;
        const results = this.searchResults;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.selectedSearchIndex = Math.min(this.selectedSearchIndex + 1, results.length - 1);
        }
        else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.selectedSearchIndex = Math.max(this.selectedSearchIndex - 1, 0);
        }
        else if (event.key === 'Enter') {
            event.preventDefault();
            const idx = this.selectedSearchIndex >= 0 ? this.selectedSearchIndex : 0;
            const host = results[idx];
            if (host)
                this.connect(host);
        }
        else if (!['Shift', 'Tab'].includes(event.key)) {
            this.selectedSearchIndex = -1;
        }
    }
    onSearchInput() {
        if (this.searchQuery.endsWith('/')) {
            this.showSuggestions = true;
            this.suggestionIndex = 0;
        }
        else {
            this.showSuggestions = false;
        }
    }
    onSearchBlur() {
        setTimeout(() => { this.showSuggestions = false; }, 150);
    }
    applySuggestion(s) {
        this.searchQuery = this.searchQuery.slice(0, -1) + s.label;
        this.showSuggestions = false;
        this.suggestionIndex = 0;
        setTimeout(() => { var _a, _b; return (_b = (_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus(); }, 0);
    }
    selectSearchResult(index) {
        this.selectedSearchIndex = index;
    }
    clearSearch() {
        this.searchQuery = '';
        this.selectedSearchIndex = -1;
    }
    // ─── Sort ──────────────────────────────────────────────────────────────────
    cycleSortMode() {
        const modes = ['default', 'name', 'lastConnected'];
        const idx = modes.indexOf(this.sortMode);
        this.sortMode = modes[(idx + 1) % modes.length];
    }
    get sortLabel() {
        switch (this.sortMode) {
            case 'name': return 'Sort: Name';
            case 'lastConnected': return 'Sort: Recent first';
            default: return 'Sort: Default';
        }
    }
    get sortIcon() {
        switch (this.sortMode) {
            case 'name': return 'fas fa-sort-alpha-down';
            case 'lastConnected': return 'fas fa-clock';
            default: return 'fas fa-sort';
        }
    }
    sortHosts(hosts) {
        if (this.sortMode === 'name') {
            return [...hosts].sort((a, b) => a.name.localeCompare(b.name));
        }
        if (this.sortMode === 'lastConnected') {
            return [...hosts].sort((a, b) => { var _a, _b; return ((_a = b.lastConnected) !== null && _a !== void 0 ? _a : 0) - ((_b = a.lastConnected) !== null && _b !== void 0 ? _b : 0); });
        }
        return hosts;
    }
    // ─── Filtered + sorted data ────────────────────────────────────────────────
    get visibleGroups() {
        if (!this.searchQuery)
            return this.groups;
        return this.groups.filter(g => g.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            this.hostsInGroup(g.id).length > 0);
    }
    getHostGroup(host) {
        var _a;
        if (!host.groupId)
            return null;
        return (_a = this.groups.find(g => g.id === host.groupId)) !== null && _a !== void 0 ? _a : null;
    }
    openGroupFromSearch(host, event) {
        event.stopPropagation();
        const group = this.getHostGroup(host);
        if (group) {
            this.searchQuery = '';
            this.selectedSearchIndex = -1;
            this.selectedGroup = group;
        }
    }
    get searchResults() {
        if (!this.searchQuery)
            return [];
        const pool = this.selectedGroup
            ? this.hosts.filter(h => h.groupId === this.selectedGroup.id)
            : this.hosts;
        return pool.filter(h => this.matchesSearch(h));
    }
    get recentHosts() {
        return this.hosts
            .filter(h => h.lastConnected)
            .sort((a, b) => { var _a, _b; return ((_a = b.lastConnected) !== null && _a !== void 0 ? _a : 0) - ((_b = a.lastConnected) !== null && _b !== void 0 ? _b : 0); })
            .slice(0, 10);
    }
    get rootHosts() {
        const groupIds = new Set(this.groups.map(g => g.id));
        return this.sortHosts(this.hosts.filter(h => {
            const gid = h.groupId;
            return (gid == null || gid === 'null' || gid === '' || !groupIds.has(gid)) && this.matchesSearch(h);
        }));
    }
    get groupHosts() {
        if (!this.selectedGroup)
            return [];
        return this.sortHosts(this.hostsInGroup(this.selectedGroup.id));
    }
    hostsInGroup(groupId) {
        return this.hosts.filter(h => h.groupId === groupId && this.matchesSearch(h));
    }
    hostCountInGroup(groupId) {
        return this.hosts.filter(h => h.groupId === groupId).length;
    }
    matchesSearch(host) {
        var _a, _b;
        if (!this.searchQuery)
            return true;
        const groupName = (_b = (_a = this.groups.find(g => g.id === host.groupId)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
        const matchToken = (token) => {
            var _a, _b, _c, _d, _e, _f, _g;
            const t = token.trim();
            if (!t)
                return true;
            const colonIdx = t.indexOf(':');
            if (colonIdx > 0) {
                const prefix = t.slice(0, colonIdx);
                const val = t.slice(colonIdx + 1);
                switch (prefix) {
                    case 'type':
                        return ((_a = host.type) !== null && _a !== void 0 ? _a : '').toLowerCase() === val;
                    case 'name':
                        return host.name.toLowerCase().includes(val);
                    case 'user':
                        return ((_b = host.username) !== null && _b !== void 0 ? _b : '').toLowerCase().includes(val);
                    case 'tag':
                        return ((_c = host.tags) !== null && _c !== void 0 ? _c : []).some(tag => tag.toLowerCase().includes(val));
                    case 'group':
                        return groupName.toLowerCase().includes(val);
                }
            }
            return (host.name.toLowerCase().includes(t) ||
                ((_d = host.host) !== null && _d !== void 0 ? _d : '').toLowerCase().includes(t) ||
                ((_e = host.username) !== null && _e !== void 0 ? _e : '').toLowerCase().includes(t) ||
                ((_f = host.tags) !== null && _f !== void 0 ? _f : []).some(tag => tag.toLowerCase().includes(t)) ||
                ((_g = host.notes) !== null && _g !== void 0 ? _g : '').toLowerCase().includes(t) ||
                groupName.toLowerCase().includes(t));
        };
        const q = this.searchQuery.toLowerCase();
        if (q.includes('||')) {
            return q.split('||').some(token => matchToken(token));
        }
        if (q.includes('&&')) {
            return q.split('&&').every(token => matchToken(token));
        }
        return matchToken(q);
    }
    // ─── Connection status ─────────────────────────────────────────────────────
    checkAllStatuses() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isCheckingStatus)
                return;
            this.isCheckingStatus = true;
            const hostsToCheck = this.hosts.filter(h => h.host && h.type !== 'serial');
            const initial = {};
            for (const h of hostsToCheck)
                initial[h.id] = 'checking';
            this.hostStatuses = Object.assign(Object.assign({}, this.hostStatuses), initial);
            yield Promise.all(hostsToCheck.map((host) => __awaiter(this, void 0, void 0, function* () {
                const status = yield this.manager.checkHostStatus(host);
                this.zone.run(() => {
                    this.hostStatuses = Object.assign(Object.assign({}, this.hostStatuses), { [host.id]: status });
                });
            })));
            this.zone.run(() => { this.isCheckingStatus = false; });
        });
    }
    getHostStatus(host) {
        var _a;
        return (_a = this.hostStatuses[host.id]) !== null && _a !== void 0 ? _a : 'unknown';
    }
    // ─── Drag & drop ───────────────────────────────────────────────────────────
    onDragStart(host, event) {
        var _a;
        this.draggedHost = host;
        (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/plain', host.id);
    }
    onDragEnd(event) {
        var _a;
        const host = this.draggedHost;
        this.draggedHost = null;
        this.dragOverHostId = null;
        this.dragOverGroupId = null;
        if (!host || !event)
            return;
        const target = document.elementFromPoint(event.clientX, event.clientY);
        if (!target)
            return;
        const tabHeader = target.closest('tab-header');
        if (!tabHeader)
            return;
        const nameEl = tabHeader.querySelector('.cdk-drag.name');
        if (!nameEl)
            return;
        const tabTitle = (_a = nameEl.textContent) === null || _a === void 0 ? void 0 : _a.trim();
        const instance = MultiExecTabComponent.instances.find(i => i.title === tabTitle);
        if (!instance)
            return;
        this.zone.run(() => instance.addHost(host));
    }
    onDragOverHost(event, hostId) {
        if (!this.draggedHost)
            return;
        event.preventDefault();
        this.dragOverHostId = hostId;
        this.dragOverGroupId = null;
    }
    onDropOnHost(targetHost) {
        if (!this.draggedHost || this.draggedHost.id === targetHost.id) {
            this.onDragEnd();
            return;
        }
        if (this.draggedHost.groupId === targetHost.groupId) {
            // Same group: reorder
            this.manager.reorderHost(this.draggedHost.id, targetHost.id);
        }
        else {
            // Different group: move to target's group
            this.manager.updateHost(this.draggedHost.id, { groupId: targetHost.groupId });
        }
        this.onDragEnd();
        this.refresh();
    }
    onDragOverGroup(event, groupId) {
        if (!this.draggedHost)
            return;
        event.preventDefault();
        this.dragOverGroupId = groupId;
        this.dragOverHostId = null;
    }
    onDropOnGroup(group) {
        if (!this.draggedHost)
            return;
        this.manager.updateHost(this.draggedHost.id, { groupId: group.id });
        this.onDragEnd();
        this.refresh();
    }
    onDragLeave() {
        this.dragOverHostId = null;
        this.dragOverGroupId = null;
    }
    // ─── Host actions ──────────────────────────────────────────────────────────
    connect(host) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.manager.connect(host);
        });
    }
    connectAllInGroup(group, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const hosts = this.hosts.filter(h => h.groupId === group.id);
            for (const host of hosts)
                yield this.manager.connect(host);
        });
    }
    connectAllInGroupSplit(group, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const hosts = this.hosts.filter(h => h.groupId === group.id);
            yield this.manager.connectAllSplit(hosts);
        });
    }
    connectGroupHosts() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const host of this.currentViewHosts)
                yield this.manager.connect(host);
        });
    }
    connectGroupHostsSplit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.manager.connectAllSplit(this.currentViewHosts);
        });
    }
    // ─── Selection mode ────────────────────────────────────────────────────────
    toggleSelectionMode() {
        if (this.selectedHostIds.size) {
            this.deselectAll();
            return;
        }
        this.selectionMode = !this.selectionMode;
    }
    toggleHostSelection(host, event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.toggleHost(host.id);
        this.activeHostId = host.id;
        this.lastSelectedHostId = host.id;
        this.syncSelectionMode();
    }
    onHostClick(host, event) {
        if (event.defaultPrevented)
            return;
        if (event.shiftKey) {
            event.preventDefault();
            this.selectRangeTo(host.id, event.ctrlKey || event.metaKey);
        }
        else if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            this.toggleHost(host.id);
            this.lastSelectedHostId = host.id;
        }
        else {
            this.selectOnly(host.id);
        }
        this.activeHostId = host.id;
        this.syncSelectionMode();
    }
    onSearchResultClick(host, index, event) {
        this.selectedSearchIndex = index;
        this.onHostClick(host, event);
    }
    onHostDoubleClick(host, event) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        this.connect(host);
    }
    onHostContextMenu(host, event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.selectedHostIds.has(host.id)) {
            this.selectOnly(host.id);
        }
        else {
            this.activeHostId = host.id;
            this.lastSelectedHostId = host.id;
        }
        this.syncSelectionMode();
        this.showContextMenu(event.clientX, event.clientY, host);
    }
    toggleHost(hostId) {
        this.selection.toggle(hostId);
    }
    selectOnly(hostId) {
        this.selection.selectOnly(hostId);
    }
    selectRangeTo(hostId, additive = false) {
        const hosts = this.currentViewHosts;
        const anchorId = this.lastSelectedHostId && hosts.some(h => h.id === this.lastSelectedHostId)
            ? this.lastSelectedHostId
            : this.activeHostId;
        const anchorIndex = hosts.findIndex(h => h.id === anchorId);
        const targetIndex = hosts.findIndex(h => h.id === hostId);
        if (anchorIndex === -1 || targetIndex === -1) {
            this.selectOnly(hostId);
            return;
        }
        if (!additive)
            this.selectedHostIds.clear();
        const [start, end] = anchorIndex < targetIndex ? [anchorIndex, targetIndex] : [targetIndex, anchorIndex];
        this.selection.select(hosts.slice(start, end + 1).map(h => h.id), true);
        this.lastSelectedHostId = anchorId;
    }
    isHostSelected(host) {
        return this.selectedHostIds.has(host.id);
    }
    isHostActive(host) {
        return this.activeHostId === host.id;
    }
    get currentViewHosts() {
        if (this.searchQuery)
            return this.searchResults;
        return this.selectedGroup ? this.groupHosts : this.rootHosts;
    }
    selectAll() {
        this.selection.select(this.currentViewHosts.map(h => h.id), true);
        if (this.currentViewHosts.length) {
            this.activeHostId = this.currentViewHosts[0].id;
            this.lastSelectedHostId = this.currentViewHosts[0].id;
        }
        this.syncSelectionMode();
    }
    deselectAll() {
        this.selection.clear();
        this.syncSelectionMode();
        this.hideContextMenu();
    }
    get selectedHosts() {
        return this.hosts.filter(h => this.selectedHostIds.has(h.id));
    }
    get selectedHostIdsArray() {
        return [...this.selectedHostIds];
    }
    syncSelectionMode() {
        this.selectionMode = this.selectedHostIds.size > 0;
    }
    reconcileSelection() {
        const existingIds = new Set(this.hosts.map(h => h.id));
        this.selection.prune(existingIds);
        this.syncSelectionMode();
    }
    getSelectionScope(fallbackHost = null) {
        if (this.selectedHostIds.size > 1)
            return this.selectedHosts;
        if (fallbackHost)
            return [fallbackHost];
        return this.selectedHosts;
    }
    connectSelected(clearAfter = true) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const host of this.selectedHosts)
                yield this.manager.connect(host);
            if (clearAfter)
                this.deselectAll();
        });
    }
    splitSelected() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.manager.connectAllSplit(this.selectedHosts);
            this.deselectAll();
        });
    }
    openMultiExecView(hosts) {
        if (hosts.length === 0)
            return;
        this.deselectAll();
        this.multiExecMode = false;
        this.multiExecTargetIds.clear();
        this.app.openNewTab({ type: MultiExecTabComponent, inputs: { hosts } });
    }
    // ─── MultiExec ─────────────────────────────────────────────────────────────
    get connectedHosts() {
        const ids = this.manager.connectedTabs;
        return this.hosts.filter(h => ids.has(h.id));
    }
    get multiExecTargetHosts() {
        return this.connectedHosts.filter(h => this.multiExecTargetIds.has(h.id));
    }
    toggleMultiExecMode() {
        this.multiExecMode = !this.multiExecMode;
        if (this.multiExecMode) {
            this.connectedHosts.forEach(h => this.multiExecTargetIds.add(h.id));
            setTimeout(() => { var _a, _b; return (_b = (_a = this.multiExecInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus(); }, 80);
        }
        else {
            this.multiExecTargetIds.clear();
            this.multiExecCommand = '';
        }
    }
    isMultiExecTarget(host) {
        return this.multiExecTargetIds.has(host.id);
    }
    toggleMultiExecTarget(host, event) {
        event.stopPropagation();
        if (this.multiExecTargetIds.has(host.id)) {
            this.multiExecTargetIds.delete(host.id);
        }
        else {
            this.multiExecTargetIds.add(host.id);
        }
    }
    selectAllConnected() {
        this.connectedHosts.forEach(h => this.multiExecTargetIds.add(h.id));
    }
    deselectAllConnected() {
        this.multiExecTargetIds.clear();
    }
    sendMultiExec() {
        if (!this.multiExecCommand.trim() || this.multiExecTargetIds.size === 0)
            return;
        this.manager.sendMultiExec(this.multiExecCommand, [...this.multiExecTargetIds]);
        this.multiExecCommand = '';
        setTimeout(() => { var _a, _b; return (_b = (_a = this.multiExecInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus(); }, 30);
    }
    onMultiExecKeyDown(event) {
        var _a, _b;
        if (event.ctrlKey || event.altKey || event.metaKey) {
            (_b = (_a = this.multiExecInput) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.blur();
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            this.sendMultiExec();
        }
    }
    addHost(groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = this.ngbModal.open(HostEditorComponent, { size: 'lg' });
            modal.componentInstance.host = { type: 'ssh', port: 22, username: 'root', groupId: groupId !== null && groupId !== void 0 ? groupId : null };
            try {
                yield modal.result;
                this.refresh();
            }
            catch ( /* dismissed */_a) { /* dismissed */ }
        });
    }
    editHost(host, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const wasInGroup = !!this.selectedGroup;
            const modal = this.ngbModal.open(HostEditorComponent, { size: 'lg' });
            modal.componentInstance.host = Object.assign({}, host);
            modal.componentInstance.editMode = true;
            try {
                yield modal.result;
                this.refresh();
                if (wasInGroup) {
                    this.backToRoot();
                }
            }
            catch ( /* dismissed */_a) { /* dismissed */ }
        });
    }
    duplicateHost(host, event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.manager.duplicateHost(host.id);
        this.refresh();
    }
    deleteHost(host, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event === null || event === void 0 ? void 0 : event.stopPropagation();
            if (confirm(`Delete "${host.name}"?`)) {
                yield this.manager.deleteHost(host.id);
                this.refresh();
            }
        });
    }
    duplicateSelected(hosts = this.selectedHosts) {
        for (const host of hosts)
            this.manager.duplicateHost(host.id);
        this.hideContextMenu();
        this.refresh();
    }
    deleteSelected(hosts = this.selectedHosts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!hosts.length)
                return;
            const label = hosts.length === 1 ? `"${hosts[0].name}"` : `${hosts.length} selected hosts`;
            if (!confirm(`Delete ${label}?`))
                return;
            for (const host of hosts) {
                yield this.manager.deleteHost(host.id);
                this.selectedHostIds.delete(host.id);
            }
            this.hideContextMenu();
            this.refresh();
        });
    }
    moveSelectedToGroup(hosts = this.selectedHosts) {
        var _a;
        if (!hosts.length)
            return;
        const groupNames = this.groups.map(g => g.name).join(', ');
        const target = prompt(`Move to group name (empty for root):\n${groupNames}`);
        if (target === null)
            return;
        const group = this.groups.find(g => g.name.toLowerCase() === target.trim().toLowerCase());
        const groupId = target.trim() ? (_a = group === null || group === void 0 ? void 0 : group.id) !== null && _a !== void 0 ? _a : null : null;
        if (target.trim() && !groupId) {
            alert(`Group "${target}" was not found.`);
            return;
        }
        for (const host of hosts)
            this.manager.updateHost(host.id, { groupId });
        this.hideContextMenu();
        this.refresh();
    }
    editTagsForSelected(hosts = this.selectedHosts) {
        if (!hosts.length)
            return;
        const value = prompt(`Set tags for ${hosts.length} host${hosts.length === 1 ? '' : 's'} (comma separated):`, hosts.length === 1 ? ((hosts[0].tags || []).join(', ')) : '');
        if (value === null)
            return;
        const tags = value.split(',').map(t => t.trim()).filter(Boolean);
        for (const host of hosts)
            this.manager.updateHost(host.id, { tags });
        this.hideContextMenu();
        this.refresh();
    }
    bulkEditSelected(hosts = this.selectedHosts) {
        return __awaiter(this, void 0, void 0, function* () {
        if (hosts.length === 1) {
            yield this.editHost(hosts[0], { stopPropagation() { } });
            this.hideContextMenu();
            return;
        }
        if (!hosts.length)
            return;
        const sshHosts = hosts.filter(h => h.type === 'ssh');
        const baseHost = sshHosts[0];
        if (!baseHost) {
            alert('Credentials can only be edited for SSH hosts.');
            return;
        }
        const firstUsername = baseHost.username || '';
        const sameUsername = sshHosts.every(h => (h.username || '') === firstUsername);
        const modal = this.ngbModal.open(HostEditorComponent, { size: 'lg' });
        modal.componentInstance.host = Object.assign(Object.assign({}, baseHost), { username: sameUsername ? firstUsername : '' });
        modal.componentInstance.editMode = true;
        modal.componentInstance.bulkHosts = sshHosts.map(h => Object.assign({}, h));
        modal.componentInstance.bulkUsernameMixed = !sameUsername;
        this.hideContextMenu();
        try {
            yield modal.result;
            this.refresh();
        }
        catch ( /* dismissed */_a) { /* dismissed */ }
        });
    }
    exportSelected(hosts = this.selectedHosts) {
        if (!hosts.length)
            return;
        const groupIds = new Set(hosts.map(h => h.groupId).filter(Boolean));
        const json = JSON.stringify({
            version: 1,
            exportedAt: new Date().toISOString(),
            groups: this.groups.filter(g => groupIds.has(g.id)),
            hosts,
        }, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `connections-selected-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.hideContextMenu();
    }
    buildSshCommand(host) {
        var _a, _b;
        if (host.type !== 'ssh' || !host.host)
            return `${host.type || 'host'}:${host.host || host.name}`;
        const user = host.username ? `${host.username}@` : '';
        const port = (_b = (_a = host.port) !== null && _a !== void 0 ? _a : 22) !== null && _b !== void 0 ? _b : 22;
        return `ssh ${user}${host.host}${port === 22 ? '' : ` -p ${port}`}`;
    }
    copySshCommands(hosts = this.selectedHosts) {
        const text = hosts.map(h => this.buildSshCommand(h)).join('\n');
        if (!text)
            return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        }
        else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
        }
        this.hideContextMenu();
    }
    showContextMenu(x, y, host) {
        const hosts = this.getSelectionScope(host);
        const isBulk = hosts.length > 1;
        this.hideContextMenu();
        const menu = document.createElement('div');
        menu.className = 'host-context-menu dropdown-menu show';
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;
        const item = (label, icon, handler, danger = false) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `dropdown-item${danger ? ' text-danger' : ''}`;
            button.innerHTML = `<i class="${icon} me-2"></i>${label}`;
            button.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                handler();
            });
            menu.appendChild(button);
        };
        const divider = () => {
            const div = document.createElement('div');
            div.className = 'dropdown-divider';
            menu.appendChild(div);
        };
        item('Connect', 'fas fa-play', () => this.connectHosts(hosts));
        item('Open tabs', 'fas fa-columns', () => this.connectHosts(hosts));
        divider();
        item('Move to group', 'fas fa-folder-open', () => this.moveSelectedToGroup(hosts));
        item('Export', 'fas fa-file-export', () => this.exportSelected(hosts));
        item('Copy SSH command', 'fas fa-terminal', () => this.copySshCommands(hosts));
        item('Tags', 'fas fa-tags', () => this.editTagsForSelected(hosts));
        item(isBulk ? 'Bulk edit' : 'Edit', 'fas fa-pencil-alt', () => this.bulkEditSelected(hosts));
        item('Duplicate', 'fas fa-copy', () => this.duplicateSelected(hosts));
        divider();
        item('Delete', 'fas fa-trash', () => this.deleteSelected(hosts), true);
        document.body.appendChild(menu);
        const rect = menu.getBoundingClientRect();
        menu.style.left = `${Math.max(4, Math.min(x, window.innerWidth - rect.width - 4))}px`;
        menu.style.top = `${Math.max(4, Math.min(y, window.innerHeight - rect.height - 4))}px`;
        this.contextMenuEl = menu;
    }
    hideContextMenu() {
        if (this.contextMenuEl) {
            this.contextMenuEl.remove();
            this.contextMenuEl = null;
        }
    }
    connectHosts(hosts) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const h of hosts)
                yield this.manager.connect(h);
            this.hideContextMenu();
        });
    }
    // ─── Group actions ─────────────────────────────────────────────────────────
    addGroup() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = this.ngbModal.open(GroupEditorComponent);
            try {
                yield modal.result;
                this.refresh();
            }
            catch ( /* dismissed */_a) { /* dismissed */ }
        });
    }
    editGroup(group, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.stopPropagation();
            const modal = this.ngbModal.open(GroupEditorComponent);
            modal.componentInstance.group = Object.assign({}, group);
            modal.componentInstance.editMode = true;
            try {
                yield modal.result;
                this.refresh();
            }
            catch ( /* dismissed */_a) { /* dismissed */ }
        });
    }
    deleteGroup(group, event) {
        var _a;
        event.stopPropagation();
        if (confirm(`Delete group "${group.name}"?\nHosts will be moved to root.`)) {
            this.manager.deleteGroup(group.id);
            if (((_a = this.selectedGroup) === null || _a === void 0 ? void 0 : _a.id) === group.id) {
                this.selectedGroup = null;
            }
            this.refresh();
        }
    }
    // ─── Import / Export ───────────────────────────────────────────────────────
    exportConnections() {
        const json = this.manager.exportData();
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `connections-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    triggerImport() {
        var _a;
        (_a = document.getElementById('cm-import-file')) === null || _a === void 0 ? void 0 : _a.click();
    }
    importConnections(event) {
        var _a;
        const input = event.target;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const result = this.manager.importData(reader.result);
                this.refresh();
                alert(`Imported: ${result.groupsAdded} groups, ${result.hostsAdded} hosts`);
            }
            catch (_a) {
                alert('Import failed: invalid file format');
            }
        };
        reader.readAsText(file);
        input.value = '';
    }
    // ─── Helpers ───────────────────────────────────────────────────────────────
    getHostIcon(host) {
        switch (host.type) {
            case 'ssh': return 'fas fa-terminal';
            case 'telnet': return 'fas fa-network-wired';
            case 'serial': return 'fas fa-plug';
            default: return 'fas fa-server';
        }
    }
    getHostIconColor(_host) {
        return '#ffffff';
    }
    getHostIconBg(host) {
        switch (host.type) {
            case 'ssh': return '#88c0d0';
            case 'telnet': return '#d08770';
            case 'serial': return '#b48ead';
            default: return '#81a1c1';
        }
    }
    getHostDescription(host) {
        const parts = [host.type];
        if (host.host)
            parts.push(host.host);
        if (host.username)
            parts.push(host.username);
        return parts.join(', ');
    }
};
ConnectionPanelComponent.ctorParameters = () => [
    { type: core_.Injector },
    { type: ConnectionManagerService },
    { type: ng_bootstrap_.NgbModal },
    { type: core_.NgZone },
    { type: external_tabby_core_.AppService }
];
ConnectionPanelComponent.propDecorators = {
    searchInput: [{ type: core_.ViewChild, args: ['searchInput',] }],
    multiExecInput: [{ type: core_.ViewChild, args: ['multiExecInput',] }],
    onKeyDown: [{ type: core_.HostListener, args: ['keydown', ['$event'],] }],
    onMouseUp: [{ type: core_.HostListener, args: ['mouseup', ['$event'],] }],
    onDocumentClick: [{ type: core_.HostListener, args: ['document:click', ['$event'],] }]
};
ConnectionPanelComponent = __decorate([
    (0,core_.Component)({
        selector: 'connection-panel',
        template: __webpack_require__(/*! ./connectionPanel.component.pug */ 132),
        styles: [__webpack_require__(/*! ./connectionPanel.component.scss */ 425)]
    }),
    __metadata("design:paramtypes", [core_.Injector,
        ConnectionManagerService,
        ng_bootstrap_.NgbModal,
        core_.NgZone,
        external_tabby_core_.AppService])
], ConnectionPanelComponent);


;// ./src/config.ts



/** @hidden */
let ConnectionManagerConfigProvider = class ConnectionManagerConfigProvider extends external_tabby_core_.ConfigProvider {
    constructor() {
        super(...arguments);
        this.defaults = {
            connectionManager: {
                groups: [],
                hosts: [],
            },
            hotkeys: {
                'connection-manager-open': [],
            },
        };
    }
};
ConnectionManagerConfigProvider = __decorate([
    (0,core_.Injectable)()
], ConnectionManagerConfigProvider);


;// ./src/toolbar.ts




let ConnectionManagerToolbarButtonProvider = class ConnectionManagerToolbarButtonProvider extends external_tabby_core_.ToolbarButtonProvider {
    constructor(app) {
        super();
        this.app = app;
    }
    provide() {
        return [{
                // SVG icon inline
                icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                <rect x="2" y="3" width="20" height="18" rx="2" ry="2"
                      fill="none" stroke="currentColor" stroke-width="1.5"/>
            </svg>`,
                title: 'Tabby Home',
                weight: -1,
                click: () => this.openOrFocus(),
            }];
    }
    openOrFocus() {
        // Nếu tab panel đã mở thì focus vào đó
        const existing = this.app.tabs.find(t => t instanceof ConnectionPanelComponent);
        if (existing) {
            this.app.selectTab(existing);
            return;
        }
        this.app.openNewTab({
            type: ConnectionPanelComponent,
            inputs: {},
        });
    }
};
ConnectionManagerToolbarButtonProvider.ctorParameters = () => [
    { type: external_tabby_core_.AppService }
];
ConnectionManagerToolbarButtonProvider = __decorate([
    (0,core_.Injectable)(),
    __metadata("design:paramtypes", [external_tabby_core_.AppService])
], ConnectionManagerToolbarButtonProvider);


;// ./src/hotkey.ts



let ConnectionManagerHotkeyProvider = class ConnectionManagerHotkeyProvider extends external_tabby_core_.HotkeyProvider {
    provide() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    id: 'connection-manager-open',
                    name: 'Tabby Home: Open',
                },
            ];
        });
    }
};
ConnectionManagerHotkeyProvider = __decorate([
    (0,core_.Injectable)()
], ConnectionManagerHotkeyProvider);


;// ./src/index.ts













/** @hidden */
let ConnectionManagerModule = class ConnectionManagerModule {
    constructor(app, hotkeys) {
        app.ready$.subscribe(() => {
            app.openNewTab({ type: ConnectionPanelComponent, inputs: {} });
        });
        hotkeys.hotkey$.subscribe(hotkey => {
            if (hotkey === 'connection-manager-open') {
                const existing = app.tabs.find(t => t instanceof ConnectionPanelComponent);
                if (existing) {
                    app.selectTab(existing);
                }
                else {
                    app.openNewTab({ type: ConnectionPanelComponent, inputs: {} });
                }
            }
        });
    }
};
ConnectionManagerModule.ctorParameters = () => [
    { type: external_tabby_core_.AppService },
    { type: external_tabby_core_.HotkeysService }
];
ConnectionManagerModule = __decorate([
    (0,core_.NgModule)({
        imports: [
            ng_bootstrap_.NgbModule,
            common_.CommonModule,
            forms_.FormsModule,
            (external_tabby_core_default()),
        ],
        providers: [
            { provide: external_tabby_core_.ConfigProvider, useClass: ConnectionManagerConfigProvider, multi: true },
            { provide: external_tabby_core_.ToolbarButtonProvider, useClass: ConnectionManagerToolbarButtonProvider, multi: true },
            { provide: external_tabby_core_.HotkeyProvider, useClass: ConnectionManagerHotkeyProvider, multi: true },
        ],
        declarations: [
            ConnectionPanelComponent,
            HostEditorComponent,
            GroupEditorComponent,
            MultiExecTabComponent,
        ],
        entryComponents: [
            ConnectionPanelComponent,
            HostEditorComponent,
            GroupEditorComponent,
            MultiExecTabComponent,
        ],
    }),
    __metadata("design:paramtypes", [external_tabby_core_.AppService, external_tabby_core_.HotkeysService])
], ConnectionManagerModule);
/* harmony default export */ const src = (ConnectionManagerModule);



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map



