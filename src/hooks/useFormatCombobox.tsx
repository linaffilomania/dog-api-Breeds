import {DogBreedResponse} from "../type.ts";

export const useFormatCombobox = (res:DogBreedResponse) :string[]=> {
    debugger;
    const allNames: string[] = [];
        Object.entries(res.message).forEach(([key, value]: [string, string[]]) => {
            allNames.push(key, ...value);
        });
        const uniqueSet = new Set(allNames);
        return  [...uniqueSet];
}