import type {
	Reservation as PrismaReservation,
	ReservationStatus,
} from "@prisma/client";
import type { Dayjs } from "dayjs";
import { appDayjs } from "../../util/dayjs";

export type ReservationValues = {
	id: string;
	customerName: string;
	time: Dayjs;
	status: ReservationStatus;
	createdAt: Dayjs;
	updatedAt: Dayjs;
	partySize: number;
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
			time: appDayjs(reservation.time),
			status: reservation.status,
			createdAt: appDayjs(reservation.createdAt),
			updatedAt: appDayjs(reservation.updatedAt),
			partySize: reservation.partySize,
		};

		return new ReservationEntity(values);
	}

	public toPrisma(): PrismaReservation {
		return {
			id: this.values.id,
			customerName: this.values.customerName,
			time: this.values.time.toDate(),
			partySize: this.values.partySize,
			status: this.values.status,
			createdAt: this.values.createdAt.toDate(),
			updatedAt: this.values.updatedAt.toDate(),
		};
	}
}
