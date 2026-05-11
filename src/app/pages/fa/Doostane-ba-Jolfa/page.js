import Link from 'next/link';
import { ChefHat, Newspaper, BookOpen, ArrowLeft } from 'lucide-react';

export default function DoostaneBaJolfaPage() {
  // آرایه اطلاعات دسته‌بندی‌ها برای مدیریت راحت‌تر و تمیزتر شدن کد
  const sections = [
    {
      id: 'recipes',
      title: 'دستور پخت‌ها',
      description: 'خلق طعم‌های بی‌نظیر با پنیرها و محصولات جلفا. آموزش قدم‌به‌قدم غذاهای لذیذ.',
      href: '/pages/fa/Doostane-ba-Jolfa/recipes',
      icon: ChefHat,
      color: 'text-amber-500 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-500/10',
      hoverBorder: 'hover:border-amber-200 dark:hover:border-amber-800',
    },
    {
      id: 'articles',
      title: 'مـقـالات',
      description: 'دانستنی‌های جذاب درباره لبنیات، سلامتی، تغذیه و استانداردهای تولید جلفا فودز.',
      href: '/pages/fa/Doostane-ba-Jolfa/Articles',
      icon: BookOpen,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-500/10',
      hoverBorder: 'hover:border-blue-200 dark:hover:border-blue-800',
    },
    {
      id: 'news',
      title: 'اخبار و رویدادها',
      description: 'آخرین اخبار شرکت، حضور در نمایشگاه‌های بین‌المللی و دستاوردهای جدید جلفا.',
      href: '/pages/fa/Doostane-ba-Jolfa/News',
      icon: Newspaper,
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
      hoverBorder: 'hover:border-emerald-200 dark:hover:border-emerald-800',
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-gray-50/50 dark:bg-[#020817] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* بخش عنوان صفحه (Hero Section) */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-2">
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm px-4 py-1">
              مجله جلفا فودز
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            دوستانه با <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">جلفا</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            به دنیای خوشمزه‌ها و دانستنی‌های جلفا خوش آمدید. در اینجا می‌توانید با محصولات ما غذاهای جدید خلق کنید و از آخرین اخبار مطلع شوید.
          </p>
        </div>

        {/* بخش کارت‌ها (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sections.map((section) => {
            const Icon = section.icon;
            
            return (
              <Link 
                key={section.id} 
                href={section.href}
                className={`group relative flex flex-col bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-none ${section.hoverBorder}`}
              >
                {/* آیکون کارت */}
                <div className={`w-16 h-16 rounded-2xl ${section.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-8 h-8 ${section.color}`} strokeWidth={1.5} />
                </div>

                {/* محتوای کارت */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                  {section.description}
                </p>

                {/* دکمه / لینک پایین کارت */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-white/10 text-gray-900 dark:text-white font-medium">
                  <span className="transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    مشاهده مطالب
                  </span>
                  <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 group-hover:-translate-x-2" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}
