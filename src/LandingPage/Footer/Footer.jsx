
const Footer = () => {
  return (
    <footer className="bg-blue-900 dark:bg-background-dark/80 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
              </div>
              <h2 className="text-xl font-black tracking-tight">God's Plan Charity</h2>
            </div>

            <p className="text-white dark:text-slate-400 max-w-sm">
              Thank you for being part of our journey. Your support and belief in our mission allow us to
              continue serving those who need it most.
            </p>

          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                    Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                    Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-800 transition-colors">
                  Financial Reports
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li className="text-white flex items-start gap-3">
                <span className="material-symbols-outlined text-white">location_on</span>
                Arusha, Tanzania
              </li>
              <li className="text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-white">call</span>
                +2557 469 65913
              </li>
              <li className="text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-white">email</span>
                godsplancharity@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="text-white border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 God's Plan Charity. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-blue-800">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-blue-800">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;