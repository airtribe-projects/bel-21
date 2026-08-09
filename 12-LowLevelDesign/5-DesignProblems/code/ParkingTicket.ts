import { Vehicle } from "./Vehicle";
import { ParkingSpot } from "./ParkingSpot";
/*
 * ParkingTicket 
 *
 * Mandatory:
 *  - ticketId
 *  - vehicle
 *  - parkingSpot
 *  - entryTime
 *
 * Optional:
 *  - exitTime
 *  - amountPaid
 *  - isPaid
 *  - monthlyPassId
 */


export class ParkingTicket {
  private readonly ticketId: string;
  private readonly vehicle: Vehicle;
  private readonly parkingSpot: ParkingSpot;
  private readonly floorId: string;
  private readonly entryTime: Date;

  private exitTime: Date | null;
  private amountPaid: number;
  private isPaid: boolean;
  private monthlyPassId: string | null;
  private dailyPassId: string | null;

  // --- One-line overloads ---
  // Telescoping of a constructor   
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number, isPaid: boolean);
  constructor(ticketId: string, vehicle: Vehicle, parkingSpot: ParkingSpot, floorId: string, entryTime: Date, exitTime: Date, amountPaid: number, isPaid: boolean, monthlyPassId: string);

  // --- Implementation ---
  constructor(
    ticketId: string,
    vehicle: Vehicle,
    parkingSpot: ParkingSpot,
    floorId: string,
    entryTime: Date,
    exitTime?: Date,
    amountPaid?: number,
    isPaid?: boolean,
    monthlyPassId?: string
  ) {
    if (!ticketId || !vehicle || !parkingSpot || !floorId || !entryTime) {
      throw new Error("Missing required fields for ParkingTicket");
    }

    this.ticketId = ticketId;
    this.vehicle = vehicle;
    this.parkingSpot = parkingSpot;
    this.floorId = floorId;
    this.entryTime = entryTime;

    this.exitTime = exitTime ?? null;
    this.amountPaid = amountPaid ?? 0;
    this.isPaid = isPaid ?? false;
    this.monthlyPassId = monthlyPassId ?? null;
  }

    setExitTime(time: Date): this {
    this.exitTime = time;
    return this;
  }

  setAmount(amount: number): this {
    this.amountPaid = amount;
    return this;
  }

  markPaid(): this {
    this.isPaid = true;
    return this;
  }
}
