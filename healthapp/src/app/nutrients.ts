export class Nutrients {

    nutrients: Nutrients[];
    Calories: string;
    Protein: string;
    Carbs: string;
    Fat: string;
    Notes: string;

    constructor(calories: string, protein: string, carbs: string, fat: string, notes: string) {
        this.Calories = calories;
        this.Protein = protein;
        this.Carbs = carbs;
        this.Fat = fat;
        this.Notes = notes;
    }

}
