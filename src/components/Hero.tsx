import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
      
      <div className="container relative grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Трансформируйте бизнес с помощью <span className="text-primary">искусственного интеллекта</span>
          </h1>
          
          <p className="text-lg text-muted-foreground md:text-xl">
            Мы помогаем компаниям внедрять нейронные сети и машинное обучение для оптимизации процессов, 
            увеличения прибыли и опережения конкурентов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button size="lg" asChild>
              <Link to="/contact">
                Начать сотрудничество <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" asChild>
              <Link to="/cases">Изучить кейсы</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Искусственный интеллект в бизнесе" 
              className="h-full w-full object-cover opacity-90"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 aspect-square w-1/2 rounded-2xl bg-gradient-to-br from-primary to-purple-600">
            <div className="absolute inset-1 rounded-xl bg-background flex items-center justify-center p-4">
              <div className="text-center">
                <p className="text-3xl font-bold">+42%</p>
                <p className="text-sm font-medium">рост эффективности</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;