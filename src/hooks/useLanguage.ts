
import { useState } from 'react';

export interface Translations {
  title: string;
  subtitle: string;
  projectsTitle: string;
  aboutTitle: string;
  aboutName: string;
  aboutDescription1: string;
  aboutDescription2: string;
  contactTitle: string;
  contactSubtitle: string;
  email: string;
  phone: string;
  sendMessage: string;
  callWhatsApp: string;
  footer: string;
  viewDemo: string;
  projects: {
    gaming: {
      title: string;
      description: string;
    };
    ecommerce: {
      title: string;
      description: string;
    };
    sports: {
      title: string;
      description: string;
    };
  };
}

const translations: { pt: Translations; en: Translations } = {
  pt: {
    title: "Meus Projetos",
    subtitle: "Bem-vindo à minha galeria! Aqui você encontra uma seleção dos meus trabalhos mais recentes em desenvolvimento web.",
    projectsTitle: "Projetos em Destaque",
    aboutTitle: "Quem Sou Eu",
    aboutName: "Olá, eu sou o Samuel! 👋",
    aboutDescription1: "Tenho 15 anos e sou um jovem desenvolvedor apaixonado por tecnologia. Estou no início da minha jornada no mundo da programação, focando principalmente em HTML e CSS para criar experiências web incríveis.",
    aboutDescription2: "Cada projeto é uma nova oportunidade de aprender e crescer. Estou sempre em busca de novos desafios e adoraria conectar com outros desenvolvedores!",
    contactTitle: "Vamos Conversar?",
    contactSubtitle: "Estou sempre aberto para novas oportunidades, colaborações ou apenas para trocar uma ideia sobre programação!",
    email: "Email",
    phone: "Telefone",
    sendMessage: "Mande uma mensagem!",
    callWhatsApp: "Ligue ou mande um WhatsApp!",
    footer: "© 2024 Samuel Meneses - Desenvolvedor em formação 🚀",
    viewDemo: "Ver Demo",
    projects: {
      gaming: {
        title: "Gaming Platform",
        description: "Site inspirado na Riot Games com design moderno e interativo para comunidade gamer"
      },
      ecommerce: {
        title: "E-commerce Store",
        description: "Loja online completa inspirada na Amazon com sistema de produtos e carrinho"
      },
      sports: {
        title: "Sports Store",
        description: "Loja esportiva moderna inspirada na Loud com foco em gaming e esports"
      }
    }
  },
  en: {
    title: "My Projects",
    subtitle: "Welcome to my gallery! Here you'll find a selection of my latest work in web development.",
    projectsTitle: "Featured Projects",
    aboutTitle: "Who Am I",
    aboutName: "Hello, I'm Samuel! 👋",
    aboutDescription1: "I'm 15 years old and a young developer passionate about technology. I'm at the beginning of my journey in the programming world, focusing mainly on HTML and CSS to create amazing web experiences.",
    aboutDescription2: "Each project is a new opportunity to learn and grow. I'm always looking for new challenges and would love to connect with other developers!",
    contactTitle: "Let's Talk?",
    contactSubtitle: "I'm always open to new opportunities, collaborations, or just to chat about programming!",
    email: "Email",
    phone: "Phone",
    sendMessage: "Send a message!",
    callWhatsApp: "Call or send a WhatsApp!",
    footer: "© 2024 Samuel Meneses - Developer in training 🚀",
    viewDemo: "View Demo",
    projects: {
      gaming: {
        title: "Gaming Platform",
        description: "Site inspired by Riot Games with modern and interactive design for gaming community"
      },
      ecommerce: {
        title: "E-commerce Store",
        description: "Complete online store inspired by Amazon with product system and shopping cart"
      },
      sports: {
        title: "Sports Store",
        description: "Modern sports store inspired by Loud focusing on gaming and esports"
      }
    }
  }
};

export const useLanguage = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const t = translations[isEnglish ? 'en' : 'pt'];

  return { isEnglish, toggleLanguage, t };
};
