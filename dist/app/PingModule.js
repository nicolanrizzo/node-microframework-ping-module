"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PingController_1 = require("./PingController");
var core_1 = require('bap-node-microframework/core');
var PingModule = (function (_super) {
    __extends(PingModule, _super);
    function PingModule() {
        _super.apply(this, arguments);
    }
    PingModule.prototype.registerControllers = function () {
        this.app.use(PingController_1.default);
    };
    return PingModule;
}(core_1.Module));
exports.PingModule = PingModule;
//# sourceMappingURL=PingModule.js.map