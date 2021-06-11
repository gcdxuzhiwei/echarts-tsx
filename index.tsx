import React, {
  useImperativeHandle,
  memo,
  forwardRef,
  useRef,
  Ref,
} from 'react';
import * as echarts from 'echarts/lib/echarts';
import EchartsCore from './core';

import { Props, ECharts } from './types';

function Echarts(
  props: Props,
  ref: Ref<{ echart: ECharts | null | undefined }>,
) {
  const coreDOM = useRef<{ echart: ECharts | null } | null>(null);

  useImperativeHandle(ref, () => ({
    echart: coreDOM.current?.echart,
  }));

  return <EchartsCore ref={coreDOM} {...props} echarts={echarts} />;
}

export default memo(forwardRef(Echarts));
