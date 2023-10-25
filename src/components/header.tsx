import Image from 'next/image'

export function Header(props: any) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={384}
        height={96}
        draggable={false}
        className="w-48 sm:w-96"
      />
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
    </div>
  )
}
