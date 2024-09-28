import type { Prisma, PrismaClient } from "@prisma/client";
import { IngredientEntity } from "../../domain/entity/ingredient.entity";

export class IngredientRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async createMany(
		ingredients: IngredientEntity[],
		tx?: Prisma.TransactionClient,
	): Promise<void> {
		const prisma = tx ?? this.prisma;

		await prisma.ingredient.createMany({
			data: ingredients.map((ingredient) => ingredient.toPrisma()),
		});
	}

	async save(
		ingredient: IngredientEntity,
		tx?: Prisma.TransactionClient,
	): Promise<IngredientEntity> {
		const prisma = tx ?? this.prisma;

		const row = await prisma.ingredient.upsert({
			where: {
				id: ingredient.values.id,
			},
			update: ingredient.toPrisma(),
			create: ingredient.toPrisma(),
		});

		return IngredientEntity.fromPrisma(row);
	}

	async fromId(
		id: string,
		tx?: Prisma.TransactionClient,
	): Promise<IngredientEntity> {
		const prisma = tx ?? this.prisma;

		const row = await prisma.ingredient.findUniqueOrThrow({
			where: {
				id,
			},
		});

		return IngredientEntity.fromPrisma(row);
	}
}
