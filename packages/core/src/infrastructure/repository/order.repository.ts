import type { Prisma, PrismaClient } from "@prisma/client";
import type { OrderEntity } from "../../domain/entity/order.entity";

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
}
