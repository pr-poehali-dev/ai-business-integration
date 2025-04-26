import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Brain, Lock, BarChart, AlertCircle, Download, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CaseType {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription?: string;
  results?: string[];
  technologies?: string[];
  timeline?: string;
  icon: JSX.Element;
}

const caseData: CaseType[] = [
  {
    id: "retail-analytics",
    title: "Аналитика продаж для розничной сети",
    client: "Сеть магазинов «МаркетПлюс»",
    category: "Аналитика данных",
    description: "Внедрение системы предиктивной аналитики, позволившей повысить точность прогнозирования спроса на 37% и сократить издержки на логистику на 22% за 6 месяцев.",
    fullDescription: "Для сети магазинов «МаркетПлюс» мы разработали комплексную систему аналитики на основе нейросетей, которая обрабатывает данные о продажах, сезонности, маркетинговых акциях и внешних факторах. Система прогнозирует спрос с высокой точностью и автоматически формирует оптимальные заказы поставщикам.",
    results: [
      "Повышение точности прогнозирования спроса на 37%",
      "Сокращение издержек на логистику на 22%",
      "Уменьшение объема непроданных товаров на 18%",
      "Увеличение оборачиваемости склада на 29%"
    ],
    technologies: ["Нейронные сети LSTM", "Градиентный бустинг", "Big Data", "Cloud Computing"],
    timeline: "6 месяцев",
    icon: <BarChart className="h-5 w-5 text-primary" />,
  },
  {
    id: "security-system",
    title: "Система защиты от мошенничества",
    client: "Банк «ФинансТраст»",
    category: "Безопасность",
    description: "Разработка и внедрение нейросетевой системы выявления подозрительных транзакций, снизившей количество случаев мошенничества на 82% в первый год работы.",
    fullDescription: "Для банка «ФинансТраст» была разработана многоуровневая система защиты от мошенничества на основе искусственного интеллекта. Система анализирует каждую транзакцию в реальном времени, оценивая более 200 параметров и выявляя подозрительную активность с минимальным количеством ложных срабатываний.",
    results: [
      "Снижение случаев мошенничества на 82%",
      "Уменьшение ложных блокировок на 76%",
      "Экономия более 240 млн рублей в первый год работы",
      "Повышение доверия клиентов к системам безопасности банка"
    ],
    technologies: ["Глубокие нейронные сети", "Машинное обучение", "Поведенческая аналитика", "Анализ аномалий"],
    timeline: "8 месяцев",
    icon: <Lock className="h-5 w-5 text-primary" />,
  },
  {
    id: "customer-service",
    title: "Интеллектуальная система обслуживания клиентов",
    client: "Телеком-оператор «СвязьПро»",
    category: "Клиентский сервис",
    description: "Внедрение ИИ-ассистентов в колл-центр и онлайн-чат, что привело к ускорению обработки запросов на 64% и повышению удовлетворенности клиентов на 43%.",
    fullDescription: "Для телеком-оператора «СвязьПро» мы разработали комплексную систему ИИ-ассистентов, которая интегрируется с существующими каналами обслуживания клиентов. Система способна обрабатывать до 80% типовых запросов без участия оператора, а в сложных случаях предварительно собирает информацию и передает подготовленное обращение специалисту.",
    results: [
      "Ускорение обработки запросов на 64%",
      "Повышение удовлетворенности клиентов на 43%",
      "Снижение нагрузки на операторов на 58%",
      "Сокращение времени ожидания ответа в пиковые часы на 76%"
    ],
    technologies: ["Обработка естественного языка (NLP)", "Распознавание речи", "Машинное обучение", "Семантический анализ"],
    timeline: "5 месяцев",
    icon: <Brain className="h-5 w-5 text-primary" />,
  },
  {
    id: "hr-optimization",
    title: "Оптимизация HR-процессов",
    client: "Производственный холдинг «ТехноПром»",
    category: "Автоматизация",
    description: "Автоматизация процессов подбора и первичного скрининга кандидатов с помощью ИИ, сократившая время найма на 56% и повысившая качество подбора персонала.",
    fullDescription: "Для холдинга «ТехноПром» мы разработали комплексную ИИ-систему для автоматизации HR-процессов. Система анализирует резюме, проводит первичные интервью в чат-боте, оценивает соответствие кандидатов требованиям и прогнозирует успешность будущей работы на основе исторических данных компании.",
    results: [
      "Сокращение времени найма на 56%",
      "Повышение качества отбора кандидатов на 47%",
      "Снижение затрат на подбор персонала на 38%",
      "Уменьшение текучести кадров в первый год работы на 23%"
    ],
    technologies: ["Машинное обучение", "Обработка естественного языка", "Предиктивная аналитика", "Распознавание образов"],
    timeline: "7 месяцев",
    icon: <Users className="h-5 w-5 text-primary" />,
  },
  {
    id: "logistics-optimization",
    title: "Оптимизация логистических маршрутов",
    client: "Транспортная компания «ЛогиТранс»",
    category: "Логистика",
    description: "Внедрение ИИ для оптимизации маршрутов доставки, что привело к сокращению пробега транспорта на 27% и снижению расхода топлива на 22%.",
    fullDescription: "Для компании «ЛогиТранс» была разработана система оптимизации логистических маршрутов на основе искусственного интеллекта. Система учитывает текущую дорожную обстановку, прогноз погоды, характеристики грузов, временные окна доставки и множество других факторов для построения наиболее эффективных маршрутов в реальном времени.",
    results: [
      "Сокращение пробега транспорта на 27%",
      "Снижение расхода топлива на 22%",
      "Увеличение количества доставок на одно транспортное средство на 31%",
      "Сокращение опозданий на 64%"
    ],
    technologies: ["Нейронные сети", "Генетические алгоритмы", "Машинное обучение", "Анализ данных GPS и трафика"],
    timeline: "6 месяцев",
    icon: <BarChart className="h-5 w-5 text-primary" />,
  },
  {
    id: "market-forecasting",
    title: "Прогнозирование рыночных тенденций",
    client: "Инвестиционная компания «ИнвестКапитал»",
    category: "Предсказательные модели",
    description: "Разработка системы предсказательного анализа финансовых рынков, повысившей точность инвестиционных прогнозов на 31% по сравнению с традиционными методами.",
    fullDescription: "Для инвестиционной компании «ИнвестКапитал» мы создали систему предсказательного анализа финансовых рынков. Система обрабатывает огромные объемы данных, включая финансовую отчетность компаний, макроэкономические показатели, новостной фон и социальные медиа, выявляя скрытые закономерности и формируя прогнозы с высокой степенью точности.",
    results: [
      "Повышение точности инвестиционных прогнозов на 31%",
      "Увеличение доходности портфелей клиентов в среднем на 17%",
      "Сокращение времени на аналитику на 68%",
      "Расширение спектра анализируемых активов в 4 раза"
    ],
    technologies: ["Глубокое обучение", "Анализ временных рядов", "Обработка естественного языка", "Облачные вычисления"],
    timeline: "9 месяцев",
    icon: <AlertCircle className="h-5 w-5 text-primary" />,
  },
];

