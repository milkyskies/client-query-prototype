import type { Prisma, PrismaClient } from "@prisma/client";
import { ReservationEntity } from "../../domain/entity/reservation.entity";

export class ReservationRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async createMany(
		reservation: ReservationEntity[],
		tx?: Prisma.TransactionClient,
	): Promise<void> {
		const prisma = tx ?? this.prisma;

		await prisma.reservation.createManyAndReturn({
			data: reservation.map((entity) => entity.toPrisma()),
		});
	}

	async findAll(): Promise<ReservationEntity[]> {
		const rows = await this.prisma.reservation.findMany();

		return rows.map((row) => ReservationEntity.fromPrisma(row));
	}
}
