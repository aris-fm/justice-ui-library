import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as i from"react";import{c as o}from"../../index-6ea95111.js";import{R as s}from"../../server-ce56d26a.js";import{F as n}from"../../index-a4602375.js";import{s as l}from"../../style-inject.es-1f59c1d0.js";import{FieldLabel as a,FieldCounter as r,FieldErrorMessage as p,FieldHelperText as d}from"../Form/utility/index.js";import{InlinePopover as m}from"../InlinePopover/index.js";import{isForbiddenKey as c}from"../../utils/input.js";import"../../index-dd80248b.js";import"stream";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"styled-components";import"../../objectWithoutProperties-90b89624.js";import"../../get-ae46b391.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../index-0b909155.js";import"../../context-f854a00e.js";import"../../use-memo-one.esm-19c0a4a5.js";import"../../Label-5e6a9f1c.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-d5854836.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../index-66c17f68.js";import"../../noop-2d37c277.js";import"../../slicedToArray-a622878d.js";import"../../nonIterableRest-e93b6547.js";import"../../index-72b69d08.js";import"../../utils/i18n/index.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-e535ff8d.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../math-2cad1979.js";import"../../elevation-f6d8634d.js";import"../../Popper-02b0f085.js";import"../../memoize-one.esm-8827f1ac.js";import"../../types/enum.js";l('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-field-text{font-family:Roboto,sans-serif;position:relative}.valid-field-text .field-label{font-size:14px;padding-bottom:4px}.valid-field-text .field-info{color:#b8bfcd;font-size:16px;margin-top:10px}.valid-field-text .ValidFieldInformation,.valid-field-text .fieldHeader{align-items:baseline;display:flex;justify-content:space-between;white-space:pre-wrap}.valid-field-text .ValidFieldInformation.pushRight,.valid-field-text .fieldHeader.pushRight{justify-content:flex-end}.valid-field-text .fieldHeader>label:not(.withTooltip){display:initial}.valid-field-text div>label{display:none}.valid-field-text .valid-field-text-input-container{height:40px;position:relative}.valid-field-text .valid-field-text-input-container [class|=Content__ChildWrapper]>[class|=Content]{border:1px solid #b8bfcd}.valid-field-text .valid-field-text-input-container [class|=Content__ChildWrapper]>[class|=Content]:hover{border:1px solid #687792}.valid-field-text .valid-field-text-input-container.focusedFieldText [class|=Content__ChildWrapper]>[class|=Content]{border:2px solid #0b6cff}.valid-field-text .valid-field-text-input-container input{font-size:16px}.valid-field-text .valid-field-text-input-container .rightIcon{display:flex;flex-direction:column;height:100%;justify-content:center;padding:0 10px;position:absolute;right:0;top:0}');class f extends n{componentWillReceiveProps(e,t){this.props.value===e.value||this.setState({value:e.value})}}class h extends i.Component{constructor(e){if(super(e),this.state={isFocus:!1},"number"===e.type&&"number"==typeof e.maxLength)throw new Error('prop maxLength cannot be used when prop type="number"')}toolTipRef=i.createRef();componentDidMount(){setTimeout((()=>{s.rebuild()}),100)}componentWillUnmount(){this.hideTooltip()}hideTooltip=()=>{this.toolTipRef&&this.toolTipRef.current&&s.hide(this.toolTipRef.current)};showTooltip=()=>{this.toolTipRef&&this.toolTipRef.current&&this.props.showTooltipOnFocus&&s.show(this.toolTipRef.current)};handleBlur=e=>{const{onBlur:t}=this.props;if(this.hideTooltip(),"function"==typeof t)return t(e);this.setState({isFocus:!1})};handleFocus=e=>{const{onFocus:t}=this.props;t&&t(e),this.showTooltip(),this.setState({isFocus:!0})};handleOnKeyDown=e=>{const{onKeyDown:t,type:i,min:o,isFloat:s}=this.props,{key:n,ctrlKey:l}=e;"number"===i&&!l&&c(n,o,s)&&e.preventDefault(),t&&t(e)};renderInput=()=>{const{placeholder:t,name:i,value:o,disabled:s,type:n,min:l,max:a,maxLength:r,autoComplete:p,onChange:d}=this.props;return e(f,{isLabelHidden:!1,onFocus:this.handleFocus,onBlur:this.handleBlur,placeholder:t,name:i,value:o,onChange:d,disabled:s,type:n,min:l,max:a,shouldFitContainer:!0,onKeyDown:this.handleOnKeyDown,maxLength:r,autoComplete:p})};render(){const{label:i="",value:s,maxLength:n,className:l,optionalLabel:c,errMessage:f,isLabelHidden:h,helperText:u,tooltip:x,dataQa:v,dataQaProps:j,rightIcon:b,validFieldTextRef:y,popoverContent:g,popoverPlacement:T,popoverType:R,customField:F,isRequired:w=!0,isInvalid:C=!0}=this.props,{isFocus:L}=this.state;return t("div",{className:o(l,"valid-field-text"),"data-qa-id":v,"data-qa-props":j,ref:y,children:[t("div",{className:o("fieldHeader",{pushRight:!i&&!w}),children:[!h&&e(a,{label:i,optionalLabel:c,isRequired:w,tooltip:x,tooltipRef:this.toolTipRef}),!!n&&e(r,{value:s,maxLength:n,className:"px-0"})]}),t("div",{className:o("valid-field-text-input-container",{focusedFieldText:this.state.isFocus}),children:[g?e(m,{isOpen:L,placement:T,content:g,type:R,children:this.renderInput()}):this.renderInput(),!!b&&e("div",{className:"rightIcon",children:b})]}),F,C&&f&&e(p,{message:f}),u&&e(d,{message:u})]})}}export{f as Input,h as ValidFieldText};
