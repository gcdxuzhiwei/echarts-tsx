import { ECharts, EChartOption } from 'echarts';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  option: EChartOption;
  resize?: boolean;
}

export type { ECharts, EChartOption, Props };
