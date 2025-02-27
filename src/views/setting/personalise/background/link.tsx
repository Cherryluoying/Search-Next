/*
 * @Author: Vir
 * @Date: 2021-09-27 13:55:54
 * @Last Modified by: Vir
 * @Last Modified time: 2022-03-02 14:48:22
 */

import { AuthBackgroundLinkData } from '@/data/account/interface';
import { AccordionDetailItem } from '@/pages/setting/components/itemAccordion';
import { isHttpLink } from '@/utils/regexp';
import { css } from '@emotion/css';
import { TextField } from '@mui/material';
import { Image } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { toast } from 'react-toastify';

export interface LinkProps {
  onChange: (url: string) => void;
  data: AuthBackgroundLinkData;
}

const Link: React.FC<LinkProps> = (props) => {
  const { onChange, data } = props;

  const [url, setUrl] = React.useState<string>('');
  const [blur, setBlur] = React.useState<boolean>(false);
  const [isUrl, setIsUrl] = React.useState<boolean>(false);

  React.useEffect(() => {
    setUrl(data ? data.url : '');
    setIsUrl(true);
    setBlur(true);
  }, [data]);

  return (
    <div>
      <AccordionDetailItem
        title="在线图片地址"
        action={
          <TextField
            size="small"
            label="链接"
            value={url}
            placeholder="请输入图片链接"
            onFocus={() => setBlur(false)}
            onChange={(e) => {
              setIsUrl(false);
              setUrl(e.target.value);
            }}
            onBlur={(e) => {
              setBlur(true);
              const check = isHttpLink.test(url);
              if (!check && url.length > 0) {
                toast.error('请输入有效的链接');
                setIsUrl(false);
              }
              if (check && url.length > 0) {
                setIsUrl(true);
                onChange(url);
              }
            }}
          />
        }
      />
      {url && blur && isUrl && (
        <div
          className={classNames(
            'm-2 rounded overflow-hidden',
            css`
              .ant-image {
                display: block;
              }
            `,
          )}
        >
          <Image src={url} />
        </div>
      )}
    </div>
  );
};

export default Link;
