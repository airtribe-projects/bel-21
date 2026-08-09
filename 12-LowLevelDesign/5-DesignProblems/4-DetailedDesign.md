#### Detail Design of the system (30 minutes)
    - Go Entity by entity
    - Identify the attributes of the entity
    - Identify the behavious of the entity
    - Identify the relationships of the entity

Always try to follow major flows of the system
* How to Park a vehicle
* How to unpark a vehicle

Approach: Bottom to top approach
* Start with the smallest entity and build around that

### VehicleTypes (Not needed)
* type: string 

### Vehicle
* type: <VehicleTypeEnum>
* registrationNumber: string

### ParkingSpot
* type: <ParkingSpotType>
* id: <String>
- isOccupied: <Boolean> 
- isUnderMaintenence: <Boolean>
-------------------------
+ parkVechicle(): Boolean
+ unParkVechicle(): Boolean
+ putUnderMaintenence(): Boolean
+ removeFromMaintenence(): Boolean
+ isAvailable(): Boolean

### ParkingFloor
+ level: <String>
- parkingSpot: [<ParkingSpot>]
- displayPanel: <DisplayPanel>
<!-- - isUnderMaintenence: <Boolean> -->

--------------------------
+ putUnderMaintenence(): Boolean
+ removeFromMaintenence(): Boolean
+ isAvailable(): Boolean
+ getAvailableSpot(ParkingSpotType): <ParkingSpot>

#### Relationship
HAS-A relationship with ParkingSpot

### ParkingLot
parkingFloors: [<ParkingFloor>]
entryGate: <EntryGate>
exitGate: <ExitGate>
displayPanel: <DisplayPanel>

---------------------------------
- parkVehicle(vehicle: Vehicle): <ParkingTicket> 
- unparkVehicle(ticket: <ParkingTicket>):  <ParkingTicket>
- composeDisplayMessage(): <String> 

### DisplayPanel
+ showMessage(message: string)

#### Relationships:
HAS-A (Strong) ParkingFloor, EntryGate, ExitGate, DisplayPanel
USES-A Vehicle, ParkingTicket, ParkingSpotType, ParkingSpot, VehicleType


### EntryGate
- getParkingSpot(parkingFloors: [<ParkingFloor>], parkingSpotType: <ParkingSpotType>): <ParkingSpot> 
- getSpotTypeBasedOnVehicleType(vehicleType: <VehicleTypeEnum>):  <ParkingSpotType>
- generateTicket(vehicle, ParkingSpot): ParkingTicket

### ExitGate
- paymentProcess: <PaymentProcessor>
- checkout(ticket: <ParkingTicket>): <ParkingTicket>


### ParkingTicket
- entryTime
- exitTime
- vehicle
- parkingSpot
- amountPaid
- dailyPassId: 
- monthlyPss

