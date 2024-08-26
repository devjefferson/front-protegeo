
import { Heading } from "@/components/core/Typograph/Heading";

export default function Home() {
  return (
    <section className="flex justify-between">
    <div className="flex flex-col">
    <Heading size='small' title="Primeira Pagina" />
      <Heading size='medium' title="Primeira Pagina 1" />
      <Heading size='large' title="Primeira Pagina 2" />

    </div>
      <div style={{
        display: 'flex',
        background: 'black',
        padding: '64px'
      }} >
      <div className="w-64 h-64 bg-red-500">

</div>
      </div>

    </section>
  );
}
