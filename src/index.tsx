import React, { useEffect, useRef } from 'react';
import 'kity';
import 'kityminder-core';
import './kityminder-core.css';

export interface IKityMinderProps {
  /**
   * @description 从百度脑图导出的 JSON 数据
   * @default null
   */
  data: object;
}

export default ({ data }: IKityMinderProps) => {
  const kityRef = useRef(null);

  useEffect(() => {
    if (kityRef.current) {
      // 填充数据
      // @ts-ignore
      kityRef.current.append(JSON.stringify(data));
      // 创建 km 实例
      // @ts-ignore
      var km = (window.km = new kityminder.Minder());
      km.setup(kityRef.current);
      km.disable();
      km.execCommand('hand');
    }
  }, [data]);

  return (
    <div
      ref={kityRef}
      // @ts-ignore
      type="application/kityminder"
      minder-data-type="json"
    ></div>
  );
};
