function Gender(props: {year?: number, gender?: string}){
  return(
    <div className="bg-background-tertiary text-foreground px-2 py-1 whitespace-nowrap rounded font-bold">
      <p>{props.year}</p>
      <p>{props.gender}</p>
    </div>
  )
}

export default Gender;