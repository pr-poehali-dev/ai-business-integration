import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Benefits />
        
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать цифровую трансформацию?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Наши эксперты помогут вам внедрить нейросети и ИИ-решения для оптимизации бизнес-процессов и повышения конкурентоспособности
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 px-8"
            >
              Связаться с нами
            </a>
          </div>
        </section>
        
        <footer className="py-12 border-t">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">НейроБизнес</span>
                <span className="text-muted-foreground">© 2025. Все права защищены.</span>
              </div>
              <div className="flex gap-6">
                <a href="/privacy" className="text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
                <a href="/terms" className="text-muted-foreground hover:text-foreground">Условия использования</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;