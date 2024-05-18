import PropTypes from 'prop-types';
import { Project } from './Project';

//recibe una prop, un array de objetos
export const ProjectList = ({ projects, removeProject }) => {
    
    return projects.length ? (
        <main>     
        <ul>
            <div className="flex flex-col justify-center mx-auto w-full bg-white max-w-[480px]">
            <div className="flex flex-col w-full bg-white">
            <h1 className="text-lg font-medium text-black">Latest Projects </h1>          
            <div className="flex gap-0 px-5 mt-2">
            <div className="flex gap-2 py-px">                  
                                {projects.map((project) => (
                                
                                    <li key={project.project_id} >
                                        <Project project={project} removeProject={removeProject} />
                                    </li>                               
                                ))}
            </div>
             </div>
             </div>
            </div>
        </ul>    
       </main>
    ) : (
        <p>There are no projects yet ... </p>
    );
};
ProjectList.propTypes = {
    projects: PropTypes.array,
    removeProject: PropTypes.func,
};
