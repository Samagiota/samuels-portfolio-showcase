import { Phone, Mail, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isEnglish, toggleLanguage, t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t.projects.gaming.title,
      description: t.projects.gaming.description,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "riot"
    },
    {
      id: 2,
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.description,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "amazon"
    },
    {
      id: 3,
      title: t.projects.sports.title,
      description: t.projects.sports.description,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "loud"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Top Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <LanguageToggle isEnglish={isEnglish} onToggle={toggleLanguage} />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #D4A574 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-20 px-6 pt-24">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 dark:text-amber-300 mb-6 animate-fade-in">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 dark:text-amber-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-amber-50/50 to-white dark:from-slate-800/50 dark:to-slate-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-300 text-center mb-16">
              {t.projectsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-2xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-amber-400 backdrop-blur-sm hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-900 dark:text-amber-300 group-hover:text-amber-700 dark:group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-amber-700 dark:text-amber-200">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.viewDemo}
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-300 dark:hover:bg-amber-900/20">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/30 dark:from-slate-900 dark:to-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-300 mb-6">
                {t.aboutTitle}
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            </div>
            
            <Card className="border-amber-200 dark:border-slate-600 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    S
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-4">
                      {t.aboutName}
                    </h3>
                    <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed mb-4">
                      {t.aboutDescription1}
                    </p>
                    <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                      {t.aboutDescription2}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-amber-50/30 to-amber-100/50 dark:from-slate-800/30 dark:to-slate-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-300 mb-6">
              {t.contactTitle}
            </h2>
            <p className="text-xl text-amber-800 dark:text-amber-200 mb-12 max-w-2xl mx-auto">
              {t.contactSubtitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-amber-400 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">{t.email}</h3>
                  <p className="text-amber-700 dark:text-amber-200 mb-4">{t.sendMessage}</p>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 w-full"
                    onClick={() => window.open('mailto:sanmeneses.developer@gmail.com')}
                  >
                    sanmeneses.developer@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 dark:bg-slate-800/80 dark:border-slate-600 dark:hover:border-amber-400 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">{t.phone}</h3>
                  <p className="text-amber-700 dark:text-amber-200 mb-4">{t.callWhatsApp}</p>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 w-full"
                    onClick={() => window.open('https://wa.me/5599981774932')}
                  >
                    +55 99 98177-4932
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-amber-900 dark:bg-slate-900 text-center">
          <p className="text-amber-100 dark:text-amber-200">
            {t.footer}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
