import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Brain, Lock, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Cases = () => {
  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Наши кейсы</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Реальные примеры успешного внедрения нейросетей в бизнес-процессы наших клиентов
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem) => (
          <Card key={caseItem.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                {caseItem.icon}
                <span className="text-sm font-medium rounded-full px-3 py-1 bg-primary/10 text-primary">
                  {caseItem.category}
                </span>
              </div>
              <CardTitle className="text-xl">{caseItem.title}</CardTitle>
              <CardDescription>{caseItem.client}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{caseItem.description}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full group">
                <Link to={`/cases/${caseItem.id}`}>
                  Подробнее
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button asChild variant="default" size="lg">
          <Link to="/contact">Обсудить ваш проект</Link>
        </Button>
      </div>
    </div>
  );
};

const cases = [
  {
    id: "retail-analytics",
    title: "Аналитика продаж для розничной сети",
    client: "Сеть магазинов «МаркетПлюс»",
    category: "Аналитика данных",
    description: "Внедрение системы предиктивной аналитики, позволившей повысить точность прогнозирования спроса на 37% и сократить издержки на логистику на 22% за 6 месяцев.",
    icon: <BarChart className="h-5 w-5 text-primary" />,
  },
  {
    id: "security-system",
    title: "Система защиты от мошенничества",
    client: "Банк «ФинансТраст»",
    category: "Безопасность",
    description: "Разработка и внедрение нейросетевой системы выявления подозрительных транзакций, снизившей количество случаев мошенничества на 82% в первый год работы.",
    icon: <Lock className="h-5 w-5 text-primary" />,
  },
  {
    id: "customer-service",
    title: "Интеллектуальная система обслуживания клиентов",
    client: "Телеком-оператор «СвязьПро»",
    category: "Клиентский сервис",
    description: "Внедрение ИИ-ассистентов в колл-центр и онлайн-чат, что привело к ускорению обработки запросов на 64% и повышению удовлетворенности клиентов на 43%.",
    icon: <Brain className="h-5 w-5 text-primary" />,
  },
  {
    id: "hr-optimization",
    title: "Оптимизация HR-процессов",
    client: "Производственный холдинг «ТехноПром»",
    category: "Автоматизация",
    description: "Автоматизация процессов подбора и первичного скрининга кандидатов с помощью ИИ, сократившая время найма на 56% и повысившая качество подбора персонала.",
    icon: <Brain className="h-5 w-5 text-primary" />,
  },
  {
    id: "logistics-optimization",
    title: "Оптимизация логистических маршрутов",
    client: "Транспортная компания «ЛогиТранс»",
    category: "Логистика",
    description: "Внедрение ИИ для оптимизации маршрутов доставки, что привело к сокращению пробега транспорта на 27% и снижению расхода топлива на 22%.",
    icon: <BarChart className="h-5 w-5 text-primary" />,
  },
  {
    id: "market-forecasting",
    title: "Прогнозирование рыночных тенденций",
    client: "Инвестиционная компания «ИнвестКапитал»",
    category: "Предсказательные модели",
    description: "Разработка системы предсказательного анализа финансовых рынков, повысившей точность инвестиционных прогнозов на 31% по сравнению с традиционными методами.",
    icon: <BarChart className="h-5 w-5 text-primary" />,
  },
];

export default Cases;