export interface Suggestion {
    id?: number;
    title: string;
    name: string;
    message: string;
    likes?: number;
    date?: Date;
    collapsed?: boolean;
}