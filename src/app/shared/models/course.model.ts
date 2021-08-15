export interface Course {
    title: string;
    description: string;
    duration: number;
    price: number;
    imageUrl?: string;
    isActive?: boolean;
    promoCode?: string;
    hasStarted?: boolean;
}
