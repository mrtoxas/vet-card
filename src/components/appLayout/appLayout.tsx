import React from 'react';
import { Layout } from 'antd';
import { AppLayoutProps } from './types';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
