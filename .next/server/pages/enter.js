"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/enter";
exports.ids = ["pages/enter"];
exports.modules = {

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    user: null,\n    username: null\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFOUIsS0FBSyxDQUFDQyxXQUFXLGlCQUFHRCxvREFBYSxDQUFDLENBQUM7SUFBQ0UsSUFBSSxFQUFFLElBQUk7SUFBRUMsUUFBUSxFQUFFLElBQUk7QUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGZpcmUtYXBwLy4vbGliL2NvbnRleHQuanM/N2QyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyB1c2VyOiBudWxsLCB1c2VybmFtZTogbnVsbCB9KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiVXNlckNvbnRleHQiLCJ1c2VyIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/context.js\n");

/***/ }),

/***/ "./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"googleAuthProvider\": () => (/* binding */ googleAuthProvider),\n/* harmony export */   \"firestore\": () => (/* binding */ firestore),\n/* harmony export */   \"storage\": () => (/* binding */ storage),\n/* harmony export */   \"STATE_CHANGED\": () => (/* binding */ STATE_CHANGED)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCjnphMs4luyd1IYMUI56xu1TuXzQP0wE8\",\n    authDomain: \"nextfire-13d14.firebaseapp.com\",\n    projectId: \"nextfire-13d14\",\n    storageBucket: \"nextfire-13d14.appspot.com\",\n    messagingSenderId: \"763549006302\",\n    appId: \"1:763549006302:web:4297e73997801afffc454f\",\n    measurementId: \"G-7EBCGXRZVD\"\n};\n// Initialize firebase\n// let firebaseApp;\n// let firestore;\n// if (!getApps().length) {\n//   // firebase.initializeApp(firebaseConfig);\n//   initializeApp(firebaseConfig);\n//   firestore = getFirestore();\n// }\nfunction createFirebaseApp(config) {\n    try {\n        return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\n    } catch  {\n        return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);\n    }\n}\n// const firebaseApp = initializeApp(firebaseConfig);\nconst firebaseApp = createFirebaseApp(firebaseConfig);\n// Auth exports\n// export const auth = firebase.auth();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n// Firestore exports\nconst firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(firebaseApp);\n// export const firestore = firebase.firestore();\n// export { firestore };\n// export const serverTimestamp = serverTimestamp;\n// export const fromMillis = fromMillis;\n// export const increment = increment;\n// Storage exports\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(firebaseApp);\nconst STATE_CHANGED = 'state_changed';\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ0Y7QUFDZ0M7QUFDOUM7QUFFN0MsS0FBSyxDQUFDWSxjQUFjLEdBQUcsQ0FBQztJQUN2QkMsTUFBTSxFQUFFLENBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsQ0FBZ0M7SUFDNUNDLFNBQVMsRUFBRSxDQUFnQjtJQUMzQkMsYUFBYSxFQUFFLENBQTRCO0lBQzNDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxDQUFjO0FBQzlCLENBQUM7QUFDRCxFQUFzQjtBQUN0QixFQUFtQjtBQUNuQixFQUFpQjtBQUNqQixFQUEyQjtBQUMzQixFQUErQztBQUMvQyxFQUFtQztBQUNuQyxFQUFnQztBQUNoQyxFQUFJO1NBRUtDLGlCQUFpQixDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxHQUFHLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQ25CLG9EQUFNO0lBQ2QsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQ1IsTUFBTSxDQUFDRiwyREFBYSxDQUFDcUIsTUFBTTtJQUM1QixDQUFDO0FBQ0YsQ0FBQztBQUVELEVBQXFEO0FBQ3JELEtBQUssQ0FBQ0MsV0FBVyxHQUFHRixpQkFBaUIsQ0FBQ1IsY0FBYztBQUVwRCxFQUFlO0FBQ2YsRUFBdUM7QUFDaEMsS0FBSyxDQUFDVyxJQUFJLEdBQUdwQixzREFBTyxDQUFDbUIsV0FBVztBQUNoQyxLQUFLLENBQUNFLGtCQUFrQixHQUFHLEdBQUcsQ0FBQ3BCLDZEQUFrQjtBQUd4RCxFQUFvQjtBQUNiLEtBQUssQ0FBQ3FCLFNBQVMsR0FBR3BCLGdFQUFZLENBQUNpQixXQUFXO0FBQ2pELEVBQWlEO0FBQ2pELEVBQXdCO0FBQ3hCLEVBQWtEO0FBQ2xELEVBQXdDO0FBQ3hDLEVBQXNDO0FBRXRDLEVBQWtCO0FBQ1gsS0FBSyxDQUFDSSxPQUFPLEdBQUdmLDREQUFVLENBQUNXLFdBQVc7QUFDdEMsS0FBSyxDQUFDSyxhQUFhLEdBQUcsQ0FBZSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRmaXJlLWFwcC8uL2xpYi9maXJlYmFzZS5qcz9hYjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMsIGdldEFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIHdoZXJlLCBnZXREb2NzLCBxdWVyeSwgbGltaXQgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG5cdGFwaUtleTogXCJBSXphU3lDam5waE1zNGx1eWQxSVlNVUk1Nnh1MVR1WHpRUDB3RThcIixcblx0YXV0aERvbWFpbjogXCJuZXh0ZmlyZS0xM2QxNC5maXJlYmFzZWFwcC5jb21cIixcblx0cHJvamVjdElkOiBcIm5leHRmaXJlLTEzZDE0XCIsXG5cdHN0b3JhZ2VCdWNrZXQ6IFwibmV4dGZpcmUtMTNkMTQuYXBwc3BvdC5jb21cIixcblx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiNzYzNTQ5MDA2MzAyXCIsXG5cdGFwcElkOiBcIjE6NzYzNTQ5MDA2MzAyOndlYjo0Mjk3ZTczOTk3ODAxYWZmZmM0NTRmXCIsXG5cdG1lYXN1cmVtZW50SWQ6IFwiRy03RUJDR1hSWlZEXCIsXG59O1xuLy8gSW5pdGlhbGl6ZSBmaXJlYmFzZVxuLy8gbGV0IGZpcmViYXNlQXBwO1xuLy8gbGV0IGZpcmVzdG9yZTtcbi8vIGlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xuLy8gICAvLyBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbi8vICAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4vLyAgIGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xuLy8gfVxuXG5mdW5jdGlvbiBjcmVhdGVGaXJlYmFzZUFwcChjb25maWcpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZ2V0QXBwKCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiBpbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cdH1cbn1cblxuLy8gY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGZpcmViYXNlQXBwID0gY3JlYXRlRmlyZWJhc2VBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4vLyBBdXRoIGV4cG9ydHNcbi8vIGV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcbmV4cG9ydCBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cblxuLy8gRmlyZXN0b3JlIGV4cG9ydHNcbmV4cG9ydCBjb25zdCBmaXJlc3RvcmUgPSBnZXRGaXJlc3RvcmUoZmlyZWJhc2VBcHApO1xuLy8gZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuLy8gZXhwb3J0IHsgZmlyZXN0b3JlIH07XG4vLyBleHBvcnQgY29uc3Qgc2VydmVyVGltZXN0YW1wID0gc2VydmVyVGltZXN0YW1wO1xuLy8gZXhwb3J0IGNvbnN0IGZyb21NaWxsaXMgPSBmcm9tTWlsbGlzO1xuLy8gZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IGluY3JlbWVudDtcblxuLy8gU3RvcmFnZSBleHBvcnRzXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoZmlyZWJhc2VBcHApO1xuZXhwb3J0IGNvbnN0IFNUQVRFX0NIQU5HRUQgPSAnc3RhdGVfY2hhbmdlZCc7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZ2V0RG9jcyIsInF1ZXJ5IiwibGltaXQiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiY3JlYXRlRmlyZWJhc2VBcHAiLCJjb25maWciLCJmaXJlYmFzZUFwcCIsImF1dGgiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlc3RvcmUiLCJzdG9yYWdlIiwiU1RBVEVfQ0hBTkdFRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/firebase.js\n");

