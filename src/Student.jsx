import Score from "./Score"

const Student = ({student}) => {
  return (
    <>
      <div>
        <p>Name: {student.name}</p>
        <p> Bio: {student.bio}!</p>
        {student.scores.map(data =>
        <Score key={data.date} score={data.score} date={data.date}/>
          )}
      </div>
    </>
)
}

export default Student