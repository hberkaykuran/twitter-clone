export default function SidebarLink({ Icon, text, active }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl p-3 hoverAnimation ${
        active && "font-bold"
      }`}
    >
      <Icon className="h-[26px] text-white" />
      <span className="hidden xl:inline ml-5 mr-4">{text}</span>
    </div>
  );
}
