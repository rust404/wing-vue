# Grid

## 基础布局

<GridDemo-Base/>

```vue
<w-row>
  <w-col span="8">8</w-col>
  <w-col span="8">8</w-col>
  <w-col span="8">8</w-col>
</w-row>
<w-row>
  <w-col span="1">1</w-col>
  <w-col span="2">2</w-col>
  <w-col span="21">21</w-col>
</w-row>
```


## 偏移
<GridDemo-Offset/>

```vue
<w-row>
  <w-col span="2">2</w-col>
  <w-col span="16" offset="2">16 offset:2</w-col>
  <w-col span="4">4</w-col>
</w-row>
<w-row>
  <w-col span="2">2</w-col>
  <w-col span="8" offset="2">8 offset:2</w-col>
  <w-col span="10" offset="2">10 offset:2</w-col>
</w-row>
```

## 间隔
<GridDemo-Gutter/>

```vue
<w-row gutter="10">
  <w-col span="8">8</w-col>
  <w-col span="8">8</w-col>
  <w-col span="8">8</w-col>
</w-row>
<w-row gutter="10">
  <w-col span="4">4</w-col>
  <w-col span="14">14</w-col>
  <w-col span="6">6</w-col>
</w-row>
```

## 水平对齐
<GridDemo-Justify/>

```vue
<w-row justify="center">
  <w-col span="2">2</w-col>
  <w-col span="8">8</w-col>
  <w-col span="10">10</w-col>
</w-row>
<w-row justify="space-between">
  <w-col span="2">2</w-col>
  <w-col span="8">8</w-col>
  <w-col span="10">10</w-col>
</w-row>
<w-row justify="space-around">
  <w-col span="2">2</w-col>
  <w-col span="8">8</w-col>
  <w-col span="10">10</w-col>
</w-row>
```

## 垂直对齐
<GridDemo-Align/>

```vue
<w-row justify="space-between" style="height: 100px; background: #efefef">
  <w-col span="2">2</w-col>
  <w-col span="8">8</w-col>
  <w-col span="10">10</w-col>
</w-row>
<w-row align="center" justify="space-between" style="height: 100px; background: #efefef">
  <w-col span="2">2</w-col>
  <w-col span="8">8</w-col>
  <w-col span="10">10</w-col>
</w-row>
<w-row align="flex-end" justify="space-between" style="height: 100px; background: #efefef">
  <w-col span="2">2</w-col>
  <w-col span="8">12</w-col>
  <w-col span="10">10</w-col>
</w-row>
```

## 响应式
<GridDemo-Responsive/>

```vue
<w-row>
  <w-col span="8" xl="4">span:8 md:4</w-col>
  <w-col span="8" xl="16">span:8 md:16</w-col>
  <w-col span="8" xl="4">span:8 md:4</w-col>
</w-row>
<w-row>
  <w-col span="4" xl="6">span:4 md:6</w-col>
  <w-col span="8" xl="12">span:8 md:12</w-col>
  <w-col span="12" xl="6">span:12 md:6</w-col>
</w-row>
```

## Row参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| gutter| 间隔 | Number, String|- | - |
| justify  | 水平对齐 | String | 参考flex布局justify-content属性 | - |
| align  | 垂直对齐 | String | 参考flex布局align-items属性 | - |

## Col参数
| 属性    | 说明   | 类型   | 可选值  | 默认值 |
| ------ |:-------|:------|:-----| --- |
| span| 占用栅格数 | Number, String| [1,24]的整数值 | - |
| offset| 偏移栅格数 | Number, String| [1,24]的整数值 | - |
| xs| 屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象 | String, Object | - | - |
| sm| 屏幕 >= 576px 响应式栅格，同上 | String, Object | - | - |
| md| 屏幕 >= 768px 响应式栅格，同上 | String, Object | - | - |
| lg| 屏幕 >= 992px 响应式栅格，同上 | String, Object | - | - |
| xl| 屏幕 >= 1200px 响应式栅格，同上 | String, Object | - | - |
| xxl| 屏幕 >=1600 576px 响应式栅格，同上 | String, Object | - | - |
