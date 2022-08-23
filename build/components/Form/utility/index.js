import{jsx as e,jsxs as i,Fragment as o}from"react/jsx-runtime";import t from"react";import{s as l}from"../../../style-inject.es-1f59c1d0.js";import{s as a,R as r}from"../../../server-ce56d26a.js";import{c as s}from"../../../index-6ea95111.js";import{translation as n}from"../../../utils/i18n/index.js";import"../../../fa_icons-aa14317c.js";import{p}from"../../../purify.es-49746c08.js";import{MAX_SHORT_TEXT_LENGTH as d}from"../../../constants/common.js";import{addLineBreaks as m}from"../../../utils/typography.js";import"../../../index-dd80248b.js";import"stream";import"../../../inherits-d3723d19.js";import"../../../setPrototypeOf-c6ba02e6.js";import"../../../nonIterableRest-e93b6547.js";import"../../../unsupportedIterableToArray-0ca076cc.js";import"../../../utils/i18n/loadLanguages.js";l('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.field-error-message{color:#cb1a1a;font-size:12px;margin:4px 0}.field-error-message,.field-label{display:block;font-family:Roboto,sans-serif}.field-label{color:#687792;font-size:14px;font-weight:400;line-height:1.3;margin-bottom:0;padding:20px 0 10px;word-break:normal}.field-label.withTooltip{align-items:center;display:flex}.field-label .icon-info{margin-left:8px}.field-label .__react_component_tooltip{background-color:#232831;border-radius:4px;font-size:14px;line-height:1.63;opacity:1;padding:5px 10px;text-align:left}.field-counter,.field-helper-text{color:#687792;display:block;font-size:12px;margin-top:4px}.field-helper-text{margin:4px 0}');const f=({message:i="",dataQa:o})=>e("span",{className:"field-error-message","data-qa-id":o&&o,children:i}),c=({label:l="",children:d,isRequired:m=!0,optionalLabel:f=` ${n("common.optionalFieldLabel")}`,tooltip:c,tooltipRef:g})=>i("label",{className:s("field-label",{withTooltip:c}),children:[i("div",{children:[l,!m&&f,d]}),c&&i(o,{children:[e("i",{ref:g,className:"icon-info","data-for":"field-label__tooltip","data-tip":p.sanitize(t.isValidElement(c)?a.renderToString(c):c),"data-html":!0}),e(r,{effect:"solid",id:"field-label__tooltip"})]})]}),g=({value:e="",maxLength:o=d,className:t})=>i("span",{className:s("field-counter",t),children:[e&&e.length?e.length:0,"/",o]}),b=({message:i=""})=>e("span",{className:"field-helper-text",children:"string"==typeof i?m(i):i});export{g as FieldCounter,f as FieldErrorMessage,b as FieldHelperText,c as FieldLabel};