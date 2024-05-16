import SettingsTabPanel from "features/settingsTab/SettingsTabPanel";
import React, { useState } from "react";
import BasicSettings from "widgets/settingsPage/BasicSettings";
import PrioritySettings from "widgets/settingsPage/PrioritySettings";
import StatusSettings from "widgets/settingsPage/StatusSettings";
import UsersSettings from "widgets/settingsPage/UsersSettings";

const SettingsPage: React.FC = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <main className="main">
      <div className="main__container">
        <div>
          <h2 className="main__container-title">Настройки</h2>
          <SettingsTabPanel onTab={setTab} tab={tab} />
        </div>
        {tab === 0 && <UsersSettings />}
        {tab === 1 && <StatusSettings />}
        {tab === 2 && <PrioritySettings />}
        {tab === 3 && <BasicSettings />}
      </div>
    </main>
  );
};

export default SettingsPage;
