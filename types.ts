import { ECharts, EChartOption } from 'echarts';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  option: EChartOption;
  resize?: boolean;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
}

interface ChartRef {
  echart: ECharts;
}

export type { ChartRef, ECharts, EChartOption, Props };
