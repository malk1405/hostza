import { useCallback, useState } from "react";

const useId = id => {
  const [selectedId, setSelectedId] = useState(id);

  const onClick = useCallback(
    e => {
      const id = e.currentTarget.dataset.id;
      setSelectedId(selectedId => (selectedId === id ? null : id));
    },
    [setSelectedId]
  );

  return { selectedId, onClick };
};

export default useId;
