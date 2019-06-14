function calculateDistance(longitudeA, latitudeA, longitudeB, latitudeB) {
  const x = (longitudeB - longitudeA) * Math.cos((latitudeA + latitudeB) / 2);
  const y = (latitudeB - latitudeA);
  return Math.sqrt(x * x + y * y) * 6371;
}

export default function defibrillators(input) {
  const distances = input.defibrillators.map(defib => calculateDistance(input.lon, input.lat, defib.lon, defib.lat))
  const itemIndex = distances.indexOf(Math.min(...distances));
  return input.defibrillators[itemIndex].name;
}
