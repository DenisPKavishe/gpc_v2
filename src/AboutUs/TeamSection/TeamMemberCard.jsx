// components/TeamMemberCard.jsx
import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
      <img
        alt={member.alt}
        className="size-24 rounded-full mx-auto mb-4 object-cover"
        src={member.image}
      />
      <h4 className="font-bold text-lg">{member.name}</h4>
      <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
      <p className="text-xs text-slate-500">{member.description}</p>
    </div>
  );
};

export default TeamMemberCard;