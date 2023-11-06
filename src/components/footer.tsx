export function Footer(props: any) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex select-none flex-row items-center gap-6">
        <button
          onClick={() => props.setCurrentPage(props.currentPage - 1)}
          disabled={props.currentPage === 1}
          className="rounded bg-neutral-950 px-6 py-2 text-lg font-bold uppercase hover:brightness-125 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:hover:brightness-100"
        >
          anterior
        </button>
        {props.currentPage}
        <button
          onClick={() => props.setCurrentPage(props.currentPage + 1)}
          disabled={props.currentPage === props.totalPages}
          className="rounded bg-neutral-950 px-6 py-2 text-lg font-bold uppercase hover:brightness-125 disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:hover:brightness-100"
        >
          proximo
        </button>
      </div>
      <p>
        Feito com 💜 por{' '}
        <a
          href="https://github.com/rafael-gon"
          className="text-neutral-500 underline hover:brightness-125"
        >
          Rafael
        </a>
      </p>
    </div>
  )
}
