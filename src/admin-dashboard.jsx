import React from "react";

export default function AdminDashboard() {
  // Get users from localStorage (excluding admin)
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  // Filter out users without a name or loginDate
  users = users.filter(u => (u.firstName || u.lastName) && u.loginDate);

  function formatDate(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-gradient-to-br from-[#003366] via-[#1abc9c] to-[#38ef7d]">
      <h1 className="text-4xl font-bold mb-10 text-white">Admin Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-full md:w-1/3 border border-black" style={{boxShadow: '0 4px 24px 0 #1abc9c'}}>
          <span className="text-lg mb-2 text-[#003366]">Total Users</span>
          <span className="text-5xl font-bold" style={{color: '#38ef7d'}}>{users.length}</span>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 border border-[#1abc9c]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#003366] via-[#1abc9c] to-[#38ef7d]">User List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left" style={{color: '#003366'}}>
            <thead>
              <tr className="border-b" style={{borderColor: '#1abc9c', background: '#e6f9f5'}}>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Login Date</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-4 px-4 text-center" style={{color: '#1abc9c'}}>No users found.</td>
                </tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={idx} className="border-b transition hover:brightness-110" style={{borderColor: '#1abc9c'}}>
                    <td className="py-3 px-4">{idx + 1}</td>
                    <td className="py-3 px-4 font-medium">{user.firstName} {user.lastName}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4" style={{color: 'red'}}>{formatDate(user.loginDate)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 