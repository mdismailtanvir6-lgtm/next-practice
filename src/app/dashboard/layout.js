import Sidebar from "./sidebar/page";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen container m-auto bg-gray-800 text-black rounded-lg overflow-hidden mt-10">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}