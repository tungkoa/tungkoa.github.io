"use strict";(self.webpackChunkreact_micro_frontend=self.webpackChunkreact_micro_frontend||[]).push([[1423,3047],{3205:function(e){function t(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,n,r,l){if(a.language===n){var o=a.tokenStack=[];a.code=a.code.replace(r,(function(e){if("function"==typeof l&&!l(e))return e;for(var r,i=o.length;-1!==a.code.indexOf(r=t(n,i));)++i;return o[i]=e,r})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,n){if(a.language===n&&a.tokenStack){a.grammar=e.languages[n];var r=0,l=Object.keys(a.tokenStack);!function o(i){for(var s=0;s<i.length&&!(r>=l.length);s++){var c=i[s];if("string"==typeof c||c.content&&"string"==typeof c.content){var p=l[r],u=a.tokenStack[p],g="string"==typeof c?c:c.content,d=t(n,p),f=g.indexOf(d);if(f>-1){++r;var m=g.substring(0,f),k=new e.Token(n,e.tokenize(u,a.grammar),"language-"+n,u),b=g.substring(f+d.length),h=[];m&&h.push.apply(h,o([m])),h.push(k),b&&h.push.apply(h,o([b])),"string"==typeof c?i.splice.apply(i,[s,1].concat(h)):c.content=h}}else c.content&&o(c.content)}return i}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},8181:function(e,t,a){var n=a(3205);function r(e){e.register(n),function(e){var t=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,a=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;e.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/({+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^{+\/?|\/?}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,inside:{string:{pattern:t,greedy:!0},number:a,punctuation:/[\[\].?]/}},string:{pattern:t,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:true|false)\b/,number:a,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},e.hooks.add("before-tokenize",(function(t){var a=!1;e.languages["markup-templating"].buildPlaceholders(t,"soy",/{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(e){return"{/literal}"===e&&(a=!1),!a&&("{literal}"===e&&(a=!0),!0)}))})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"soy")}))}(e)}e.exports=r,r.displayName="soy",r.aliases=[]}}]);