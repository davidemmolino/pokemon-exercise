/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ \"core-js/modules/es.array.find\");\n/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"core-js/modules/es.array.join\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"core-js/modules/es.regexp.exec\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search */ \"core-js/modules/es.string.search\");\n/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/index */ \"./server/routes/index.js\");\n/* harmony import */ var _database_mongodb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./database/mongodb */ \"./server/database/mongodb/index.js\");\n/* harmony import */ var _database_seedData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./database/seedData */ \"./server/database/seedData.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _webpack_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../webpack.config */ \"./webpack.config.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Create express app\n\nvar app = express__WEBPACK_IMPORTED_MODULE_7___default()(); // Configure express app to build client code\n\n_webpack_config__WEBPACK_IMPORTED_MODULE_18__[\"default\"].entry['client'] = 'webpack-hot-middleware/client';\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_15___default()(_webpack_config__WEBPACK_IMPORTED_MODULE_18__[\"default\"]);\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_16___default()(compiler, {\n  publicPath: _webpack_config__WEBPACK_IMPORTED_MODULE_18__[\"default\"].output.publicPath,\n  stats: {\n    colors: true\n  }\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_17___default()(compiler, {\n  log: console.log\n}));\n/* Boiler plate. enables\n    logging, parsing json, parsing encoded urls, cookies, serve static assets */\n\napp.use(morgan__WEBPACK_IMPORTED_MODULE_11___default()('dev'));\napp.use(express__WEBPACK_IMPORTED_MODULE_7___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_7___default.a.urlencoded({\n  extended: false\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_10___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_7___default.a.static(path__WEBPACK_IMPORTED_MODULE_8___default.a.join(__dirname, '../public'))); // Home/Index route\n\napp.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\n/** \n * Use this endpoint for\n *  - Server side search\n *  - Lazy loading\n */\n\napp.get('/pokemon', function (req, res) {\n  var searchString = req.query && req.query.search;\n  var limit = req.query && req.query.limit;\n  var offset = req.query && req.query.offset;\n  console.log('****', limit, offset); // empty query object gets all entries in the collection\n\n  var queryArgs = {};\n\n  if (searchString) {\n    // allow searching by name\n    queryArgs.name = {\n      '$regex': searchString,\n      '$options': 'i'\n    };\n  }\n\n  var query = _database_mongodb__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Pokemon.find(queryArgs);\n\n  if (offset) {\n    query = query.skip(~~offset);\n  }\n\n  if (limit) {\n    query = query.limit(~~limit);\n  }\n\n  query.exec(function (err, data) {\n    if (!err) {\n      res.json(data);\n    } else {\n      res.sendStatus(400);\n    }\n  });\n});\nvar PORT = process.env.PORT || 8080;\n/** Connect to DB and then start listening */\n\nObject(_database_mongodb__WEBPACK_IMPORTED_MODULE_13__[\"connectDatabase\"])().then( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _database_mongodb__WEBPACK_IMPORTED_MODULE_13__[\"default\"].Pokemon.create(_database_seedData__WEBPACK_IMPORTED_MODULE_14__[\"default\"], function (err, res) {\n            app.listen(PORT, function () {\n              console.log(\"listening on \".concat(PORT, \"....\"));\n              console.log('Press Ctrl+C to quit.');\n            });\n          });\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})));\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/database/mongodb/index.js":
/*!******************************************!*\
  !*** ./server/database/mongodb/index.js ***!
  \******************************************/
/*! exports provided: connectDatabase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectDatabase\", function() { return connectDatabase; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _schema_pokemon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema/pokemon.model */ \"./server/database/mongodb/schema/pokemon.model.js\");\n\n\nvar databaseUrl = 'mongodb://localhost:27017/pokemon';\nvar connectDatabase = function connectDatabase() {\n  return mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(databaseUrl);\n};\nvar model = {\n  Pokemon: _schema_pokemon_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (model);\n\n//# sourceURL=webpack:///./server/database/mongodb/index.js?");

/***/ }),

