# echarts-tsx

The simplest React wrapper for Apache ECharts with Hooks and TypeScript.

使用 hooks 和 ts 简易封装的 echarts 组件。

🚀🚀🚀 支持 ts、自动根据元素宽高 resize、按需引入 🚀🚀🚀

Props

```tsx
{
  option: EChartOption; // 配置项
  resize?: boolean; // 是否resize,默认为true
  // 👇以下三个是setoption的选项,见https://echarts.apache.org/v4/zh/api.html#echartsInstance.setOption
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
}
```

Export

```tsx
// default 组件
// 👇type
ChartRef; // ref的类型，包含echart实例
ECharts; //echart实例的类型
EChartOption; // 配置项类型
```

Quick Start

install

```tsx
npm install echarts-tsx
```

import component & import charts and components you need

```tsx
import Echarts, { ChartRef, EChartOption } from "echarts-tsx";

import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
```

init option and ref and use component

```tsx
const [option, setOption] = useRef<EChartOption>(null);
const DOM = useRef<chartRef>(null);

// you can fetch data and use setOption to update chart
// you can use DOM.current.echart to use Instance,example👇
useEffect(()=>{
  DOM.current.echart.on('click',()=>{
    // ...
  })
},[])

<Echarts ref={DOM} option={option} />;
```
