"use strict";(self.webpackChunkreact_micro_frontend=self.webpackChunkreact_micro_frontend||[]).push([[6247],{3336:function(e){function n(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var f=n[a],r=[];/^\w+$/.test(a)||r.push(/\w+/.exec(a)[0]),"diff"===a&&r.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+f+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:r}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(e)}e.exports=n,n.displayName="diff",n.aliases=[]}}]);