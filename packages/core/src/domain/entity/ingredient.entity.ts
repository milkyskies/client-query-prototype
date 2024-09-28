import type { Ingredient as PrismaIngredient } from "@prisma/client";
import type { Dayjs } from "dayjs";
import { appDayjs } from "../../util/dayjs";
import { generateId } from "../../util/id";

export type IngredientValues = {
	id: string;
	name: string;
	unit: string;
	price: number;
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class IngredientEntity {
	private constructor(public readonly values: IngredientValues) {}

	static create(values: IngredientValues): IngredientEntity {
		return new IngredientEntity(values);
	}

	static new(values: {
		name: string;
		unit: string;
		price: number;
	}): IngredientEntity {
		return new IngredientEntity({
			id: generateId(),
			name: values.name,
			unit: values.unit,
			price: values.price,
			createdAt: appDayjs(),
			updatedAt: appDayjs(),
		});
	}

	static fromPrisma(ingredient: PrismaIngredient): IngredientEntity {
		const values = {
			id: ingredient.id,
			name: ingredient.name,
			unit: ingredient.unit,
			price: ingredient.price,
			createdAt: appDayjs(ingredient.createdAt),
			updatedAt: appDayjs(ingredient.updatedAt),
		};

		return new IngredientEntity(values);
	}

	public toPrisma(): PrismaIngredient {
		return {
			id: this.values.id,
			name: this.values.name,
			unit: this.values.unit,
			price: this.values.price,
			createdAt: this.values.createdAt.toDate(),
			updatedAt: this.values.updatedAt.toDate(),
		};
	}
}
