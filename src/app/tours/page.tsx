const tours = [
  {
    name: "Mount Bromo Adventure",
    description: "A thrilling journey to the breathtaking Mount Bromo.",
  },
  {
    name: "Bali Beach Bliss",
    description: "Relax on the beautiful shores of Bali’s beaches.",
  },
  {
    name: "Yogyakarta Cultural Experience",
    description: "Explore the rich culture of Yogyakarta.",
  },
];

export default function Tours() {
  return (
    <section>
      <h1>Our Tours</h1>
      <div style={gridStyle}>
        {tours.map((tour, index) => (
          <div key={index} style={tourCard}>
            <h3>{tour.name}</h3>
            <p>{tour.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Styles
const gridStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "50px 20px",
};

const tourCard = {
  width: "30%",
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "10px",
};
