import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        solutions: "Solutions",
        resources: "Resources",
        community: "Community",
        about: "About",
        contact: "Contact"
      },
      hero: {
        badge: "Maximizing Human Potential",
        title1: "Empowering",
        title2: "HR Professionals",
        title3: "Worldwide",
        description: "The premier destination for HR leaders seeking cutting-edge resources, professional development, and a thriving global community.",
        cta1: "Explore Solutions",
        cta2: "Learn More"
      },
      stats: {
        professionals: "Professionals",
        manpower: "Skilled Manpower Standby",
        countries: "Countries Reached",
        excellence: "Years of Excellence"
      },
      features: {
        badge: "Our Solutions",
        title: "Everything HR, All in One Place",
        description: "Comprehensive tools and resources to transform your HR practice and unlock the full potential of your workforce.",
        items: {
          learning: { title: "Documents Required", desc: "Detailed requirements for recruitment and employment documentation." },
          talent: { title: "Talent Management", desc: "Streamline recruitment, onboarding, and retention with data-driven strategies." },
          certs: { title: "Professional Certifications", desc: "Earn industry-recognized credentials that advance your career and organization." },
          analytics: { title: "HR Analytics & Insights", desc: "Leverage research-backed insights to make informed workforce decisions." },
          global: { title: "Global Community", desc: "Connect with HR leaders across 180+ countries through events and forums." },
          compliance: { title: "Terms & Conditions", desc: "Standardized employment and recruitment agreements." }
        }
      },
      testimonials: {
        badge: "Community Voices",
        title: "Trusted by HR Leaders",
        items: [
          {
            quote: "Kangaroo Human Resources transformed the way our team approaches talent development. The resources are unmatched in quality and relevance.",
            name: "Sarah Mitchell",
            role: "VP of People, TechForward Inc."
          },
          {
            quote: "The certifications I earned through Kangaroo Human Resources directly contributed to my promotion. An invaluable investment in my career.",
            name: "James Chen",
            role: "Senior HR Director, GlobalCorp"
          },
          {
            quote: "Being part of this community has connected me with brilliant minds worldwide. The networking alone is worth every moment.",
            name: "Amara Osei",
            role: "Chief People Officer, BrightPath"
          }
        ]
      },
      about: {
        title: "About Kangaroo Human Resources",
        description: "We are more than a recruitment agency. We are your partners in human potential, dedicated to connecting exceptional talent with visionary organizations across the globe.",
        vision: {
          title: "Our Vision",
          text: "To create a world where every individual's potential is recognized and every organization is powered by the right people."
        },
        mission: {
          title: "Our Mission",
          text: "To bridge the gap between global opportunities and local talent through innovative HR solutions, professional development, and community-driven insights."
        },
        global: {
          title: "Global Reach",
          text: "With a presence in over 50 countries, we maintain a vast network that allows us to source specialized global talent for local and international needs."
        },
        industry: {
          title: "Industry Focus",
          text: "Our teams consist of specialized recruiters who possess deep domain knowledge in Technology, Finance, Healthcare, Engineering, and Executive Leadership."
        },
        headquarters: "Visit Our Headquarters"
      },
      solutions: {
        title: "Our Recruiting Solutions",
        executive: {
          title: "Executive Search",
          text: "Finding the right leadership is critical to your organization's success. Our targeted executive search methodology ensures we identify, evaluate, and place top-tier talent who align with your company's vision and culture."
        },
        volume: {
          title: "Volume Staffing",
          text: "Need to scale quickly? We manage large-scale recruitment campaigns efficiently without compromising on candidate quality. Our streamlined processes mean you get the workforce you need, exactly when you need it."
        },
        why: {
          title: "Why Choose Kangaroo Human Resources?",
          expertise: { title: "Industry Expertise:", text: "Specialized recruiters who understand your sector." },
          reach: { title: "Global Reach:", text: "Access to a worldwide network of passive and active candidates." },
          tailored: { title: "Tailored Approach:", text: "Customized solutions designed for your specific hiring needs." }
        }
      },
      cta: {
        title: "Ready to Transform Your HR?",
        description: "Join thousands of HR leaders who rely on Kangaroo Human Resources for their strategic workforce needs.",
        button: "Contact Us Today"
      },
      resources: {
        title: "Resource Library",
        description: "Empower your HR leadership with our curated library of hiring guides, market insights, and operational tools designed to maximize organizational potential.",
        search: "Search resources...",
        featured: {
          badge: "Featured Content",
          title: "The Future of Talent Acquisition 2026",
          description: "Our flagship annual report exploring the intersection of AI, human creativity, and the evolving landscape of global recruitment.",
          button: "Download Full Report"
        },
        categories: {
          all: "All",
          guides: "Guides",
          checklists: "Checklists",
          articles: "Articles",
          whitepapers: "White Papers",
          templates: "Templates"
        },
        items: {
          salary: { title: "2026 Global Salary Guide", desc: "Comprehensive compensation data across specific industries and roles to help you stay competitive in the global market.", link: "Download PDF" },
          onboarding: { title: "Onboarding Best Practices", desc: "Ensure your new hires hit the ground running with our structured 90-day onboarding checklist and integration framework.", link: "View Checklist" },
          interview: { title: "Interview Techniques", desc: "Move beyond the standard questions. Learn behavioral interview tactics that uncover true potential and cultural alignment.", link: "Read Article" },
          remote: { title: "Remote Work Policy", desc: "A comprehensive framework for managing flexible work arrangements in a post-pandemic world.", link: "Download Template" },
          diversity: { title: "2026 Diversity & Inclusion Report", desc: "Data-driven insights into the current state of DE&I and actionable strategies for improvement.", link: "Read Report" },
          retention: { title: "Employee Retention Strategies", desc: "Proven tactics to reduce turnover and keep your top talent engaged and committed to your mission.", link: "Read Article" }
        },
        newsletter: {
          title: "Stay Ahead of the Curve",
          description: "Subscribe to our monthly newsletter and get the latest HR insights, regulatory updates, and resource guides delivered straight to your inbox.",
          placeholder: "address@company.com",
          button: "Subscribe"
        }
      },
      community: {
        title: "Join Our Network",
        description: "When you partner with Kangaroo Human Resources, you join a network of top-tier employers and exceptional talent. See what others are saying about their experience working with us."
      },
      contact: {
        title: "Get in Touch",
        description: "Ready to maximize your organization's potential? Contact Kangaroo Human Resources today to discuss your specific staffing needs.",
        headquarters: "Headquarters",
        email: "Email Us",
        call: "Call Us",
        follow: "Follow Us",
        address: "Sinamangal-09, Kathmandu, Nepal",
        form: {
          title: "Send a Message",
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone Number",
          inquiry: "Inquiry Type",
          message: "Message",
          submit: "Submit Application",
          options: {
            hire: "I need to hire talent",
            look: "I am looking for a job",
            partner: "Partnership inquiry",
            other: "Other"
          },
          placeholders: {
            firstName: "John",
            lastName: "Doe",
            email: "john@company.com",
            message: "How can we help you?"
          }
        },
        map: {
          title: "Our Location",
          subtitle: "Visit us at our Kathmandu headquarters"
        }
      },
      footer: {
        tagline: "Maximizing Human Potential.",
        sections: {
          solutions: "Solutions",
          resources: "Resources",
          company: "Company",
          legal: "Legal"
        },
        links: {
          talent: "Talent Management",
          learning: "Documents Required",
          analytics: "HR Analytics",
          compliance: "Compliance",
          webcasts: "Webcasts",
          research: "Research",
          whitepapers: "White Papers",
          podcasts: "Podcasts",
          about: "About Us",
          careers: "Careers",
          press: "Press",
          contact: "Contact",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          cookie: "Cookie Policy"
        },
        quickLinks: {
          title: "Quick Links",
          dofe: "DOFE",
          moless: "MoLESS",
          feb: "FEB",
          nafea: "NAFEA"
        }
      }
    }
  },
  ar: { // Used for Kuwait/Dubai
    translation: {
      nav: {
        solutions: "الحلول",
        resources: "الموارد",
        community: "المجتمع",
        about: "من نحن",
        contact: "اتصل بنا"
      },
      hero: {
        badge: "تعظيم الإمكانات البشرية",
        title1: "تمكين",
        title2: "محترفي الموارد البشرية",
        title3: "في جميع أنحاء العالم",
        description: "الوجهة الأولى لقادة الموارد البشرية الذين يبحثون عن أحدث الموارد والتطوير المهني ومجتمع عالمي مزدهر.",
        cta1: "استكشاف الحلول",
        cta2: "تعرف على المزيد"
      },
      stats: {
        professionals: "محترف",
        manpower: "قوى عاملة ماهرة جاهزة",
        countries: "بلدان وصلنا إليها",
        excellence: "سنوات من التميز"
      },
      features: {
        badge: "حلولنا",
        title: "كل شيء في الموارد البشرية، في مكان واحد",
        description: "أدوات وموارد شاملة لتحويل ممارسات الموارد البشرية لديك وإطلاق العنان للإمكانات الكاملة للقوى العاملة لديك.",
        items: {
          learning: { title: "المستندات المطلوبة", desc: "المتطلبات التفصيلية لوثائق التوظيف والعمل." },
          talent: { title: "إدارة المواهب", desc: "تبسيط التوظيف والتدريب والاحتفاظ بالمواهب من خلال استراتيجيات قائمة على البيانات." },
          certs: { title: "الشهادات المهنية", desc: "احصل على أوراق اعتماد معترف بها في الصناعة تعمل على تطوير حياتك المهنية ومؤسستك." },
          analytics: { title: "تحليلات الموارد البشرية", desc: "الاستفادة من الرؤى المدعومة بالأبحاث لاتخاذ قرارات مدروسة بشأن القوى العاملة." },
          global: { title: "المجتمع العالمي", desc: "تواصل مع قادة الموارد البشرية في أكثر من 180 دولة من خلال الفعاليات والمنتديات." },
          compliance: { title: "الشروط والأحكام", desc: "اتفاقيات التوظيف والعمل الموحدة." }
        }
      },
      testimonials: {
        badge: "أصوات المجتمع",
        title: "موثوق به من قبل قادة الموارد البشرية",
        items: [
          {
            quote: "لقد أحدثت كانغارو للموارد البشرية تحولاً في طريقة تعامل فريقنا مع تطوير المواهب. الموارد لا مثيل لها في الجودة والأهمية.",
            name: "سارة ميتشل",
            role: "نائب رئيس قسم الموظفين، شركة TechForward"
          },
          {
            quote: "الشهادات التي حصلت عليها من خلال كانغارو للموارد البشرية ساهمت بشكل مباشر في ترقيتي. استثمار لا يقدر بثمن في حياتي المهنية.",
            name: "جيمس تشين",
            role: "مدير الموارد البشرية سينيور، GlobalCorp"
          },
          {
            quote: "كوني جزءاً من هذا المجتمع ربطني بعقول لامعة في جميع أنحاء العالم. التواصل وحده يستحق كل لحظة.",
            name: "أمارة أوساي",
            role: "رئيس قسم الموظفين، BrightPath"
          }
        ]
      },
      about: {
        title: "عن كانغارو للموارد البشرية",
        description: "نحن أكثر من مجرد وكالة توظيف. نحن شركاؤك في الإمكانات البشرية، مكرسون لربط المواهب الاستثنائية مع المؤسسات الرؤيوية في جميع أنحاء العالم.",
        vision: {
          title: "رؤيتنا",
          text: "خلق عالم يتم فيه تقدير إمكانات كل فرد وتزويد كل مؤسسة بالأشخاص المناسبين."
        },
        mission: {
          title: "مهمتنا",
          text: "سد الفجوة بين الفرص العالمية والمواهب المحلية من خلال حلول الموارد البشرية المبتكرة والتطوير المهني والرؤى القائمة على المجتمع."
        },
        global: {
          title: "انتشار عالمي",
          text: "مع وجودنا في أكثر من 50 دولة، نحافظ على شبكة واسعة تتيح لنا استقطاب مواهب عالمية متخصصة للاحتياجات المحلية والدولية."
        },
        industry: {
          title: "التركيز الصناعي",
          text: "تتكون فرقنا من موظفي توظيف متخصصين يمتلكون معرفة عميقة في مجالات التكنولوجيا والتمويل والرعاية الصحية والهندسة والقيادة التنفيذية."
        },
        headquarters: "تفضل بزيارة مقرنا الرئيسي"
      },
      solutions: {
        title: "حلول التوظيف لدينا",
        executive: {
          title: "الرأس التنفيذي",
          text: "يعد العثور على القيادة المناسبة أمراً بالغ الأهمية لنجاح مؤسستك. تضمن منهجية البحث التنفيذي المستهدفة لدينا تحديد وتقييم وتعيين مواهب من الدرجة الأولى تتماشى مع رؤية شركتك وثقافتها."
        },
        volume: {
          title: "التوظيف الجماعي",
          text: "هل تحتاج إلى التوسع بسرعة؟ نحن ندير حملات توظيف واسعة النطاق بكفاءة دون المساومة على جودة المرشحين. تعني عملياتنا المبسطة حصولك على القوى العاملة التي تحتاجها، بالضبط عندما تحتاجها."
        },
        why: {
          title: "لماذا تختار كانغارو للموارد البشرية؟",
          expertise: { title: "خبرة الصناعة:", text: "موظفو توظيف متخصصون يفهمون قطاعك." },
          reach: { title: "انتشار عالمي:", text: "الوصول إلى شبكة عالمية من المرشحين السلبيين والنشطين." },
          tailored: { title: "نهج مخصص:", text: "حلول مخصصة مصممة لاحتياجات التوظيف الخاصة بك." }
        }
      },
      cta: {
        title: "جاهز لتحويل مواردك البشرية؟",
        description: "انضم إلى الآلاف من قادة الموارد البشرية الذين يعتمدون على كانغارو للموارد البشرية لاحتياجات القوى العاملة الاستراتيجية الخاصة بهم.",
        button: "اتصل بنا اليوم"
      },
      resources: {
        title: "مكتبة الموارد",
        description: "قم بتمكين قيادة الموارد البشرية لديك من خلال مكتبتنا المنسقة لأدلة التوظيف ورؤى السوق والأدوات التشغيلية المصممة لتعظيم الإمكانات التنظيمية.",
        search: "بحث عن الموارد...",
        featured: {
          badge: "محتوى مميز",
          title: "مستقبل استقطاب المواهب 2026",
          description: "تقريرنا السنوي الرائد الذي يستكشف تقاطع الذكاء الاصطناعي والإبداع البشري والمشهد المتطور للتوظيف العالمي.",
          button: "تنزيل التقرير الكامل"
        },
        categories: {
          all: "الكل",
          guides: "الأدلة",
          checklists: "القوائم المرجعية",
          articles: "المقالات",
          whitepapers: "الأوراق البيضاء",
          templates: "القوالب"
        },
        items: {
          salary: { title: "دليل الرواتب العالمي 2026", desc: "بيانات تعويض شاملة عبر صناعات وأدوار محددة لمساعدتك على البقاء تنافسياً في السوق العالمية.", link: "تنزيل PDF" },
          onboarding: { title: "أفضل ممارسات التهيأة للعمل", desc: "تأكد من أن موظفيك الجدد يبدأون بقوة من خلال قائمة المراجعة المهيكلة للتهيئة للعمل لمدة 90 يوماً وإطار الدمج.", link: "عرض قائمة المراجعة" },
          interview: { title: "تقنيات المقابلة", desc: "تجاوز الأسئلة القياسية. تعلم تكتيكات المقابلة السلوكية التي تكشف عن الإمكانات الحقيقية والتوافق الثقافي.", link: "قراءة المقال" },
          remote: { title: "سياسة العمل عن بعد", desc: "إطار عمل شامل لإدارة ترتيبات العمل المرنة في عالم ما بعد الوباء.", link: "تنزيل القالب" },
          diversity: { title: "تقرير التنوع والشمول 2026", desc: "رؤى قائمة على البيانات في الحالة الراهنة للتنوع والشمول واستراتيجيات قابلة للتنفيذ للتحسين.", link: "قراءة التقرير" },
          retention: { title: "استراتيجيات الاحتفاظ بالموظفين", desc: "تكتيكات مجربة لتقليل معدل دوران الموظفين والحفاظ على مشاركة كبار المواهب والتزامهم بمهمتك.", link: "قراءة المقال" }
        },
        newsletter: {
          title: "ابق في الطليعة",
          description: "اشترك في نشرتنا الإخبارية الشهرية واحصل على أحدث رؤى الموارد البشرية والتحديثات التنظيمية وأدلة الموارد التي يتم توصيلها مباشرة إلى صندوق الوارد الخاص بك.",
          placeholder: "عنوان البريد الإلكتروني",
          button: "اشترك"
        }
      },
      community: {
        title: "انضم إلى شبكتنا",
        description: "عندما تشارك كانغارو للموارد البشرية، فإنك تنضم إلى شبكة من كبار أصحاب العمل والمواهب الاستثنائية. تعرف على ما يقوله الآخرون عن تجربتهم في العمل معنا."
      },
      contact: {
        title: "تواصل معنا",
        description: "جاهز لتعظيم إمكانات مؤسستك؟ اتصل بكانغارو للموارد البشرية اليوم لمناقشة احتياجاتك الخاصة من الموظفين.",
        headquarters: "المقر الرئيسي",
        email: "راسلنا عبر البريد الإلكتروني",
        call: "اتصل بنا",
        follow: "تابعنا",
        address: "سينامنجال-09، كاتماندو، نيبال",
        form: {
          title: "أرسل رسالة",
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          inquiry: "نوع الاستفسار",
          message: "الرسالة",
          submit: "تقديم الطلب",
          options: {
            hire: "أحتاج إلى توظيف مواهب",
            look: "أنا أبحث عن وظيفة",
            partner: "استفسار عن الشراكة",
            other: "أخرى"
          },
          placeholders: {
            firstName: "أحمد",
            lastName: "علي",
            email: "ahmed@company.com",
            message: "كيف يمكننا مساعدتك؟"
          }
        },
        map: {
          title: "موقعنا",
          subtitle: "تفضل بزيارتنا في مقرنا الرئيسي في كاتماندو"
        }
      },
      footer: {
        tagline: "تعظيم الإمكانات البشرية.",
        sections: {
          solutions: "الحلول",
          resources: "الموارد",
          company: "الشركة",
          legal: "القانونية"
        },
        links: {
          talent: "إدارة المواهب",
          learning: "المستندات المطلوبة",
          analytics: "تحليلات الموارد البشرية",
          compliance: "الامتثال",
          webcasts: "البث عبر الويب",
          research: "الأبحاث",
          whitepapers: "الأوراق البيضاء",
          podcasts: "البودكاست",
          about: "من نحن",
          careers: "الوظائف",
          press: "الصحافة",
          contact: "اتصل بنا",
          privacy: "سياسة الخصوصية",
          terms: "شروط الخدمة",
          cookie: "سياسة الكوكيز"
        },
        quickLinks: {
          title: "روابط سريعة",
          dofe: "DOFE",
          moless: "MoLESS",
          feb: "FEB",
          nafea: "NAFEA"
        }
      }
    }
  },
  ms: { // Malaysian
    translation: {
      nav: {
        solutions: "Penyelesaian",
        resources: "Sumber",
        community: "Komuniti",
        about: "Tentang Kami",
        contact: "Hubungi"
      },
      hero: {
        badge: "Memaksimumkan Potensi Manusia",
        title1: "Memperkasa",
        title2: "Profesional HR",
        title3: "Seluruh Dunia",
        description: "Destinasi utama untuk pemimpin HR yang mencari sumber terkini, pembangunan profesional, dan komuniti global yang berkembang pesat.",
        cta1: "Teroka Penyelesaian",
        cta2: "Ketahui Lebih Lanjut"
      },
      stats: {
        professionals: "Profesional",
        manpower: "Tenaga Kerja Mahir Bersedia",
        countries: "Negara Dihubungi",
        excellence: "Tahun Kecemerlangan"
      },
      features: {
        badge: "Penyelesaian Kami",
        title: "Segalanya HR, Semua dalam Satu Tempat",
        description: "Alat dan sumber komprehensif untuk mengubah amalan HR anda dan membuka potensi penuh tenaga kerja anda.",
        items: {
          learning: { title: "Dokumen yang Diperlukan", desc: "Keperluan terperinci untuk dokumentasi pengambilan dan pekerjaan." },
          talent: { title: "Pengurusan Bakat", desc: "Memperkemaskan pengambilan, latihan, dan pengekalan dengan strategi berasaskan data." },
          certs: { title: "Pensijilan Profesional", desc: "Dapatkan kelayakan yang diiktiraf industri untuk memajukan kerjaya dan organisasi anda." },
          analytics: { title: "Analitik & Wawasan HR", desc: "Manfaatkan wawasan berasaskan penyelidikan untuk membuat keputusan tenaga kerja yang bermaklumat." },
          global: { title: "Komuniti Global", desc: "Berhubung dengan pemimpin HR merentas 180+ negara melalui acara dan forum." },
          compliance: { title: "Terma & Syarat", desc: "Perjanjian pekerjaan dan pengambilan standard." }
        }
      },
      testimonials: {
        badge: "Suara Komuniti",
        title: "Dipercayai oleh Pemimpin HR",
        items: [
          {
            quote: "Kangaroo Human Resources mengubah cara pasukan kami mendekati pembangunan bakat. Sumber-sumbernya tidak tertandingi dalam kualiti dan perkaitan.",
            name: "Sarah Mitchell",
            role: "Naib Presiden Rakyat, TechForward Inc."
          },
          {
            quote: "Pensijilan yang saya perolehi melalui Kangaroo Human Resources secara langsung menyumbang kepada kenaikan pangkat saya. Pelaburan yang tidak ternilai dalam kerjaya saya.",
            name: "James Chen",
            role: "Pengarah Kanan HR, GlobalCorp"
          },
          {
            quote: "Menjadi sebahagian daripada komuniti ini telah menghubungkan saya dengan minda yang bernas di seluruh dunia. Rangkaian sahaja sudah berbaloi pada setiap saat.",
            name: "Amara Osei",
            role: "Ketua Pegawai Rakyat, BrightPath"
          }
        ]
      },
      about: {
        title: "Tentang Kangaroo Human Resources",
        description: "Kami lebih daripada sekadar agensi pengambilan. Kami adalah rakan kongsi anda dalam potensi manusia, berdedikasi untuk menghubungkan bakat luar biasa dengan organisasi berwawasan di seluruh dunia.",
        vision: {
          title: "Visi Kami",
          text: "Untuk mencipta dunia di mana potensi setiap individu diiktiraf dan setiap organisasi dikuasakan oleh orang yang tepat."
        },
        mission: {
          title: "Misi Kami",
          text: "Untuk merapatkan jurang antara peluang global dan bakat tempatan melalui penyelesaian HR yang inovatif, pembangunan profesional, dan wawasan dipacu komuniti."
        },
        global: {
          title: "Jangkauan Global",
          text: "Dengan kehadiran di lebih 50 negara, kami mengekalkan rangkaian luas yang membolehkan kami mendapatkan bakat global khusus untuk keperluan tempatan dan antarabangsa."
        },
        industry: {
          title: "Fokus Industri",
          text: "Pasukan kami terdiri daripada perekrut khusus yang memiliki pengetahuan domain mendalam dalam Teknologi, Kewangan, Penjagaan Kesihatan, Kejuruteraan, dan Kepimpinan Eksekutif."
        },
        headquarters: "Lawati Ibu Pejabat Kami"
      },
      solutions: {
        title: "Penyelesaian Pengambilan Kami",
        executive: {
          title: "Carian Eksekutif",
          text: "Mencari kepimpinan yang betul adalah kritikal untuk kejayaan organisasi anda. Metodologi carian eksekutif kami yang disasarkan memastikan kami mengenal pasti, menilai, dan menempatkan bakat kelas atasan yang sejajar dengan visi dan budaya syarikat anda."
        },
        volume: {
          title: "Kakitangan Skala Besar",
          text: "Perlu berkembang dengan cepat? Kami menguruskan kempen pengambilan berskala besar secara cekap tanpa menjejaskan kualiti calon. Proses kami yang diperkemas bermakna anda mendapat tenaga kerja yang anda perlukan, tepat pada masa anda memerlukannya."
        },
        why: {
          title: "Mengapa Memilih Kangaroo Human Resources?",
          expertise: { title: "Kepakaran Industri:", text: "Perekrut khusus yang memahami sektor anda." },
          reach: { title: "Jangkauan Global:", text: "Akses kepada rangkaian seluruh dunia calon pasif dan aktif." },
          tailored: { title: "Pendekatan Tersuai:", text: "Penyelesaian khusus yang direka untuk keperluan pengambilan anda yang tertentu." }
        }
      },
      cta: {
        title: "Sedia untuk Mengubah HR Anda?",
        description: "Sertai beribu-beribu pemimpin HR yang bergantung kepada Kangaroo Human Resources untuk keperluan tenaga kerja strategik mereka.",
        button: "Hubungi Kami Hari Ini"
      },
      resources: {
        title: "Perpustakaan Sumber",
        description: "Perkasakan kepimpinan HR anda dengan perpustakaan kami yang dipilih rapi daripada panduan pengambilan, wawasan pasaran, dan alat operasi yang direka untuk memaksimumkan potensi organisasi.",
        search: "Cari sumber...",
        featured: {
          badge: "Kandungan Pilihan",
          title: "Masa Depan Pemerolehan Bakat 2026",
          description: "Laporan tahunan utama kami meneroka persimpangan AI, kreativiti manusia, dan landskap pengambilan global yang berkembang.",
          button: "Muat Turun Laporan Lengkap"
        },
        categories: {
          all: "Semua",
          guides: "Panduan",
          checklists: "Senarai Semak",
          articles: "Artikel",
          whitepapers: "Kertas Putih",
          templates: "Templat"
        },
        items: {
          salary: { title: "Panduan Gaji Global 2026", desc: "Data pampasan komprehensif merentas industri dan peranan tertentu untuk membantu anda kekal kompetitif dalam pasaran global.", link: "Muat Turun PDF" },
          onboarding: { title: "Amalan Terbaik Orientasi", desc: "Pastikan pekerja baru anda mula bekerja dengan lancar dengan senarai semak orientasi 90 hari dan rangka kerja integrasi kami.", link: "Lihat Senarai Semak" },
          interview: { title: "Teknik Temu Duga", desc: "Melebihi soalan standard. Ketahui taktik temu duga tingkah laku yang mendedahkan potensi sebenar dan keselarasan budaya.", link: "Baca Artikel" },
          remote: { title: "Dasar Kerja Jauh", desc: "Rangka kerja komprehensif untuk menguruskan pengaturan kerja fleksibel dalam dunia pasca-pandemik.", link: "Muat Turun Templat" },
          diversity: { title: "Laporan Kepelbagaian & Kemasukan 2026", desc: "Wawasan berasaskan data tentang keadaan semasa DE&I dan strategi yang boleh diambil untuk penambahbaikan.", link: "Baca Laporan" },
          retention: { title: "Strategi Pengekalan Pekerja", desc: "Taktik terbukti untuk mengurangkan pusing ganti dan memastikan bakat terbaik anda terus terlibat dan komited kepada misi anda.", link: "Baca Artikel" }
        },
        newsletter: {
          title: "Sentiasa Di Hadapan",
          description: "Langgan surat berita bulanan kami dan dapatkan wawasan HR terkini, kemas kini peraturan, dan panduan sumber yang dihantar terus ke peti masuk anda.",
          placeholder: "alamat@syarikat.com",
          button: "Langgan"
        }
      },
      community: {
        title: "Sertai Rangkaian Kami",
        description: "Apabila anda bekerjasama dengan Kangaroo Human Resources, anda menyertai rangkaian majikan kelas atasan dan bakat yang luar biasa. Lihat apa yang orang lain katakan tentang pengalaman mereka bekerja dengan kami."
      },
      contact: {
        title: "Hubungi Kami",
        description: "Sedia untuk memaksimumkan potensi organisasi anda? Hubungi Kangaroo Human Resources hari ini untuk membincangkan keperluan kakitangan khusus anda.",
        headquarters: "Ibu Pejabat",
        email: "Emel Kami",
        call: "Hubungi Kami",
        follow: "Ikuti Kami",
        address: "Sinamangal-09, Kathmandu, Nepal",
        form: {
          title: "Hantar Mesej",
          firstName: "Nama Pertama",
          lastName: "Nama Keluarga",
          email: "Emel",
          phone: "Nombor Telefon",
          inquiry: "Jenis Pertanyaan",
          message: "Mesej",
          submit: "Hantar Permohonan",
          options: {
            hire: "Saya perlu mengambil bakat",
            look: "Saya sedang mencari kerja",
            partner: "Pertanyaan perkongsian",
            other: "Lain-lain"
          },
          placeholders: {
            firstName: "John",
            lastName: "Doe",
            email: "john@syarikat.com",
            message: "Bagaimana kami boleh membantu anda?"
          }
        },
        map: {
          title: "Lokasi Kami",
          subtitle: "Lawati kami di ibu pejabat Kathmandu kami"
        }
      },
      footer: {
        tagline: "Memaksimumkan Potensi Manusia.",
        sections: {
          solutions: "Penyelesaian",
          resources: "Sumber",
          company: "Syarikat",
          legal: "Undang-undang"
        },
        links: {
          talent: "Pengurusan Bakat",
          learning: "Dokumen yang Diperlukan",
          analytics: "Analitik HR",
          compliance: "Pematuhan",
          webcasts: "Siaran Web",
          research: "Penyelidikan",
          whitepapers: "Kertas Putih",
          podcasts: "Podkast",
          about: "Tentang Kami",
          careers: "Kerjaya",
          press: "Akhbar",
          contact: "Hubungi",
          privacy: "Dasar Privasi",
          terms: "Syarat Perkhidmatan",
          cookie: "Dasar Kuki"
        },
        quickLinks: {
          title: "Pautan Pantas",
          dofe: "DOFE",
          moless: "MoLESS",
          feb: "FEB",
          nafea: "NAFEA"
        }
      }
    }
  },
  ja: { // Japanese
    translation: {
      nav: {
        solutions: "ソリューション",
        resources: "リソース",
        community: "コミュニティ",
        about: "私たちについて",
        contact: "お問い合わせ"
      },
      hero: {
        badge: "人間の可能性を最大限に引き出す",
        title1: "エンパワーメント",
        title2: "人事プロフェッショナル",
        title3: "世界中で",
        description: "最先端のリソース、専門能力の開発、そして繁栄するグローバルコミュニティを求める人事リーダーのための最高の目的地。",
        cta1: "ソリューションを探る",
        cta2: "もっと詳しく"
      },
      stats: {
        professionals: "プロフェッショナル",
        manpower: "待機中の熟練人材",
        countries: "到達した国々",
        excellence: "卓越性の歳月"
      },
      features: {
        badge: "私たちのソリューション",
        title: "人事に必要なすべてを、1か所に",
        description: "人事の実践を変革し、従業員の能力を最大限に引き出すための包括的なツールとリソース。",
        items: {
          learning: { title: "必要書類", desc: "採用および雇用に関する詳細な書類要件。" },
          talent: { title: "タレントマネジメント", desc: "データ主導の戦略により、採用、オンボーディング、離職防止を合理化します。" },
          certs: { title: "専門資格", desc: "キャリアと組織を前進させる、業界で認められた資格を取得できます。" },
          analytics: { title: "人事アナリティクスと洞察", desc: "研究に基づいた洞察を活用して、情報に基づいた労働力に関する意思決定を行います。" },
          global: { title: "グローバルコミュニティ", desc: "イベントやフォーラムを通じて、180か国以上の人事リーダーとつながります。" },
          compliance: { title: "利用規約", desc: "標準化された雇用および採用契約。" }
        }
      },
      testimonials: {
        badge: "コミュニティの声",
        title: "人事リーダーからの信頼",
        items: [
          {
            quote: "Kangaroo Human Resourcesは、私たちのチームがタレント開発に取り組む方法を変革しました。そのリソースは、品質と関連性において比類のないものです。",
            name: "サラ・ミッチェル",
            role: "TechForward Inc. ピープル担当副社長"
          },
          {
            quote: "Kangaroo Human Resourcesを通じて取得した資格は、私の昇進に直接貢献しました。私のキャリアにおいて非常に貴重な投資です。",
            name: "ジェームス・チェン",
            role: "GlobalCorp シニア人事ディレクター"
          },
          {
            quote: "このコミュニティの一員であることで、世界中の素晴らしい才能とつながることができました。ネットワーキングだけでも、あらゆる瞬間に価値があります。",
            name: "アマラ・オセイ",
            role: "BrightPath チーフピープルオフィサー"
          }
        ]
      },
      about: {
        title: "Kangaroo Human Resourcesについて",
        description: "私たちは単なる人材紹介会社ではありません。私たちは人間の可能性におけるあなたのパートナーであり、並外れた才能と世界中の先見性のある組織を結びつけることに専念しています。",
        vision: {
          title: "私たちのビジョン",
          text: "すべての個人の可能性が認識され、すべての組織が適切な人材によって動かされる世界を創造すること。"
        },
        mission: {
          title: "私たちの使命",
          text: "革新的な人事ソリューション、専門能力の開発、コミュニティ主導の洞察を通じて、グローバルな機会とローカルな才能の間のギャップを埋めること。"
        },
        global: {
          title: "グローバルな展開",
          text: "50か国以上に拠点を置き、ローカルおよびインターナショナルのニーズに合わせて専門的なグローバル人材をソーシングできる広範なネットワークを維持しています。"
        },
        industry: {
          title: "業界の焦点",
          text: "私たちのチームは、テクノロジー、金融、ヘルスケア、エンジニアリング、経営幹部のリーダーシップにおいて深いドメイン知識を持つ専門のリクルーターで構成されています。"
        },
        headquarters: "本社を訪ねる"
      },
      solutions: {
        title: "私たちの採用ソリューション",
        executive: {
          title: "エグゼクティブサーチ",
          text: "適切なリーダーシップを見つけることは、組織の成功に不可欠です。私たちのターゲットを絞ったエグゼクティブサーチ手法により、貴社のビジョンや文化に合致するトップレベルの人材を特定、評価、配置します。"
        },
        volume: {
          title: "大規模採用",
          text: "急速に規模を拡大する必要がありますか？候補者の質を損なうことなく、大規模な採用キャンペーンを効率的に管理します。合理化されたプロセスにより、必要な時に必要な労働力を確保できます。"
        },
        why: {
          title: "なぜKangaroo Human Resourcesを選ぶのか？",
          expertise: { title: "業界の専門知識:", text: "あなたのセクターを理解している専門のリクルーター。" },
          reach: { title: "グローバルな展開:", text: "パッシブおよびアクティブな候補者の世界的なネットワークへのアクセス。" },
          tailored: { title: "カスタマイズされたアプローチ:", text: "特定の採用ニーズに合わせて設計されたカスタマイズされたソリューション。" }
        }
      },
      cta: {
        title: "人事を刷新する準備はできていますか？",
        description: "戦略的な労働力のニーズをKangaroo Human Resourcesに託している何千人もの人事リーダーに加わりましょう。",
        button: "今すぐお問い合わせ"
      },
      resources: {
        title: "リソースライブラリ",
        description: "組織の可能性を最大限に引き出すために設計された、採用ガイド、市場の洞察、運用ツールの厳選されたライブラリで人事リーダーシップを強化します。",
        search: "リソースを検索...",
        featured: {
          badge: "注目のコンテンツ",
          title: "タレントアクイジションの未来 2026",
          description: "AI、人間の創造性、そして進化するグローバル採用の展望の交差点を調査した当社の主要な年次報告書。",
          button: "レポート全文をダウンロード"
        },
        categories: {
          all: "すべて",
          guides: "ガイド",
          checklists: "チェックリスト",
          articles: "記事",
          whitepapers: "ホワイトペーパー",
          templates: "テンプレート"
        },
        items: {
          salary: { title: "2026年グローバル給与ガイド", desc: "グローバル市場で競争力を維持するのに役立つ、特定の業界と職種にわたる包括的な報酬データ。", link: "PDFをダウンロード" },
          onboarding: { title: "オンボーディングのベストプラクティス", desc: "構造化された90日間のオンボーディングチェックリストと統合フレームワークにより、新入社員がすぐに活躍できるようにします。", link: "チェックリストを表示" },
          interview: { title: "インタビューテクニック", desc: "標準的な質問を超えて。真の可能性と文化的適合性を明らかにする行動面接の戦術を学びます。", link: "記事を読む" },
          remote: { title: "リモートワークポリシー", desc: "パンデミック後の世界における柔軟な勤務形態を管理するための包括的なフレームワーク。", link: "テンプレートをダウンロード" },
          diversity: { title: "2026年ダイバーシティ＆インクルージョンレポート", desc: "DE&Iの現状に関するデータ主導の洞察と、改善のための実用的な戦略。", link: "レポートを読む" },
          retention: { title: "従業員の定着戦略", desc: "離職率を低下させ、トップタレントがエンゲージメントを維持し、ミッションにコミットし続けるための実証済みの戦術。", link: "記事を読む" }
        },
        newsletter: {
          title: "時代の先を行く",
          description: "月刊ニュースレターを購読して、最新の人事に関する洞察、規制に関する最新情報、リソースガイドを直接受信トレイにお届けします。",
          placeholder: "address@company.com",
          button: "購読する"
        }
      },
      community: {
        title: "私たちのネットワークに参加する",
        description: "Kangaroo Human Resourcesと提携すると、トップレベルの雇用主と並外れた才能のネットワークに参加することになります。私たちとの仕事の経験について他の人が何と言っているかご覧ください。"
      },
      contact: {
        title: "お問い合わせ",
        description: "組織の可能性を最大限に引き出す準備はできていますか？特定のスタッフのニーズについて話し合うために、今すぐKangaroo Human Resourcesにお問い合わせください。",
        headquarters: "本社",
        email: "メールを送る",
        call: "お電話ください",
        follow: "フォローする",
        address: "ネパール、カトマンズ、シナマンガル-09",
        form: {
          title: "メッセージを送る",
          firstName: "名",
          lastName: "姓",
          email: "メールアドレス",
          phone: "電話番号",
          inquiry: "お問い合わせの種類",
          message: "メッセージ",
          submit: "申請書を提出する",
          options: {
            hire: "人材を採用したい",
            look: "仕事を探している",
            partner: "提携に関するお問い合わせ",
            other: "その他"
          },
          placeholders: {
            firstName: "太郎",
            lastName: "山田",
            email: "taro@company.com",
            message: "何かお手伝いできることはありますか？"
          }
        },
        map: {
          title: "私たちの場所",
          subtitle: "カトマンズ本社にお越しください"
        }
      },
      footer: {
        tagline: "人間の可能性を最大限に引き出す。",
        sections: {
          solutions: "ソリューション",
          resources: "リソース",
          company: "会社",
          legal: "法務"
        },
        links: {
          talent: "タレントマネジメント",
          learning: "学習と開発",
          analytics: "人事アナリティクス",
          compliance: "コンプライアンス",
          webcasts: "ウェブキャスト",
          research: "研究",
          whitepapers: "ホワイトペーパー",
          podcasts: "ポッドキャスト",
          about: "私たちについて",
          careers: "採用情報",
          press: "プレス",
          contact: "お問い合わせ",
          privacy: "プライバシーポリシー",
          terms: "利用規約",
          cookie: "クッキーポリシー"
        },
        quickLinks: {
          title: "クイックリンク",
          dofe: "DOFE",
          moless: "MoLESS",
          feb: "FEB",
          nafea: "NAFEA"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
