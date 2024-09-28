import type { Prisma, PrismaClient } from "@prisma/client";
import { OrderEntity } from "../../domain/entity/order.entity";
import { IngredientEntity } from "src/domain/entity/ingredient.entity";
import { DishEntity } from "src/domain/entity/dish.entity";

export class OrderRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async createMany(
		orders: OrderEntity[],
		tx?: Prisma.TransactionClient,
	): Promise<void> {
		const prisma = tx ?? this.prisma;

		await prisma.order.createMany({
			data: orders.map((order) => order.toPrisma()),
		});
	}

	async findAll(tx?: Prisma.TransactionClient): Promise<OrderEntity[]> {
		const prisma = tx ?? this.prisma;

		const rows = await prisma.order.findMany({
			include: {
				dishes: {
					include: {
						dish: {
							include: {
								ingredients: {
									include: {
										ingredient: true,
									},
								},
							},
						},
					},
				},
			},
		});

		return rows.map((row) => {
			const dishes = row.dishes.map((dishRow) => {
				const ingredients = dishRow.dish.ingredients.map((ingredient) => {
					return IngredientEntity.fromPrisma(ingredient.ingredient);
				});

				const dish = DishEntity.fromPrisma(dishRow.dish, ingredients);

				return dish;
			});

			const order = OrderEntity.fromPrisma(row, dishes);

			return order;
		});
	}
}
