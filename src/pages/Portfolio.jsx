import  todolist from "../images/todolist.png";
import  workoutbuddy from "../images/workoutbuddy.png";
import  movieland from "../images/movieland.png";
import  expense from "../images/expense.png";
import  amazona from "../images/amazona.png";
import "./Portfolio.css";

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "workoutbuddy-mern-stack",
      img: workoutbuddy,
      description:" Mern-stack web app to create your everyday workout exercises",
      githuburl: "https://github.com/Thein-Naing/workout-api-mern",
      liveurl: "https://workoutbuddy-frontend.onrender.com/",
    },
    {
      title: "todolist-react",
      img: todolist,
      description:
        " React web app to create your important todo lists and mark with emoji",
      githuburl: "https://github.com/Thein-Naing/todo-tailwind-react",
      liveurl: "https://react-exercises-tailwind-todo.netlify.app/",
    },

    {
      title: "movieland-react",
      img: movieland,
      description:
        " React web app to search your favorite movies using tmdb movie api",
      githuburl: "https://github.com/Thein-Naing/movieland",
      liveurl: "https://react-exercises-movieland-api.netlify.app/",
    },

    {
      title: "expense-tracker-react",
      img: expense,
      description:
        " React web app to check your expenses using (useState, useContext, useReducer) and the context API",
      githuburl: "https://github.com/Thein-Naing/expense-tracker",
      liveurl: "https://expense-checker-react.netlify.app/",
    },

    {
      title: "amazon-clone-react",
      img: amazona,
      description:
        " A Full-Stack E commerce Amazon Clone application built with react and firebase ",
      githuburl: "https://github.com/Thein-Naing/amazona",
      liveurl: "https://a-5fe53.web.app/",
    },

  ];


  return (
    <div className="container-1">
      <p>Portfolio</p>
      <div className="grid">
        {projectsInfo.map((project, i) => {
          return (

            <a className="card-link" href={project.githuburl} target="_blank" rel="noreferrer">
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
                  <a href={project.liveurl} className="gitAndLiveLink">
                    Live
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
