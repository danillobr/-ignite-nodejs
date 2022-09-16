import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesReository implements ICategoriesRepository {
    findByName(name: string, description: string): Category {
        console.log(name, description);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ description, name }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesReository };
