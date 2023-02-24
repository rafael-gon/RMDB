import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function PageSelector(props: any) {
  return (
    <div className="flex items-center gap-6 font-bold">
      <a href={props.up}>

        <button
          disabled={props.page === 1}
          onClick={props.back}
          className='bg-background-tertiary w-8 h-8 rounded-full flex justify-center items-center'
        >
          <IoIosArrowBack  className="text-md"/>
        </button>
      </a>

      {props.page}
      
      <a href={props.up}>
        <button
          disabled={props.page === props.total}
          onClick={props.forward}
          className='bg-background-tertiary w-8 h-8 rounded-full flex justify-center items-center'
        >
          <IoIosArrowForward  className="text-md"/>
        </button>
      </a >
    </div >
  )
}

export default PageSelector