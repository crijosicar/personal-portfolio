import React from "react";
import {BasePageProps} from "@/app/entities/base-page";

export type BaseLayoutProps = {
    children: React.ReactNode;
};

export type BaseLayoutPageProps = BaseLayoutProps & BasePageProps;