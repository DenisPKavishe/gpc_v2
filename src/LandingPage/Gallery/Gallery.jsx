
const GalleryHero = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQUnRCC37Zwvch_TsMTXpYL1YzHaewBproSU8yPT3JeSNitX8U1EIiYNnRe6xZX7hk5EuP3aOobNXuNJMFZmjCkwwMNl54YHXiHseTCcEKODonQNEn_g1mqgdNEtku0yZx4lBRdpKmRMzZ-IZgFJqRU9BoBjosm7plSskGFfljm7o2GjJS_GZZ4LtCHd17EcQt-lQ9jBtpTQX0xULAH0jlCxdoVaz9bshc6E1kZzbcAcSfThh59M8ihav81GaKxQuYKIfipxtPkpk',
      alt: 'People planting trees in a park',
      span: 'col-span-1',
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ImpPJLCdwknhTiMrLClUoUyBM8K7SGAaQgol0KDmrhIjJvcBGb77-TlnauqdJkjSk_Y4m-Iij1EFILPZZJIDWMQUYgpmMvYilpotsYhkjfij0VhoBEZACvlPIRp5ZPAsd0cfFu1nly8OoXiphyCcPSLggT03_uYdS0NCi5wrGxGBXPFoMdUeoPSnS943wZbV0ZAumgAVjvq1qe1O1yOvSapp6Jfo73rcEjesYdEmyAyPIge1HtLnA7qH9chZDbxTlSTtG1iODhE',
      alt: 'Volunteers talking with elderly community members',
      span: 'md:row-span-2',
    },
    {
      id: 3,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK1EIc6XQ-XDBpetVIP15yhlubKv6lFvvJoTshA60aT7yNg6N7HxA9aIPyNDojTnW9HSnpuJYWXxpDyQuo_oAxyQdyQuIlhsRVIiHzwRl4zgpzi6axaU5ivkC4hS21-aeAA53rYS0W06DBA115uOxgIf6wbV0d0RfJMwtAkamOuVSgu0mCBMwP3NoaZwHzZOYn3SRveRMJJAysHEPEXpVrrf9TqA4_Teoyp8ihom7x_6-9i15RTMFbMrBzy4yu4sQmLM0Hm43Bxdg',
      alt: 'Children smiling at a community event',
      span: 'col-span-1',
    },
    {
      id: 4,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxwP8d0GCTy2MD1SAGAu3Ju9NEHsw1uRpS9qrr9Y2MY-uoVx_FOqw-v6XVQ_yiEi55BbrO3RUC6rv27dJrBBLE5nsbiAEiGUibkC32ziEDtwcIVyvzpOl8yMYMGb8oBpPjS2uW575R4YcVQFN-n1pJSwUgFVRjf2f66iMgenHAKlcEgSbuPHdlNrZAsnxflNYAG76_SihVMTSyAOW3CoiKzbZpFNxaDXWqtHAQO3hnST_5mgNnjR-r-bLmLbyPy1qqSNJUlAjOI9E',
      alt: 'Volunteers distributing clothes to those in need',
      span: 'md:col-span-1',
    },
    {
      id: 5,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzyFcxDqoIr6lPVNfybiC11PyvhZAxc_uVRTmTSmHrTdFgorWiCbgRnjenmwjrdrQE_H0ZiIGehVvayWgzZNy8-p7hn0Sfk8zimm3ssa4F0tN-WyjcBogtAHAL5G-UOcd_g0-LcoK02tJV0V0QalGS_locrBnVxnr2FnFl_RgCjv85v1_hG6l7LqsRWjuOZQpmPM4N7BYC_pgSqbBSK7k894WsCEaaKTklTHLqbxBnYlWSBDdJ53rcsYeRsHPkMRLsk1mCyroJgi4',
      alt: 'A group of smiling volunteers in blue shirts',
      span: 'col-span-1',
    },
    {
      id: 6,
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrjLSqKQTJhMEgRD8yVLj3R-261wWj9qYkHW4OHUXuhZYZKcsGpgkCYD6nqBfA9nYabodMH_pzvf_CYz6um9LdzaspLp-oeUKFW4AmaStDv4AqUsnRgaMz77PEzUWsx0tgMEdcb53mQ67jrIidsn5bLADgA7rGAWyJAflDi2uwvA1mSXilmDlqjs-J052QFpykELlBnE7FYIeL_ZWtrbFV8anx6fcdcmvGg5ZBz3kbNZCB9kHIxEMO84op7Ti9unkYBLdT1A9FUXw',
      alt: 'Wide shot of community park development project',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Impact Gallery</h2>
          <p className="text-slate-500 mt-2">
            Moments of connection, support, and growth in our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 ${image.span}`}
            >
              <img
                alt={image.alt}
                className="w-full h-full object-cover"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;