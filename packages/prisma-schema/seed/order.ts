import type { OrderRepository } from "@client-query/core/src/infrastructure/repository/order.repository";
import { OrderEntity } from "@client-query/core/src/domain/entity/order.entity";
import { generateId } from "@client-query/core/src/util/id";
import { OrderStatus } from "@prisma/client";
import { appDayjs } from "@client-query/core/src/util/dayjs";

export async function seedOrders(orderRepository: OrderRepository) {
	const orders = generateOrders();

	await orderRepository.createMany(orders);
}

function generateOrders(): OrderEntity[] {
	const TOTAL_RECORDS = 200_000;
	const orders: OrderEntity[] = [];

	for (let i = 0; i < TOTAL_RECORDS; i++) {
		orders.push(generateOrder());
	}

	return orders;
}

function generateOrder() {
	const orderStatuses = Object.values(OrderStatus);
	const randomStatus =
		orderStatuses[Math.floor(Math.random() * orderStatuses.length)];

	const created = appDayjs("2024-01-01")
		.add(Math.floor(Math.random() * 366), "days")
		.add(Math.floor(Math.random() * 24), "hours")
		.add(Math.floor(Math.random() * 60), "minutes")
		.add(Math.floor(Math.random() * 60), "seconds");

	const order = OrderEntity.create({
		id: generateId(),
		tableNumber: Math.floor(Math.random() * 100) + 1,
		status: randomStatus,
		createdAt: created,
		updatedAt: created,
	});

	return order;
}
