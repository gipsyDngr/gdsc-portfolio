import ProjectCard from "./ProjectCard";
import {projects} from "../data/projects"
function Projects(props) {
    const project = {
        is_featured: false,
        title: "PortFolio React Project",
        desc: "React Portfolio project etc",
        tags: [
            "react",
            "html"
        ],
        github: "https://codesandbox.io/p/github/ankush-003/gdsc-portfolio/creating?file=%2Fcomponents%2Fprojects.js&selection=%5B%7B%22endColumn%22%3A18%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A18%2C%22startLineNumber%22%3A12%7D%5D",
        hosted: "https://codesandbox.io/p/github/ankush-003/gdsc-portfolio/creating?file=%2Fcomponents%2Fprojects.js&selection=%5B%7B%22endColumn%22%3A18%2C%22endLineNumber%22%3A12%2C%22startColumn%22%3A18%2C%22startLineNumber%22%3A12%7D%5D",
    }
    
    return (
        <div
            className='flex flex-col gap-4 overflow-scroll max-w-7xl mx-auto px-8 py-20'
            id='projects'>
            <h2 className='mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    projects.map((project)=> {
                        return <ProjectCard key={project.title} project = {project} />
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
