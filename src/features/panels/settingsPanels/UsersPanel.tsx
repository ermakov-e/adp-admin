import React, { useState } from "react";
import CustomSerach from "shared/ui/search/Search";
import "../index.scss";
import CustomButton from "shared/ui/buttons/CustomButton";

const UsersPanel: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const onClickAdd = () => {};
  return (
    <div className="panel">
      <div className="panel__block">
        <CustomSerach value={search} onChange={(value) => setSearch(value)} />
      </div>
      <div className="panel__block">
        <CustomButton
          title="Добавить нового пользователя"
          onClick={onClickAdd}
          type="withIcon"
        />
      </div>
    </div>
  );
};

export default UsersPanel;
