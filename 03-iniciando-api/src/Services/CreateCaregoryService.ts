import { CategoriesRepository } from "../repositories/CategortiesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    private categoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already existis!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
