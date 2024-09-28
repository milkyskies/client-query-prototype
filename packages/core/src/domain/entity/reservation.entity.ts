import type {
	Reservation as PrismaReservation,
	ReservationStatus,
} from "@prisma/client";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export type ReservationValues = {
	id: number;
	customerName: string;
	time: Dayjs;
	status: ReservationStatus;
	createdAt: Dayjs;
	updatedAt: Dayjs;
};

export class ReservationEntity {
	private constructor(public readonly values: ReservationValues) {}

	static create(values: ReservationValues): ReservationEntity {
		return new ReservationEntity(values);
	}

	static fromPrisma(reservation: PrismaReservation): ReservationEntity {
		const values = {
			id: reservation.id,
			customerName: reservation.customerName,
			time: dayjs(reservation.time),
			status: reservation.status,
			createdAt: dayjs(reservation.createdAt),
			updatedAt: dayjs(reservation.updatedAt),
		};

		return new ReservationEntity(values);
	}
}
