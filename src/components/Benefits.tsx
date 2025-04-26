import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Преимущества внедрения нейросетей в бизнес
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                    {index < benefits.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-3xl -rotate-3 scale-105" />
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Преимущества внедрения ИИ" 
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ROI от внедрения ИИ</h3>
                <p className="text-muted-foreground mb-6">
                  Исследования показывают, что компании, внедрившие решения на базе искусственного интеллекта, 
                  получают в среднем на 30% больше прибыли, чем их конкуренты.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 bg-secondary rounded-lg">
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Повышение эффективности",
    description: "Автоматизация рутинных задач позволяет сотрудникам сосредоточиться на стратегических задачах, что повышает общую продуктивность"
  },
  {
    title: "Снижение затрат",
    description: "Оптимизация процессов и уменьшение ошибок человеческого фактора значительно сокращают операционные расходы и повышают маржинальность"
  },
  {
    title: "Качество решений",
    description: "Анализ больших данных и предсказательные модели помогают принимать более обоснованные стратегические решения на основе фактов"
  }
];

const stats = [
  { value: "+42%", label: "Рост эффективности" },
  { value: "-35%", label: "Снижение затрат" },
  { value: "x2.5", label: "Рост конверсии" }
];

export default Benefits;