import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import MobileMenu from '@/components/MobileMenu';
import ThemeToggle from '@/components/ThemeToggle';

const article = {
  title: 'Искусственный интеллект в 2025: новые горизонты',
  description: 'Как нейросети меняют мир вокруг нас и открывают новые возможности',
  category: 'Технологии',
  tags: ['ИИ', 'Инновации', 'Будущее'],
  image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/6b951ef4-9eb6-43b9-a2e2-ec6e312104c0.jpg',
  date: '25 октября 2025',
  views: '12.5К',
  readTime: '8 мин',
  author: {
    name: 'Алексей Иванов',
    avatar: '',
    role: 'Технологический эксперт',
  },
  content: `
    <p>Искусственный интеллект продолжает революционизировать индустрию технологий, открывая невиданные ранее возможности. В 2025 году мы наблюдаем беспрецедентный рост применения нейросетей в самых разных сферах — от медицины до творчества.</p>
    
    <h3>Медицинские прорывы</h3>
    <p>ИИ-системы теперь способны диагностировать заболевания на ранних стадиях с точностью до 98%. Это спасает тысячи жизней ежедневно. Алгоритмы машинного обучения анализируют медицинские снимки быстрее и точнее опытных специалистов.</p>
    
    <h3>Творческие возможности</h3>
    <p>Генеративные модели достигли уровня, когда созданный ИИ контент практически неотличим от работы профессионалов. Художники, музыканты и писатели используют нейросети как мощный инструмент для реализации своих идей.</p>
    
    <h3>Бизнес-автоматизация</h3>
    <p>Компании внедряют ИИ-ассистентов для оптимизации бизнес-процессов. Автоматизация рутинных задач позволяет сотрудникам сосредоточиться на стратегически важных решениях, повышая общую эффективность работы.</p>
    
    <h3>Этические вопросы</h3>
    <p>С ростом возможностей ИИ возникают новые этические дилеммы. Общество активно обсуждает вопросы приватности данных, предвзятости алгоритмов и влияния автоматизации на рынок труда. Регуляторы по всему миру работают над созданием справедливых правил использования искусственного интеллекта.</p>
  `,
};

const comments = [
  {
    id: 1,
    author: 'Мария Петрова',
    avatar: '',
    text: 'Отличная статья! Очень интересно читать про развитие ИИ в медицине.',
    date: '2 часа назад',
    likes: 24,
  },
  {
    id: 2,
    author: 'Дмитрий Сидоров',
    avatar: '',
    text: 'Согласен с автором. ИИ действительно меняет нашу жизнь к лучшему.',
    date: '5 часов назад',
    likes: 15,
  },
  {
    id: 3,
    author: 'Елена Козлова',
    avatar: '',
    text: 'Хотелось бы больше узнать про этические аспекты использования ИИ.',
    date: '1 день назад',
    likes: 8,
  },
];

const relatedArticles = [
  {
    id: 1,
    title: 'Квантовые компьютеры: прорыв десятилетия',
    category: 'Наука',
    image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/7a0e32e3-928a-4cb7-8354-9fd51c221cef.jpg',
  },
  {
    id: 2,
    title: 'Революция в медицине: персонализированное лечение',
    category: 'Здоровье',
    image: 'https://cdn.poehali.dev/projects/a8a03ccc-464b-4bee-b6c5-69c17c23f6cb/files/6b951ef4-9eb6-43b9-a2e2-ec6e312104c0.jpg',
  },
];

export default function ArticleDetail() {
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
                <Icon name="ArrowLeft" size={24} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  InfoHub
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Статьи</a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              </nav>
              <ThemeToggle />
            </div>
            <MobileMenu
              logoElement={
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    InfoHub
                  </span>
                </div>
              }
            />
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <div className="mb-6">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">{article.description}</p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback className="bg-primary text-white">
                  {article.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={16} />
                <span>{article.views}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2 mb-8">
          <Button
            variant={isLiked ? "default" : "outline"}
            size="lg"
            className="gap-2"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Icon name="Heart" size={20} className={isLiked ? "fill-current" : ""} />
            <span>Нравится</span>
          </Button>
          <Button
            variant={isBookmarked ? "default" : "outline"}
            size="lg"
            className="gap-2"
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Icon name="Bookmark" size={20} className={isBookmarked ? "fill-current" : ""} />
            <span>Сохранить</span>
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Icon name="Share2" size={20} />
            <span>Поделиться</span>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
              #{tag}
            </Badge>
          ))}
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
              }}
            />
          </CardContent>
        </Card>

        <Separator className="my-12" />

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Комментарии ({comments.length})</h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <Textarea
                placeholder="Поделитесь своим мнением..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4 min-h-[100px]"
              />
              <Button onClick={handleCommentSubmit} className="gap-2">
                <Icon name="Send" size={18} />
                Отправить комментарий
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback className="bg-secondary text-white">
                        {comment.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold">{comment.author}</p>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-3">{comment.text}</p>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Icon name="ThumbsUp" size={16} />
                        <span>{comment.likes}</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-3xl font-bold mb-6">Читайте также</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <Card
                key={related.id}
                className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{related.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {related.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </article>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 mt-16">
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