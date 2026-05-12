// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>
//       <p>Welcome {session?.user?.name}</p>

//       {/* Demo Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="font-semibold">Users</h2>
//           <p className="text-2xl mt-2">120</p>
//         </div>

//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="font-semibold">Orders</h2>
//           <p className="text-2xl mt-2">45</p>
//         </div>

//         <div className="p-4 bg-white rounded shadow">
//           <h2 className="font-semibold">Revenue</h2>
//           <p className="text-2xl mt-2">$2,300</p>
//         </div>
//       </div>
//     </div>
//   );
// }









'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Get user from localStorage
  //   const storedUser = localStorage.getItem('user');
    
  //   if (!storedUser) {
  //     // Redirect to login if no user
  //     router.push('/login');
  //   } else {
  //     setUser(JSON.parse(storedUser));
  //     setLoading(false);
  //   }
  // }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <h2>User Information</h2>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <label>Name:</label>
                <p>{user.name}</p>
              </div>
              <div className={styles.infoItem}>
                <label>Email:</label>
                <p>{user.email}</p>
              </div>
              <div className={styles.infoItem}>
                <label>Joined:</label>
                <p>{new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

