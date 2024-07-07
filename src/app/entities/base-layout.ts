import { BasePageProps } from '@/app/entities/base-page';
import React from 'react';

export type BaseLayoutProps = {
    children: React.ReactNode;
};

export type BaseLayoutPageProps = BaseLayoutProps & BasePageProps;
