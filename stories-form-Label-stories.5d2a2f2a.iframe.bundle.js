"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[9385],{"./src/stories/form/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputLabel:()=>InputLabel,SelectLabel:()=>SelectLabel,TextLabel:()=>TextLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/label/index.ts"),_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/form/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const __WEBPACK_DEFAULT_EXPORT__={title:"Form/Label",component:_label__WEBPACK_IMPORTED_MODULE_3__._,argTypes:{},args:{label:"I am a pretty label"}};var InputLabel=function InputLabel(_ref){var args=_extends({},_ref);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_label__WEBPACK_IMPORTED_MODULE_3__._,Object.assign({},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form__WEBPACK_IMPORTED_MODULE_4__.II,{})}))};InputLabel.displayName="InputLabel",InputLabel.storyName="Label for an Input";var SelectLabel=function SelectLabel(_ref2){var args=_extends({},_ref2);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_label__WEBPACK_IMPORTED_MODULE_3__._,Object.assign({},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_form__WEBPACK_IMPORTED_MODULE_4__.Ph,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option",{children:"Bla"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option",{children:"Blu"})]})}))};SelectLabel.displayName="SelectLabel",SelectLabel.storyName="Label for a Select";var TextLabel=function TextLabel(_ref3){var args=_extends({},_ref3);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_label__WEBPACK_IMPORTED_MODULE_3__._,Object.assign({},args,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Simple Text"})}))};TextLabel.displayName="TextLabel",TextLabel.storyName="Label for a Text",InputLabel.parameters=Object.assign({storySource:{source:"({ ...args }) => (\n  <Label {...args}>\n    <Input />\n  </Label>\n)"}},InputLabel.parameters),SelectLabel.parameters=Object.assign({storySource:{source:"({ ...args }) => (\n  <Label {...args}>\n    <Select>\n      <option>Bla</option>\n      <option>Blu</option>\n    </Select>\n  </Label>\n)"}},SelectLabel.parameters),TextLabel.parameters=Object.assign({storySource:{source:"({ ...args }) => (\n  <Label {...args}>\n    <span>Simple Text</span>\n  </Label>\n)"}},TextLabel.parameters);var __namedExportsOrder=["InputLabel","SelectLabel","TextLabel"]}}]);