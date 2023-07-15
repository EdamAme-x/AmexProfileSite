import { useState } from "preact/hooks";

function useKeep(init_val, id) {
  const [valer, setValrt] = useState(init_val);

    if (!localStorage.getItem("_useKeep_")) {
      const initialValue = {};
      initialValue[id] = { value: init_val, before: false };
      localStorage.setItem("_useKeep_", JSON.stringify(initialValue));
      setValrt(init_val);
    } else {
      const storedValue = JSON.parse(localStorage.getItem("_useKeep_")) || {};
      const valObj = storedValue[id] || { value: init_val, before: false };
      setValrt(valObj.value);
    }

  function setValStorage(value) {
    setValrt(value);
    const val = JSON.parse(localStorage.getItem("_useKeep_")) || {};
    const valObj = val[id] || { value: init_val, before: false };
    valObj.before = valObj.value;
    valObj.value = value;
    val[id] = valObj;
    localStorage.setItem("_useKeep_", JSON.stringify(val));
  }

  return [valer, setValStorage];
}

export { useKeep };
