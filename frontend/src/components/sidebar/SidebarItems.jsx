import PropTypes from "prop-types";

export default function SidebarItems({ 
    icon: Icon,
    label, 
    active, 
    onClick 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        items-center
        gap-3
        w-full
        px-4
        py-3
        rounded-lg
        transition-all
        ${
          active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}

SidebarItems.PropTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
