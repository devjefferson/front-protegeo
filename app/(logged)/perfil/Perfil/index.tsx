"use client";

import { AnalitcsCards } from "@/components/AnalitcsCards";

export default function Perfil({ data }: any) {
  return (
    <main className="flex min-h-screen flex-col  px-4">
        <div className="h-48 container  lg:h-auto ">
          <h1 className="text-2xl font-bold mb-6">{data.name} {data.surname}</h1>

          
      <AnalitcsCards data={{}} />
          

          {/* Charts Section */}
          <div className="mt-8 " >
            <h2 className="text-xl font-bold mb-4">Performance Chart</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Placeholder for chart */}
              <div className="w-full h-64 bg-gray-200 text-gray-800">Chart goes here</div>
            </div>
          </div>
  
        </div>
    </main>
  );
}
