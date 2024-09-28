import type { Dayjs } from "dayjs";
import type { Dish as PrismaDish, DishCategory } from "@prisma/client";
import type { IngredientEntity, IngredientValues } from "./ingredient.entity";
import dayjs from "dayjs";

export type DishValues = {
	id: number;
	name: string;
	description: string;
	price: number;
	category: DishCategory;
	ingredients: IngredientValues[];
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class DishEntity {
	private constructor(public readonly values: DishValues) {}

	static create(values: DishValues): DishEntity {
		return new DishEntity(values);
	}

	static fromPrisma(
		dish: PrismaDish,
		ingredients: IngredientEntity[],
	): DishEntity {
		const values = {
			id: dish.id,
			name: dish.name,
			description: dish.description,
			price: dish.price,
			category: dish.category,
			ingredients: ingredients.map((ingredient) => ingredient.values),
			createdAt: dayjs(dish.createdAt),
			updatedAt: dayjs(dish.updatedAt),
		};

		return new DishEntity(values);
	}
}
