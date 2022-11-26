function ProjectCard(props) {
    return <div className='bg-slate-300 p-4 rounded-sm'>
        <p className='text-emerald-300 font-mono text-sm'> {
            props.project.is_featured ? (
                "Featured React Project"
            ):("Project")
        } </p>
        <p className='font-bold'>{props.project.title}</p>
        <p className='mt-3'>
           Project description: lorem ipsum 
           {props.project.desc}
        </p>
        <div className='mt-4'>
            <a href={props.project.github} className='underline hover:text-emerald-300 transition duration-300' >Github</a>
            <a href="https://github.com/" className='underline ml-6 hover:text-emerald-300 transition duration-300'>Website</a>
        </div>
    </div>
    
}

export default ProjectCard;