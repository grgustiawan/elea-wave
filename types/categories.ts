export interface Icon {
    height: number;
    url: string;
    width: number;
}

export interface CategoryItem {
    href: string;
    id: string;
    icons: Icon[];
    name: string;
}

export interface CategoriesResponse {
    href: string;
    items: CategoryItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}