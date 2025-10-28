import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Технологии', icon: 'Cpu', color: 'bg-primary' },
  { name: 'Наука', icon: 'Atom', color: 'bg-secondary' },
  { name: 'Бизнес', icon: 'TrendingUp', color: 'bg-accent' },
  { name: 'Культура', icon: 'Palette', color: 'bg-purple-500' },
  { name: 'Спорт', icon: 'Trophy', color: 'bg-orange-500' },
  { name: 'Здоровье', icon: 'Heart', color: 'bg-pink-500' },
];

const articles = [
  {
    id: 1,
    title: 'Искусственный интеллект в 2025: новые горизонты',
    description: 'Как нейросети меняют мир вокруг нас и открывают новые возможности',
    category: 'Технологии',
    tags: ['ИИ', 'Инновации', 'Будущее'],
    image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/6b951ef4-9eb6-43b9-a2e2-ec6e312104c0.jpg',
    date: '25 октября 2025',
    views: '12.5К',
  },
  {
    id: 2,
    title: 'Квантовые компьютеры: прорыв десятилетия',
    description: 'Новое поколение вычислительных систем готово изменить индустрию',
    category: 'Наука',
    tags: ['Квантовые технологии', 'Компьютеры', 'Исследования'],
    image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/7a0e32e3-928a-4cb7-8354-9fd51c221cef.jpg',
    date: '24 октября 2025',
    views: '8.2К',
  },
  {
    id: 3,
    title: 'Революция в медицине: персонализированное лечение',
    description: 'Генная терапия открывает новые пути к исцелению',
    category: 'Здоровье',
    tags: ['Медицина', 'Биотехнологии', 'Здоровье'],
    image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/6b951ef4-9eb6-43b9-a2e2-ec6e312104c0.jpg',
    date: '23 октября 2025',
    views: '15.3К',
  },
];

const news = [
  {
    id: 1,
    title: 'Запуск новой космической миссии к Марсу',
    time: '2 часа назад',
    category: 'Наука',
  },
  {
    id: 2,
    title: 'Прорыв в области квантовой связи',
    time: '5 часов назад',
    category: 'Технологии',
  },
  {
    id: 3,
    title: 'Олимпийские игры: рекорды и достижения',
    time: '8 часов назад',
    category: 'Спорт',
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => article.tags.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                InfoHub
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Статьи</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Категории</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 px-4 animate-fade-in">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Информация, которая вдохновляет
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Исследуйте мир знаний с расширенным поиском и интеллектуальными фильтрами
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск статей, новостей, категорий..."
              className="pl-12 pr-4 py-6 text-lg rounded-2xl shadow-lg border-2 focus:border-primary transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:scale-105 transition-transform px-4 py-2"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6">Категории</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => (
              <Card
                key={category.name}
                className={`cursor-pointer hover:scale-105 transition-all hover:shadow-xl animate-scale-in ${
                  selectedCategory === category.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={category.icon} size={32} className="text-white" />
                  </div>
                  <p className="font-semibold">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="container mx-auto">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="articles" className="text-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Статьи
              </TabsTrigger>
              <TabsTrigger value="news" className="text-lg">
                <Icon name="Newspaper" size={20} className="mr-2" />
                Новости
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group"
                    onClick={() => navigate(`/article/${article.id}`)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4">{article.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{article.views}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="news" className="animate-fade-in">
              <div className="max-w-3xl mx-auto space-y-4">
                {news.map((item) => (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-all cursor-pointer hover:border-primary"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{item.category}</Badge>
                            <span className="text-sm text-muted-foreground">{item.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <Icon name="ChevronRight" size={24} className="text-muted-foreground flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">О проекте</h4>
              <p className="text-white/80 text-sm">
                InfoHub — современный информационный портал с расширенным поиском и умными фильтрами
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Категории</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@infohub.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2025 InfoHub. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}