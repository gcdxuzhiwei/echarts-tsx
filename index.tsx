import React, {
  useImperativeHandle,
  memo,
  forwardRef,
  useRef,
  Ref,
} from 'react';
import * as echarts from 'echarts/lib/echarts';
import EchartsCore from './core';

import { Props, ChartRef } from './types';

function Echarts(props: Props, ref: Ref<unknown> | undefined) {
  const coreDOM = useRef<ChartRef>(null);

  useImperativeHandle(ref, () => ({
    echart: coreDOM.current?.echart,
  }));

  return <EchartsCore ref={coreDOM} {...props} echarts={echarts} />;
}

export default memo(forwardRef(Echarts));
export type { ChartRef, ECharts, EChartOption } from './types';
