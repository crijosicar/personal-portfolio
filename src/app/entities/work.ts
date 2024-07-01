export type Work = {
    id: string;
    company: string;
    title: string;
    slug: string;
    description: string;
    startDate: Date;
    endDate?: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
};
