"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[696],{5696:function(e,i,r){r.r(i);var n=r(5861),l=r(9439),a=r(4687),d=r.n(a),o=r(2791),t=r(634),s=r(7074),u=r(6600),c=r(7358),v=r(4217),m=r(8280),h=r(4420),p=r(1321),f=r(6048),x=r(7689),b=r(184);i.default=function(){var e=(0,o.useState)(""),i=(0,l.Z)(e,2),r=i[0],a=i[1],Z=(0,o.useState)(""),y=(0,l.Z)(Z,2),I=y[0],g=y[1],k=(0,h.I0)(),q=(0,h.v9)(p.Hn),R=(0,h.v9)(p.xU),N=(0,x.s0)(),P=function(){var e=(0,n.Z)(d().mark((function e(i){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.preventDefault(),n={email:r,password:I},k((0,f.pH)(n)),N("/contacts");case 4:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}();return(0,b.jsx)("div",{children:(0,b.jsx)(t.x,{maxWidth:"400px",mx:"auto",mt:"20",children:(0,b.jsxs)("form",{onSubmit:P,children:[(0,b.jsxs)(s.NI,{id:"email",mb:"4",children:[(0,b.jsx)(u.l,{children:"Email:"}),(0,b.jsx)(c.I,{type:"email",placeholder:"Enter your email",value:r,onChange:function(e){return a(e.target.value)},required:!0})]}),(0,b.jsxs)(s.NI,{id:"password",mb:"4",children:[(0,b.jsx)(u.l,{children:"Password:"}),(0,b.jsx)(c.I,{type:"password",placeholder:"Enter your password",value:I,onChange:function(e){return g(e.target.value)},required:!0})]}),q&&(0,b.jsx)(v.x,{color:"red.500",children:q}),(0,b.jsx)(m.z,{type:"submit",colorScheme:"blue",width:"full",isLoading:R,children:"Login"})]})})})}},7074:function(e,i,r){r.d(i,{NI:function(){return N},NJ:function(){return R},e:function(){return I}});var n=r(1413),l=r(4925),a=r(9439),d=r(184),o=r(9669),t=r(7454),s=r(7321),u=r(4798),c=r(9490),v=r(2791),m=r(3089),h=r(9569),p=r(3277),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],b=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,a.Z)(b,2),y=Z[0],I=Z[1],g=(0,s.k)({strict:!1,name:"FormControlContext"}),k=(0,a.Z)(g,2),q=k[0],R=k[1];var N=(0,m.G)((function(e,i){var r=(0,h.j)("Form",e),s=function(e){var i=e.id,r=e.isRequired,d=e.isInvalid,t=e.isDisabled,s=e.isReadOnly,c=(0,l.Z)(e,f),m=(0,v.useId)(),h=i||"field-".concat(m),p="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),Z=(0,v.useState)(!1),y=(0,a.Z)(Z,2),I=y[0],g=y[1],k=(0,v.useState)(!1),q=(0,a.Z)(k,2),R=q[0],N=q[1],P=(0,v.useState)(!1),j=(0,a.Z)(P,2),F=j[0],_=j[1],C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:b},e),{},{ref:(0,o.lq)(i,(function(e){e&&N(!0)}))})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,"data-focus":(0,u.P)(F),"data-disabled":(0,u.P)(t),"data-invalid":(0,u.P)(d),"data-readonly":(0,u.P)(s),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,t,F,d,s,p]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({id:x},e),{},{ref:(0,o.lq)(i,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[x]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)((0,n.Z)({},e),c),{},{ref:i,role:"group","data-focus":(0,u.P)(F),"data-disabled":(0,u.P)(t),"data-invalid":(0,u.P)(d),"data-readonly":(0,u.P)(s)})}),[c,t,F,d,s]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,n.Z)((0,n.Z)({},e),{},{ref:i,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!d,isReadOnly:!!s,isDisabled:!!t,isFocused:!!F,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:I,setHasFeedbackText:g,hasHelpText:R,setHasHelpText:N,id:h,labelId:p,feedbackId:x,helpTextId:b,htmlProps:c,getHelpTextProps:C,getErrorMessageProps:O,getRootProps:S,getLabelProps:w,getRequiredIndicatorProps:T}}((0,t.L)(e)),m=s.getRootProps,b=(s.htmlProps,(0,l.Z)(s,x)),Z=(0,c.cx)("chakra-form-control",e.className);return(0,d.jsx)(q,{value:b,children:(0,d.jsx)(y,{value:r,children:(0,d.jsx)(p.m.div,(0,n.Z)((0,n.Z)({},m({},i)),{},{className:Z,__css:r.container}))})})}));N.displayName="FormControl",(0,m.G)((function(e,i){var r=R(),l=I(),a=(0,c.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(p.m.div,(0,n.Z)((0,n.Z)({},null===r||void 0===r?void 0:r.getHelpTextProps(e,i)),{},{__css:l.helperText,className:a}))})).displayName="FormHelperText"},6600:function(e,i,r){r.d(i,{l:function(){return m}});var n=r(1413),l=r(4925),a=r(184),d=r(7454),o=r(9490),t=r(7074),s=r(3089),u=r(9569),c=r(3277),v=["className","children","requiredIndicator","optionalIndicator"],m=(0,s.G)((function(e,i){var r,s=(0,u.m)("FormLabel",e),m=(0,d.L)(e),p=(m.className,m.children),f=m.requiredIndicator,x=void 0===f?(0,a.jsx)(h,{}):f,b=m.optionalIndicator,Z=void 0===b?null:b,y=(0,l.Z)(m,v),I=(0,t.NJ)(),g=null!==(r=null===I||void 0===I?void 0:I.getLabelProps(y,i))&&void 0!==r?r:(0,n.Z)({ref:i},y);return(0,a.jsxs)(c.m.label,(0,n.Z)((0,n.Z)({},g),{},{className:(0,o.cx)("chakra-form__label",m.className),__css:(0,n.Z)({display:"block",textAlign:"start"},s),children:[p,null!==I&&void 0!==I&&I.isRequired?x:Z]}))}));m.displayName="FormLabel";var h=(0,s.G)((function(e,i){var r=(0,t.NJ)(),l=(0,t.e)();if(null===r||void 0===r||!r.isRequired)return null;var d=(0,o.cx)("chakra-form__required-indicator",e.className);return(0,a.jsx)(c.m.span,(0,n.Z)((0,n.Z)({},null===r||void 0===r?void 0:r.getRequiredIndicatorProps(e,i)),{},{__css:l.requiredIndicator,className:d}))}));h.displayName="RequiredIndicator"},7358:function(e,i,r){r.d(i,{I:function(){return b}});var n=r(1413),l=r(4925),a=r(184),d=r(7454),o=r(9490),t=r(4798);function s(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return function(e){i.some((function(i){return null===i||void 0===i||i(e),null===e||void 0===e?void 0:e.defaultPrevented}))}}var u=r(7074),c=["isDisabled","isInvalid","isReadOnly","isRequired"],v=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function m(e){var i=function(e){var i,r,a,d=(0,u.NJ)(),o=e.id,t=e.disabled,c=e.readOnly,m=e.required,h=e.isRequired,p=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,b=e.onFocus,Z=e.onBlur,y=(0,l.Z)(e,v),I=e["aria-describedby"]?[e["aria-describedby"]]:[];null!==d&&void 0!==d&&d.hasFeedbackText&&null!==d&&void 0!==d&&d.isInvalid&&I.push(d.feedbackId);null!==d&&void 0!==d&&d.hasHelpText&&I.push(d.helpTextId);return(0,n.Z)((0,n.Z)({},y),{},{"aria-describedby":I.join(" ")||void 0,id:null!==o&&void 0!==o?o:null===d||void 0===d?void 0:d.id,isDisabled:null!==(i=null!==t&&void 0!==t?t:x)&&void 0!==i?i:null===d||void 0===d?void 0:d.isDisabled,isReadOnly:null!==(r=null!==c&&void 0!==c?c:f)&&void 0!==r?r:null===d||void 0===d?void 0:d.isReadOnly,isRequired:null!==(a=null!==m&&void 0!==m?m:h)&&void 0!==a?a:null===d||void 0===d?void 0:d.isRequired,isInvalid:null!==p&&void 0!==p?p:null===d||void 0===d?void 0:d.isInvalid,onFocus:s(null===d||void 0===d?void 0:d.onFocus,b),onBlur:s(null===d||void 0===d?void 0:d.onBlur,Z)})}(e),r=i.isDisabled,a=i.isInvalid,d=i.isReadOnly,o=i.isRequired,m=(0,l.Z)(i,c);return(0,n.Z)((0,n.Z)({},m),{},{disabled:r,readOnly:d,required:o,"aria-invalid":(0,t.Q)(a),"aria-required":(0,t.Q)(o),"aria-readonly":(0,t.Q)(d)})}var h=r(3089),p=r(9569),f=r(3277),x=["htmlSize"],b=(0,h.G)((function(e,i){var r=e.htmlSize,t=(0,l.Z)(e,x),s=(0,p.j)("Input",t),u=m((0,d.L)(t)),c=(0,o.cx)("chakra-input",e.className);return(0,a.jsx)(f.m.input,(0,n.Z)((0,n.Z)({size:r},u),{},{__css:s.field,ref:i,className:c}))}));b.displayName="Input",b.id="Input"}}]);
//# sourceMappingURL=696.6fade963.chunk.js.map