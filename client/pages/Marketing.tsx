// import { Departments } from "@/components/sections/Departments";

import { MarketingDepartment } from "@/components/sections/MarketingDepartment";
import { MarketingTeam } from "@/components/sections/MarketingTeam";

export default function Marketing() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold"></h1>
      <MarketingDepartment/>
      <MarketingTeam/>
    </div>
  );
}