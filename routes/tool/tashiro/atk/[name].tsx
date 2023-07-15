import { PageProps } from "$fresh/server.ts";
import Atk from "~/islands/client/atk.tsx";

export default function Tashiros(props: PageProps) {
  return <><Atk name={props.params.name}/></>
}
