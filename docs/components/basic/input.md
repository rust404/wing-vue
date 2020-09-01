# Input

## 基础用法
<w-input placeholder="placeholder"/>

## 前缀和后缀
<InputDemo-InputPrefixSuffixDemo/>

## 前置与后置
<template>
    <w-input>
        <template v-slot:prepend>
            http://
        </template>
        <template v-slot:append>
            .com
        </template>
    </w-input>
</template>

## 三种尺寸
<w-input size="lg" placeholder="lg"/>
<w-input placeholder="默认"/>
<w-input size="sm" placeholder="sm"/>

## 禁用
<w-input disabled placeholder="disabled"/>

## 一键清除
<InputDemo-InputAllowClearDemo/>

