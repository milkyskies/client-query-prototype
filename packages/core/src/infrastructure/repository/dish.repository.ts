import type { Prisma, PrismaClient } from "@prisma/client";
import { DishEntity } from "../../domain/entity/dish.entity";
import { IngredientEntity } from "src/domain/entity/ingredient.entity";

export class DishRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async createMany(
		dishes: DishEntity[],
		tx?: Prisma.TransactionClient,
	): Promise<void> {
		const prisma = tx ?? this.prisma;

		await prisma.dish.createMany({
			data: dishes.map((dish) => dish.toPrisma()),
		});
	}

	async save(
		dish: DishEntity,
		tx?: Prisma.TransactionClient,
	): Promise<DishEntity> {
		const prisma = tx ?? this.prisma;

		const row = await prisma.dish.upsert({
			where: {
				id: dish.values.id,
			},
			update: dish.toPrisma(),
			create: dish.toPrisma(),
		});

		return DishEntity.fromPrisma(row);
	}

	async findAll(): Promise<DishEntity[]> {
		const rows = await this.prisma.dish.findMany({
			include: {
				ingredients: {
					include: {
						ingredient: true,
					},
				},
			},
		});

		return rows.map((row) => {
			const ingredients = row.ingredients.map((ingredient) =>
				IngredientEntity.fromPrisma(ingredient.ingredient),
			);

			return DishEntity.fromPrisma(row, ingredients);
		});
	}
}
