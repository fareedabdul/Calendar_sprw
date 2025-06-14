import { Calendar, User, Activity, CaseSensitive, Contact, Gauge, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#2F3E8C] text-white p-6 shadow-lg flex flex-col">
      {/* Sidebar Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-wide">
          ✨ <span className="text-white">Sparrow</span>
          <span className="text-blue-300"> X</span>
        </h1>
        <p className="text-sm text-blue-200 mt-1">Interactive Calendar</p>
      </div>

      {/* Navigation */}
      <ul className="space-y-6 text-sm font-medium">
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <Gauge size={18} /> Dashboard
        </li>
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <User size={18} /> Accounts
        </li>
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <Contact size={18} /> Contacts
        </li>
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <Users size={18} /> Leads
        </li>
        <li className="flex items-center gap-3 text-blue-300 font-semibold cursor-pointer">
          <Calendar size={18} /> Calendar
        </li>
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <CaseSensitive size={18} /> Cases
        </li>
        <li className="flex items-center gap-3 hover:text-blue-300 cursor-pointer transition-all">
          <Activity size={18} /> Activities
        </li>
      </ul>
    </div>
  );
}
