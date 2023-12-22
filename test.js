const array = [
  "AC Rental",
  "Audio Rental",
  "Badge Printing Kiosk",
  "Badge Printing Kiosk",
  "Car Rental",
  "Display Rental",
  "Digital Signage Standee",
  "Furniture Rental",
  "MacBook Rental",
  "Projector Rental",
  "Server Rental",
  "UPS Rental",
];

const convertedArray = array.map((item) => ({
  title: item,
  link: item.toLowerCase().replace(/\s/g, "-"), // Generating a link based on the title (lowercase with hyphens)
}));

console.log(convertedArray);
