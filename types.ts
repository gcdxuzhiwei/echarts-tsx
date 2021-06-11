import { ECharts, EChartOption } from 'echarts';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  option: EChartOption;
  resize?: boolean;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
}

interface chartRef {
  echart: ECharts;
}

export type { chartRef, ECharts, EChartOption, Props };
