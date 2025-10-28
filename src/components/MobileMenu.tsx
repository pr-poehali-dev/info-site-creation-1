import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface MobileMenuProps {
  logoElement: React.ReactNode;
}

export default function MobileMenu({ logoElement }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', icon: 'Home', href: '/' },
    { name: 'Статьи', icon: 'BookOpen', href: '#articles' },
    { name: 'Новости', icon: 'Newspaper', href: '#news' },
    { name: 'Категории', icon: 'Grid3x3', href: '#categories' },
    { name: 'О проекте', icon: 'Info', href: '#about' },
    { name: 'Контакты', icon: 'Mail', href: '#contacts' },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Icon name="Menu" size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="mb-8">
          <SheetTitle className="flex items-center gap-2">
            {logoElement}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
            >
              <Icon name={item.icon} size={20} className="text-primary" />
              <span className="text-base font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="absolute bottom-8 left-6 right-6">
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground mb-4">Соцсети</p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
