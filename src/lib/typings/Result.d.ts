interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}

export class Recipe {
    details: string[];
    ingredient: Ingredient[];
    source: string;
    steps: string[];
    tags: string[];
    title: string;
}

interface Result {
    id: string;
    type: string;
    recipes: Recipe[];
}