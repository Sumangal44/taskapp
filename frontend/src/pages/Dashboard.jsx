import DashboardLayout from "../layouts/DashboardLayout";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>Users</CardHeader>
          <CardContent className="text-2xl font-bold">1,245</CardContent>
        </Card>

        <Card>
          <CardHeader>Tasks</CardHeader>
          <CardContent className="text-2xl font-bold">87</CardContent>
        </Card>

        <Card>
          <CardHeader>Completed</CardHeader>
          <CardContent className="text-2xl font-bold">65%</CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
