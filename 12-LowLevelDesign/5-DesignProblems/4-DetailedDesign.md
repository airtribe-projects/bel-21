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






### Ticket
vehicle
parkingSpot



### ParkingSpot





### PaymentTypes

### Ticket

### ParkingLot

----------------
checkIn(vehicleType, registrationNumber): 
checkOut: 

