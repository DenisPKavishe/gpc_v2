
import React from 'react';
import TeamMemberCard from './TeamCard';

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Denis Priscus',
      role: 'Developer, Graphic Designer and Coordinator',
      image: './denis.jpeg',
      alt: 'denis',
      tsup: 'https://wa.me/255746965913'
    },
    {
      id: 2,
      name: 'Goodluck Valentine',
      role: 'Developer and Main Coordinator',
      image: './goodluck.jpeg',
      alt: 'goodluck',
      tsup: 'https://wa.me/255756002103'
    },
    {
      id: 3,
      name: 'Rahma',
      role: 'Coordinator and representative',
      image: './rahma.jpeg',
      alt: 'rahma',
      tsup: 'https://wa.me/255742343776'
    },
    {
      id: 4,
      name: 'Dominic Chuwa',
      role: 'Secretary and Developer',
      image: './dommy.jpeg',
      alt: 'domy',
      tsup: 'https://wa.me/255659263416'
    },
    {
      id: 5,
      name: 'John Joseph',
      role: 'Coordinator',
      image: './jjmakuru.jpeg',
      alt: 'domy',
      tsup: 'https://wa.me/255760370490'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamGrid;