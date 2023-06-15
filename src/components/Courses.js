const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => {
                return (
                    // add 'key' attribute to identify the correct items of parent objects
                    <div key={course.id}>
                        <h2>{course.name}</h2>
                        {course.parts.map((part) => {
                            return (
                                // identify children objects by 'key' again
                                <p key={part.id}>
                                    {part.name} {part.exercises}
                                </p>
                            );
                        })}
                        <strong>
                            Total{" "}
                            {course.parts.reduce(
                                (acc, cur) => acc + cur.exercises,
                                0
                            )}{" "}
                            exercises{" "}
                        </strong>
                    </div>
                );
            })}
        </div>
    );
};

export default Courses;