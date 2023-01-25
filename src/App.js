import { useState } from 'react';
import './App.css';
import { students as studentsData } from './data';
import Student from './Student';


  function App (){
    const [students, setStudents] = useState(studentsData)


    return (
      <div className="App">
        {students.map(student =>
          <Student key={student.name} student={student}/>
        )}
      </div>
  );
}

export default App;
