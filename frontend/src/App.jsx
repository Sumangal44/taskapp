import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Tasks from "./pages/Tasks";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-4 sm:px-6 lg:px-10 mx-auto w-full max-w-6xl">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      {/* ...existing routes... */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/tasks" element={<Tasks />} />
    </>
  );
}
