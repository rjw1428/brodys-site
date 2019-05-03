export interface Beer {
    id?: string;
    beer: string;
    company: string;
    abv?: number;
    type: string;
    note?: string;
    imgUrl?: string;
    available: boolean;
}