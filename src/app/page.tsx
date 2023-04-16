import Todos from "@/components/Todos";
import Canvas from "@/components/sl/Canvas";

export default async function Home() {
  return (
      <main>
        <Canvas />
        <Todos />
      </main>
  );
}
