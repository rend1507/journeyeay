'use client'
import { FC } from 'react';
import { useParams } from 'next/navigation';

interface Tour {
  id: number;
  name: string;
  description: string;
}

const tourData: Tour[] = [
  { id: 1, name: 'Mount Bromo Adventure', description: 'A thrilling journey to Mount Bromo.' },
  { id: 2, name: 'Bali Beach Bliss', description: 'Relax on the shores of Bali.' },
  { id: 3, name: 'Yogyakarta Cultural Tour', description: 'Explore the culture of Yogyakarta.' },
];

const TourDetailPage: FC = () => {
  const { id } = useParams(); // Use useParams to get the dynamic route parameter

  const tour = tourData.find((tour) => tour.id.toString() === id);

  if (!tour) {
    return <p>Tour not found</p>;
  }

  return (
    <div>
      <h1>{tour.name}</h1>
      <p>{tour.description}</p>
    </div>
  );
};

export default TourDetailPage;
