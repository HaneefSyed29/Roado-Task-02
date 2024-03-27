# Shipment Validation

## Functions:

1. **isValidTrip(trip, shipment):**

   - Validates if a single trip is valid within the given shipment.
   - Returns `true` if the trip's pickup and drop locations are included in the shipment.

2. **areValidTrips(trips, shipment):**
   - Validates multiple trips against a single shipment.
   - Returns `true` if all trips are valid within the given shipment, ensuring all pickups and drops are covered.

## Usage:

1. Utilize the provided functions with appropriate parameters:
   - `isValidTrip(trip, shipment)`: Pass a single trip object and a shipment object to validate.
   - `areValidTrips(trips, shipment)`: Pass an array of trip objects and a shipment object to validate multiple trips.
2. The functions return `true` if the trips are valid within the shipment, otherwise `false`.
3. Ensure that trips and shipments adhere to the defined structures (`Trip` and `Shipment` interfaces) for accurate validation.
4. Modify and extend the provided functions as needed to suit specific requirements.

## Screenshots:

![Output](https://res.cloudinary.com/dxaovcjmr/image/upload/v1711499018/Screenshot_2024-03-27_at_5.53.14_AM_a50w7o.png)
