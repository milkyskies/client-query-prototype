import { DishRepository } from "@client-query/core/src/infrastructure/repository/dish.repository";
import { IngredientRepository } from "@client-query/core/src/infrastructure/repository/ingredient.repository";
import { OrderRepository } from "@client-query/core/src/infrastructure/repository/order.repository";
import { ReservationRepository } from "@client-query/core/src/infrastructure/repository/reservation.repository";
import { PrismaClient } from "@prisma/client";
import { seedDishes } from "./seed/dishes";
import { seedIngredients } from "./seed/ingredients";
import { seedOrders } from "./seed/order";
import { seedReservations } from "./seed/reservations";

const prisma = new PrismaClient();

async function main() {
	const ingredientRepository = new IngredientRepository(prisma);
	const dishRepository = new DishRepository(prisma);
	const orderRepository = new OrderRepository(prisma);
	const reservationRepository = new ReservationRepository(prisma);

	console.log("Starting seeding");

	console.log("Seeding ingredients");

	await seedIngredients(ingredientRepository);

	console.log("Successfully seeded ingredients");

	console.log("Seeding dishes");

	await seedDishes(dishRepository);

	console.log("Successfully seeded dishes");

	console.log("Seeding orders");

	await seedOrders(orderRepository);

	console.log("Successfully seeded orders");

	console.log("Seeding reservations");

	await seedReservations(reservationRepository);

	console.log("Successfully seeded reservations");
}

main();
