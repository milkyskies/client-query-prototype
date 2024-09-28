import type { Ingredient as PrismaIngredient } from "@prisma/client";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export type IngredientValues = {
	id: number;
	name: string;
	unit: string;
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class IngredientEntity {
	private constructor(public readonly values: IngredientValues) {}

	static create(values: IngredientValues): IngredientEntity {
		return new IngredientEntity(values);
	}

	static fromPrisma(ingredient: PrismaIngredient): IngredientEntity {
		const values = {
			id: ingredient.id,
			name: ingredient.name,
			unit: ingredient.unit,
			createdAt: dayjs(ingredient.createdAt),
			updatedAt: dayjs(ingredient.updatedAt),
		};

		return new IngredientEntity(values);
	}
}
