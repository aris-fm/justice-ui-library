import{jsx as e}from"react/jsx-runtime";import{c as l}from"../../index-4bd03571.esm-38a23a83.js";import"react";import"../../unitless.esm-d94354fa.js";import"../../index-db82829b.js";import"../../index-dd80248b.js";const r=()=>e("i",{className:"icon-chevron-down"}),s=({...r})=>{const s=Array.isArray(r.selectProps.value)?r.selectProps.value.find((e=>e.label===r.children)):r.selectProps.value,{children:i}=r,t={...r,children:"string"==typeof i&&i.length>25?`${i.slice(0,25)}...`:i};return s?.isUnremovable?e("div",{className:"styled-atlaskit-select__multi-value-unremovable",children:e(l.MultiValueLabel,{...t})}):e(l.MultiValueLabel,{...t})};export{r as DropdownIndicator,s as MultiValueLabel};
