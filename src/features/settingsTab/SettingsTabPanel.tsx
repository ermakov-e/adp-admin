import React from "react";
import './index.scss'

interface SettingsTabPanelProps {
  tab: number;
  onTab: (value: number) => void;
}

const SettingsTabPanel: React.FC<SettingsTabPanelProps> = ({ tab, onTab }) => {
  return (
    <div className="settings__tabs">
      <div
        className={`settings__tabs-item ${tab === 0 && "active"}`}
        onClick={() => onTab(0)}
      >
        Пользователи
      </div>
      <div className="settings__tabs-space"></div>
      <div
        className={`settings__tabs-item ${tab === 1 && "active"}`}
        onClick={() => onTab(1)}
      >
        Статусы
      </div>
      <div className="settings__tabs-space"></div>
      <div
        className={`settings__tabs-item ${tab === 2 && "active"}`}
        onClick={() => onTab(2)}
      >
        Приоритеты
      </div>
      <div className="settings__tabs-space"></div>
      <div
        className={`settings__tabs-item ${tab === 3 && "active"}`}
        onClick={() => onTab(3)}
      >
        Базовые настройки
      </div>
    </div>
  );
};

export default SettingsTabPanel;
