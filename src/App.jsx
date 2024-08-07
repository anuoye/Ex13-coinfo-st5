





const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course.parts[0]}</p>
      
      
    </div>
  )
}

 








const App = () => {
   const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
   }    

   
  return (
    <div>
      
      <Content course={course.parts[0]} />
      <Content course={course.parts[1]} />
      
    </div>
  )
}

export default App


