import { useState } from "react";
import PropTypes from "prop-types";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2 rounded-t-lg font-medium transition-all
                   ${
                     activeTab === index
                       ? "bg-blue-600 text-white"
                       : "bg-gray-100 text-gray-700 hover:text-black"
                   }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 bg-white rounded-lg border shadow-sm">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
};
