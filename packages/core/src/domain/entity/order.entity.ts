import type { Order as PrismaOrder, OrderStatus } from "@prisma/client";
import type { Dayjs } from "dayjs";
import type { DishEntity, DishValues } from "./dish.entity";
import dayjs from "dayjs";

export type OrderValues = {
	id: number;
	tableNumber: number;
	status: OrderStatus;
	dishes: DishValues[];
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class OrderEntity {
	private constructor(public readonly values: OrderValues) {}

	static create(values: OrderValues): OrderEntity {
		return new OrderEntity(values);
	}

	static fromPrisma(order: PrismaOrder, dishes: DishEntity[]): OrderEntity {
		const values: OrderValues = {
			id: order.id,
			tableNumber: order.tableNumber,
			status: order.status,
			dishes: dishes.map((dish) => dish.values),
			createdAt: dayjs(order.createdAt),
			updatedAt: dayjs(order.updatedAt),
		};

		return new OrderEntity(values);
	}
}
