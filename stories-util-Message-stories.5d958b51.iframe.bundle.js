"use strict";(self.webpackChunk_lotta_schule_hubert=self.webpackChunk_lotta_schule_hubert||[]).push([[7457],{"./src/stories/util/Message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Empty:()=>Empty,ErrorMsg:()=>ErrorMsg,SuccessMsg:()=>SuccessMsg,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Message_stories});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),src_theme=(__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./src/theme/index.ts")),motion=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs")),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Message_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/message/Message.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Message_module.Z,options);const message_Message_module=Message_module.Z&&Message_module.Z.locals?Message_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["message","color","className","children"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Message=react.memo((function(_ref){var message=_ref.message,color=_ref.color,className=_ref.className,children=_ref.children,otherProps=_objectWithoutProperties(_ref,_excluded),otherStyle={backgroundColor:"color("+color+" saturation(-30))",borderColor:color};return(0,jsx_runtime.jsxs)(motion.E.div,Object.assign({role:"alert","aria-label":message||void 0,style:otherStyle,className:(0,clsx_m.Z)(message_Message_module.root,className),variants:{visible:{opacity:1,height:"auto"},hidden:{opacity:0,height:0}},animate:message?"visible":"hidden"},otherProps,{children:[message,children]}))}));Message.displayName="Message";try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string | null"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/message/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}var ErrorMessage=react.memo((function(_ref){var error=_ref.error,className=_ref.className,children=_ref.children,theme=(0,src_theme.Fg)(),errorMessage=react.useMemo((function(){var errorMessage="string"==typeof error?error:null==error?void 0:error.message;if(errorMessage)return errorMessage.replace(/^GraphQL error: /,"")}),[error]);return children||errorMessage?(0,jsx_runtime.jsx)(Message,{role:"alert",color:theme.errorColor,message:errorMessage,className,children}):null}));ErrorMessage.displayName="ErrorMessage";try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | Error | null"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:ErrorMessage.__docgenInfo,name:"ErrorMessage",path:"src/message/ErrorMessage.tsx#ErrorMessage"})}catch(__react_docgen_typescript_loader_error){}var SuccessMessage=react.memo((function(_ref){var message=_ref.message,className=_ref.className,theme=(0,src_theme.Fg)();return(0,jsx_runtime.jsx)(Message,{color:theme.successColor,message,className})}));SuccessMessage.displayName="SuccessMessage";try{SuccessMessage.displayName="SuccessMessage",SuccessMessage.__docgenInfo={description:"",displayName:"SuccessMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/message/SuccessMessage.tsx#SuccessMessage"]={docgenInfo:SuccessMessage.__docgenInfo,name:"SuccessMessage",path:"src/message/SuccessMessage.tsx#SuccessMessage"})}catch(__react_docgen_typescript_loader_error){}const Message_stories={title:"util/Message",component:Message};var DefaultTemplate=function DefaultTemplate(args){return(0,jsx_runtime.jsx)(Message,Object.assign({},args))};DefaultTemplate.displayName="DefaultTemplate";var ErrorTemplate=function ErrorTemplate(args){return(0,jsx_runtime.jsx)(ErrorMessage,Object.assign({},args))};ErrorTemplate.displayName="ErrorTemplate";var SuccessTemplate=function SuccessTemplate(args){return(0,jsx_runtime.jsx)(SuccessMessage,Object.assign({},args))};SuccessTemplate.displayName="SuccessTemplate";var Default=DefaultTemplate.bind({});Default.args={message:"Hallo",color:"#ccc"};var Empty=DefaultTemplate.bind({});Empty.args={message:"",color:"#ccc"};var ErrorMsg=ErrorTemplate.bind({});ErrorMsg.args={error:new Error("Upsi")};var SuccessMsg=SuccessTemplate.bind({});SuccessMsg.args={message:"Glückwunsch"},Default.parameters=Object.assign({storySource:{source:"(args: any) => <Message {...args} />"}},Default.parameters),Empty.parameters=Object.assign({storySource:{source:"(args: any) => <Message {...args} />"}},Empty.parameters),ErrorMsg.parameters=Object.assign({storySource:{source:"(args: any) => <ErrorMessage {...args} />"}},ErrorMsg.parameters),SuccessMsg.parameters=Object.assign({storySource:{source:"(args: any) => <SuccessMessage {...args} />"}},SuccessMsg.parameters);var __namedExportsOrder=["Default","Empty","ErrorMsg","SuccessMsg"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/message/Message.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".tN8n8leLO88pZI8iV38g{color:rgba(var(--lotta-contrast-text-color));border-width:1px;border-style:solid;border-radius:var(--lotta-border-radius);margin-bottom:var(--lotta-spacing);padding:var(--lotta-spacing)}","",{version:3,sources:["webpack://./src/message/Message.module.scss"],names:[],mappings:"AAAA,sBACI,4CAAA,CACA,gBAAA,CACA,kBAAA,CACA,wCAAA,CACA,kCAAA,CACA,4BAAA",sourcesContent:[".root {\n    color: rgba(var(--lotta-contrast-text-color));\n    border-width: 1px;\n    border-style: solid;\n    border-radius: var(--lotta-border-radius);\n    margin-bottom: var(--lotta-spacing);\n    padding: var(--lotta-spacing);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"tN8n8leLO88pZI8iV38g"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);