export type Contact = {
    id: string;
    fullName: string;
    email: string;
    topic: string;
    message: string;
    updatedAt: Date;
    createdAt: Date;
    createdBy: unknown;
    updatedBy: unknown;
}

export enum ContactTopicType {
    SOFTWARE_DESIGN = 'SOFTWARE_DESIGN',
    APPLICATIONS_DEVELOPMENT = 'APPLICATIONS_DEVELOPMENT',
    WORDPRESS_DEVELOPMENT = 'WORDPRESS_DEVELOPMENT'
}

export type ContactCreateInput = {
    fullName: string;
    email: string;
    topic: ContactTopicType
    message: string;
};