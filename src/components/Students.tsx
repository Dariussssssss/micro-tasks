import type {StudentsProps} from "./Body.tsx";

type Students = {
    students: StudentsProps[],
}

export const Students = ({students}: Students) => {
    return (
        <ul>
            {students.map((student, index) => {
                return (
                    <li key={index}><b>{student.name}</b><span> age: {student.age}</span></li>
                )
            })}
        </ul>
    )
}
