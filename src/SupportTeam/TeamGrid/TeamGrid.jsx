
import React from 'react';
import TeamMemberCard from './TeamCard';

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Donation Support Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO9TOQ_rp_kOyt_U1sYGm-H3s4liw-SBX4POh3geaaB57lnpBjwLQZKXfq7Max653j9eeAN4M1-itZS00wgl8yf5qFY95hDYa45Gvu8fsdld4UoHoEUw2qq0kG_vnwqvpTEPZWAjpAalFndt48AoROdLRMAdHoxX4IyBwSkCVH8O_UhTEGBbkrsLjHt7BRlE3KXFeUTcV_SRj8T-BsEmfshrJhkhJxiO4jYtxVNALWDeRtBC4HFiljKYkA_aTRRo4xvgL8ZZ7eygs',
      alt: 'Professional portrait of Sarah Johnson smiling'
    },
    {
      id: 2,
      name: 'Mark Davis',
      role: 'Volunteer Coordinator',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtJgRvArtU7C9pBuTTUXpZe976hOhjnGqTe__FlbKYgZgQBEo0yI8b-yp_BL_pzwKnWqeyOVGCY7vRzaowHl5p4fcNuNYxSLOAlhnd0K-krdk7djs8NxgUEYqye55e5xPLG2K-z7F_OFTJtkSr1oVJn9IXV2NWP3_3EGaVCprcVKjBcEWgBqlis9gUWq76-6GTTnAR6ZVzxVn-eyj_QV6EcDK9uhYEy7f-_i1MDb8bQZV7S-RgS_Z0TVPpZIwTXc3GMU1nao9Dk44',
      alt: 'Professional portrait of Mark Davis in office'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Grant & Funding Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoJ0TqFWjIuQx6_re6u2BGd_3itIJkrSsQseY8bxgZoJ1G2YxVQmlg-_6lt_iGrSJA_ebtZfgaQxI13L7YlRdEJSj9Ed69UybLRDOZdpx3_I2ksBAJuBX3_IhzF7gh12pKG-W0xgumDqmIzrA7VI_0dIQLTDA-NGjjamkzMlNn3OknJzfm5t5USE5GJecxGi4e7lc0s8We-cXcLO7JA3nafAnAw2QiAL7MgXxrDymqyzMigLvD_jCbdRNCNIV5EpM8IPiK91ZJxLA',
      alt: 'Professional portrait of Elena Rodriguez confident'
    },
    {
      id: 4,
      name: 'David Chen',
      role: 'Event Operations Manager',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCARmWvLL5sHE9sRSFeaWlKSP-IiPZDsNjlzC_arMh8Zg3c1Uy_Bk22LOIAZcRjy4_yNO-VMUrsAfmgQur648MjvgPsOEt3Zsrpoy91uFnPrvSMO7aiuHFMQYIteXqOX4ABxzSiY4mYAzExgQ5NN4PqINQKqtRynFv8Bih2tPtKnjLvcXFXK6svEbNJyvcsYxYJ5xqTfqUENjeQdPMqhp2qUd67rvRKrW5V31RrGiCExAaqFvlg9TnEyIUROO7xJ3BrH1wtdXpZGVs',
      alt: 'Professional portrait of David Chen smiling'
    },
    {
      id: 5,
      name: 'Sophie Muller',
      role: 'Community Outreach',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpqKaFQiaPgg9dl_xHbatq52crd1EKWw8Ztt3MCgBMKmos8p9YpAsPflFkmLtS8ZVHWwuGHrqXY8HE4nMarKitkyASxUVl8YlTeN0IijLKSOy9kgJzwOhFB9pigJ_t-jCTKerJTEQOokcZ4-KPvLSjOAUKx00iR6H7ZeF4gVu9Mdjwy-Lby2ofcBfdwI5xCckCIkPdam_iYJtvk1Yy4t6mDjQ_2-J-kbrOHQbWnxcQDGVI5QpZ4zVkHRJ1Bk_ViRPYwyOIDvM9puI',
      alt: 'Professional portrait of Sophie Muller outdoors'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Technical Support',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn76kMBSyjVKgrpx5ku49PGT1Dxgqz-0tuTwgtydOdFS24WV08KIoa7cEVADGqUtMDkxQD4qjnVyo8SfxwulfMkUEm7ZXP_QJSQ5pZ8NPIm7SP8Yuyfl1qxa7MwnWSdRMJMWj8hWWZgMQdxGGq4iAb7pP39VSdyDwV0XQdn0RJY8awV-k-xEcZSFp8NWxY_f_MwAy0i-z-34oq1W4fuGdBUMfNTksLVlk2RGYX5hZbnHpkMbmv-5O5q8QclDSz7wa9Vt2-NCWMl_o',
      alt: 'Professional portrait of James Wilson in blazer'
    },
    {
      id: 7,
      name: 'Anna Petrova',
      role: 'Transparency & Impact Reporting',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSMf0yCOIA3H4oItsCpBYr6lo4Pg8ix0NKuXUgCjflAoSrXQLGaH0uaRwBom3QL_SR6nKF-ngtBL9kJ4qScTuFXb5P-v6TLqhZqA5OWEJgmFc6RKCOIIYP9WYdaPMGMsKpLHSDh80-E6L4_SBmFjrMsfM6qNXR7aHRAvNWhTSs2hTzgUwaY7TC2MZA3XsBhKy6MyzwGOHyVOpw-EwSTKrI7isDHhmiPFGyalKDOlOd1ZPt_Lo7x55RFroVIzmJX0X-aL8uYEofThk',
      alt: 'Professional portrait of Anna Petrova analyst'
    },
    {
      id: 8,
      name: 'Marcus Thorne',
      role: 'Partnership Liaison',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLb4MhFv_gazeagIDhhK6tBp1ncyz6DjtaohFSkwKzgj5WAvb8WtdGHBBwuNze8hU7Ham5aAUEV8pRoTt0FipImvWhTQlR9t8fAt5qwAxdTac5eLXfaZMS3h87Wr7wB_7hylJFbvEZREAbU0NQLgJWgf-kDVIteWlNRqxQZQkPJ1FozoYH_38D4v5_22G27I__DiGHL5SnRWI04xRBn2SAWTgyFAs83YO4kRBItjJp0ZtLZ5-lqf0tDtrUzd3PAYRiUy8rSV-adI',
      alt: 'Professional portrait of Marcus Thorne creative'
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