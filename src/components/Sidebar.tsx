import React from 'react';

interface SidebarProps {
  items?: { label: string; link: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items = [] }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;