const CaseDetail = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [caseItem, setCaseItem] = useState<CaseType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true);
    setTimeout(() => {
      const foundCase = caseData.find(item => item.id === caseId);
      setCaseItem(foundCase || null);
      setLoading(false);
    }, 300);
  }, [caseId]);

  if (loading) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Загрузка кейса...</p>
        </div>
      </div>
    );
  }

  if (!caseItem) {
    return (
      <div className="container py-12 space-y-6 text-center">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto" />
        <h1 className="text-3xl font-bold">Кейс не найден</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          К сожалению, запрашиваемый кейс не существует или был удален.
        </p>
        <Button asChild variant="default">
          <Link to="/cases">Вернуться к списку кейсов</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" asChild className="mb-6 group">
        <Link to="/cases">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Назад к кейсам
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {caseItem.icon}
              <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                {caseItem.category}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{caseItem.title}</h1>
            <p className="text-xl text-muted-foreground">Клиент: {caseItem.client}</p>
          </div>

          <Separator />

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold">О проекте</h2>
            <p>{caseItem.fullDescription || caseItem.description}</p>

            <h2 className="text-2xl font-semibold mt-8">Результаты</h2>
            <ul>
              {caseItem.results?.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-8">Используемые технологии</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {caseItem.technologies?.map((tech, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">Хотите такой же результат для своего бизнеса?</h3>
            <p className="mb-4">
              Наши эксперты помогут вам внедрить аналогичное решение, адаптированное под особенности вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Обсудить проект</Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Информация о проекте</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Клиент</p>
                <p className="font-medium">{caseItem.client}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Категория</p>
                <p className="font-medium">{caseItem.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Срок реализации</p>
                <p className="font-medium">{caseItem.timeline || "6-8 месяцев"}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Похожие кейсы</h3>
            <div className="space-y-4">
              {caseData
                .filter(item => item.id !== caseItem.id && item.category === caseItem.category)
                .slice(0, 2)
                .map(similarCase => (
                  <div key={similarCase.id} className="group">
                    <Link to={`/cases/${similarCase.id}`} className="block hover:bg-accent p-3 rounded-lg transition-colors">
                      <p className="font-medium group-hover:text-primary transition-colors">{similarCase.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{similarCase.description}</p>
                    </Link>
                  </div>
                ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
