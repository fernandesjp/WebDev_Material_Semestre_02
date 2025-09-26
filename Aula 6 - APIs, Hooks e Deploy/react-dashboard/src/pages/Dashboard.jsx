import Tabs from "../components/Tabs";
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
       <Button>Click me</Button>
      <Tabs />
    </div>
  );
}
