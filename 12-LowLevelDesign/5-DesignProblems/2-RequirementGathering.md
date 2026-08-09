1. Gurwinder: is it for Office / Malls: Generic / Be flexible
2. Gurwinder: What kind of vehicles: 2W/3W/4W/Tempo/Truck
3. Gurwinder: Type of gates: 1 for entry and 1 for exit
4. Sravanthi: Capacity: N
5. Purander: MultiLevel: Y 
6. Purander: Emergency Exit: No
7. Purander: Smart Parking: Automate ticketing system with no human intervention
8. Ledger of parking spot: Yes
9. Ravi: Find the nearest parking spot: No
10. Gurwinder: Types of Payment: System should exists but we are not design it
11. Purander: Pricing Model, There should be logic for pricing model
12. Ravi: Different parking spot sizes: Yes
13. Valet Parking: No
14. Gurwinder: Spot assignment approach: Yes, start with a simple approach
15. Sarvanti: Time for free parkling ==>  same as question 11
16. Gurwinder: Support for ticket
17. Gurwinder: Loss of ticket ==> Manual overrride
18. Ravi: EntryGate and ExitGate equipped with Display Panel
19. Sravanti: Prior booking of slot: Good to have feature, but let's not build it for the time being
20. Pradeep: Support for multiple entry and exit points:  No
21. Gurwinder: Should we support admin ops: Yes
22. Sravanti: Details of onwer/driver: No
23. Gurwinder: What happens if payment fails: Payment service provider would handle it
24. Gurwinder: Audit history? No
25. Gurwinder: Reserve spot? Nice to have feature, We will start with no
26. Gurwinder: What happens if parking is full? Depends on the car/owner
27. Sravanti: Guidance to the spot? This is more of a infrastucture problem
28. Ravi: Fire Safety: No
29. Krishna: Should we integrate security cameras: No
30. Lifts: Should exist in the system, not managed by Parking Lot
31. Parking Fee: 
32. Should support ParkingLot Maintaince: Yes

### Major Entities of the System
* Vehicle
    * VehicleTypes
* Payment
    * PaymentTypes
* ParkingSpot
* ParkingSpotType
* Ticket
    *  TicketStatus
* TimeDuration (Can this be an entity)
* PricingModel (Can this be an entity)
* EntryGate
* EntryGate
* ParkingLevel/ParkingFloor
* DisplayPanel
* ParkingLot
