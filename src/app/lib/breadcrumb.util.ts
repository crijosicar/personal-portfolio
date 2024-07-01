export const convertBreadcrumb = (pathName: string) => {
    return pathName.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü').toUpperCase();
};
