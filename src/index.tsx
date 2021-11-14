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
  /**
   * @description 点击图标跳转的链接
   * @default null
   */
  link: string;
}

export default ({ data, link }: IKityMinderProps) => {
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
    <div style={{ position: 'relative' }}>
      <div
        ref={kityRef}
        // @ts-ignore
        type="application/kityminder"
        minder-data-type="json"
      ></div>
      <a
        style={{ position: 'absolute', top: '20px', right: '20px' }}
        target="_blank"
        href={link}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/youngjuning/images/202111150145860.png"
          width="30px"
        />
      </a>
    </div>
  );
};
