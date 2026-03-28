import { TechnologyDepartment } from "@/components/sections/TechnologyDepartment";
import { TechnologyTeam } from "@/components/sections/TechnologyTeam";

export default function Technology() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold"></h1>
      <TechnologyDepartment/>
      <TechnologyTeam/>
    </div>
  );
}