export enum ContentStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
}

export enum ContentType {
    LINK = "Link",
    SERVICE = "Service",
    WORK = "Work",
    IMAGE = "Image",
}

export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

export const CORE_API_URL = process.env.CORE_API_URL || 'http://localhost:8080/api/graphql';
