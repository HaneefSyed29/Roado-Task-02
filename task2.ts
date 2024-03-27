interface Trip {
  pickup: string;
  drop: string;
}

interface Shipment {
  pickups: string[];
  drops: string[];
}

function isValidTrip(trip: Trip, shipment: Shipment): boolean {
  return (
      shipment.pickups.includes(trip.pickup) &&
      shipment.drops.includes(trip.drop)
  );
}

function areValidTrips(trips: Trip[], shipment: Shipment): boolean {
  const visitedPickups = new Set<string>();
  const visitedDrops = new Set<string>();

  for (const trip of trips) {
      if (!isValidTrip(trip, shipment)) {
          return false;
      }

      visitedPickups.add(trip.pickup);
      visitedDrops.add(trip.drop);
  }

  // Check if all pickups and drops are visited
  for (const pickup of shipment.pickups) {
      if (!visitedPickups.has(pickup)) {
          return false;
      }
  }

  for (const drop of shipment.drops) {
      if (!visitedDrops.has(drop)) {
          return false;
      }
  }

  return true;
}

// Example usage:
const shipment: Shipment = {
  pickups: ['A', 'B'],
  drops: ['C', 'D']
};

const validTrips: Trip[] = [
  { pickup: 'A', drop: 'C' },
  { pickup: 'B', drop: 'D' }
];

const invalidTrips: Trip[] = [
  { pickup: 'A', drop: 'W1' },
  { pickup: 'B', drop: 'W2' },
  { pickup: 'W3', drop: 'C' },
  { pickup: 'W4', drop: 'D' }
];

console.log("Are valid trips valid?", areValidTrips(validTrips, shipment));
console.log("Are invalid trips valid?", areValidTrips(invalidTrips, shipment));
