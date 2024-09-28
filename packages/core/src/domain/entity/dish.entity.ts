import type { Dayjs } from "dayjs";
import type { Dish as PrismaDish, DishCategory } from "@prisma/client";
import type { IngredientEntity, IngredientValues } from "./ingredient.entity";
import { appDayjs } from "../../util/dayjs";
import { generateId } from "../../util/id";

export type DishValues = {
	id: string;
	name: string;
	description: string;
	price: number;
	category: DishCategory;
	ingredients?: IngredientValues[];
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class DishEntity {
	private constructor(public readonly values: DishValues) {}

	static create(values: DishValues): DishEntity {
		return new DishEntity(values);
	}

	static new(values: {
		name: string;
		price: number;
		category: DishCategory;
		ingredients: IngredientEntity[];
	}) {
		const dish = DishEntity.create({
			id: generateId(),
			name: values.name,
			price: values.price,
			category: values.category,
			ingredients: values.ingredients.map((ingredient) => ingredient.values),
			description: "",
			createdAt: appDayjs(),
			updatedAt: appDayjs(),
		});

		return dish;
	}

	static fromPrisma(
		dish: PrismaDish,
		ingredients?: IngredientEntity[],
	): DishEntity {
		const values = {
			id: dish.id,
			name: dish.name,
			description: dish.description,
			price: dish.price,
			category: dish.category,
			ingredients: ingredients?.map((ingredient) => ingredient.values),
			createdAt: appDayjs(dish.createdAt),
			updatedAt: appDayjs(dish.updatedAt),
		};

		return new DishEntity(values);
	}

	public toPrisma(): PrismaDish {
		return {
			id: this.values.id,
			name: this.values.name,
			description: this.values.description,
			price: this.values.price,
			category: this.values.category,
			createdAt: this.values.createdAt.toDate(),
			updatedAt: this.values.updatedAt.toDate(),
		};
	}
}
