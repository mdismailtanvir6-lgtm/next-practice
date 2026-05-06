export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      <p className="text-gray-600 mb-6">
        এখানে তুমি তোমার dashboard settings manage করতে পারবে।
      </p>

      {/* Settings Box */}
      <div className="bg-white p-6 rounded shadow space-y-6">

        {/* Profile Setting */}
        <div>
          <h2 className="font-semibold mb-2">Profile</h2>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email Setting */}
        <div>
          <h2 className="font-semibold mb-2">Email</h2>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Password Setting */}
        <div>
          <h2 className="font-semibold mb-2">Password</h2>
          <input
            type="password"
            placeholder="New password"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Save Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save Changes
        </button>

      </div>
    </div>
  );
}