export function Genrer(props: { genrer?: string }) {
  return (
    <div className="whitespace-nowrap rounded bg-neutral-900 px-2 py-1 font-bold text-neutral-200">
      <p>{props.genrer}</p>
    </div>
  )
}
