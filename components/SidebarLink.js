function SidebarLink({ text, Icon, active }) {
    return (
        <div className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3">
            <Icon className="h-7 text-white" />
            <span>{text}</span>
        </div>
    )
}

export default SidebarLink;