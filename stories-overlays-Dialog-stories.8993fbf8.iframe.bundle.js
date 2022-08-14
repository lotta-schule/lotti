"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[2162],{"./node_modules/@material-ui/icons/esm/ArrowUpwardRounded.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@material-ui/core/esm/utils/createSvgIcon.js").Z)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59a.9959.9959 0 00-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"}),"ArrowUpwardRounded")},"./src/stories/overlays/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),react_dom=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/react-dom/index.js")),Close=__webpack_require__("./node_modules/@material-ui/icons/esm/Close.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),Button=__webpack_require__("./src/button/Button.tsx"),Divider=__webpack_require__("./src/divider/Divider.tsx"),dist_module=__webpack_require__("./node_modules/@react-aria/focus/dist/module.js"),overlays_dist_module=__webpack_require__("./node_modules/@react-aria/overlays/dist/module.js"),utils_dist_module=__webpack_require__("./node_modules/@react-aria/utils/dist/module.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dialog_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/dialog/dialog.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dialog_module.Z,options);const dialog_dialog_module=dialog_module.Z&&dialog_module.Z.locals?dialog_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","onRequestClose","style"],_excluded2=["children","className","style","title","onRequestClose"],_excluded3=["className"],_excluded4=["className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Dialog=function Dialog(_ref){var container,open=_ref.open,onRequestClose=_ref.onRequestClose,style=_ref.style,props=_objectWithoutProperties(_ref,_excluded),isBrowser="undefined"!=typeof window,element=react.useRef(null);isBrowser&&null===element.current&&(element.current=document.createElement("div"),(document.getElementById("dialogContainer")||((container=document.createElement("div")).id="dialogContainer",document.body.appendChild(container),container)).appendChild(element.current));return react.useEffect((function(){return function(){var _element$current;return null===(_element$current=element.current)||void 0===_element$current?void 0:_element$current.remove()}}),[]),react.useEffect((function(){if(open){var onKeyDown=function onKeyDown(e){"Escape"===e.code&&(e.preventDefault(),null==onRequestClose||onRequestClose())};return document.addEventListener("keydown",onKeyDown),function(){document.removeEventListener("keydown",onKeyDown)}}}),[onRequestClose,open]),open&&isBrowser?react_dom.createPortal((0,jsx_runtime.jsx)(DialogShell,Object.assign({style,onRequestClose},props)),element.current):null},DialogShell=function DialogShell(_ref2){var children=_ref2.children,className=_ref2.className,style=_ref2.style,title=_ref2.title,onRequestClose=_ref2.onRequestClose,otherProps=_objectWithoutProperties(_ref2,_excluded2),ref=react.useRef(null);(0,overlays_dist_module.tk)();var modalProps=(0,overlays_dist_module.dd)().modalProps,_useOverlay=(0,overlays_dist_module.Ir)({onClose:function onClose(){return null==onRequestClose?void 0:onRequestClose()},isKeyboardDismissDisabled:!0},ref),overlayProps=_useOverlay.overlayProps,underlayProps=_useOverlay.underlayProps,_useDialog=function $40df3f8667284809$export$d55e7ee900f34e93(props,ref){let{role="dialog"}=props,titleId=(0,utils_dist_module.mp)();return titleId=props["aria-label"]?void 0:titleId,(0,react.useEffect)((()=>{if(ref.current&&!ref.current.contains(document.activeElement)){(0,dist_module.ex)(ref.current);let timeout=setTimeout((()=>{document.activeElement===ref.current&&(ref.current.blur(),(0,dist_module.ex)(ref.current))}),500);return()=>{clearTimeout(timeout)}}}),[ref]),{dialogProps:{...(0,utils_dist_module.zL)(props,{labelable:!0}),role,tabIndex:-1,"aria-labelledby":props["aria-labelledby"]||titleId},titleProps:{id:titleId}}}(otherProps,ref),dialogProps=_useDialog.dialogProps,titleProps=_useDialog.titleProps,innerProps=(0,utils_dist_module.dG)(otherProps,overlayProps,dialogProps,modalProps);return(0,jsx_runtime.jsx)(motion.E.div,Object.assign({className:dialog_dialog_module.root,style,initial:{opacity:0},animate:{opacity:1}},underlayProps,{children:(0,jsx_runtime.jsx)(motion.E.div,Object.assign({},innerProps,{initial:{scaleY:0,y:-150},animate:{scaleY:1,y:0},className:(0,clsx_m.Z)(dialog_dialog_module.dialog,className),ref,children:(0,jsx_runtime.jsxs)(dist_module.MT,{contain:!0,autoFocus:!0,children:[(0,jsx_runtime.jsxs)("section",{children:[onRequestClose&&(0,jsx_runtime.jsx)(Button.z,{small:!0,title:"schließen",className:dialog_dialog_module.close,onClick:function onClick(){return onRequestClose()},icon:(0,jsx_runtime.jsx)(Close.Z,{})}),(0,jsx_runtime.jsx)("h3",Object.assign({},titleProps,{children:title})),(0,jsx_runtime.jsx)(Divider.i,{})]}),children]})}))}))};DialogShell.displayName="DialogShell";var DialogContent=function DialogContent(_ref3){var className=_ref3.className,props=_objectWithoutProperties(_ref3,_excluded3);return(0,jsx_runtime.jsx)("section",Object.assign({className:(0,clsx_m.Z)(className,dialog_dialog_module.content)},props))};DialogContent.displayName="DialogContent";var DialogActions=function DialogActions(_ref4){var className=_ref4.className,props=_objectWithoutProperties(_ref4,_excluded4);return(0,jsx_runtime.jsx)("section",Object.assign({className:(0,clsx_m.Z)(className,dialog_dialog_module.actions)},props))};DialogActions.displayName="DialogActions";try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void | null)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"src/dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}try{DialogShell.displayName="DialogShell",DialogShell.__docgenInfo={description:"",displayName:"DialogShell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"",name:"onRequestClose",required:!1,type:{name:"(() => void | null)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dialog/Dialog.tsx#DialogShell"]={docgenInfo:DialogShell.__docgenInfo,name:"DialogShell",path:"src/dialog/Dialog.tsx#DialogShell"})}catch(__react_docgen_typescript_loader_error){}try{DialogContent.displayName="DialogContent",DialogContent.__docgenInfo={description:"",displayName:"DialogContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dialog/Dialog.tsx#DialogContent"]={docgenInfo:DialogContent.__docgenInfo,name:"DialogContent",path:"src/dialog/Dialog.tsx#DialogContent"})}catch(__react_docgen_typescript_loader_error){}try{DialogActions.displayName="DialogActions",DialogActions.__docgenInfo={description:"",displayName:"DialogActions",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dialog/Dialog.tsx#DialogActions"]={docgenInfo:DialogActions.__docgenInfo,name:"DialogActions",path:"src/dialog/Dialog.tsx#DialogActions"})}catch(__react_docgen_typescript_loader_error){}var src_button=__webpack_require__("./src/button/index.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const Dialog_stories={title:"overlays/Dialog",Component:Dialog,argTypes:{}};var Default=function Template(args){var _React$useState2=_slicedToArray(react.useState(!1),2),isOpen=_React$useState2[0],setIsOpen=_React$useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:"body { background-color: red; }"}),(0,jsx_runtime.jsx)(src_button.zx,{onClick:function onClick(){return setIsOpen((function(o){return!o}))},children:"Dialog öffnen"}),(0,jsx_runtime.jsx)(Dialog,Object.assign({open:isOpen},args,{onRequestClose:function onRequestClose(){return setIsOpen(!1)}}))]})}.bind({});Default.args={title:"Das ist der Titel",children:(0,jsx_runtime.jsx)("p",{children:"Hier steht bedeutender Dialog Inhalt"})},Default.parameters=Object.assign({storySource:{source:"(args) => {\n  const [isOpen, setIsOpen] = React.useState(false);\n  return (\n    <>\n      <style>{'body { background-color: red; }'}</style>\n      <Button onClick={() => setIsOpen((o) => !o)}>Dialog öffnen</Button>\n      <Dialog open={isOpen} {...args} onRequestClose={() => setIsOpen(false)} />\n    </>\n  );\n}"}},Default.parameters);var __namedExportsOrder=["Default"]},"./src/button/NavigationButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>NavigationButton});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/Button.tsx"),clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),NavigationButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__.z,Object.assign({},props,{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("lotta-navigation-button",props.className)}))}));NavigationButton.displayName="NavigationButton";try{NavigationButton.displayName="NavigationButton",NavigationButton.__docgenInfo={description:"",displayName:"NavigationButton",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:"Force style for button with only icon and without label,\neven if child is found",name:"onlyIcon",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/NavigationButton.tsx#NavigationButton"]={docgenInfo:NavigationButton.__docgenInfo,name:"NavigationButton",path:"src/button/NavigationButton.tsx#NavigationButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yd:()=>BaseButton.Y,zx:()=>Button.z,hE:()=>ButtonGroup,W7:()=>NavigationButton.W});var BaseButton=__webpack_require__("./src/button/BaseButton.tsx"),Button=__webpack_require__("./src/button/Button.tsx"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ButtonGroup=function ButtonGroup(_ref){var fullWidth=_ref.fullWidth,className=_ref.className,style=_ref.style,children=_ref.children;return(0,jsx_runtime.jsx)("div",{role:"group",style,className:(0,clsx_m.Z)("lotta-button-group",{"full-width":fullWidth},className),children})};ButtonGroup.displayName="ButtonGroup";try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/button/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var NavigationButton=__webpack_require__("./src/button/NavigationButton.tsx"),ArrowUpwardRounded=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/@material-ui/icons/esm/ArrowUpwardRounded.js")),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),util=__webpack_require__("./src/util/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),scroll_to_top_button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/scroll-to-top-button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(scroll_to_top_button_module.Z,options);const button_scroll_to_top_button_module=scroll_to_top_button_module.Z&&scroll_to_top_button_module.Z.locals?scroll_to_top_button_module.Z.locals:void 0;function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var AnimatedButton=(0,motion.E)(Button.z),ScrollToTopButton=react.memo((function(){var _React$useState2=_slicedToArray(react.useState(!1),2),isShown=_React$useState2[0],setIsShown=_React$useState2[1],innerHeight=(0,util.iP)().innerHeight,onScroll=react.useCallback((function(){setIsShown(window.scrollY>2*innerHeight)}),[innerHeight]);return(0,util.OF)(onScroll,1e3,[onScroll]),(0,jsx_runtime.jsx)(AnimatedButton,{className:button_scroll_to_top_button_module.root,title:"Zum Anfang der Seite scrollen",icon:(0,jsx_runtime.jsx)(ArrowUpwardRounded.Z,{}),initial:"hidden",animate:isShown?"visible":"hidden",variants:{visible:{opacity:1,scale:1},hidden:{opacity:0,scale:0}},onClick:function onClick(){window.scroll({top:0,behavior:"smooth"})}})}));ScrollToTopButton.displayName="ScrollToTopButton";try{ScrollToTopButton.displayName="ScrollToTopButton",ScrollToTopButton.__docgenInfo={description:"",displayName:"ScrollToTopButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/ScrollToTopButton.tsx#ScrollToTopButton"]={docgenInfo:ScrollToTopButton.__docgenInfo,name:"ScrollToTopButton",path:"src/button/ScrollToTopButton.tsx#ScrollToTopButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Divider_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/divider/Divider.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Divider_module.Z,options);const divider_Divider_module=Divider_module.Z&&Divider_module.Z.locals?Divider_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Divider=react.memo((function(_ref){var className=_ref.className,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsx)("hr",Object.assign({className:(0,clsx_m.Z)(divider_Divider_module.divider,className)},props))}));Divider.displayName="Divider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHRElement | null) => void) | RefObject<HTMLHRElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/button/scroll-to-top-button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Slam8P50AUB1xVZ0Y8os{position:fixed !important;bottom:.5em;right:.5em;z-index:9999}@media print{.Slam8P50AUB1xVZ0Y8os{display:none}}","",{version:3,sources:["webpack://./src/button/scroll-to-top-button.module.scss"],names:[],mappings:"AAAA,sBACI,yBAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CAEA,aANJ,sBAOQ,YAAA,CAAA",sourcesContent:[".root {\n    position: fixed !important;\n    bottom: 0.5em;\n    right: 0.5em;\n    z-index: 9999;\n\n    @media print {\n        display: none;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Slam8P50AUB1xVZ0Y8os"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/dialog/dialog.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".At9YYIceZVCB0geyneiA{top:0;left:0;position:fixed;height:100vh;width:100vw;z-index:10000;backdrop-filter:blur(10px);background-color:rgba(0,0,0,.5)}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm{position:relative;display:flex;font-size:.8rem;background-color:#fff;padding:var(--lotta-spacing);border-radius:var(--lotta-border-radius);flex-direction:column;width:calc(100vw - 4*var(--lotta-spacing));max-width:600px;max-height:calc(100vh - 8*var(--lotta-spacing));margin:calc(4*var(--lotta-spacing)) auto}@media screen and (max-width: 599px){.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm{width:100vw;height:100vh;max-height:100vh;border-radius:0;margin:auto}}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm .E8UY_tpOlOMaybsm4U3f{position:absolute;top:calc(.5*var(--lotta-spacing));right:calc(.5*var(--lotta-spacing));opacity:.3}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm .E8UY_tpOlOMaybsm4U3f:hover{opacity:1}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm h3{text-transform:uppercase;font-weight:100;margin-top:var(--lotta-spacing);margin-bottom:var(--lotta-spacing);color:rgba(var(--lotta-primary-color), 1)}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm form{display:contents}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm .PknSp6NlFDof7tO6K06p{flex-shrink:1;overflow:auto;padding:var(--lotta-spacing) 0}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm .oIpFyIIoUZ3EpLd3qtqh{display:flex;flex-shrink:0;flex-grow:0;justify-content:flex-end;padding-top:var(--lotta-spacing)}.At9YYIceZVCB0geyneiA .prxXaIwo1nvzso5BEgwm .oIpFyIIoUZ3EpLd3qtqh button:not(:first-child){margin-left:var(--lotta-spacing)}","",{version:3,sources:["webpack://./src/dialog/dialog.module.scss"],names:[],mappings:"AAEA,sBACI,KAAA,CACA,MAAA,CACA,cAAA,CACA,YAAA,CACA,WAAA,CACA,aAAA,CACA,0BAAA,CACA,+BAAA,CAEA,4CACI,iBAAA,CACA,YAAA,CACA,eAAA,CACA,qBAAA,CACA,4BAAA,CACA,wCAAA,CACA,qBAAA,CACA,0CAAA,CACA,eAAA,CACA,+CAAA,CACA,wCAAA,CAEA,qCAbJ,4CAcQ,WAAA,CACA,YAAA,CACA,gBAAA,CACA,eAAA,CACA,WAAA,CAAA,CAGJ,kEACI,iBAAA,CACA,iCAAA,CACA,mCAAA,CACA,UAAA,CAEA,wEACI,SAAA,CAIR,+CACI,wBAAA,CACA,eAAA,CACA,+BAAA,CACA,kCAAA,CACA,yCAAA,CAGJ,iDACI,gBAAA,CAGJ,kEACI,aAAA,CACA,aAAA,CACA,8BAAA,CAGJ,kEACI,YAAA,CACA,aAAA,CACA,WAAA,CACA,wBAAA,CACA,gCAAA,CACA,2FACI,gCAAA",sourcesContent:["@import '../breakpoints';\n\n.root {\n    top: 0;\n    left: 0;\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    z-index: 10000;\n    backdrop-filter: blur(10px);\n    background-color: rgba(0, 0, 0, 0.5);\n\n    .dialog {\n        position: relative;\n        display: flex;\n        font-size: 0.8rem;\n        background-color: white;\n        padding: var(--lotta-spacing);\n        border-radius: var(--lotta-border-radius);\n        flex-direction: column;\n        width: calc(100vw - calc(4 * var(--lotta-spacing)));\n        max-width: 600px;\n        max-height: calc(100vh - calc(8 * var(--lotta-spacing)));\n        margin: calc(4 * var(--lotta-spacing)) auto;\n\n        @media screen and (max-width: $max-xs) {\n            width: 100vw;\n            height: 100vh;\n            max-height: 100vh;\n            border-radius: 0;\n            margin: auto;\n        }\n\n        .close {\n            position: absolute;\n            top: calc(0.5 * var(--lotta-spacing));\n            right: calc(0.5 * var(--lotta-spacing));\n            opacity: 0.3;\n\n            &:hover {\n                opacity: 1;\n            }\n        }\n\n        h3 {\n            text-transform: uppercase;\n            font-weight: 100;\n            margin-top: var(--lotta-spacing);\n            margin-bottom: var(--lotta-spacing);\n            color: rgba(var(--lotta-primary-color), 1);\n        }\n\n        form {\n            display: contents;\n        }\n\n        .content {\n            flex-shrink: 1;\n            overflow: auto;\n            padding: var(--lotta-spacing) 0;\n        }\n\n        .actions {\n            display: flex;\n            flex-shrink: 0;\n            flex-grow: 0;\n            justify-content: flex-end;\n            padding-top: var(--lotta-spacing);\n            button:not(:first-child) {\n                margin-left: var(--lotta-spacing);\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"At9YYIceZVCB0geyneiA",dialog:"prxXaIwo1nvzso5BEgwm",close:"E8UY_tpOlOMaybsm4U3f",content:"PknSp6NlFDof7tO6K06p",actions:"oIpFyIIoUZ3EpLd3qtqh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/divider/Divider.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".B7gnYpPkHxYF36jaUnlg{border:none;border-bottom:1px solid rgb(var(--lotta-divider-color));border-radius:4px}","",{version:3,sources:["webpack://./src/divider/Divider.module.scss"],names:[],mappings:"AAAA,sBACI,WAAA,CACA,uDAAA,CACA,iBAAA",sourcesContent:[".divider {\n    border: none;\n    border-bottom: 1px solid rgb(var(--lotta-divider-color));\n    border-radius: 4px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={divider:"B7gnYpPkHxYF36jaUnlg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);