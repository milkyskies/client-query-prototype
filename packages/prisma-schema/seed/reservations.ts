import type { ReservationRepository } from "@client-query/core/src/infrastructure/repository/reservation.repository";
import { ReservationEntity } from "@client-query/core/src/domain/entity/reservation.entity";
import { generateId } from "@client-query/core/src/util/id";
import { appDayjs } from "@client-query/core/src/util/dayjs";
import { ReservationStatus } from "@prisma/client";
import { Gimei, Name, Address } from "@huideyeren/type-gimei";

export async function seedReservations(
	reservationRepository: ReservationRepository,
) {
	const reservations = generateReservations();

	await reservationRepository.createMany(reservations);
}

function generateReservations(): ReservationEntity[] {
	const TOTAL_RECORDS = 200_000;
	const reservations = [];

	for (let i = 0; i < TOTAL_RECORDS; i++) {
		const reservation = generateReservation();

		reservations.push(reservation);
	}

	return reservations;
}

function generateReservation(): ReservationEntity {
	const reservationStatuses = Object.values(ReservationStatus);
	const randomStatus =
		reservationStatuses[Math.floor(Math.random() * reservationStatuses.length)];

	const created = appDayjs("2024-01-01")
		.add(Math.floor(Math.random() * 366), "days")
		.add(Math.floor(Math.random() * 24), "hours")
		.add(Math.floor(Math.random() * 60), "minutes")
		.add(Math.floor(Math.random() * 60), "seconds");

	const time = created.add(Math.floor(Math.random() * 60), "days");

	const reservation = ReservationEntity.create({
		id: generateId(),
		time,
		createdAt: created,
		updatedAt: created,
		partySize: Math.floor(Math.random() * 5) + 1,
		customerName: Gimei.randomName().kanji(),
		status: randomStatus,
	});

	return reservation;
}
