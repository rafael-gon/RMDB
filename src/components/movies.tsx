import { Circle } from "react-circle";
import Gender from "./gender";

function Movies(props: {rate: number, year: number, id: number, poster: string, title: string, gender: string, desc:string}) {
  let rate = props.rate * 10
  return (
    <div draggable={false} className="bg-background-secondary text-foreground flex items-center gap-4 p-6 rounded-lg">
      <a href={`https://www.themoviedb.org/movie/${props.id}`} target={"_blank"}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster}`}
          alt={`${props.title} poster`}
          className="h-96 rounded-lg hover:brightness-125"
        />
      </a>
      <div className="w-96 flex flex-col text-center gap-4">

        <h1 className="text-2xl font-bold">{props.title}</h1>

        <div className="flex gap-3 p-3 overflow-y-hidden  overflow-x-auto">

          <Gender year={props.year}/>

          {props.gender}
        </div>

        <div className="overflow-y-auto overflow-x-hidden max-h-32 text-start">
          <p className="text-xs">{props.desc}</p>
        </div>

        <div className="flex items-center gap-3 justify-center">
          <Circle progress={rate} size="36" lineWidth="50" bgColor="#585B70" progressColor="#CBA6F7" roundedStroke={true} showPercentage={false} />
          <p className="text-xl">{props.rate}/10</p>
        </div>

      </div>
    </div>
  )
}

export default Movies;