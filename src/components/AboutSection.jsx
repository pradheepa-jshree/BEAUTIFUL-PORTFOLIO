import { Briefcase, Code, School, User } from "lucide-react";


export const AboutSection =() => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">A passionate software engineering student exploring technology and development. </h3>

                    <p className="text-muted-foreground">
                        I'm a Computer Science student who actively learns and updates my skills every day. 
                        I enjoy building web-based projects and exploring AI features to apply them in practical, meaningful ways. I use AI as a tool to work efficiently, experiment with ideas, and integrate intelligent solutions into my projects as I continue to grow as a software engineering student.
                    </p>

                    <p className="text-muted-foreground">
                        I have strong working knowledge of C++, Python, and Java, and I'm experienced with modern web technologies such as HTML, CSS, JavaScript, React.js, and Tailwind CSS. I focus on building clean, responsive, and user-friendly interfaces, and I communicate effectively in English and Tamil.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {""}
                            For Any Queries
                        </a>
            
                        <a href="/CV.png" download="Pradheepa_Jayashree_CV" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors durarion-300 "> 
                            {""}
                            Download CV
                        </a>

                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Software development
                                </h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Web development, clean code, and AI integration.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    User Interaction
                                </h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Learning to create intuitive user interactions.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <School className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Education 
                                </h4>
                                <p className="text-muted-foreground">
                                    {" "}
                                    SRMIST, Chennai
                                </p>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    </section>
};