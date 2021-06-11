import React, {
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
  useImperativeHandle,
  memo,
  forwardRef,
  HTMLAttributes,
  Ref,
} from 'react';

import debounce from '../utils/debounce';
import { ECharts, Props } from '../types';

function EchartsCore(
  props: Props & { echarts: any },
  ref: Ref<{ echart: ECharts | null }>,
) {
  const { echarts, option, style = {}, resize = true, ...restProps } = props;

  const echart = useRef<ECharts | null>(null);
  const echartDOM = useRef<HTMLDivElement>(null);
  const iframeDOM = useRef<HTMLIFrameElement>(null);

  const styleMemo = useMemo(
    () => ({
      position: 'relative',
      ...style,
    }),
    [style],
  );

  const resizeFunc = useMemo(
    () =>
      debounce(() => {
        echart.current?.resize();
      }, 50),
    [],
  );

  useLayoutEffect(() => {
    echart.current = echarts.init(echartDOM.current);
  }, []);

  useEffect(() => {
    if (option && echart.current) {
      echart.current.setOption(option);
    }
  }, [option]);

  useEffect(() => {
    if (resize) {
      const iframeWindow = iframeDOM.current?.contentWindow;
      if (iframeWindow) {
        iframeWindow.addEventListener('resize', resizeFunc);

        return () => {
          iframeWindow.removeEventListener('resize', resizeFunc);
        };
      }
    }
  }, [resize]);

  useImperativeHandle(ref, () => ({
    echart: echart.current,
  }));

  return (
    <div style={styleMemo as HTMLAttributes<HTMLDivElement>} {...restProps}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        ref={echartDOM}
      />
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          background: 'transparent',
          border: 'none',
        }}
        ref={iframeDOM}
      />
    </div>
  );
}

export default memo(forwardRef(EchartsCore));