/***/ "./server/database/mongodb/schema/pokemon.model.js":
/*!*********************************************************!*\
  !*** ./server/database/mongodb/schema/pokemon.model.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar pokemonSchema = Schema({\n  name: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  url: {\n    type: String\n  },\n  image: {\n    type: String,\n    unique: true,\n    required: true\n  }\n});\nvar Pokemon = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('pokemon', pokemonSchema, 'Pokemon');\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./server/database/mongodb/schema/pokemon.model.js?");

/***/ }),

/***/ "./server/database/seedData.js":
/*!*************************************!*\
  !*** ./server/database/seedData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  \"name\": \"bulbasaur\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/1/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png\"\n}, {\n  \"name\": \"ivysaur\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/2/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png\"\n}, {\n  \"name\": \"venusaur\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/3/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png\"\n}, {\n  \"name\": \"charmander\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/4/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png\"\n}, {\n  \"name\": \"charmeleon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/5/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png\"\n}, {\n  \"name\": \"charizard\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/6/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png\"\n}, {\n  \"name\": \"squirtle\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/7/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png\"\n}, {\n  \"name\": \"wartortle\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/8/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png\"\n}, {\n  \"name\": \"blastoise\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/9/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png\"\n}, {\n  \"name\": \"caterpie\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/10/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png\"\n}, {\n  \"name\": \"metapod\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/11/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png\"\n}, {\n  \"name\": \"butterfree\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/12/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png\"\n}, {\n  \"name\": \"weedle\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/13/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png\"\n}, {\n  \"name\": \"kakuna\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/14/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png\"\n}, {\n  \"name\": \"beedrill\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/15/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png\"\n}, {\n  \"name\": \"pidgey\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/16/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png\"\n}, {\n  \"name\": \"pidgeotto\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/17/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png\"\n}, {\n  \"name\": \"pidgeot\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/18/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png\"\n}, {\n  \"name\": \"rattata\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/19/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png\"\n}, {\n  \"name\": \"raticate\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/20/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png\"\n}, {\n  \"name\": \"spearow\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/21/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png\"\n}, {\n  \"name\": \"fearow\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/22/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png\"\n}, {\n  \"name\": \"ekans\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/23/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png\"\n}, {\n  \"name\": \"arbok\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/24/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png\"\n}, {\n  \"name\": \"pikachu\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/25/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png\"\n}, {\n  \"name\": \"raichu\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/26/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png\"\n}, {\n  \"name\": \"sandshrew\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/27/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png\"\n}, {\n  \"name\": \"sandslash\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/28/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png\"\n}, {\n  \"name\": \"nidoran-f\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/29/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png\"\n}, {\n  \"name\": \"nidorina\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/30/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png\"\n}, {\n  \"name\": \"nidoqueen\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/31/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png\"\n}, {\n  \"name\": \"nidoran-m\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/32/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png\"\n}, {\n  \"name\": \"nidorino\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/33/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png\"\n}, {\n  \"name\": \"nidoking\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/34/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png\"\n}, {\n  \"name\": \"clefairy\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/35/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png\"\n}, {\n  \"name\": \"clefable\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/36/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png\"\n}, {\n  \"name\": \"vulpix\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/37/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png\"\n}, {\n  \"name\": \"ninetales\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/38/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png\"\n}, {\n  \"name\": \"jigglypuff\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/39/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png\"\n}, {\n  \"name\": \"wigglytuff\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/40/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png\"\n}, {\n  \"name\": \"zubat\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/41/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png\"\n}, {\n  \"name\": \"golbat\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/42/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png\"\n}, {\n  \"name\": \"oddish\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/43/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png\"\n}, {\n  \"name\": \"gloom\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/44/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png\"\n}, {\n  \"name\": \"vileplume\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/45/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png\"\n}, {\n  \"name\": \"paras\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/46/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png\"\n}, {\n  \"name\": \"parasect\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/47/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png\"\n}, {\n  \"name\": \"venonat\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/48/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png\"\n}, {\n  \"name\": \"venomoth\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/49/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png\"\n}, {\n  \"name\": \"diglett\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/50/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png\"\n}, {\n  \"name\": \"dugtrio\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/51/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png\"\n}, {\n  \"name\": \"meowth\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/52/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png\"\n}, {\n  \"name\": \"persian\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/53/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png\"\n}, {\n  \"name\": \"psyduck\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/54/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png\"\n}, {\n  \"name\": \"golduck\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/55/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png\"\n}, {\n  \"name\": \"mankey\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/56/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png\"\n}, {\n  \"name\": \"primeape\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/57/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png\"\n}, {\n  \"name\": \"growlithe\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/58/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png\"\n}, {\n  \"name\": \"arcanine\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/59/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png\"\n}, {\n  \"name\": \"poliwag\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/60/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png\"\n}, {\n  \"name\": \"poliwhirl\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/61/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png\"\n}, {\n  \"name\": \"poliwrath\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/62/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png\"\n}, {\n  \"name\": \"abra\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/63/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png\"\n}, {\n  \"name\": \"kadabra\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/64/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png\"\n}, {\n  \"name\": \"alakazam\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/65/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png\"\n}, {\n  \"name\": \"machop\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/66/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png\"\n}, {\n  \"name\": \"machoke\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/67/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png\"\n}, {\n  \"name\": \"machamp\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/68/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png\"\n}, {\n  \"name\": \"bellsprout\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/69/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png\"\n}, {\n  \"name\": \"weepinbell\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/70/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png\"\n}, {\n  \"name\": \"victreebel\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/71/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png\"\n}, {\n  \"name\": \"tentacool\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/72/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png\"\n}, {\n  \"name\": \"tentacruel\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/73/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png\"\n}, {\n  \"name\": \"geodude\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/74/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png\"\n}, {\n  \"name\": \"graveler\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/75/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png\"\n}, {\n  \"name\": \"golem\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/76/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png\"\n}, {\n  \"name\": \"ponyta\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/77/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png\"\n}, {\n  \"name\": \"rapidash\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/78/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png\"\n}, {\n  \"name\": \"slowpoke\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/79/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png\"\n}, {\n  \"name\": \"slowbro\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/80/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png\"\n}, {\n  \"name\": \"magnemite\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/81/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png\"\n}, {\n  \"name\": \"magneton\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/82/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png\"\n}, {\n  \"name\": \"farfetchd\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/83/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png\"\n}, {\n  \"name\": \"doduo\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/84/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png\"\n}, {\n  \"name\": \"dodrio\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/85/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png\"\n}, {\n  \"name\": \"seel\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/86/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png\"\n}, {\n  \"name\": \"dewgong\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/87/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png\"\n}, {\n  \"name\": \"grimer\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/88/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png\"\n}, {\n  \"name\": \"muk\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/89/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png\"\n}, {\n  \"name\": \"shellder\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/90/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png\"\n}, {\n  \"name\": \"cloyster\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/91/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png\"\n}, {\n  \"name\": \"gastly\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/92/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png\"\n}, {\n  \"name\": \"haunter\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/93/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png\"\n}, {\n  \"name\": \"gengar\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/94/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png\"\n}, {\n  \"name\": \"onix\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/95/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png\"\n}, {\n  \"name\": \"drowzee\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/96/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png\"\n}, {\n  \"name\": \"hypno\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/97/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png\"\n}, {\n  \"name\": \"krabby\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/98/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png\"\n}, {\n  \"name\": \"kingler\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/99/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png\"\n}, {\n  \"name\": \"voltorb\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/100/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png\"\n}, {\n  \"name\": \"electrode\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/101/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png\"\n}, {\n  \"name\": \"exeggcute\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/102/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png\"\n}, {\n  \"name\": \"exeggutor\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/103/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png\"\n}, {\n  \"name\": \"cubone\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/104/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png\"\n}, {\n  \"name\": \"marowak\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/105/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png\"\n}, {\n  \"name\": \"hitmonlee\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/106/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png\"\n}, {\n  \"name\": \"hitmonchan\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/107/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png\"\n}, {\n  \"name\": \"lickitung\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/108/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png\"\n}, {\n  \"name\": \"koffing\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/109/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png\"\n}, {\n  \"name\": \"weezing\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/110/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png\"\n}, {\n  \"name\": \"rhyhorn\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/111/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png\"\n}, {\n  \"name\": \"rhydon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/112/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png\"\n}, {\n  \"name\": \"chansey\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/113/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png\"\n}, {\n  \"name\": \"tangela\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/114/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png\"\n}, {\n  \"name\": \"kangaskhan\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/115/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png\"\n}, {\n  \"name\": \"horsea\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/116/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png\"\n}, {\n  \"name\": \"seadra\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/117/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png\"\n}, {\n  \"name\": \"goldeen\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/118/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png\"\n}, {\n  \"name\": \"seaking\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/119/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png\"\n}, {\n  \"name\": \"staryu\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/120/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png\"\n}, {\n  \"name\": \"starmie\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/121/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png\"\n}, {\n  \"name\": \"mr-mime\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/122/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png\"\n}, {\n  \"name\": \"scyther\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/123/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png\"\n}, {\n  \"name\": \"jynx\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/124/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png\"\n}, {\n  \"name\": \"electabuzz\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/125/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png\"\n}, {\n  \"name\": \"magmar\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/126/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png\"\n}, {\n  \"name\": \"pinsir\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/127/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png\"\n}, {\n  \"name\": \"tauros\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/128/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png\"\n}, {\n  \"name\": \"magikarp\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/129/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png\"\n}, {\n  \"name\": \"gyarados\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/130/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png\"\n}, {\n  \"name\": \"lapras\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/131/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png\"\n}, {\n  \"name\": \"ditto\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/132/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png\"\n}, {\n  \"name\": \"eevee\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/133/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png\"\n}, {\n  \"name\": \"vaporeon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/134/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png\"\n}, {\n  \"name\": \"jolteon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/135/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png\"\n}, {\n  \"name\": \"flareon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/136/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png\"\n}, {\n  \"name\": \"porygon\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/137/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png\"\n}, {\n  \"name\": \"omanyte\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/138/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png\"\n}, {\n  \"name\": \"omastar\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/139/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png\"\n}, {\n  \"name\": \"kabuto\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/140/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png\"\n}, {\n  \"name\": \"kabutops\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/141/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png\"\n}, {\n  \"name\": \"aerodactyl\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/142/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png\"\n}, {\n  \"name\": \"snorlax\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/143/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png\"\n}, {\n  \"name\": \"articuno\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/144/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png\"\n}, {\n  \"name\": \"zapdos\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/145/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png\"\n}, {\n  \"name\": \"moltres\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/146/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png\"\n}, {\n  \"name\": \"dratini\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/147/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png\"\n}, {\n  \"name\": \"dragonair\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/148/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png\"\n}, {\n  \"name\": \"dragonite\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/149/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png\"\n}, {\n  \"name\": \"mewtwo\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/150/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png\"\n}, {\n  \"name\": \"mew\",\n  \"url\": \"https://pokeapi.co/api/v2/pokemon/151/\",\n  \"image\": \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png\"\n}]);\n\n//# sourceURL=webpack:///./server/database/seedData.js?");

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n/* GET home page. */\n\nrouter.get('/', function (req, res, next) {\n  res.render('index', {\n    title: 'Express'\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/index.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join */ \"core-js/modules/es.array.join\");\n/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar config = {\n  mode: 'development',\n  entry: {\n    main: './react-pokemon/index.js'\n  },\n  output: {\n    path: path.join(__dirname, 'public'),\n    publicPath: '/',\n    filename: '[name].js'\n  },\n  target: 'web',\n  devtool: 'inline-source-map',\n  devServer: {\n    contentBase: './public',\n    hot: true\n  },\n  resolve: {\n    extensions: ['.js', '.jsx']\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      loader: [\"babel-loader\"]\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: [{\n        loader: \"html-loader\" //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.css$/,\n      use: ['style-loader', 'css-loader']\n    }, {\n      test: /\\.(png|svg|jpg|gif)$/,\n      use: ['file-loader']\n    }]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "core-js/modules/es.array.find":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.find" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.find\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.find%22?");

/***/ }),

/***/ "core-js/modules/es.array.join":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.join" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.join\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.join%22?");

/***/ }),

/***/ "core-js/modules/es.regexp.exec":
/*!*************************************************!*\
  !*** external "core-js/modules/es.regexp.exec" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.regexp.exec\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.regexp.exec%22?");

/***/ }),

/***/ "core-js/modules/es.string.search":
/*!***************************************************!*\
  !*** external "core-js/modules/es.string.search" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.search\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.search%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime.js\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime.js%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });