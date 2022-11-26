function About() {
    const skills = [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Eleventy',
        'Node.js',
        'WordPress',
    ];
    return (
        <div
            className='about px-7 py-20 flex flex-col items-center justify-center max-w-7xl mx-auto'
            id='about'>
            <h2 className='about-heading flex items-center w-full mb-20 whitespace-nowrap leading-[1.1] font-semibold text-slate-300 text-step-5'>
                About Me
            </h2>
            <div className='content_container flex gap-12 flex-col sm:flex-row'>
                <div className='content_left'>
                    <div className='content_aboutme'>
                        <p>
                            <span className='text-emerald-300'>Lorem Ipsum is simply dummy</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <p className='mt-8 text-emerald-300'>Here Are some the Technologies i&apos;m familiar with:  </p>
                    <div className='content_technologies text-slate-300 grid grid-cols-2 mt-8'>
                        {
                            skills.map(
                                (skill) => {
                                    return <p key={skill} >{skill}</p>
                                }
                            )
                        }
                    </div>
                </div>
                <div className='content_right'>
                    <img src="/rick.gif" className='w-full sm:w-3/4'  />
                </div>
            </div>
        </div>
    );
}

export default About;
