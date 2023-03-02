import {ContentStatus, ContentType} from "@/entities/constant";

export type PageBase = {
    id:        string;
    name:      string;
    status:    ContentStatus;
    slug:      string;
    sections:  Section[];
    createdAt: Date;
    updatedAt: Date;
}

export type Section = {
    id:        string;
    name:      string;
    title:     string;
    status:    string;
    content:   Content;
    createdAt: Date;
    updatedAt: Date | null;
}

export type Content = {
    document: Document[];
}

export type Document = {
    type:     string;
    children: DocumentChild[];
}

export type Text = {
    text: string;
}

export type DocumentChild = Text | ContentData;

export type ContentData = {
    data?:         ChildData;
    type?:         string;
    children?:     Text[];
    relationship?: ContentType;
}

export type ChildData = {
    id:    string;
    label: string;
    data:  DataData;
}

export type DataData = {
    name?:  string;
    id:     string;
    url?:   string;
    title?: string;
}
