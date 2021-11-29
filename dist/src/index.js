"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndGenerate = exports.defaultOptions = exports.parseWsdl = exports.generate = void 0;
var path_1 = __importDefault(require("path"));
var parser_1 = require("./parser");
var generator_1 = require("./generator");
var timer_1 = require("./utils/timer");
var logger_1 = require("./utils/logger");
var generator_2 = require("./generator");
Object.defineProperty(exports, "generate", { enumerable: true, get: function () { return generator_2.generate; } });
var parser_2 = require("./parser");
Object.defineProperty(exports, "parseWsdl", { enumerable: true, get: function () { return parser_2.parseWsdl; } });
exports.defaultOptions = {
    emitDefinitionsOnly: false,
    modelNamePreffix: "",
    modelNameSuffix: "",
    caseInsensitiveNames: false,
    maxRecursiveDefinitionName: 64
};
function parseAndGenerate(wsdlPath, outDir, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var mergedOptions, timeParseStart, parsedWsdl, timeGenerateStart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mergedOptions = __assign(__assign({}, exports.defaultOptions), options);
                    timeParseStart = process.hrtime();
                    return [4 /*yield*/, (0, parser_1.parseWsdl)(wsdlPath, mergedOptions)];
                case 1:
                    parsedWsdl = _a.sent();
                    logger_1.Logger.debug("Parser time: ".concat((0, timer_1.timeElapsed)(process.hrtime(timeParseStart)), "ms"));
                    timeGenerateStart = process.hrtime();
                    return [4 /*yield*/, (0, generator_1.generate)(parsedWsdl, path_1.default.join(outDir, parsedWsdl.name.toLowerCase()), mergedOptions)];
                case 2:
                    _a.sent();
                    logger_1.Logger.debug("Generator time: ".concat((0, timer_1.timeElapsed)(process.hrtime(timeGenerateStart)), "ms"));
                    logger_1.Logger.info("Generating finished: ".concat((0, timer_1.timeElapsed)(process.hrtime(timeParseStart)), "ms"));
                    return [2 /*return*/];
            }
        });
    });
}
exports.parseAndGenerate = parseAndGenerate;
//# sourceMappingURL=index.js.map