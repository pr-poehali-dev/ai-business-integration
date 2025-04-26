import { Brain, BarChart3, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Наши услуги по внедрению нейросетей</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Помогаем бизнесу использовать преимущества искусственного интеллекта в различных сферах деятельности
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-md transition-all border-border/50 overflow-hidden">
              <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 h-1 w-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-300" />
              <CardHeader className="pb-2">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: <Brain className="h-6 w-6 text-primary" />,
    title: "Аналитика данных",
    description: "Выявление скрытых закономерностей и паттернов в больших массивах данных с помощью алгоритмов машинного обучения"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Предсказательные модели",
    description: "Создание моделей, прогнозирующих поведение клиентов, рыночные тенденции и финансовые показатели"
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Автоматизация процессов",
    description: "Оптимизация рабочих процессов с помощью искусственного интеллекта и устранение рутинных операций"
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "ИИ для клиентского сервиса",
    description: "Внедрение чат-ботов, систем персонализации и рекомендательных систем для улучшения клиентского опыта"
  }
];

export default Services;