/***/ }),

/***/ "./pages/enter.js":
/*!************************!*\
  !*** ./pages/enter.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Enter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/firebase */ \"./lib/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/context */ \"./lib/context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash.debounce */ \"lodash.debounce\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// import Metatags from \"@components/Metatags\";\n\n\n\nfunction Enter(props) {\n    const { user , username  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    // 1. user signed out <SignInButton />\n    // 2. user signed in, but missing username <UsernameForm />\n    // 3. user signed in, has username <SignOutButton />\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: user ? !username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsernameForm, {}, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 20,\n            columnNumber: 24\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignOutButton, {}, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 20,\n            columnNumber: 43\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignInButton, {}, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 20,\n            columnNumber: 63\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this));\n};\n// Sign in with Google button\nfunction SignInButton() {\n    const signInWithGoogle = async ()=>{\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.auth, _lib_firebase__WEBPACK_IMPORTED_MODULE_1__.googleAuthProvider);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn-google\",\n            onClick: signInWithGoogle,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/google.png\",\n                    width: \"30px\"\n                }, void 0, false, {\n                    fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, this),\n                \" Sign in with Google\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 33,\n            columnNumber: 4\n        }, this)\n    }, void 0, false));\n}\n// Sign out button\nfunction SignOutButton() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.auth)\n        ,\n        children: \"Sign Out\"\n    }, void 0, false, {\n        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this));\n}\n// Username form\nfunction UsernameForm() {\n    const { 0: formValue , 1: setFormValue  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const { 0: isValid , 1: setIsValid  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const { user , username: username1  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const onSubmit = async (e)=>{\n        e.preventDefault();\n        // Create refs for both documents\n        const userDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), \"users\", user.uid);\n        const usernameDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), \"usernames\", formValue);\n        // Commit both docs together as a batch write.\n        const batch = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.writeBatch)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)());\n        batch.set(userDoc, {\n            username: formValue,\n            photoURL: user.photoURL,\n            displayName: user.displayName\n        });\n        batch.set(usernameDoc, {\n            uid: user.uid\n        });\n        await batch.commit();\n    };\n    const onChange = (e)=>{\n        // Force form value typed in form to match correct format\n        const val = e.target.value.toLowerCase();\n        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;\n        // Only set form value if length is < 3 OR it passes regex\n        if (val.length < 3) {\n            setFormValue(val);\n            setLoading(false);\n            setIsValid(false);\n        }\n        if (re.test(val)) {\n            setFormValue(val);\n            setLoading(true);\n            setIsValid(false);\n        }\n    };\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        checkUsername(formValue);\n    }, [\n        formValue\n    ]);\n    // Hit the database for username match after each debounced change\n    // useCallback is required for debounce to work\n    const checkUsername = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(lodash_debounce__WEBPACK_IMPORTED_MODULE_6___default()(async (username)=>{\n        if (username.length >= 3) {\n            const ref = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(), \"usernames\", username);\n            const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(ref);\n            console.log(\"Firestore read executed!\", snap.exists());\n            setIsValid(!snap.exists());\n            setLoading(false);\n        }\n    }, 500), []);\n    return !username1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Choose Username\"\n            }, void 0, false, {\n                fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                lineNumber: 116,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"username\",\n                        placeholder: \"myname\",\n                        value: formValue,\n                        onChange: onChange\n                    }, void 0, false, {\n                        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                        lineNumber: 118,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UsernameMessage, {\n                        username: formValue,\n                        isValid: isValid,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                        lineNumber: 119,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn-green\",\n                        disabled: !isValid,\n                        children: \"Choose\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                        lineNumber: 120,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Debug State\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                        lineNumber: 124,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Username: \",\n                            formValue,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                                lineNumber: 127,\n                                columnNumber: 7\n                            }, this),\n                            \"Loading: \",\n                            loading.toString(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                                lineNumber: 129,\n                                columnNumber: 7\n                            }, this),\n                            \"Username Valid: \",\n                            isValid.toString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                        lineNumber: 125,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n                lineNumber: 117,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n        lineNumber: 115,\n        columnNumber: 4\n    }, this);\n}\nfunction UsernameMessage({ username , isValid , loading  }) {\n    if (loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Checking...\"\n        }, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 140,\n            columnNumber: 10\n        }, this));\n    } else if (isValid) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-success\",\n            children: [\n                username,\n                \" is available!\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 142,\n            columnNumber: 10\n        }, this));\n    } else if (username && !isValid) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"text-danger\",\n            children: \"That username is taken!\"\n        }, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 144,\n            columnNumber: 10\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n            fileName: \"/Users/robertalanis/Documents/GitHub/next.js-project/pages/enter.js\",\n            lineNumber: 146,\n            columnNumber: 10\n        }, this));\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztJQUMxRCxDQUFDLE1BQU0sQ0FBQztRQUNQLE1BQU0sNkVBQUVnRCxDQUFDOzs7OztJQUNWLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGZpcmUtYXBwLy4vcGFnZXMvZW50ZXIuanM/MjhkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoLCBmaXJlc3RvcmUsIGdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gXCIuLi9saWIvZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRvYywgd3JpdGVCYXRjaCwgZ2V0RG9jLCBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBzaWduSW5XaXRoUG9wdXAsIHNpZ25JbkFub255bW91c2x5LCBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbi8vIGltcG9ydCBNZXRhdGFncyBmcm9tIFwiQGNvbXBvbmVudHMvTWV0YXRhZ3NcIjtcblxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vbGliL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwibG9kYXNoLmRlYm91bmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVudGVyKHByb3BzKSB7XG5cdGNvbnN0IHsgdXNlciwgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG5cdC8vIDEuIHVzZXIgc2lnbmVkIG91dCA8U2lnbkluQnV0dG9uIC8+XG5cdC8vIDIuIHVzZXIgc2lnbmVkIGluLCBidXQgbWlzc2luZyB1c2VybmFtZSA8VXNlcm5hbWVGb3JtIC8+XG5cdC8vIDMuIHVzZXIgc2lnbmVkIGluLCBoYXMgdXNlcm5hbWUgPFNpZ25PdXRCdXR0b24gLz5cblx0cmV0dXJuIChcblx0XHQ8bWFpbj5cblx0XHRcdHsvKiA8TWV0YXRhZ3MgdGl0bGU9XCJFbnRlclwiIGRlc2NyaXB0aW9uPVwiU2lnbiB1cCBmb3IgdGhpcyBhbWF6aW5nIGFwcCFcIiAvPiAqL31cblx0XHRcdHt1c2VyID8gIXVzZXJuYW1lID8gPFVzZXJuYW1lRm9ybSAvPiA6IDxTaWduT3V0QnV0dG9uIC8+IDogPFNpZ25JbkJ1dHRvbiAvPn1cblx0XHQ8L21haW4+XG5cdCk7XG59XG5cbi8vIFNpZ24gaW4gd2l0aCBHb29nbGUgYnV0dG9uXG5mdW5jdGlvbiBTaWduSW5CdXR0b24oKSB7XG5cdGNvbnN0IHNpZ25JbldpdGhHb29nbGUgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZUF1dGhQcm92aWRlcik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZ29vZ2xlXCIgb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+XG5cdFx0XHRcdDxpbWcgc3JjPXtcIi9nb29nbGUucG5nXCJ9IHdpZHRoPVwiMzBweFwiIC8+IFNpZ24gaW4gd2l0aCBHb29nbGVcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0ey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluQW5vbnltb3VzbHkoYXV0aCl9PlNpZ24gaW4gQW5vbnltb3VzbHk8L2J1dHRvbj4gKi99XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8vIFNpZ24gb3V0IGJ1dHRvblxuZnVuY3Rpb24gU2lnbk91dEJ1dHRvbigpIHtcblx0cmV0dXJuIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dChhdXRoKX0+U2lnbiBPdXQ8L2J1dHRvbj47XG59XG5cbi8vIFVzZXJuYW1lIGZvcm1cbmZ1bmN0aW9uIFVzZXJuYW1lRm9ybSgpIHtcblx0Y29uc3QgW2Zvcm1WYWx1ZSwgc2V0Rm9ybVZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbaXNWYWxpZCwgc2V0SXNWYWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCB7IHVzZXIsIHVzZXJuYW1lIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gQ3JlYXRlIHJlZnMgZm9yIGJvdGggZG9jdW1lbnRzXG5cdFx0Y29uc3QgdXNlckRvYyA9IGRvYyhnZXRGaXJlc3RvcmUoKSwgXCJ1c2Vyc1wiLCB1c2VyLnVpZCk7XG5cdFx0Y29uc3QgdXNlcm5hbWVEb2MgPSBkb2MoZ2V0RmlyZXN0b3JlKCksIFwidXNlcm5hbWVzXCIsIGZvcm1WYWx1ZSk7XG5cblx0XHQvLyBDb21taXQgYm90aCBkb2NzIHRvZ2V0aGVyIGFzIGEgYmF0Y2ggd3JpdGUuXG5cdFx0Y29uc3QgYmF0Y2ggPSB3cml0ZUJhdGNoKGdldEZpcmVzdG9yZSgpKTtcblx0XHRiYXRjaC5zZXQodXNlckRvYywge1xuXHRcdFx0dXNlcm5hbWU6IGZvcm1WYWx1ZSxcblx0XHRcdHBob3RvVVJMOiB1c2VyLnBob3RvVVJMLFxuXHRcdFx0ZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG5cdFx0fSk7XG5cdFx0YmF0Y2guc2V0KHVzZXJuYW1lRG9jLCB7IHVpZDogdXNlci51aWQgfSk7XG5cblx0XHRhd2FpdCBiYXRjaC5jb21taXQoKTtcblx0fTtcblxuXHRjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG5cdFx0Ly8gRm9yY2UgZm9ybSB2YWx1ZSB0eXBlZCBpbiBmb3JtIHRvIG1hdGNoIGNvcnJlY3QgZm9ybWF0XG5cdFx0Y29uc3QgdmFsID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCByZSA9IC9eKD89W2EtekEtWjAtOS5fXXszLDE1fSQpKD8hLipbXy5dezJ9KVteXy5dLipbXl8uXSQvO1xuXG5cdFx0Ly8gT25seSBzZXQgZm9ybSB2YWx1ZSBpZiBsZW5ndGggaXMgPCAzIE9SIGl0IHBhc3NlcyByZWdleFxuXHRcdGlmICh2YWwubGVuZ3RoIDwgMykge1xuXHRcdFx0c2V0Rm9ybVZhbHVlKHZhbCk7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHRcdHNldElzVmFsaWQoZmFsc2UpO1xuXHRcdH1cblxuXHRcdGlmIChyZS50ZXN0KHZhbCkpIHtcblx0XHRcdHNldEZvcm1WYWx1ZSh2YWwpO1xuXHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblx0XHRcdHNldElzVmFsaWQoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHQvL1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y2hlY2tVc2VybmFtZShmb3JtVmFsdWUpO1xuXHR9LCBbZm9ybVZhbHVlXSk7XG5cblx0Ly8gSGl0IHRoZSBkYXRhYmFzZSBmb3IgdXNlcm5hbWUgbWF0Y2ggYWZ0ZXIgZWFjaCBkZWJvdW5jZWQgY2hhbmdlXG5cdC8vIHVzZUNhbGxiYWNrIGlzIHJlcXVpcmVkIGZvciBkZWJvdW5jZSB0byB3b3JrXG5cdGNvbnN0IGNoZWNrVXNlcm5hbWUgPSB1c2VDYWxsYmFjayhcblx0XHRkZWJvdW5jZShhc3luYyAodXNlcm5hbWUpID0+IHtcblx0XHRcdGlmICh1c2VybmFtZS5sZW5ndGggPj0gMykge1xuXHRcdFx0XHRjb25zdCByZWYgPSBkb2MoZ2V0RmlyZXN0b3JlKCksIFwidXNlcm5hbWVzXCIsIHVzZXJuYW1lKTtcblx0XHRcdFx0Y29uc3Qgc25hcCA9IGF3YWl0IGdldERvYyhyZWYpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkZpcmVzdG9yZSByZWFkIGV4ZWN1dGVkIVwiLCBzbmFwLmV4aXN0cygpKTtcblx0XHRcdFx0c2V0SXNWYWxpZCghc25hcC5leGlzdHMoKSk7XG5cdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH0sIDUwMCksXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdCF1c2VybmFtZSAmJiAoXG5cdFx0XHQ8c2VjdGlvbj5cblx0XHRcdFx0PGgzPkNob29zZSBVc2VybmFtZTwvaDM+XG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG5cdFx0XHRcdFx0PGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwibXluYW1lXCIgdmFsdWU9e2Zvcm1WYWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuXHRcdFx0XHRcdDxVc2VybmFtZU1lc3NhZ2UgdXNlcm5hbWU9e2Zvcm1WYWx1ZX0gaXNWYWxpZD17aXNWYWxpZH0gbG9hZGluZz17bG9hZGluZ30gLz5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tZ3JlZW5cIiBkaXNhYmxlZD17IWlzVmFsaWR9PlxuXHRcdFx0XHRcdFx0Q2hvb3NlXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHQ8aDM+RGVidWcgU3RhdGU8L2gzPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRVc2VybmFtZToge2Zvcm1WYWx1ZX1cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0TG9hZGluZzoge2xvYWRpbmcudG9TdHJpbmcoKX1cblx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0VXNlcm5hbWUgVmFsaWQ6IHtpc1ZhbGlkLnRvU3RyaW5nKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpXG5cdCk7XG59XG5cbmZ1bmN0aW9uIFVzZXJuYW1lTWVzc2FnZSh7IHVzZXJuYW1lLCBpc1ZhbGlkLCBsb2FkaW5nIH0pIHtcblx0aWYgKGxvYWRpbmcpIHtcblx0XHRyZXR1cm4gPHA+Q2hlY2tpbmcuLi48L3A+O1xuXHR9IGVsc2UgaWYgKGlzVmFsaWQpIHtcblx0XHRyZXR1cm4gPHAgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+e3VzZXJuYW1lfSBpcyBhdmFpbGFibGUhPC9wPjtcblx0fSBlbHNlIGlmICh1c2VybmFtZSAmJiAhaXNWYWxpZCkge1xuXHRcdHJldHVybiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlRoYXQgdXNlcm5hbWUgaXMgdGFrZW4hPC9wPjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gPHA+PC9wPjtcblx0fVxufVxuIl0sIm5hbWVzIjpbImF1dGgiLCJmaXJlc3RvcmUiLCJnb29nbGVBdXRoUHJvdmlkZXIiLCJkb2MiLCJ3cml0ZUJhdGNoIiwiZ2V0RG9jIiwiZ2V0RmlyZXN0b3JlIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluQW5vbnltb3VzbHkiLCJzaWduT3V0IiwiVXNlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImRlYm91bmNlIiwiRW50ZXIiLCJwcm9wcyIsInVzZXIiLCJ1c2VybmFtZSIsIm1haW4iLCJVc2VybmFtZUZvcm0iLCJTaWduT3V0QnV0dG9uIiwiU2lnbkluQnV0dG9uIiwic2lnbkluV2l0aEdvb2dsZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ3aWR0aCIsImZvcm1WYWx1ZSIsInNldEZvcm1WYWx1ZSIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEb2MiLCJ1aWQiLCJ1c2VybmFtZURvYyIsImJhdGNoIiwic2V0IiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImNvbW1pdCIsIm9uQ2hhbmdlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInJlIiwibGVuZ3RoIiwidGVzdCIsImNoZWNrVXNlcm5hbWUiLCJyZWYiLCJzbmFwIiwiY29uc29sZSIsImxvZyIsImV4aXN0cyIsInNlY3Rpb24iLCJoMyIsImZvcm0iLCJpbnB1dCIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIlVzZXJuYW1lTWVzc2FnZSIsInR5cGUiLCJkaXNhYmxlZCIsImRpdiIsImJyIiwidG9TdHJpbmciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/enter.js\n");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/enter.js"));
module.exports = __webpack_exports__;

})();