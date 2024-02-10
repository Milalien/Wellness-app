export class Nutrients {

    Kcal: number;
    Protein: number;
    Carbs: number;
    Fats: number;
    Notes: string;

    constructor(kcal: number, protein: number, carbs: number, fats: number, notes: string) {
        this.Kcal = kcal;
        this.Protein = protein;
        this.Carbs = carbs;
        this.Fats = fats;
        this.Notes = notes;
    }

}
