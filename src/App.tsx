import React, { useState } from 'react';
import { motion } from 'motion/react';
import logotipo from './assets/marca-branca.png';
import logobranco from './assets/marca-principal.png';
import imgTulo from './assets/tulo-1.png';
import imgH1 from './assets/h1.jpg';
import { 
  ShieldCheck, 
  FileText, 
  Construction, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight, 
  HardHat, 
  Menu, 
  X,
  Clock,
  Briefcase
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for Tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sub-components
const Section = ({ 
  children, 
  className, 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={cn("py-20 px-4 md:py-24 md:px-12", className)}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 md:h-28 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logotipo} 
            alt="Suyama & Martins Logo" 
            className="h-14 md:h-20 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#servicos" className="hover:text-brand-blue transition-colors">Serviços</a>
          <a href="#beneficios" className="hover:text-brand-blue transition-colors">Benefícios</a>
          <button className="px-5 py-2 bg-slate-900 text-white rounded-full text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95">
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col gap-4"
        >
          <a href="#servicos" className="font-medium" onClick={() => setIsOpen(false)}>Serviços</a>
          <a href="#beneficios" className="font-medium" onClick={() => setIsOpen(false)}>Benefícios</a>
          <a href="#contato" className="bg-brand-orange text-white px-5 py-3 rounded-xl text-center font-bold" onClick={() => setIsOpen(false)}>
            Solicitar Orçamento
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-polish transition-all group"
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm md:text-base mt-3">
      {description}
    </p>
  </motion.div>
);

export default function App() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
  };

  const titleWords = [
    { text: "Sua", color: false },
    { text: "Obra", color: false },
    { text: "100%", color: true },
    { text: "Legalizada", color: true },
    { text: "e", color: false },
    { text: "Segura.", color: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(10,61,126,0.05)_0%,transparent_100%)]" />
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full text-brand-blue fill-current">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              Consultoria Técnica Especializada
            </div>
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-7xl font-heading font-extrabold text-slate-900 leading-[1.1] mb-6 flex flex-wrap gap-x-[0.25em]"
            >
              {titleWords.map((word, i) => (
                <motion.span 
                  key={i} 
                  variants={wordVariants}
                  className={cn(word.color && "text-brand-blue", "inline-block")}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Evite multas e paralisações. Garantimos a conformidade técnica do seu projeto conforme as normas NBR, com emissão de ART e acompanhamento técnico rigoroso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-12 mb-10">
              <a href="#contato" className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-blue-light transition-all shadow-lg shadow-brand-blue/30 active:scale-95">
                Solicitar Orçamento Agora
                <ChevronRight size={20} />
              </a>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Feedback" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-brand-blue text-center">
                    +200
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-800">Aprovado por líderes</p>
                  <p className="text-slate-500 text-xs">Obras acompanhadas com sucesso.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-10">
              <div className="flex gap-3">
                <div className="text-brand-blue shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Engenharia Civil</h4>
                  <p className="text-xs text-slate-500">Expertise técnica comprovada</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-brand-blue shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Normas NBR</h4>
                  <p className="text-xs text-slate-500">Fidelidade total às normas vigentes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/seed/engineering-work/800/1000?blur=1" 
                alt="Construction Site Engineering" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="italic text-lg mb-4">"A segurança da sua obra não é um custo, é o investimento que garante o sucesso do seu empreendimento."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center font-bold">SM</div>
                    <div>
                      <p className="font-bold">Equipe Suyama Martins</p>
                      <p className="text-xs opacity-70">Engenharia e Consultoria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-12 md:-right-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold text-brand-orange">100%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Em conformidade</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points / Solution */}
      <Section id="beneficios" className="bg-slate-50">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-5xl mb-6">Por que contratar acompanhamento técnico?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Muitas obras sofrem com embargos e problemas estruturais que poderiam ser evitados com uma simples consultoria profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={FileText}
            title="Conformidade Legal"
            description="Emissão de ART (Anotação de Responsabilidade Técnica) e verificação de alvarás para garantir que sua obra esteja amparada pela lei."
            delay={0.1}
          />
          <FeatureCard 
            icon={HardHat}
            title="Segurança Garantida"
            description="Redução drástica de riscos de acidentes e erros de execução através de processos rigorosos de controle técnico."
            delay={0.2}
          />
          <FeatureCard 
            icon={Clock}
            title="Economia de Prazos"
            description="Evite retrabalhos custosos e atrasos causados por execuções incorretas ou falta de documentação."
            delay={0.3}
          />
        </div>
      </Section>

      {/* Services Grid */}
      <Section id="servicos">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl mb-6">Nossas Soluções em Engenharia</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Oferecemos um portfólio completo de serviços para garantir que cada etapa da sua construção seja executada com perfeição técnica.
            </p>
            <ul className="space-y-4">
              {[
                "Acompanhamento em tempo real",
                "Relatórios detalhados",
                "Consultoria normativa personalizada",
                "Suporte em processos de alvará"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <CheckCircle2 size={16} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Acompanhamento de Obra",
                desc: "Presença técnica no canteiro para conferência de medidas, materiais e métodos construtivos.",
                icon: Construction
              },
              {
                title: "Emissão de ART",
                desc: "Formalização da responsabilidade técnica perante o CREA, essencial para qualquer intervenção.",
                icon: ShieldCheck
              },
              {
                title: "Verificação de Conformidade",
                desc: "Auditoria detalhada para garantir que o projeto executado condiz com o projeto aprovado.",
                icon: FileText
              },
              {
                title: "Consultoria Normativa",
                desc: "Orientação especializada sobre as NBRs e legislações municipais específicas.",
                icon: Briefcase
              }
            ].map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100 hover:bg-white hover:border-brand-blue/20 transition-all">
                <div className="text-brand-blue mb-4">
                  <service.icon size={32} />
                </div>
                <h4 className="text-xl mb-2">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mid CTA Banner */}
      <section className="py-24 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <circle cx="10" cy="10" r="1"/>
            <circle cx="30" cy="10" r="1"/>
            <circle cx="50" cy="10" r="1"/>
            <circle cx="10" cy="30" r="1"/>
            <circle cx="30" cy="30" r="1"/>
            <circle cx="50" cy="30" r="1"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight">Sua obra merece o melhor critério técnico. Vamos conversar?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/55000000000" className="bg-white text-brand-blue px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-2xl active:scale-95">
              Falar via WhatsApp
              <Phone size={20} />
            </a>
            <a href="#contato" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              Preencher Formulário
            </a>
          </div>
        </div>
      </section>

      {/* Trust / About */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img src={imgTulo} alt="Work" className="rounded-2xl h-80 object-cover" />
              <img src={imgH1} alt="Work" className="rounded-2xl h-80 mt-12 object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl mb-6">Compromisso com a Excelência e Segurança</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              A <strong>Suyama Martins Engenharia</strong> nasceu da necessidade de elevar o padrão das construções através de consultoria técnica precisa. Nossa missão é transformar a complexidade das normas em tranquilidade para o proprietário.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 shrink-0 flex items-center justify-center text-brand-orange font-bold">+10</div>
                <div>
                  <h4 className="font-bold">Anos de Mercado</h4>
                  <p className="text-slate-500 text-sm">Experiência acumulada em diversos tipos de projetos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 shrink-0 flex items-center justify-center text-brand-blue font-bold">99%</div>
                <div>
                  <h4 className="font-bold">Satisfação dos Clientes</h4>
                  <p className="text-slate-500 text-sm">Fidelidade total às expectativas e orçamentos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Capture Form Section */}
      <Section id="contato" className="bg-slate-900 text-white rounded-t-[3rem] -mt-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8">Comece seu projeto com o pé direito.</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Preencha o formulário ao lado com as informações básicas da sua obra e nossa equipe técnica entrará em contato em até 24 horas para fornecer um orçamento preliminar.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Telefone / WhatsApp</p>
                  <p className="text-xl font-bold">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">E-mail</p>
                  <p className="text-xl font-bold">contato@suyamamartins.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Endereço</p>
                  <p className="text-xl font-bold">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-slate-900 shadow-polish border border-slate-100 relative">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-600">Obrigado pelo contato. Nossa equipe técnica entrará em contato em breve.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: João Silva" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:outline-none text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Telefone / WhatsApp</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(11) 99999-9999" 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:outline-none text-sm transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">E-mail Corporativo</label>
                  <input 
                    required
                    type="email" 
                    placeholder="email@empresa.com.br" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:outline-none text-sm transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tipo de Obra</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:outline-none text-sm appearance-none cursor-pointer">
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Industrial</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Descrição da Demanda</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Nos conte um pouco mais sobre o seu projeto ou necessidade..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-blue focus:outline-none text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'loading'}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-brand-blue-light transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-lg shadow-brand-blue/30 active:scale-95 mt-4"
                >
                  {formState === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      RECEBER ORÇAMENTO AGORA
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-4 italic">
                  🔒 Seus dados estão protegidos pela LGPD. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center opacity-80">
            <img 
              src={logobranco} 
              alt="Suyama & Martins Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <p className="text-slate-500 text-sm font-medium">
            &copy; 2024 Suyama Martins Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
