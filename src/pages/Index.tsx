
import { Phone, Mail, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Gaming Platform",
      description: "Site inspirado na Riot Games com design moderno e interativo para comunidade gamer",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "riot"
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "Loja online completa inspirada na Amazon com sistema de produtos e carrinho",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "amazon"
    },
    {
      id: 3,
      title: "Sports Store",
      description: "Loja esportiva moderna inspirada na Loud com foco em gaming e esports",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      style: "loud"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #D4A574 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 animate-fade-in">
              Meus Projetos
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Bem-vindo ao meu portfólio! Aqui você encontra uma seleção dos meus trabalhos mais recentes em desenvolvimento web.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-amber-50/50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">
              Projetos em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group hover:shadow-2xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 backdrop-blur-sm hover:scale-105"
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
                    <CardTitle className="text-amber-900 group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-amber-700">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
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
        <section className="py-20 px-6 bg-gradient-to-b from-white to-amber-50/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                Quem Sou Eu
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
            </div>
            
            <Card className="border-amber-200 bg-white/70 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                    S
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      Olá, eu sou o Samuel! 👋
                    </h3>
                    <p className="text-lg text-amber-800 leading-relaxed mb-4">
                      Tenho 15 anos e sou um jovem desenvolvedor apaixonado por tecnologia. 
                      Estou no início da minha jornada no mundo da programação, focando principalmente 
                      em <strong>HTML</strong> e <strong>CSS</strong> para criar experiências web incríveis.
                    </p>
                    <p className="text-lg text-amber-800 leading-relaxed">
                      Cada projeto é uma nova oportunidade de aprender e crescer. 
                      Estou sempre em busca de novos desafios e adoraria conectar com outros desenvolvedores!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-amber-50/30 to-amber-100/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-amber-800 mb-12 max-w-2xl mx-auto">
              Estou sempre aberto para novas oportunidades, colaborações ou apenas para trocar uma ideia sobre programação!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Email</h3>
                  <p className="text-amber-700 mb-4">Mande uma mensagem!</p>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 w-full"
                    onClick={() => window.open('mailto:sanmeneses.developer@gmail.com')}
                  >
                    sanmeneses.developer@gmail.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Telefone</h3>
                  <p className="text-amber-700 mb-4">Ligue ou mande um WhatsApp!</p>
                  <Button 
                    className="bg-amber-600 hover:bg-amber-700 w-full"
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
        <footer className="py-8 px-6 bg-amber-900 text-center">
          <p className="text-amber-100">
            © 2024 Samuel Meneses - Desenvolvedor em formação 🚀
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
