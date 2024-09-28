import type { Prisma, PrismaClient } from "@prisma/client";
import { DishEntity } from "../../domain/entity/dish.entity";

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
}
