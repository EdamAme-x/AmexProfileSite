import { useKeep } from "~/util/hooks/useKeep.ts";
import { useEffect } from 'preact/hooks';

export default function Visit() {
  const [visit, setVisit] = useKeep(0, "visitNumber");

  useEffect(() => {
    const increment = async () => {
      await setVisit(visit + 1);
    };

    increment();
  }, []);

  return (
    <div className="w-screen text-center text-xl font-extrabold opacity-0">{visit}回目の訪問です。</div>
  );
}
