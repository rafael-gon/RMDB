import Image from 'next/image'
import svg from '../img/quadrados.svg'

export function Loading() {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-1 select-none items-center justify-center text-center text-neutral-400">
      <div className="flex flex-col items-center gap-4">
        <Image src={svg} alt="load" className="z-50" draggable={false} />
        <p className="animate-pulse text-5xl font-black uppercase">
          Carregando
        </p>
      </div>
      <p className="fixed bottom-6">
        Feito com 💜 por{' '}
        <a
          href="https://github.com/rafael-gon"
          className="text-neutral-500 underline"
        >
          Rafael
        </a>
      </p>
      <div className="fixed -z-10 h-screen w-screen backdrop-blur" />
    </div>
  )
}
