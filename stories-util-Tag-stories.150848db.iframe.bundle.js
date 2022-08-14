"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[5307],{"./node_modules/@material-ui/icons/esm/Close.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/@material-ui/core/esm/utils/createSvgIcon.js").Z)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},"./src/stories/util/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Deletable:()=>Deletable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),esm=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),Close=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/@material-ui/icons/esm/Close.js")),Button=__webpack_require__("./src/button/Button.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tag_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tag/tag.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tag_module.Z,options);const tag_tag_module=tag_module.Z&&tag_module.Z.locals?tag_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onDelete","children","className"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tag=react.memo(react.forwardRef((function(_ref,ref){var onDelete=_ref.onDelete,children=_ref.children,className=_ref.className,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("div",Object.assign({"data-testid":"Tag",ref},props,{className:(0,clsx_m.Z)(tag_tag_module.root,className),children:[children,onDelete&&(0,jsx_runtime.jsx)(Button.z,{small:!0,className:tag_tag_module.deleteButton,"aria-label":"Tag "+children+" löschen",onClick:onDelete,icon:(0,jsx_runtime.jsx)(Close.Z,{})})]}))})));Tag.displayName="Tag";try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"(string & AriaRole)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tag/Tag.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"src/tag/Tag.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}const Tag_stories={title:"util/Tag",component:Tag,argTypes:{children:{name:"children",type:{name:"string",required:!0},defaultValue:"Hallo",description:"The content of the tag"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Tag,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={children:"Hallo",onDelete:void 0};var Deletable=Template.bind({});Deletable.args=Object.assign({children:"Hallo"},(0,esm.actions)("onDelete")),Default.parameters=Object.assign({storySource:{source:"(args: any) => <Tag {...args} />"}},Default.parameters),Deletable.parameters=Object.assign({storySource:{source:"(args: any) => <Tag {...args} />"}},Deletable.parameters);var __namedExportsOrder=["Default","Deletable"]},"./src/button/BaseButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>BaseButton});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),clsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_excluded=["children","style","className","variant","fullWidth","selected"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var BaseButton=react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((function(_ref,ref){var _props$type,_Object$assign,children=_ref.children,style=_ref.style,className=_ref.className,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"default":_ref$variant,_ref$fullWidth=_ref.fullWidth,fullWidth=void 0!==_ref$fullWidth&&_ref$fullWidth,_ref$selected=_ref.selected,selected=void 0!==_ref$selected&&_ref$selected,props=_objectWithoutProperties(_ref,_excluded),ComponentClass=props.href?"a":"button",selectedAriaAttribute=props.role&&["gridcell","option","row","tab"].includes(props.role)?"aria-selected":"aria-current";return react__WEBPACK_IMPORTED_MODULE_5__.createElement(ComponentClass,Object.assign(((_Object$assign={ref,type:null!==(_props$type=props.type)&&void 0!==_props$type?_props$type:"button",role:"button",style})[selectedAriaAttribute]=selected,_Object$assign.className=(0,clsx__WEBPACK_IMPORTED_MODULE_6__.Z)("lotta-base-button","variant__"+variant,{selected,"full-width":fullWidth},className),_Object$assign),props),children)}));BaseButton.displayName="BaseButton";try{BaseButton.displayName="BaseButton",BaseButton.__docgenInfo={description:"Primary UI shared for userAvatar interaction",displayName:"BaseButton",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},selected:{defaultValue:{value:"false"},description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:{value:"false"},description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/BaseButton.tsx#BaseButton"]={docgenInfo:BaseButton.__docgenInfo,name:"BaseButton",path:"src/button/BaseButton.tsx#BaseButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.string.small.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_BaseButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/button/BaseButton.tsx"),clsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["icon","label","onlyIcon","small","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=react__WEBPACK_IMPORTED_MODULE_5__.forwardRef((function(_ref,ref){var icon=_ref.icon,label=_ref.label,onlyIcon=_ref.onlyIcon,small=_ref.small,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_BaseButton__WEBPACK_IMPORTED_MODULE_6__.Y,Object.assign({},props,{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_8__.Z)("lotta-button",props.className,{"only-icon":onlyIcon||icon&&!(label||children),small}),children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{className:"lotta-button_icon",children:icon}),(null!=label?label:children)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span",{className:"lotta-button_text",children:null!=label?label:children})]}))}));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{children:{defaultValue:null,description:"Content to show on the button",name:"children",required:!1,type:{name:"any"}},small:{defaultValue:null,description:"Disable setting a minimal height",name:"small",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS Classname",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles",name:"style",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Wether the button is currently 'active' or 'selected'",name:"selected",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Icon to show on the button side",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onlyIcon:{defaultValue:null,description:"Force style for button with only icon and without label,\neven if child is found",name:"onlyIcon",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"Chose from different styles",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"fill"'},{value:'"borderless"'},{value:'"error"'}]}},fullWidth:{defaultValue:null,description:"Wether the button should have a width of 100%",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/tag/tag.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Oc_VEJZRULVpK0a6KtBF{display:inline-flex;align-items:center;border:1px solid;border-color:rgb(var(--lotta-primary-color));color:rgba(var(--lotta-primary-color), 1);font-size:.7rem;padding:2px 4px;margin-bottom:10px;margin-right:4px;border-radius:4px;max-width:"max-content";font-family:var(--lotta-text-font-family)}.qahtDbeUHJCpb0uBT9od{float:right;margin-left:2px;padding:0 !important}.qahtDbeUHJCpb0uBT9od svg{width:.5em;height:.5em}',"",{version:3,sources:["webpack://./src/tag/tag.module.scss"],names:[],mappings:"AAAA,sBACE,mBAAA,CACA,kBAAA,CACA,gBAAA,CACA,4CAAA,CACA,yCAAA,CACA,eAAA,CACA,eAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CACA,uBAAA,CACA,yCAAA,CAGF,sBACE,WAAA,CACA,eAAA,CACA,oBAAA,CAEA,0BACE,UAAA,CACA,WAAA",sourcesContent:[".root {\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid;\n  border-color: rgb(var(--lotta-primary-color));\n  color: rgba(var(--lotta-primary-color), 1);\n  font-size: 0.7rem;\n  padding: 2px 4px;\n  margin-bottom: 10px;\n  margin-right: 4px;\n  border-radius: 4px;\n  max-width: 'max-content';\n  font-family: var(--lotta-text-font-family);\n}\n\n.deleteButton {\n  float: right;\n  margin-left: 2px;\n  padding: 0 !important;\n\n  & svg {\n    width: 0.5em;\n    height: 0.5em;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Oc_VEJZRULVpK0a6KtBF",deleteButton:"qahtDbeUHJCpb0uBT9od"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);