import{jsxs as e,jsx as t}from"react/jsx-runtime";import*as s from"react";import{s as i}from"../../style-inject.es-1f59c1d0.js";import{c as o}from"../../index-6ea95111.js";import{s as r}from"../../server-d796a789.js";import{FieldLabel as a}from"../Form/utility/index.js";import{Select as m}from"../Select/index.js";import"../../index-dd80248b.js";import"stream";import"../../index.es-62933797.js";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../Select/reactSelectComponents.js";import"../../index-4bd03571.esm-38a23a83.js";import"../../unitless.esm-d94354fa.js";import"../../index-db82829b.js";import"../../Select-1c479a8b.js";import"../../react-select.esm-8e48a105.js";import"../../stateManager-845a3300.esm-2f95f509.js";import"../../memoize-one.esm-8827f1ac.js";import"../../createSelect-3f4011c4.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../get-ae46b391.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";i('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.table-filter{align-items:center;display:flex;font-family:Roboto,sans-serif;margin-left:auto}.table-filter .field-label{font-size:16px;margin-right:20px;padding:0;white-space:nowrap;word-break:keep-all}.table-filter .styled-atlaskit-select{height:40px;width:180px}.table-filter .styled-atlaskit-select__control{align-items:stretch;font-size:16px;height:100%;letter-spacing:.02em}.table-filter.isLarge .styled-atlaskit-select{width:280px}');const l=({currentValue:i,onFilterChange:l,label:p,tooltip:n,isLarge:c,customStyle:j,className:d,...f})=>{const b=s.isValidElement(n)?r.renderToString(n):n;return e("div",{className:o("table-filter",d,{isLarge:c}),style:j,children:[!!p&&t(a,{label:p,tooltip:b}),t(m,{isMulti:!1,name:"searchType",onChange:l,value:i,...f})]})};export{l as TableFilter};
