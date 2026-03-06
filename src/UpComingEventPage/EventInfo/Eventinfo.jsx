
const EventInfo = () => {
  const breakdownItems = [
    {
      icon: 'directions_bus',
      title: 'Transportation',
      description: 'Safe round-trip commute for attendees.'
    },
    {
      icon: 'restaurant',
      title: 'Full Meal',
      description: 'Nutritious lunch and refreshments.'
    },
    {
      icon: 'featured_seasonal_and_gifts',
      title: 'Event Kit',
      description: 'Activity materials and souvenir t-shirt.'
    }
  ];

  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 mb-10 border border-primary/20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-slate-900 dark:text-slate-100 text-2xl font-bold">
            Registration & Support
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Help us make this event possible for every child.
          </p>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-primary text-4xl font-black">$25</span>
          <span className="text-slate-500 font-medium">per person</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {breakdownItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventInfo;