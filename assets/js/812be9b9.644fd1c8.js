"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[599],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){return function(a){var t=p(a.components);return n.createElement(e,o({},a,{components:t}))}},p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,x=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return t?n.createElement(x,l(l({ref:a},s),{},{components:t})):n.createElement(x,l({ref:a},s))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=x;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},65087:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={id:"resolution",title:"Module Resolution"},m=void 0,s={unversionedId:"resolution",id:"resolution",title:"Module Resolution",description:"Module resolution is the process of translating module names to module paths at build time. For example, if your project contains the code:",source:"@site/../docs/Resolution.md",sourceDirName:".",slug:"/resolution",permalink:"/metro/docs/resolution",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Resolution.md",tags:[],version:"current",lastUpdatedAt:1675335030,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"resolution",title:"Module Resolution"},sidebar:"docs",previous:{title:"Caching",permalink:"/metro/docs/caching"},next:{title:"Source Map Format",permalink:"/metro/docs/source-map-format"}},d={},p=[{value:"Resolution algorithm",id:"resolution-algorithm",level:2},{value:"Resolution types",id:"resolution-types",level:3},{value:"Source file",id:"source-file",level:4},{value:"Asset files",id:"asset-files",level:4},{value:"Empty module",id:"empty-module",level:4},{value:"Algorithm",id:"algorithm",level:3},{value:"Resolution context",id:"resolution-context",level:3},{value:"<code>doesFileExist: string =&gt; boolean</code>",id:"doesfileexist-string--boolean",level:4},{value:"<code>isAssetFile: string =&gt; boolean</code>",id:"isassetfile-string--boolean",level:4},{value:"<code>nodeModulesPaths: $ReadOnlyArray&lt;string&gt;</code>",id:"nodemodulespaths-readonlyarraystring",level:4},{value:"<code>preferNativePlatform: boolean</code>",id:"prefernativeplatform-boolean",level:4},{value:"<code>redirectModulePath: string =&gt; string | false</code>",id:"redirectmodulepath-string--string--false",level:4},{value:"<code>resolveAsset: (dirPath: string, assetName: string, extension: string) =&gt; ?$ReadOnlyArray&lt;string&gt;</code>",id:"resolveasset-dirpath-string-assetname-string-extension-string--readonlyarraystring",level:4},{value:"<code>sourceExts: $ReadOnlyArray&lt;string&gt;</code>",id:"sourceexts-readonlyarraystring",level:4},{value:"<code>mainFields: $ReadOnlyArray&lt;string&gt;</code>",id:"mainfields-readonlyarraystring",level:4},{value:"<code>getPackage: string =&gt; PackageJson</code>",id:"getpackage-string--packagejson",level:4},{value:"<code>getPackageForModule: (modulePath: string) =&gt; ?PackageInfo</code>",id:"getpackageformodule-modulepath-string--packageinfo",level:4},{value:"<code>resolveHasteModule: string =&gt; ?string</code>",id:"resolvehastemodule-string--string",level:4},{value:"<code>resolveHastePackage: string =&gt; ?string</code>",id:"resolvehastepackage-string--string",level:4},{value:"<code>allowHaste: boolean</code>",id:"allowhaste-boolean",level:4},{value:"<code>disableHierarchicalLookup: boolean</code>",id:"disablehierarchicallookup-boolean",level:4},{value:"<code>extraNodeModules: ?{[string]: string}</code>",id:"extranodemodules-string-string",level:4},{value:"<code>originModulePath: string</code>",id:"originmodulepath-string",level:4},{value:"<code>customResolverOptions: {[string]: mixed}</code>",id:"customresolveroptions-string-mixed",level:4},{value:"<code>resolveRequest: CustomResolver</code>",id:"resolverequest-customresolver",level:4},{value:"Caching",id:"caching",level:2}],u={toc:p};function c(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Module resolution is the process of translating module names to module paths at build time. For example, if your project contains the code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// src/App.js\nimport {View} from 'react-native';\n// ...\n")),(0,o.mdx)("p",null,"Metro needs to know where in your project to load the ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-native")," module from. This will typically resolve to something like ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules/react-native/index.js"),"."),(0,o.mdx)("p",null,"Likewise, if your project contains the (similar) code:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// src/App.js\nimport Comp from './Component';\n// ...\n")),(0,o.mdx)("p",null,"Metro needs to understand that you are referring to, say, ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/Component.js"),", and not another file named ",(0,o.mdx)("inlineCode",{parentName:"p"},"Component")," that may also exist elsewhere."),(0,o.mdx)("p",null,"Metro implements a version of ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html#loading-from-node_modules-folders"},"Node's module resolution algorithm"),", augmented with additional Metro-specific features."),(0,o.mdx)("p",null,"These Metro-specific features include:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Haste"),": An opt-in mechanism for importing modules by their globally-unique name anywhere in the project, e.g. ",(0,o.mdx)("inlineCode",{parentName:"li"},"import Foo from 'Foo'"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Platform extensions"),": Used by ",(0,o.mdx)("a",{parentName:"li",href:"https://reactnative.dev/docs/platform-specific-code#platform-specific-extensions"},"React Native")," to allow developers to write platform-specific versions of their JavaScript modules."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Asset extensions and image resolutions"),": Used by ",(0,o.mdx)("a",{parentName:"li",href:"https://reactnative.dev/docs/images#static-image-resources"},"React Native")," to automatically select the best version of an image asset based on the device's screen density at runtime."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Custom resolvers"),": Metro integrators can provide their own resolver implementations to override almost everything about how modules are resolved.")),(0,o.mdx)("h2",{id:"resolution-algorithm"},"Resolution algorithm"),(0,o.mdx)("p",null,"Given a ",(0,o.mdx)("a",{parentName:"p",href:"#resolution-context"},"resolution context")," ",(0,o.mdx)("em",{parentName:"p"},"context"),", a module name ",(0,o.mdx)("em",{parentName:"p"},"moduleName"),", and an optional platform identifier ",(0,o.mdx)("em",{parentName:"p"},"platform"),", Metro's resolver either returns one of the ",(0,o.mdx)("a",{parentName:"p",href:"#resolution-types"},"resolution types"),", or throws an error."),(0,o.mdx)("h3",{id:"resolution-types"},"Resolution types"),(0,o.mdx)("h4",{id:"source-file"},"Source file"),(0,o.mdx)("p",null,"The request is resolved to some absolute path representing a physical file on disk."),(0,o.mdx)("h4",{id:"asset-files"},"Asset files"),(0,o.mdx)("p",null,"The request is resolved to one or more absolute paths representing physical files on disk."),(0,o.mdx)("h4",{id:"empty-module"},"Empty module"),(0,o.mdx)("p",null,"The request is resolved to a built-in empty module, namely the one specified in ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#emptymodulepath"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.emptyModulePath")),"."),(0,o.mdx)("h3",{id:"algorithm"},"Algorithm"),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},"These are the rules that Metro's default resolver follows. Refer to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/metro/blob/main/packages/metro-resolver/src/resolve.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"metro-resolver"),"'s source code")," for more details.")),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If a ",(0,o.mdx)("a",{parentName:"p",href:"#resolverequest-customresolver"},"custom resolver")," is defined, call it and return the result.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Otherwise, try to resolve ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," as a relative or absolute path:"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the path is relative, convert it to an absolute path by prepending the current directory (i.e. parent of ",(0,o.mdx)("a",{parentName:"p",href:"#originmodulepath-string"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.originModulePath")),").")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the path refers to an ",(0,o.mdx)("a",{parentName:"p",href:"#isassetfile-string--boolean"},"asset"),":"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Use ",(0,o.mdx)("a",{parentName:"li",href:"#resolveasset-dirpath-string-assetname-string-extension-string--readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.resolveAsset"))," to collect all asset variants."),(0,o.mdx)("li",{parentName:"ol"},"Return an ",(0,o.mdx)("a",{parentName:"li",href:"#asset-files"},"asset resolution")," containing the collected asset paths."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If the path refers to a file that ",(0,o.mdx)("a",{parentName:"p",href:"#doesfileexist-string--boolean"},"exists")," after applying ",(0,o.mdx)("a",{parentName:"p",href:"#redirectmodulepath-string--string--false"},"redirections"),", return it as a ",(0,o.mdx)("a",{parentName:"p",href:"#source-file"},"source file resolution"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Try all platform and extension variants in sequence. Return a ",(0,o.mdx)("a",{parentName:"p",href:"#source-file"},"source file resolution")," for the first one that ",(0,o.mdx)("a",{parentName:"p",href:"#doesfileexist-string--boolean"},"exists")," after applying ",(0,o.mdx)("a",{parentName:"p",href:"#redirectmodulepath-string--string--false"},"redirections"),".\nFor example, if ",(0,o.mdx)("em",{parentName:"p"},"platform")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"android")," and ",(0,o.mdx)("a",{parentName:"p",href:"#sourceexts-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.sourceExts"))," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"['js', 'jsx']"),", try this sequence of potential file names:"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("em",{parentName:"li"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"li"},"'.android.js'")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("em",{parentName:"li"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"li"},"'.native.js'")," (if ",(0,o.mdx)("a",{parentName:"li",href:"#prefernativeplatform-boolean"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.preferNativePlatform"))," is ",(0,o.mdx)("inlineCode",{parentName:"li"},"true"),")"),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("em",{parentName:"li"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"li"},"'.android.jsx'")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("em",{parentName:"li"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"li"},"'.native.jsx'")," (if ",(0,o.mdx)("a",{parentName:"li",href:"#prefernativeplatform-boolean"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.preferNativePlatform"))," is ",(0,o.mdx)("inlineCode",{parentName:"li"},"true"),")"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If a file named ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"p"},"'/package.json'")," ",(0,o.mdx)("a",{parentName:"p",href:"#doesfileexist-string--boolean"},"exists"),":"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#getpackagemainpath-string--string"},"Get the package's entry path"),"."),(0,o.mdx)("li",{parentName:"ol"},"Try to resolve the entry path as a file, after applying ",(0,o.mdx)("a",{parentName:"li",href:"#redirectmodulepath-string--string--false"},"redirections")," and trying all platform and extension variants as described above."),(0,o.mdx)("li",{parentName:"ol"},"Try to resolve the entry path + ",(0,o.mdx)("inlineCode",{parentName:"li"},"'/index'")," as a file, after applying ",(0,o.mdx)("a",{parentName:"li",href:"#redirectmodulepath-string--string--false"},"redirections")," and trying all platform and extension variants as described above."),(0,o.mdx)("li",{parentName:"ol"},"Throw an error if no resolution could be found."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Try to resolve ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," + ",(0,o.mdx)("inlineCode",{parentName:"p"},"'/index'")," as a file, after applying ",(0,o.mdx)("a",{parentName:"p",href:"#redirectmodulepath-string--string--false"},"redirections")," and trying all platform and extension variants as described above."))))),(0,o.mdx)("ol",{start:3},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Apply ",(0,o.mdx)("a",{parentName:"p",href:"#redirectmodulepath-string--string--false"},"redirections")," to ",(0,o.mdx)("em",{parentName:"p"},"moduleName"),". Skip the rest of this algorithm if this results in an ",(0,o.mdx)("a",{parentName:"p",href:"#empty-module"},"empty module"),".")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If ",(0,o.mdx)("a",{parentName:"p",href:"#allowhaste-boolean"},"Haste resolutions are allowed"),":"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Try resolving ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," as a ",(0,o.mdx)("a",{parentName:"p",href:"#resolvehastemodule-string--string"},"Haste module"),".\nIf found, return it as a ",(0,o.mdx)("a",{parentName:"p",href:"#source-file"},"source file resolution")," ",(0,o.mdx)("strong",{parentName:"p"},"without")," applying redirections or trying any platform or extension variants.")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Try resolving ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," as a ",(0,o.mdx)("a",{parentName:"p",href:"#resolvehastepackage-string--string"},"Haste package"),", or a path ",(0,o.mdx)("em",{parentName:"p"},"relative")," to a Haste package.\nFor example, if ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"'a/b/c'"),", try the following potential Haste package names:"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"'a/b/c'"),", relative path ",(0,o.mdx)("inlineCode",{parentName:"li"},"''")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"'a/b'"),", relative path ",(0,o.mdx)("inlineCode",{parentName:"li"},"'./c'")),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("inlineCode",{parentName:"li"},"'a'"),", with relative path ",(0,o.mdx)("inlineCode",{parentName:"li"},"'./b/c'")))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If resolved as a Haste package path, perform the algorithm for resolving a path (step 2 above). Throw an error if this resolution fails.\nFor example, if the Haste package path for ",(0,o.mdx)("inlineCode",{parentName:"p"},"'a/b'")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"foo/package.json"),", perform step 2 as if ",(0,o.mdx)("em",{parentName:"p"},"moduleName")," was ",(0,o.mdx)("inlineCode",{parentName:"p"},"foo/c"),".")))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If ",(0,o.mdx)("a",{parentName:"p",href:"#disableHierarchicalLookup-boolean"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.disableHierarchicalLookup"))," is not ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),":"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Try resolving ",(0,o.mdx)("em",{parentName:"li"},"moduleName")," under ",(0,o.mdx)("inlineCode",{parentName:"li"},"node_modules")," from the current directory (i.e. parent of ",(0,o.mdx)("a",{parentName:"li",href:"#originmodulepath-string"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.originModulePath")),") up to the root directory."),(0,o.mdx)("li",{parentName:"ol"},"Perform the algorithm for resolving a path (step 2 above) for each candidate path."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"For each element ",(0,o.mdx)("em",{parentName:"p"},"nodeModulesPath")," of ",(0,o.mdx)("a",{parentName:"p",href:"#nodemodulespaths-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.nodeModulesPaths")),":"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Try resolving ",(0,o.mdx)("em",{parentName:"li"},"moduleName")," under ",(0,o.mdx)("em",{parentName:"li"},"nodeModulesPath")," as if the latter was another ",(0,o.mdx)("inlineCode",{parentName:"li"},"node_modules")," directory (similar to step 5 above)."),(0,o.mdx)("li",{parentName:"ol"},"Perform the algorithm for resolving a path (step 2 above) for each candidate path."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If ",(0,o.mdx)("a",{parentName:"p",href:"#extranodemodules-string-string"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.extraNodeModules"))," is set:"),(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Split ",(0,o.mdx)("em",{parentName:"li"},"moduleName")," into a package name (including an optional ",(0,o.mdx)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/using-npm/scope"},"scope"),") and relative path."),(0,o.mdx)("li",{parentName:"ol"},"Look up the package name in ",(0,o.mdx)("a",{parentName:"li",href:"#extranodemodules-string-string"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.extraNodeModules")),". If found, construct a path by replacing the package name part of ",(0,o.mdx)("em",{parentName:"li"},"moduleName")," with the value found in ",(0,o.mdx)("a",{parentName:"li",href:"#extranodemodules-string-string"},(0,o.mdx)("inlineCode",{parentName:"a"},"context.extraNodeModules")),", and perform the algorithm for resolving a path (step 2 above)."))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If no valid resolution has been found, throw a resolution failure error."))),(0,o.mdx)("h3",{id:"resolution-context"},"Resolution context"),(0,o.mdx)("h4",{id:"doesfileexist-string--boolean"},(0,o.mdx)("inlineCode",{parentName:"h4"},"doesFileExist: string => boolean")),(0,o.mdx)("p",null,"Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," if the file with the given path exists, or ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.mdx)("p",null,"By default, Metro implements this by consulting an in-memory map of the filesystem that has been prepared in advance. This approach avoids disk I/O during module resolution."),(0,o.mdx)("h4",{id:"isassetfile-string--boolean"},(0,o.mdx)("inlineCode",{parentName:"h4"},"isAssetFile: string => boolean")),(0,o.mdx)("p",null,"Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," if the given path represents an asset file, or ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.mdx)("p",null,"By default, Metro implements this by checking the file's extension against ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#assetexts"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.assetExts")),"."),(0,o.mdx)("h4",{id:"nodemodulespaths-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"h4"},"nodeModulesPaths: $ReadOnlyArray<string>")),(0,o.mdx)("p",null,"A list of paths to check for modules after looking through all ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," directories."),(0,o.mdx)("p",null,"By default this is set to ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#nodemodulespaths"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.nodeModulesPaths"))),(0,o.mdx)("h4",{id:"prefernativeplatform-boolean"},(0,o.mdx)("inlineCode",{parentName:"h4"},"preferNativePlatform: boolean")),(0,o.mdx)("p",null,"Whether to prefer ",(0,o.mdx)("inlineCode",{parentName:"p"},".native.${ext}")," over ",(0,o.mdx)("inlineCode",{parentName:"p"},".${platform}.${ext}")," during resolution. Metro sets this to ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,o.mdx)("h4",{id:"redirectmodulepath-string--string--false"},(0,o.mdx)("inlineCode",{parentName:"h4"},"redirectModulePath: string => string | false")),(0,o.mdx)("p",null,"Rewrites a module path, or returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")," to redirect to the special ",(0,o.mdx)("a",{parentName:"p",href:"#empty-module"},"empty module"),". In the default resolver, the resolution algorithm terminates with an ",(0,o.mdx)("a",{parentName:"p",href:"#empty-module"},"empty module result")," if ",(0,o.mdx)("inlineCode",{parentName:"p"},"redirectModulePath")," returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"false"),"."),(0,o.mdx)("p",null,"Metro uses this to implement the ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/defunctzombie/package-browser-field-spec"},(0,o.mdx)("inlineCode",{parentName:"a"},"browser")," field spec"),", particularly the ability to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/defunctzombie/package-browser-field-spec#replace-specific-files---advanced"},"replace")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/defunctzombie/package-browser-field-spec#ignore-a-module"},"ignore")," specific files."),(0,o.mdx)("p",null,"The default implementation of this function respects ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#resolvermainfields"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.resolverMainFields")),"."),(0,o.mdx)("h4",{id:"resolveasset-dirpath-string-assetname-string-extension-string--readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolveAsset: (dirPath: string, assetName: string, extension: string) => ?$ReadOnlyArray<string>")),(0,o.mdx)("p",null,"Given a directory path, the base asset name and an extension, returns a list of all the asset file names that match the given base name in that directory, or ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," if no such files are found. The default implementation considers each of ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#assetresolutions"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.assetResolutions"))," and uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"${assetName}@${resolution}${extension}")," format for asset variant file names."),(0,o.mdx)("p",null,"See also ",(0,o.mdx)("a",{parentName:"p",href:"https://reactnative.dev/docs/images#static-image-resources"},"Static Image Resources")," in the React Native docs."),(0,o.mdx)("h4",{id:"sourceexts-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"h4"},"sourceExts: $ReadOnlyArray<string>")),(0,o.mdx)("p",null,"The list of file extensions to try, in order, when resolving a module path that does not exist on disk. Defaults to ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#sourceexts"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.sourceExts")),"."),(0,o.mdx)("h4",{id:"mainfields-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"h4"},"mainFields: $ReadOnlyArray<string>")),(0,o.mdx)("p",null,"The ordered list of fields in ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," that should be read to resolve a package's main entry point (and any subpath file replacements) per the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/defunctzombie/package-browser-field-spec"},'"browser" field spec'),". Defaults to ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#resolvermainfields"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.resolverMainFields")),"."),(0,o.mdx)("h4",{id:"getpackage-string--packagejson"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getPackage: string => PackageJson")),(0,o.mdx)("p",null,"Given the path to a ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file, returns the parsed file contents."),(0,o.mdx)("h4",{id:"getpackageformodule-modulepath-string--packageinfo"},(0,o.mdx)("inlineCode",{parentName:"h4"},"getPackageForModule: (modulePath: string) => ?PackageInfo")),(0,o.mdx)("p",null,"Given a module path that may exist under an npm package, locates and returns the package root path and parsed ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," contents."),(0,o.mdx)("h4",{id:"resolvehastemodule-string--string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolveHasteModule: string => ?string")),(0,o.mdx)("p",null,"Resolves a Haste module name to an absolute path. Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," if no such module exists."),(0,o.mdx)("p",null,"The default implementation of this function uses ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/metro-file-map"},"metro-file-map"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"getModule")," method."),(0,o.mdx)("h4",{id:"resolvehastepackage-string--string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolveHastePackage: string => ?string")),(0,o.mdx)("p",null,"Resolves a Haste package name to an absolute ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," path. Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"null")," if no such package exists."),(0,o.mdx)("p",null,"The default implementation of this function uses ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/metro-file-map"},"metro-file-map"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"getPackage")," method."),(0,o.mdx)("h4",{id:"allowhaste-boolean"},(0,o.mdx)("inlineCode",{parentName:"h4"},"allowHaste: boolean")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"true")," if Haste resolutions are allowed in the current context, ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,o.mdx)("h4",{id:"disablehierarchicallookup-boolean"},(0,o.mdx)("inlineCode",{parentName:"h4"},"disableHierarchicalLookup: boolean")),(0,o.mdx)("p",null,"If ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),", the resolver should not perform lookup in ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," directories per the Node resolution algorithm. Defaults to ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#disablehierarchicallookup"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.disableHierarchicalLookup")),"."),(0,o.mdx)("h4",{id:"extranodemodules-string-string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"extraNodeModules: ?{[string]: string}")),(0,o.mdx)("p",null,"A mapping of package names to directories that is consulted after the standard lookup through ",(0,o.mdx)("inlineCode",{parentName:"p"},"node_modules")," as well as any ",(0,o.mdx)("a",{parentName:"p",href:"#nodemodulespaths-readonlyarraystring"},(0,o.mdx)("inlineCode",{parentName:"a"},"nodeModulesPaths")),"."),(0,o.mdx)("h4",{id:"originmodulepath-string"},(0,o.mdx)("inlineCode",{parentName:"h4"},"originModulePath: string")),(0,o.mdx)("p",null,"The path to the current module, e.g. the one containing the ",(0,o.mdx)("inlineCode",{parentName:"p"},"import")," we are currently resolving."),(0,o.mdx)("h4",{id:"customresolveroptions-string-mixed"},(0,o.mdx)("inlineCode",{parentName:"h4"},"customResolverOptions: {[string]: mixed}")),(0,o.mdx)("p",null,"Any custom options passed to the resolver. By default, Metro populates this based on URL parameters in the bundle request, e.g. ",(0,o.mdx)("inlineCode",{parentName:"p"},"http://localhost:8081/index.bundle?resolver.key=value")," becomes ",(0,o.mdx)("inlineCode",{parentName:"p"},"{key: 'value'}"),"."),(0,o.mdx)("h4",{id:"resolverequest-customresolver"},(0,o.mdx)("inlineCode",{parentName:"h4"},"resolveRequest: CustomResolver")),(0,o.mdx)("p",null,"A alternative resolver function to which the current request may be delegated. Defaults to ",(0,o.mdx)("a",{parentName:"p",href:"/metro/docs/configuration#resolvereqeuest"},(0,o.mdx)("inlineCode",{parentName:"a"},"resolver.resolveRequest")),"."),(0,o.mdx)("p",null,"Metro expects ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolveRequest")," to have the following signature:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-flow"},"function resolveRequest(\n  context: ResolutionContext,\n  moduleName: string,\n  platform: string | null,\n): Resolution {\n  // ...\n}\n\ntype Resolution =\n  | {type: 'empty'}\n  | {type: 'sourceFile', filePath: string}\n  | {type: 'assetFiles', filePaths: $ReadOnlyArray<string>};\n")),(0,o.mdx)("p",null,"When calling the default resolver with a non-null ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolveRequest")," function, it represents a custom resolver and will always be called, fully replacing the default resolution logic."),(0,o.mdx)("p",null,"Inside a custom resolver, ",(0,o.mdx)("inlineCode",{parentName:"p"},"resolveRequest")," is set to the default resolver function, for easy chaining and customization."),(0,o.mdx)("h2",{id:"caching"},"Caching"),(0,o.mdx)("p",null,"Resolver results may be cached under the following conditions:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"For given origin module paths ",(0,o.mdx)("em",{parentName:"li"},"A")," and ",(0,o.mdx)("em",{parentName:"li"},"B")," and target module name ",(0,o.mdx)("em",{parentName:"li"},"M"),", the resolution for ",(0,o.mdx)("em",{parentName:"li"},"M")," may be reused if ",(0,o.mdx)("strong",{parentName:"li"},"all")," of the following conditions hold:",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("em",{parentName:"li"},"A")," and ",(0,o.mdx)("em",{parentName:"li"},"B")," are in the same directory."),(0,o.mdx)("li",{parentName:"ol"},"The contents of ",(0,o.mdx)("a",{parentName:"li",href:"#customresolveroptions-string-mixed"},(0,o.mdx)("inlineCode",{parentName:"a"},"customResolverOptions"))," are equivalent ( = serialize to JSON the same) in both calls to the resolver."))),(0,o.mdx)("li",{parentName:"ol"},"Any cache of resolutions must be invalidated if any file in the project has changed.")),(0,o.mdx)("p",null,"Custom resolvers must adhere to these assumptions, e.g. they may not return different resolutions for origin modules in the same directory under the same ",(0,o.mdx)("inlineCode",{parentName:"p"},"customResolverOptions"),"."))}c.isMDXComponent=!0}}]);