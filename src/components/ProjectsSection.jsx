import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "MediBook",
        description: "MediBook is a JavaFX-based hospital appointment system that allows patients to book appointments, doctors to manage schedules, and admins to monitor operations.",
        image: "/projects/hospitalAppointment.png",
        tags: ["JavaFX","MVC","JDBC/SQL"],
        githubUrl: "https://github.com/pradheepa-jshree/Hospital-Appointment-Management-System",

    }
]

export const ProjectsSection =() => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                {" "}
                Featured <span className="text-primary delay-1">Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {"  "}
                This is my projects section. 
                This section presents my projects and is updated from time to time to reflect my latest work. 
            </p>

            <div className={
    projects.length === 1
      ? "flex justify-center"
      : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }>
                {projects.map((project, key)=>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover w-full max-w-md">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=> (
                                    <span className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                )
                                )}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a
                                 href={project.githubUrl} 
                                 target="_blank"
                                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <Github size={20}/>
                                </a>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/pradheepa-jshree" target="_blank">
                    My GitHub <ArrowRight size={16}/>
                </a>

            </div>
        </div>
        
         </section>;
};
