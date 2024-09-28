import type { Order as PrismaOrder, OrderStatus } from "@prisma/client";
import type { Dayjs } from "dayjs";
import type { DishEntity, DishValues } from "./dish.entity";
import { appDayjs } from "../../util/dayjs";

export type OrderValues = {
	id: string;
	tableNumber: number;
	status: OrderStatus;
	dishes?: DishValues[];
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class OrderEntity {
	private constructor(public readonly values: OrderValues) {}

	static create(values: OrderValues): OrderEntity {
		return new OrderEntity(values);
	}

	static fromPrisma(order: PrismaOrder, dishes?: DishEntity[]): OrderEntity {
		const values: OrderValues = {
			id: order.id,
			tableNumber: order.tableNumber,
			status: order.status,
			dishes: dishes?.map((dish) => dish.values),
			createdAt: appDayjs(order.createdAt),
			updatedAt: appDayjs(order.updatedAt),
		};

		return new OrderEntity(values);
	}

	public toPrisma(): PrismaOrder {
		return {
			id: this.values.id,
			tableNumber: this.values.tableNumber,
			status: this.values.status,
			createdAt: this.values.createdAt.toDate(),
			updatedAt: this.values.updatedAt.toDate(),
		};
	}
}
