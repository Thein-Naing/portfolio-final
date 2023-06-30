import  todolist from "../images/todolist.png";
import  workoutbuddy from "../images/workoutbuddy.png";
import  movieland from "../images/movieland.png";
import "./Portfolio.css";

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "workoutbuddy-mern-stack",
      img: workoutbuddy,
      description:" Mern-stack web app to create for your everyday workout exercises",
      githuburl: "https://github.com/Thein-Naing/workout-api-mern",
      deployurl: "https://workoutbuddy-frontend.onrender.com/",
    },
    {
      title: "todolist-react",
      img: todolist,
      description:
        " React web app to create your important todo lists and mark with emoji",
      githuburl: "https://github.com/Thein-Naing/todo-tailwind-react",
      deployurl: "https://react-exercises-tailwind-todo.netlify.app/",
    },

    {
      title: "movieland-react",
      img: movieland,
      description:
        " React web app to search your favorite movies using tmdb movie api",
      githuburl: "https://github.com/Thein-Naing/movieland",
      deployurl: "https://react-exercises-movieland-api.netlify.app//",
    },


  ];


  return (
    <div className="container-1">
      <p>Portfolio</p>
      <div className="grid">
        {projectsInfo.map((project, i) => {
          return (

            <a className="card-link" href={project.githuburl} target="_blank">
              <div key={i} className="card">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt="project img"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{`${project.description.substring(
                    0,
                    70
                  )}...`}</p>
                  <div className="buttonContainer">
                  <a href={project.githuburl} className="gitAndLiveLink">
                    Github
                  </a>
                  <a href={project.deployurl} className="gitAndLiveLink">
                    Deploy Link
                  </a>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
