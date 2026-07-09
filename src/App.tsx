/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Presentation, 
  ArrowRight, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin,
  Menu,
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  ChevronUp,
  Download,
  Eye,
  FileText,
  BookOpen,
  ArrowLeft,
  Search,
  Target,
  TrendingUp,
  CheckCircle,
  Plus,
  Minus,
  Clock
} from "lucide-react";
import { useState, useEffect, createContext, useContext } from "react";

const CONTACT_TOPIC_KEY = 'sca_contact_topic';

// Context for global UI states
interface UIContextType {
  contactTopic: string;
  setContactTopic: (topic: string) => void;
  openContact: (topic?: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within a UIProvider');
  return context;
};
import { useForm } from '@formspree/react';

interface Training {
  title: string;
  desc: string;
  details: string;
}

const trainings: Training[] = [
  { 
    title: "ATTENTIONER Dikkat Güçlendirme Programı", 
    desc: "Çocuklar için dikkat ve odaklanma programı",
    details: "Çocuklarda seçici dikkat, bölünmüş dikkat ve odaklanma becerilerini geliştiren, nöropsikolojik temelli yapılandırılmış bir müdahale programıdır. Öğrencilerin akademik başarılarını artırmak için günlük yaşama entegre edilebilir görevler içerir."
  },
  { 
    title: "Çocuk ve Ergen Psikolojik Danışmanlık", 
    desc: "Çocuk ve ergen psikolojisi ile danışmanlık yaklaşımları",
    details: "Çocukların ve ergenlerin bilişsel, duygusal ve sosyal gelişimlerini desteklemeye yönelik kapsamlı bir danışmanlık programıdır. Bu süreçte, çocuk ve ergen psikolojisinin temel dinamikleri, gelişim dönemleri ve karşılaşılan davranışsal sorunlara yönelik çözümler ele alınmaktadır."
  },
  { 
    title: "LGS Koçluk", 
    desc: "Liselere Geçiş Sistemi için profesyonel öğrenci koçluğu",
    details: "LGS hazırlık sürecindeki öğrencilerin akademik başarılarını artırmak, sınav kaygısını yönetmek ve verimli ders çalışma alışkanlıkları kazandırmak amacıyla tasarlanmış profesyonel koçluk hizmetidir. Öğrencinin potansiyelini en üst düzeye çıkarmayı hedefler."
  },
  { 
    title: "YKS Koçluk", 
    desc: "Yükseköğretim Kurumları Sınavı için profesyonel öğrenci koçluğu",
    details: "Üniversiteye hazırlık sürecinde öğrencilere hedef belirleme, zaman yönetimi, motivasyon sağlama ve stres yönetimi konularında birebir destek sunan koçluk programıdır. Öğrencinin akademik hedeflerine ulaşması için stratejik bir yol haritası çizilir."
  },
  { 
    title: "Ebeveyn Danışmanlık", 
    desc: "Ebeveynlik becerileri ve aile içi iletişim rehberliği",
    details: "Çocuk yetiştirme sürecinde karşılaşılan zorluklar, ebeveyn-çocuk ilişkisindeki sorunlar ve aile içi iletişim problemlerine yönelik profesyonel destek ve rehberlik sağlayan danışmanlık hizmetidir. Doğru ebeveynlik tutumları geliştirilmesine yardımcı olur."
  },
  { 
    title: "C.A.S Testi", 
    desc: "Bilişsel değerlendirme sistemi eğitimi",
    details: "Cognitive Assessment System (C.A.S), 5-17 yaş arası bireylerin bilişsel işlemlerini değerlendiren standart bir araçtır. Bu eğitim, testin uygulanması, puanlanması ve yorumlanması süreçlerini kapsar."
  },
  { 
    title: "PASS Bilişsel Müdahale Programı", 
    desc: "Bilişsel müdahale programı eğitimi",
    details: "PASS teorisine dayanan bu program, öğrencilerin planlama, dikkat, eşzamanlı ve ardıl bilişsel işlemlerini geliştirmeyi amaçlar. Öğrenme güçlüğü ve dikkat eksikliği yaşayan bireyler için etkili müdahale stratejileri sunar."
  }
];

interface Material {
  slug: string;
  title: string;
  summary: string;
  category: string;
  url: string;
  image: string;
  content: string[];
}

interface EducationArea {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: any;
  category: string;
  content: string[];
  benefits: string[];
}

const educationAreas: EducationArea[] = [
  {
    slug: "bilissel-calismalar",
    title: "Bilişsel Çalışmalar",
    subtitle: "Zihinsel Potansiyelinizi Bilimsel Yöntemlerle Geliştirin",
    description: "Dikkat, hafıza, mantık yürütme ve problem çözme gibi temel bilişsel becerileri güçlendirmeye yönelik kapsamlı değerlendirme ve müdahale programları.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    icon: Brain,
    category: "Bilişsel Gelişim",
    content: [
      "Bilişsel çalışmalar, bireyin bilgi işleme kapasitesini artırmayı hedefleyen nöro-psikolojik temelli yaklaşımlardır. Bu süreçte, beynin farklı bölgeleri arasındaki bağlantılar güçlendirilerek öğrenme hızı ve kalitesi artırılır.",
      "Programımız, ilk aşamada standartlaştırılmış testler (CAS, PASS vb.) ile bireyin güçlü ve geliştirilmesi gereken alanlarını belirler. Ardından, bu verilere dayanarak kişiye özel bir gelişim haritası oluşturulur.",
      "Çalışmalarımız sadece akademik başarıyı değil, aynı zamanda günlük yaşamdaki odaklanma, karar verme ve stres yönetimi gibi kritik becerileri de kapsar. Özellikle dikkat eksikliği, öğrenme güçlüğü veya üstün yetenekli bireylerde bu çalışmalar dönüştürücü bir etkiye sahiptir."
    ],
    benefits: [
      "Odaklanma süresinde ve kalitesinde belirgin artış",
      "Kısa ve uzun süreli hafıza tekniklerinin geliştirilmesi",
      "Analitik düşünme ve karmaşık problemleri çözme yetisi",
      "Sınav kaygısı ve performans stresinin yönetimi",
      "Öğrenme motivasyonunun ve özgüvenin güçlenmesi"
    ]
  },
  {
    slug: "bireysel-danismanlik",
    title: "Bireysel Danışmanlık",
    subtitle: "Kendinizi Keşfetme ve İyileşme Yolculuğunda Yanınızdayız",
    description: "Kişisel zorluklarla başa çıkma, duygusal dengeyi sağlama ve yaşam kalitesini artırma amacıyla sunulan profesyonel psikolojik destek süreci.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    category: "Psikolojik Destek",
    content: [
      "Bireysel danışmanlık, bireyin kendi iç dünyasına yaptığı güvenli bir yolculuktur. Uzman rehberliğinde gerçekleştirilen bu görüşmelerde, kişinin geçmiş deneyimleri, güncel zorlukları ve gelecek hedefleri derinlemesine ele alınır.",
      "Terapi sürecinde, bireyin farkındalık kazanması, kısıtlayıcı inançlarını fark etmesi ve daha sağlıklı başa çıkma mekanizmaları geliştirmesi hedeflenir. Her bireyin ihtiyacı farklı olduğu için, bilişsel davranışçı terapi, şema terapi veya çözüm odaklı yaklaşımlar gibi farklı ekoller harmanlanarak kullanılır.",
      "Gizlilik ve güven prensiplerine dayalı bu süreçte, birey kendini yargılanmadan ifade etme şansı bulur. Bu da duygusal iyileşmenin ve kalıcı değişimin temelini oluşturur."
    ],
    benefits: [
      "Duygusal dayanıklılığın (resilience) artması",
      "Sağlıklı sınır koyma ve iletişim becerilerinin gelişimi",
      "Kaygı, depresyon ve stresle başa çıkma stratejileri",
      "Öz şefkat ve öz değer duygusunun güçlenmesi",
      "Yaşam amaçlarının netleşmesi ve motivasyon artışı"
    ]
  },
  {
    slug: "uzman-atolyeleri",
    title: "Uzman Atölyeleri",
    subtitle: "Pratik Bilgi ve Deneyim Paylaşımı ile Gelişin",
    description: "Ebeveynler, eğitimciler ve profesyoneller için tasarlanmış, güncel bilimsel verilerle desteklenen interaktif eğitim ve uygulama atölyeleri.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    icon: Presentation,
    category: "Eğitim ve Gelişim",
    content: [
      "Uzman atölyelerimiz, teorik bilginin pratik uygulamaya dönüştüğü dinamik öğrenme alanlarıdır. Katılımcılar, sadece dinleyici değil, aynı zamanda vaka analizleri ve grup çalışmalarıyla sürecin aktif bir parçası olurlar.",
      "Atölye konularımız; pozitif ebeveynlik, sınıfta davranış yönetimi, oyun terapisi teknikleri, dikkat geliştirme stratejileri gibi geniş bir yelpazeye yayılmaktadır. Her atölye sonunda katılımcılara günlük hayatta hemen uygulayabilecekleri somut araçlar sunulur.",
      "Bu programlar, aynı zamanda benzer zorluklar yaşayan bireylerin veya aynı alanda çalışan profesyonellerin bir araya gelerek deneyim paylaşımı yapmalarına ve bir destek ağı oluşturmalarına olanak tanır."
    ],
    benefits: [
      "Güncel ve bilimsel temelli bilgilere hızlı erişim",
      "Vaka analizleri ile pratik uygulama becerisi kazanma",
      "Ebeveynlik ve profesyonel rollerde yetkinlik artışı",
      "İnteraktif ortamda soru sorma ve geri bildirim alma imkanı",
      "Katılım belgesi ve uygulama materyalleri desteği"
    ]
  }
];

const materials: Material[] = [
  { 
    slug: "attentioner-dikkat-guclendirme",
    title: "ATTENTIONER Dikkat Güçlendirme Programı", 
    summary: "Çocuklarda seçici dikkat, bölünmüş dikkat ve odaklanma becerilerini geliştiren, nöropsikolojik temelli yapılandırılmış müdahale programı.",
    category: "Bilişsel Gelişim", 
    url: "#",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    content: [
      "ATTENTIONER Programı Nedir?",
      "ATTENTIONER, 7-18 yaş arası çocuk ve ergenlerde dikkat, odaklanma ve dürtü kontrolünü geliştirmek amacıyla tasarlanmış, nöropsikolojik temellere dayanan yapılandırılmış bir dikkat güçlendirme programıdır.",
      "1. Seçici ve Bölünmüş Dikkat Gelişimi",
      "Program, çevredeki çeldiricilere rağmen asıl hedefe odaklanmayı (seçici dikkat) ve aynı anda birden fazla görevi yürütebilmeyi (bölünmüş dikkat) geliştiren özel bilişsel egzersizler içerir.",
      "2. Dürtü Kontrolü ve Yürütücü İşlevler",
      "Çocukların harekete geçmeden önce düşünmelerini (dur-düşün-yap) sağlayarak dürtüselliği azaltır. Planlama, organizasyon ve zaman yönetimi gibi yürütücü işlevleri destekler.",
      "3. Günlük Yaşama Entegrasyon",
      "Sadece masa başında değil, öğrenilen becerilerin okul ve ev hayatına aktarılmasını hedefler. Ebeveyn katılımlı oturumlarla programın etkisi günlük yaşama yayılır.",
      "4. Bilimsel ve Kanıta Dayalı Yaklaşım",
      "Almanya'da geliştirilmiş olan bu program, etkinliği araştırmalarla kanıtlanmış, dikkat eksikliği (DEHB) olan veya dikkatini geliştirmek isteyen tüm bireyler için uygulanabilen standart bir sistemdir."
    ]
  },
  { 
    slug: "cocuklarda-dikkat-gelistirme",
    title: "Çocuklarda Dikkat Geliştirme Rehberi", 
    summary: "Çocukların odaklanma sürelerini artırmak ve dikkat dağınıklığı ile başa çıkmak için ebeveynlere yönelik pratik stratejiler ve bilimsel yaklaşımlar.",
    category: "Bilişsel Gelişim", 
    url: "#",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    content: [
      "Giriş: Dikkat ve Odaklanma Becerileri",
      "Dikkat eksikliği, günümüz dünyasında çocukların akademik başarısını ve sosyal uyumunu en çok etkileyen faktörlerden biridir. Dikkat, sadece bir şeye odaklanmak değil, aynı zamanda çeldiricileri eleyebilme ve zihinsel enerjiyi doğru yönetebilme becerisidir.",
      "1. Fiziksel Çevrenin Optimizasyonu",
      "Çocuğun çalışma alanı, bilişsel yükü azaltacak şekilde tasarlanmalıdır. Masanın üzerinde sadece o anki görevle ilgili materyaller bulunmalı, görsel ve işitsel uyaranlar (TV, telefon, gürültü) minimize edilmelidir. Doğal ışık ve ergonomik bir sandalye odaklanma süresini %20'ye kadar artırabilir.",
      "2. Bilişsel Egzersizler ve Oyunlar",
      "Dikkat, bir kas gibi eğitilebilir. Günlük 15-20 dakikalık 'dikkat oyunları' (fark bulma, labirent, kelime avı, satranç) nöral bağlantıları güçlendirir. Özellikle 'dur-düşün-yap' prensibiyle çalışan oyunlar, dürtü kontrolünü geliştirir.",
      "3. Beslenme ve Yaşam Rutini",
      "Beyin fonksiyonları için Omega-3, B vitaminleri ve demir kritik öneme sahiptir. Ayrıca, her gün aynı saatte uyumak ve uyanmak, beynin sirkadiyen ritmini düzenleyerek gün içindeki uyanıklık seviyesini stabilize eder.",
      "4. Ebeveyn Yaklaşımı: Olumlu Geri Bildirim",
      "Çocuğun odaklandığı anları fark edip ödüllendirmek, dopamin salgısını artırarak bu davranışı pekiştirir. Eleştiri yerine 'Çabalamanı takdir ediyorum' gibi süreç odaklı övgüler kullanılmalıdır."
    ]
  },
  { 
    slug: "lgs-calisma-programi",
    title: "LGS Çalışma Programı Taslağı", 
    summary: "LGS hazırlık sürecinde zamanı verimli kullanmak, konu eksiklerini tamamlamak ve sınav stresini yönetmek için hazırlanan haftalık çalışma planı.",
    category: "Sınav Hazırlık", 
    url: "#",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    content: [
      "Stratejik Sınav Hazırlığı: LGS Başarı Yol Haritası",
      "LGS, sadece bilgi ölçen bir sınav değil, aynı zamanda zaman yönetimi ve psikolojik dayanıklılık testidir. Başarı, zeki olmaktan ziyade sistemli çalışmaktan geçer.",
      "1. Haftalık Planlama ve Konu Dağılımı",
      "Programınızda 'Sözel-Sayısal-Sözel' döngüsünü takip edin. Beyin, farklı türdeki bilgileri işlerken daha az yorulur. Örneğin: Türkçe çalıştıktan sonra Matematik, ardından İnkılap Tarihi çalışmak verimi artırır.",
      "2. Yeni Nesil Soru Çözme Teknikleri",
      "LGS'de sorular artık sadece bilgi değil, okuduğunu anlama ve yorumlama becerisi istiyor. Her gün en az 30 sayfa kitap okumak, paragraf sorularındaki hızınızı ve anlama kapasitenizi doğrudan etkiler.",
      "3. Hata Analizi: En İyi Öğretmen Yanlışlarınızdır",
      "Çözülen testlerdeki yanlış soruların üzerine gitmemek, o konuyu öğrenmemek demektir. Her hafta sonu 'Yanlış Defteri'nizi gözden geçirin ve o soruları tekrar çözmeye çalışın.",
      "4. Deneme Sınavı Stratejisi",
      "Sınav yaklaştıkça deneme sıklığını artırın. Denemeleri gerçek sınav saatinde (09:30) ve gerçek sınav süresinde çözmek, biyolojik saatinizi sınava hazırlar."
    ]
  },
  { 
    slug: "aile-ici-iletisim",
    title: "Aile İçi İletişim Teknikleri", 
    summary: "Aile üyeleri arasındaki bağları güçlendiren, çatışmaları yapıcı bir şekilde çözen ve sağlıklı bir iletişim ortamı oluşturan temel prensipler.",
    category: "Psikolojik Destek", 
    url: "#",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    content: [
      "Sağlıklı Aile Dinamikleri: İletişimin Gücü",
      "Aile, bireyin kendini en güvende hissetmesi gereken yerdir. Ancak bazen en büyük çatışmalar da burada yaşanır. Sağlıklı iletişim, bağları koparmak yerine güçlendirir.",
      "1. Etkin Dinleme: Duyulmak İyileştirir",
      "Karşınızdaki kişi konuşurken sadece cevap vermek için beklemeyin. Göz teması kurun, başınızla onaylayın ve 'Seni anlıyorum' mesajını verin. Çocuklar duyulduklarını hissettiklerinde savunma mekanizmalarını indirirler.",
      "2. 'Ben' Dili: Suçlamak Yerine İfade Etmek",
      "Suçlayıcı cümleler ('Sen hep böylesin', 'Yine yapmadın') karşı tarafta öfke yaratır. Bunun yerine duygularınızı ifade edin: 'Odan dağınık olduğunda kendimi yorgun ve mutsuz hissediyorum.' Bu yaklaşım çatışmayı iş birliğine dönüştürür.",
      "3. Dijital Detoks ve Kaliteli Zaman",
      "Günde en az 45 dakikayı 'telefonsuz bölge' ilan edin. Birlikte yemek yemek, oyun oynamak veya sadece sohbet etmek, aile üyeleri arasındaki duygusal yakınlığı (attachment) derinleştirir.",
      "4. Sınırlar ve Kurallar",
      "Disiplin, ceza demek değildir. Net, tutarlı ve önceden belirlenmiş sınırlar çocuğa güven verir. Kuralları koyarken çocuğun fikrini almak, sorumluluk bilincini geliştirir."
    ]
  },
  { 
    slug: "cas-testi-bilgilendirme",
    title: "CAS Testi Bilgilendirme Broşürü", 
    summary: "CAS bilişsel değerlendirme sisteminin kapsamı, uygulama alanları ve çocukların öğrenme potansiyellerini belirlemedeki kritik rolü hakkında detaylı rehber.",
    category: "Bilişsel Gelişim", 
    url: "#",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
    content: [
      "CAS (Cognitive Assessment System) Nedir?",
      "CAS, 5-17 yaş arası bireylerin bilişsel işlemlerini değerlendiren, PASS teorisine dayalı bilimsel bir zeka ve yetenek ölçüm sistemidir. Geleneksel IQ testlerinden farklı olarak, öğrenme süreçlerinin 'nasıl' gerçekleştiğine odaklanır.",
      "1. Planlama (Planning)",
      "Bireyin bir problemi çözmek için strateji oluşturma, kararlar verme ve performansını denetleme becerisidir. Akademik başarıda en belirleyici süreçtir.",
      "2. Dikkat (Attention)",
      "Bireyin belirli bir uyarana odaklanma ve diğer çeldiricileri (distractors) engelleyebilme kapasitesidir. Odaklanma güçlüğü yaşayan çocuklarda bu alan detaylı incelenir.",
      "3. Eşzamanlı İşlem (Simultaneous)",
      "Ayrı parçaları bir bütün haline getirerek algılama becerisidir. Okuduğunu anlama, uzamsal ilişkiler ve matematiksel mantık bu süreçle ilişkilidir.",
      "4. Ardıl İşlem (Successive)",
      "Bilgileri belirli bir sıra ile işleme ve hatırlama becerisidir. Kelime telaffuzu, çarpım tablosu ve sıralı komutları takip etme bu alanın kapsamındadır."
    ]
  },
  { 
    slug: "yks-motivasyon",
    title: "YKS Motivasyon ve Stres Yönetimi", 
    summary: "Üniversite sınavı maratonunda motivasyonu yüksek tutma, kaygı ile başa çıkma ve zihinsel performansı zirveye taşıma teknikleri.",
    category: "Sınav Hazırlık", 
    url: "#",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    content: [
      "Zirveye Giden Yol: YKS'de Zihinsel Yönetim",
      "YKS hazırlığı uzun bir maratondur. Bu maratonda sadece kondisyon (bilgi) değil, zihinsel dayanıklılık da kazanır.",
      "1. Hedef Belirleme ve Görselleştirme",
      "Nereye gittiğini bilmeyen gemiye hiçbir rüzgar yardım etmez. Hedeflediğiniz üniversitenin fotoğrafını çalışma masanıza asın. O kapıdan içeri girdiğinizi hayal etmek, zorlandığınız anlarda size yakıt olacaktır.",
      "2. Sınav Kaygısı ve Nefes Teknikleri",
      "Kaygı, vücudun 'savaş ya da kaç' tepcisidir. Kaygı anında diyafram nefesi (4 saniye al, 4 tut, 8 ver) parasempatik sinir sistemini aktive ederek sizi sakinleştirir.",
      "3. Uyku ve Beyin Temizliği",
      "Öğrenilen bilgiler uyku sırasında hipokampustan uzun süreli belleğe aktarılır. Günde 7-8 saat kaliteli uyku, ertesi günkü öğrenme kapasitenizi %40 artırır.",
      "4. Sosyal İzolasyon Değil, Sosyal Denge",
      "Sınav senesinde her şeyi bırakmak yanlıştır. Haftada bir gün sevdiğiniz bir aktiviteye vakit ayırmak, tükenmişlik (burnout) sendromunu engeller."
    ]
  },
  { 
    slug: "oyun-terapisi-ilkeleri",
    title: "Oyun Terapisi Temel İlkeleri", 
    summary: "Çocukların dünyayı anlama ve duygularını ifade etme dili olan oyunun, terapi sürecindeki iyileştirici gücü ve temel uygulama prensipleri.",
    category: "Psikolojik Destek", 
    url: "#",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    content: [
      "Oyunun İyileştirici Gücü: Çocukların Dili",
      "Çocuklar için oyun, sadece eğlence değil; dünyayı anlama, duyguları işleme ve sorunları çözme biçimidir. 'Kuşlar uçar, balıklar yüzer, çocuklar oyun oynar.'",
      "1. Oyuncaklar Kelimelerdir",
      "Çocuklar yaşadıkları travmaları veya korkuları kelimelerle anlatamazlar. Bir bebekle, bir kamyonla veya kum havuzuyla kurdukları senaryolar, iç dünyalarının dışa vurumudur.",
      "2. Terapötik Güven Ortamı",
      "Oyun terapisinde çocuk tamamen kabul edildiği, yargılanmadığı bir ortamdadır. Bu güven, çocuğun kendini açmasını ve iyileşme sürecinin başlamasını sağlar.",
      "3. Duygusal Düzenleme (Regulation)",
      "Oyun sırasında çocuk, gerçek hayatta kontrol edemediği durumları kontrol eder. Bu, ona güç ve yeterlilik duygusu kazandırır, kaygı seviyesini düşürür.",
      "4. Kimler İçin Uygundur?",
      "Kaygı bozuklukları, boşanma süreci, yas, okul uyum sorunları ve davranış bozuklukları yaşayan 3-12 yaş arası çocuklar için en etkili yöntemlerden biridir."
    ]
  }
];

const EducationDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const area = educationAreas.find(a => a.slug === slug);
  const goToContact = (topic?: string) => {
    if (topic) sessionStorage.setItem(CONTACT_TOPIC_KEY, topic);
    navigate('/#iletisim');
  };
  const contactTopicForArea = area?.title === "Bireysel Danışmanlık"
    ? "Bireysel Psikolojik Danışmanlık"
    : area?.title === "Ebeveyn Danışmanlık"
      ? "Ebeveyn Danışmanlık"
      : "Eğitim Danışmanlık";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) return null;

  const Icon = area.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-navy-900 font-bold hover:text-burgundy transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Geri Dön</span>
          </button>
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/scaegitimdanismanlik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy-900 hover:text-burgundy transition-colors p-2"
              title="Instagram'da Takip Et"
            >
              <Instagram size={24} />
            </a>
            <button 
              onClick={() => goToContact(contactTopicForArea)}
              className="bg-burgundy text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-navy-900 transition-all shadow-lg shadow-burgundy/20"
            >
              İletişime Geç
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-burgundy/5 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy/10 text-burgundy rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <Icon size={16} />
                {area.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 leading-tight mb-6">
                {area.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {area.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => goToContact(contactTopicForArea)}
                  className="bg-navy-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-burgundy transition-all shadow-xl active:scale-95"
                >
                  İletişime Geç
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-xl flex items-center justify-center text-burgundy">
                    <Users size={24} />
                  </div>
                  <span className="font-bold text-navy-900">Uzman Desteği</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Alanında uzman kadromuzla size özel çözümler üretiyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-navy-900 mb-8">Hizmet Hakkında</h2>
                {area.content.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-600 leading-relaxed text-lg mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-14 border border-slate-100">
                <h2 className="text-3xl font-bold text-navy-900 mb-10">Neler Kazanacaksınız?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {area.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-8 h-8 bg-burgundy rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                        <ArrowRight size={16} />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-navy-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10">Bilgi Alın</h3>
                  <p className="text-white/70 mb-8 relative z-10">
                    Bu hizmetimiz hakkında daha detaylı bilgi almak için bize ulaşın.
                  </p>
                  <button 
                    onClick={() => goToContact(contactTopicForArea)}
                    className="w-full bg-burgundy text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-navy-900 transition-all shadow-xl"
                  >
                    İletişim Formu
                  </button>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Diğer Alanlar</h3>
                  <div className="space-y-4">
                    {educationAreas.filter(a => a.slug !== slug).map(a => (
                      <Link 
                        key={a.slug}
                        to={`/egitim/${a.slug}`}
                        className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group"
                      >
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-burgundy group-hover:text-white transition-all">
                          <a.icon size={20} />
                        </div>
                        <span className="font-bold text-navy-900 group-hover:text-burgundy transition-colors">{a.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-burgundy rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">
            Geleceğinizi Birlikte <span className="italic text-burgundy">İnşa Edelim</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed">
            Size en uygun gelişim yolculuğunu belirlemek için uzmanlarımızla iletişime geçebilirsiniz.
          </p>
          <button 
            onClick={() => goToContact(contactTopicForArea)}
            className="bg-white text-navy-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-burgundy hover:text-white transition-all shadow-2xl active:scale-95"
          >
            İletişim Formunu Doldur
          </button>
        </div>
      </section>
    </div>
  );
};

const MaterialDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const material = materials.find(m => m.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingMode, setReadingMode] = useState<'light' | 'sepia' | 'dark'>('light');
  const goToContact = (topic?: string) => {
    if (topic) sessionStorage.setItem(CONTACT_TOPIC_KEY, topic);
    navigate('/#iletisim');
  };

  const currentIndex = materials.findIndex(m => m.slug === slug);
  const nextMaterial = materials[(currentIndex + 1) % materials.length];
  const prevMaterial = materials[(currentIndex - 1 + materials.length) % materials.length];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Materyal Bulunamadı</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-burgundy font-bold hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} /> Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  const getReadingModeStyles = () => {
    switch (readingMode) {
      case 'sepia': return 'bg-[#f4ecd8] text-[#5b4636]';
      case 'dark': return 'bg-navy-900 text-white/90';
      default: return 'bg-white text-slate-600';
    }
  };

  const getHeaderColor = () => {
    switch (readingMode) {
      case 'sepia': return 'text-[#5b4636]';
      case 'dark': return 'text-white';
      default: return 'text-navy-900';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${readingMode === 'dark' ? 'bg-black' : 'bg-slate-50'} pb-20`}>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 z-[120] bg-slate-200">
        <motion.div 
          className="h-full bg-burgundy"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reading Mode Controls */}
      <div className="fixed bottom-8 left-8 z-[110] flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setReadingMode('light')}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 ${readingMode === 'light' ? 'border-burgundy bg-white' : 'border-transparent bg-white'}`}
          title="Aydınlık Mod"
        >
          <div className="w-6 h-6 bg-white border border-slate-200 rounded-full" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setReadingMode('sepia')}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 ${readingMode === 'sepia' ? 'border-burgundy bg-[#f4ecd8]' : 'border-transparent bg-[#f4ecd8]'}`}
          title="Sepya Mod"
        >
          <div className="w-6 h-6 bg-[#f4ecd8] border border-[#d3c6a8] rounded-full" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setReadingMode('dark')}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 ${readingMode === 'dark' ? 'border-burgundy bg-navy-900' : 'border-transparent bg-navy-900'}`}
          title="Karanlık Mod"
        >
          <div className="w-6 h-6 bg-navy-900 border border-white/20 rounded-full" />
        </motion.button>
      </div>

      {/* Detail Header */}
      <div className="bg-navy-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Ana Sayfaya Dön
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-burgundy/20 text-burgundy border border-burgundy/30 text-sm font-bold mb-6">
                {material.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                {material.title}
              </h1>
              <div className="flex items-center gap-6 text-white/60">
                <a 
                  href="https://instagram.com/scaegitimdanismanlik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`lg:col-span-8 rounded-[40px] shadow-2xl shadow-navy-900/10 overflow-hidden border border-slate-100 transition-colors duration-500 ${getReadingModeStyles()}`}
          >
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={material.image} 
                alt={material.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="p-8 md:p-14">
              {/* Summary Section */}
              <div className={`mb-16 p-10 rounded-[2.5rem] border-l-8 border-burgundy shadow-sm ${readingMode === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
                <h3 className={`text-2xl font-bold mb-4 ${readingMode === 'dark' ? 'text-white' : 'text-navy-900'}`}>Özet</h3>
                <p className={`text-xl leading-relaxed italic ${readingMode === 'dark' ? 'text-white/70' : 'text-slate-700'}`}>
                  "{material.summary}"
                </p>
              </div>

              <div className="space-y-12">
                {material.content.map((paragraph, idx) => {
                  const isHeader = /^\d+\./.test(paragraph) || (paragraph.includes(':') && paragraph.length < 65);
                  const id = `section-${idx}`;
                  
                  return (
                    <div key={idx} id={id} className="scroll-mt-32">
                      <p 
                        className={isHeader 
                          ? `text-3xl md:text-4xl font-serif font-bold pt-10 pb-4 border-b border-slate-100/20 mb-8 ${getHeaderColor()}` 
                          : `text-lg md:text-2xl leading-loose ${readingMode === 'dark' ? 'text-white/80' : 'text-slate-600'}`
                        }
                      >
                        {paragraph}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Key Takeaways */}
              <div className={`mt-20 p-10 rounded-[3rem] border-2 border-dashed ${readingMode === 'dark' ? 'border-white/20 bg-white/5' : 'border-burgundy/20 bg-burgundy/5'}`}>
                <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${readingMode === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                  <Brain className="text-burgundy" /> Anahtar Çıkarımlar
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-burgundy text-white flex-shrink-0 flex items-center justify-center font-bold">1</div>
                    <p className={readingMode === 'dark' ? 'text-white/70' : 'text-slate-600'}>Bilimsel temelli yaklaşımlarla gelişim süreçlerini destekleyin.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-burgundy text-white flex-shrink-0 flex items-center justify-center font-bold">2</div>
                    <p className={readingMode === 'dark' ? 'text-white/70' : 'text-slate-600'}>Düzenli takip ve uygulama ile kalıcı sonuçlar elde edin.</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-slate-100/20 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-burgundy/10 flex items-center justify-center text-burgundy">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <div className={`font-bold text-lg ${readingMode === 'dark' ? 'text-white' : 'text-navy-900'}`}>SCA Eğitim Danışmanlık</div>
                    <div className="text-slate-500">Profesyonel Eğitim Materyalleri</div>
                  </div>
                </div>
                
                <button 
                  className="bg-burgundy text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-navy-900 transition-all shadow-xl active:scale-95"
                  onClick={() => goToContact()}
                >
                  <MessageSquare size={20} />
                  İletişime Geç
                </button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar: Table of Contents & Navigation */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-navy-900/5 border border-slate-100">
                <h4 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                  <Menu size={20} className="text-burgundy" /> İçerik Rehberi
                </h4>
                <div className="space-y-4">
                  {material.content.map((paragraph, idx) => {
                    const isHeader = /^\d+\./.test(paragraph) || (paragraph.includes(':') && paragraph.length < 65);
                    if (!isHeader) return null;
                    
                    return (
                      <button 
                        key={idx}
                        onClick={() => {
                          const el = document.getElementById(`section-${idx}`);
                          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="block w-full text-left text-slate-500 hover:text-burgundy transition-all text-[13px] font-medium border-l-2 border-transparent hover:border-burgundy pl-4 py-1.5 hover:bg-slate-50 rounded-r-lg"
                      >
                        {paragraph}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Next/Prev Navigation */}
              <div className="bg-navy-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h4 className="text-xl font-bold mb-6 relative z-10">Diğer Materyaller</h4>
                <div className="space-y-6 relative z-10">
                  <Link 
                    to={`/materyal/${nextMaterial.slug}`}
                    className="block group"
                  >
                    <div className="text-xs font-bold text-burgundy uppercase tracking-widest mb-1">Sıradaki</div>
                    <div className="text-white group-hover:text-burgundy transition-colors font-bold leading-tight">
                      {nextMaterial.title}
                    </div>
                  </Link>
                  <div className="h-px bg-white/10"></div>
                  <Link 
                    to={`/materyal/${prevMaterial.slug}`}
                    className="block group"
                  >
                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Önceki</div>
                    <div className="text-white/80 group-hover:text-white transition-colors font-bold leading-tight">
                      {prevMaterial.title}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl mb-4 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-navy-900 text-lg pr-8">{question}</span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-burgundy text-white' : 'bg-slate-50 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [contactTopic, setContactTopic] = useState("");

  const openContact = (topic?: string) => {
    if (topic) setContactTopic(topic);
    document.getElementById("iletisim")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <UIContext.Provider value={{
      contactTopic,
      setContactTopic,
      openContact,
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/materyal/:slug" element={<MaterialDetailPage />} />
          <Route path="/egitim/:slug" element={<EducationDetailPage />} />
        </Routes>
      </Router>
    </UIContext.Provider>
  );
}

function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileTrainingOpen, setIsMobileTrainingOpen] = useState(false);
  const { contactTopic, setContactTopic, openContact } = useUI();
  
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storedTopic = sessionStorage.getItem(CONTACT_TOPIC_KEY);
    if (storedTopic) {
      setContactTopic(storedTopic);
      sessionStorage.removeItem(CONTACT_TOPIC_KEY);
    }
    if (window.location.hash === '#iletisim') {
      setTimeout(() => {
        document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [setContactTopic]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [contactState, handleContactSubmit] = useForm('mgopjdzv');

  useEffect(() => {
    if (contactState.succeeded) {
      alert("Mesajınız başarıyla iletildi!");
      setContactTopic("");
    }
  }, [contactState.succeeded, setContactTopic]);

  return (
    <div className="min-h-screen bg-white selection:bg-navy-700 selection:text-white">
      {/* Navigation & Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Left Box (Mobile Menu or Empty space for centering) */}
            <div className="flex-1 flex justify-start">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-navy-900 p-2 hover:text-burgundy transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo Center */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-navy-900 font-serif text-3xl md:text-4xl font-bold tracking-widest uppercase mb-1">
                SCA
              </div>
              <div className="text-slate-700 font-serif text-sm md:text-base">
                Eğitim Danışmanlık
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex-1 flex justify-end items-center gap-3">
              <a 
                href="https://instagram.com/scaegitimdanismanlik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-burgundy/5 to-burgundy/10 text-burgundy hover:from-burgundy hover:to-burgundy hover:text-white transition-all duration-300 shadow-sm border border-burgundy/10 group"
                title="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <button 
                onClick={() => openContact()}
                className="hidden md:flex items-center gap-2 text-burgundy hover:text-navy-900 transition-colors font-serif"
              >
                <Mail size={20} />
                <span>İletişim</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Nav Bar */}
        <div className="hidden md:block bg-[#f1f1f1] border-y border-slate-200">
          <div className="max-w-6xl mx-auto flex justify-center items-center text-sm font-serif">
            <a href="#" className="bg-burgundy text-white px-6 py-3 transition-colors">Ana Sayfa</a>
            <div className="w-px h-5 bg-slate-300 mx-2"></div>
            
            <a href="#iletisim" className="text-slate-700 hover:text-burgundy px-4 py-3 transition-colors">
              Psikolojik Danışmanlık
            </a>
            <div className="w-px h-5 bg-slate-300 mx-2"></div>
            
            {/* Dropdown Menu */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTrainingOpen(true)}
              onMouseLeave={() => setIsTrainingOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-burgundy px-4 py-3 transition-colors">
                Eğitim Kayıt <ChevronDown size={14} className={`transition-transform duration-300 ${isTrainingOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {isTrainingOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white shadow-xl border border-slate-100 p-2 mt-0 z-50"
                  >
                    <div className="grid gap-1">
                      {trainings.map((t) => (
                        <button 
                          key={t.title} 
                          onClick={() => {
                            openContact(`Eğitim: ${t.title}`);
                            setIsTrainingOpen(false);
                          }}
                          className="p-3 hover:bg-slate-100 rounded-md transition-colors text-left w-full"
                        >
                          <div className="text-black font-bold text-sm">{t.title}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-px h-5 bg-slate-300 mx-2"></div>

            <a href="#egitim-alanlari" className="text-slate-700 hover:text-burgundy px-4 py-3 transition-colors">Eğitim Alanları</a>
            <div className="w-px h-5 bg-slate-300 mx-2"></div>

            <a href="#materyaller" className="text-slate-700 hover:text-burgundy px-4 py-3 transition-colors">Materyaller</a>
            <div className="w-px h-5 bg-slate-300 mx-2"></div>
            
            <a href="#iletisim" className="text-slate-700 hover:text-burgundy px-4 py-3 transition-colors">İletişim</a>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[100] md:hidden bg-white flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <div className="text-navy-900 font-serif text-2xl font-bold tracking-widest uppercase">SCA</div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-navy-900 hover:bg-slate-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4 font-serif">
                <a 
                  href="#" 
                  className="block text-lg font-bold text-navy-900 hover:text-burgundy transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </a>
                
                <a 
                  href="#iletisim" 
                  className="block text-lg font-bold text-navy-900 hover:text-burgundy transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim Formu
                </a>

                <div className="space-y-2">
                  <button 
                    onClick={() => setIsMobileTrainingOpen(!isMobileTrainingOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-navy-900 hover:text-burgundy transition-colors"
                  >
                    <span>Eğitim Kayıt</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileTrainingOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileTrainingOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 space-y-2 border-l-2 border-slate-100"
                      >
                        {trainings.map(t => (
                          <button 
                            key={t.title} 
                            onClick={() => {
                              openContact(`Eğitim: ${t.title}`);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left text-sm text-slate-600 hover:text-burgundy transition-colors py-1"
                          >
                            {t.title}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a 
                  href="#egitim-alanlari" 
                  className="block text-lg font-bold text-navy-900 hover:text-burgundy transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Eğitim Alanları
                </a>

                <a 
                  href="#materyaller" 
                  className="block text-lg font-bold text-navy-900 hover:text-burgundy transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Materyaller
                </a>
                
                <a 
                  href="#iletisim" 
                  className="block text-lg font-bold text-navy-900 hover:text-burgundy transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  İletişim
                </a>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-center">
                  <a 
                    href="https://instagram.com/scaegitimdanismanlik" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-burgundy/5 to-burgundy/10 text-burgundy hover:from-burgundy hover:to-burgundy hover:text-white transition-all duration-300 shadow-sm border border-burgundy/10 group"
                    title="Instagram'da Takip Et"
                  >
                    <Instagram size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <a 
                  href="#iletisim"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-burgundy text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-burgundy/20 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  <span>İletişim Formu</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 border-b border-slate-100 bg-white">
        {/* Deep Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-gradient-to-br from-burgundy/20 to-burgundy-light/5 blur-[100px] opacity-90 mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-gradient-to-tr from-navy-900/15 to-blue-900/5 blur-[120px] opacity-90 mix-blend-multiply"></div>
          <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] opacity-70 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            
            {/* Left Column: Text */}
            <div className="flex gap-4 md:gap-8">
              {/* Decorative Leaf/Branch SVG (simplified) */}
              <div className="hidden sm:block text-burgundy/20 flex-shrink-0 mt-2">
                <svg width="40" height="120" viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0V120M20 20C10 30 0 20 0 20C0 20 10 10 20 20ZM20 40C30 50 40 40 40 40C40 40 30 30 20 40ZM20 60C10 70 0 60 0 60C0 60 10 50 20 60ZM20 80C30 90 40 80 40 80C40 80 30 70 20 80ZM20 100C10 110 0 100 0 100C0 100 10 90 20 100Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-serif text-navy-900 leading-[1.2] mb-6 font-bold tracking-tight"
                >
                  Geleceğinizi Güvenle <br />
                  <span className="text-burgundy italic font-medium">İnşa Edin</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-sans"
                >
                  Akademik ve kişisel gelişim yolculuğunuzda uzman eğitim danışmanlarımızla yanınızdayız. Hedeflerinize ulaşmak için bilimsel, yenilikçi ve size özel stratejiler geliştiriyoruz.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <button 
                    onClick={() => openContact()}
                    className="bg-burgundy text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-navy-900 transition-all shadow-xl shadow-burgundy/20 flex items-center gap-3 transform hover:-translate-y-1 font-sans"
                  >
                    İletişime Geç <ArrowRight size={22} />
                  </button>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="flex justify-center md:justify-end relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white/50 backdrop-blur-sm"
              >
                <img 
                  src="/ceylin.png" 
                  alt="Eğitim ve Danışmanlık" 
                  className="w-full h-full object-cover object-[center_42%]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy-900/10 mix-blend-multiply"></div>
              </motion.div>
              
              {/* Floating Glassmorphism Badge: Çalışma Saatleri */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-12 bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/60 w-[280px] md:w-[320px]"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-navy-900/10 pb-4">
                  <div className="w-10 h-10 bg-burgundy/10 rounded-full flex items-center justify-center text-burgundy flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <h3 className="text-navy-900 font-bold text-lg leading-tight font-serif tracking-tight">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-3 font-sans">
                  <div className="flex justify-between items-center text-sm gap-2">
                    <span className="text-slate-600 font-medium leading-tight">Haftanın Her Günü</span>
                    <span className="text-navy-900 font-bold whitespace-nowrap shrink-0">10:00 - 19:00</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Process (How It Works) Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-burgundy font-bold tracking-[0.2em] uppercase text-sm mb-4 block">SÜRECİMİZ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 leading-tight mb-6">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="text-slate-600 text-lg">
              Size en uygun eğitim ve gelişim planını oluşturmak için kanıta dayalı, sistematik bir süreç izliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>
            
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-burgundy mb-6 relative z-10 group hover:border-burgundy/20 transition-all">
                <Search size={32} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Ön Analiz</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                İhtiyaçlarınızı ve hedeflerinizi belirlemek için ücretsiz ve kapsamlı bir değerlendirme yapıyoruz.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-burgundy mb-6 relative z-10 group hover:border-burgundy/20 transition-all">
                <Target size={32} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Planlama</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Analiz sonuçlarına göre tamamen size özel, bilimsel ve yenilikçi bir yol haritası oluşturuyoruz.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-burgundy mb-6 relative z-10 group hover:border-burgundy/20 transition-all">
                <TrendingUp size={32} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Uygulama & Takip</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Oluşturulan stratejileri hayata geçiriyor, gelişiminizi düzenli ölçümlerle takip ediyoruz.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 shadow-xl rounded-full flex items-center justify-center text-burgundy mb-6 relative z-10 group hover:border-burgundy/20 transition-all">
                <CheckCircle size={32} />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Hedefe Ulaşma</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Gelişim sürecinizi tamamlayarak hedeflerinize güvenle ve sürdürülebilir bir başarıyla ulaşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Areas Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden" id="egitim-alanlari">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-burgundy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-navy-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-burgundy font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Uzmanlık Alanlarımız</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 leading-tight">
                Eğitim <span className="italic text-burgundy">Alanları</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Bireysel potansiyelinizi en üst düzeye çıkarmak için kanıta dayalı yöntemler ve yenilikçi eğitim modelleri sunuyoruz.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            {/* Service Card 1: Large */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-8 group relative h-[450px] md:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-navy-900/10 border border-white/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80" 
                alt="Bilişsel Çalışmalar" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-burgundy rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-6 transition-transform duration-500">
                    <Brain className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">Bilişsel Gelişim</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6 tracking-tight">Bilişsel Çalışmalar</h3>
                <p className="text-white text-sm md:text-lg max-w-xl leading-relaxed opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-0 lg:translate-y-6 group-hover:translate-y-0">
                  Dikkat, hafıza ve problem çözme yeteneklerini bilimsel testlerle değerlendiriyor, kişiye özel gelişim programları hazırlıyoruz.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                  <Link 
                    to="/egitim/bilissel-calismalar"
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    Detayları Keşfet <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={() => openContact("Eğitim Danışmanlık")}
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    İletişime Geç <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Service Card 2: Small */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-4 group relative h-[450px] md:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-navy-900/10 border border-white/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80" 
                alt="Bireysel Danışmanlık" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-burgundy/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-burgundy shadow-xl transform group-hover:-rotate-6 transition-transform duration-500">
                    <Users className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">Psikolojik Destek</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-6 tracking-tight">Bireysel Danışmanlık</h3>
                <p className="text-white text-sm md:text-base leading-relaxed opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-0 lg:translate-y-6 group-hover:translate-y-0">
                  Kişisel hedeflerinize ulaşmanız için profesyonel rehberlik ve psikolojik destek süreçleri yönetiyoruz.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                  <Link 
                    to="/egitim/bireysel-danismanlik"
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    İncele <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={() => openContact("Bireysel Psikolojik Danışmanlık")}
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    İletişime Geç <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Service Card 3: Full Width */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-12 group relative h-[450px] md:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl shadow-navy-900/10 border border-white/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" 
                alt="Uzman Atölyeleri" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-navy-900/50 group-hover:bg-navy-900/60 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-white mb-6 md:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <Presentation size={40} />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">Uzman Atölyeleri</h3>
                <p className="text-white text-lg md:text-xl max-w-3xl leading-relaxed mb-8 md:mb-10 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-0 lg:translate-y-6 group-hover:translate-y-0">
                  Profesyonellere ve ebeveynlere yönelik, pratik beceri odaklı interaktif eğitim programları.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link 
                    to="/egitim/uzman-atolyeleri"
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    İncele <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={() => openContact("Eğitim Danışmanlık")}
                    className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-xs opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-0 lg:translate-y-4 group-hover:translate-y-0 hover:text-white"
                  >
                    İletişime Geç <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Educational Materials Section */}
      <section className="py-32 bg-slate-50" id="materyaller">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Eğitim Materyalleri</h2>
              <p className="text-slate-600 text-lg">
                Gelişiminizi desteklemek için hazırladığımız ücretsiz rehber ve dökümanları inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex items-center gap-2 text-burgundy font-bold group cursor-pointer">
              <span>Tümünü Gör</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materials.map((material, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 opacity-[0.23] group-hover:opacity-[0.28] transition-opacity duration-500 pointer-events-none">
                  <img 
                    src={material.image} 
                    alt="" 
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-colors duration-300">
                      <FileText size={28} />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-burgundy text-xs font-bold tracking-widest uppercase mb-2 block">
                      {material.category}
                    </span>
                    <h3 className="text-xl font-bold text-navy-900 leading-tight">
                      {material.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-end pt-6 border-t border-slate-50">
                    <Link 
                      to={`/materyal/${material.slug}`}
                      className="flex items-center gap-2 text-navy-900 font-bold hover:text-burgundy transition-colors"
                    >
                      <Eye size={18} />
                      <span>İncele</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-white rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <BookOpen size={48} className="text-burgundy mx-auto mb-8" />
              <h3 className="text-3xl md:text-4xl font-bold text-burgundy mb-6">Daha Fazla Kaynak mı Arıyorsunuz?</h3>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                Eğitim programlarımıza katılarak size özel hazırlanan geniş kütüphanemize ve interaktif materyallerimize erişim sağlayabilirsiniz.
              </p>
              <button 
                onClick={() => {
                  const el = document.getElementById('egitim-alanlari');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-navy-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-burgundy transition-all shadow-xl active:scale-95"
              >
                Eğitimleri İncele
              </button>
            </div>
          </div>

          {/* Sticky CTA Button */}
          <div className="mt-16 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById('egitim-alanlari');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-burgundy text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-burgundy/20 flex items-center gap-4 hover:bg-navy-900 transition-all group"
            >
              <span>Tüm Eğitimleri Keşfet</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Us? Section */}
      <section className="py-24 bg-white text-slate-800 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-burgundy font-bold tracking-[0.2em] uppercase text-sm mb-4 block">FARKIMIZ</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8 text-burgundy">
                Neden Bizi <span className="italic text-burgundy">Tercih Etmelisiniz?</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Eğitim ve psikolojik danışmanlık süreçlerinde ezber bozan yaklaşımlar geliştiriyoruz. Sadece anlık çözümler değil, hayat boyu sürecek kalıcı bir başarı ve denge inşa etmenizi sağlıyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-burgundy/10 p-2 rounded-lg text-burgundy">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-navy-900">Uzman ve Deneyimli Kadro</h4>
                    <p className="text-slate-500">Alanında yetkin, güncel bilimsel gelişmeleri takip eden profesyonel bir ekiple çalışıyoruz.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-burgundy/10 p-2 rounded-lg text-burgundy">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-navy-900">Kişiye Özel Çözümler</h4>
                    <p className="text-slate-500">Standart şablonlar yerine, her bireyin kendi hızına ve potansiyeline uygun programlar hazırlıyoruz.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-burgundy/10 p-2 rounded-lg text-burgundy">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-navy-900">Kanıta Dayalı Yöntemler</h4>
                    <p className="text-slate-500">Süreçlerimizin tamamında bilimsel testler, geçerliliği kanıtlanmış analiz ve terapi yöntemleri kullanıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" 
                  alt="Uzman Kadro" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-burgundy font-bold tracking-[0.2em] uppercase text-sm mb-4 block">MERAK EDİLENLER</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 leading-tight mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-slate-600 text-lg">
              Süreçlerimiz ve hizmetlerimizle ilgili en çok merak edilen konular.
            </p>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              question="Ön görüşme (ilk seans) ücretsiz mi, ne kadar sürüyor?" 
              answer="Evet, ilk tanışma ve ihtiyaç analizi görüşmemiz tamamen ücretsizdir. Bu görüşme yaklaşık 30 dakika sürmekte olup, hedeflerinizi ve nasıl bir yol haritası izleyeceğimizi belirlememizi sağlar."
            />
            <FaqItem 
              question="Danışmanlık sürecinin ne kadar süreceği nasıl belirleniyor?" 
              answer="Her bireyin ihtiyacı farklıdır. İlk seansta yaptığımız değerlendirmeler ve testler sonucunda size en uygun programı çıkarırız. Bu süreç birkaç aylık kısa vadeli bir plan olabileceği gibi, daha uzun soluklu bir akademik koçluk süreci de olabilir."
            />
            <FaqItem 
              question="Görüşmeler online mı yoksa yüz yüze mi yapılıyor?" 
              answer="Danışanlarımızın tercihine ve coğrafi konumuna göre her iki seçeneği de sunmaktayız. Online seanslarımız da yüz yüze seanslarımız kadar verimli geçmektedir."
            />
            <FaqItem 
              question="İletişime geçmek için ne yapmalıyım?" 
              answer="Web sitemizdeki iletişim formunu doldurarak veya iletişim numaramızdan bizi arayarak bize ulaşabilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır."
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Başka bir sorunuz mu var?</p>
            <button 
              onClick={() => openContact()}
              className="text-burgundy font-bold hover:text-navy-900 transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              Bizimle İletişime Geçin <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-800 py-24 border-t border-slate-100" id="iletisim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            {/* Left Column: Info */}
            <div className="space-y-12">
              <div>
                <div className="text-3xl font-serif font-bold mb-8 text-navy-900">SCA Eğitim Danışmanlık</div>
                <p className="text-slate-600 text-lg max-w-md leading-relaxed">
                  Geleceğin liderlerini ve uzmanlarını yetiştirmek için modern eğitim yaklaşımları ve profesyonel danışmanlık hizmetleri sunuyoruz.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-bold mb-6 text-navy-900">Hızlı Erişim</h4>
                  <ul className="space-y-4 text-slate-600 text-lg">
                    <li><a href="#hizmetler" className="hover:text-burgundy transition-colors">Hizmetler</a></li>
                    <li><a href="#materyaller" className="hover:text-burgundy transition-colors">Materyaller</a></li>
                    <li><a href="#iletisim" className="hover:text-burgundy transition-colors">İletişim Formu</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-6 text-navy-900">İletişim</h4>
                  <ul className="space-y-4 text-slate-600 text-lg">
                    <li className="flex items-start gap-3">
                      <Phone className="mt-1 flex-shrink-0 text-burgundy" size={20} />
                      <span>0 (258) 408 88 40</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 text-burgundy">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <span>Kınıklı Mahallesi, 6018 Sokak, No: 5, Kat: 3<br/>Pamukkale / Denizli</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4 text-navy-900">Çalışma Saatleri</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li className="flex justify-between pb-2">
                        <span>Haftanın Her Günü</span>
                        <span className="font-bold text-navy-900">10:00 - 19:00</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                    <iframe 
                      src="https://maps.google.com/maps?q=K%C4%B1n%C4%B1kl%C4%B1%20Mahallesi,%206018%20Sokak,%20No:%205,%20Pamukkale%20/%20Denizli&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="200" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full transition-opacity grayscale-0 filter"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 mt-12">
                <a href="https://instagram.com/scaegitimdanismanlik" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all text-navy-900">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-200">
              <h4 className="text-2xl font-bold mb-8 text-navy-900">Bize Mesaj Gönderin</h4>
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <input type="hidden" name="form_type" value="Genel İletişim" />
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Konu</label>
                  <select
                    name="subject"
                    value={contactTopic}
                    onChange={(e) => setContactTopic(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-burgundy/50 transition-all text-slate-800"
                  >
                    <option value="">Konu seçiniz (isteğe bağlı)</option>
                    <optgroup label="Danışmanlık Hizmetleri">
                      <option value="Bireysel Psikolojik Danışmanlık">Bireysel Psikolojik Danışmanlık</option>
                      <option value="Çocuk ve Ergen Psikolojik Danışmanlık">Çocuk ve Ergen Psikolojik Danışmanlık</option>
                      <option value="Ebeveyn Danışmanlık">Ebeveyn Danışmanlık</option>
                      <option value="Eğitim Danışmanlık">Eğitim Danışmanlık</option>
                    </optgroup>
                    <optgroup label="Eğitim Programları">
                      {trainings.map((t) => (
                        <option key={t.title} value={`Eğitim: ${t.title}`}>{t.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Ad Soyad</label>
                    <input name="name" required type="text" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-burgundy/50 transition-all text-slate-800" placeholder="Adınız Soyadınız" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 ml-1">Telefon</label>
                    <input name="phone" required type="tel" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-burgundy/50 transition-all text-slate-800" placeholder="05xx xxx xx xx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">E-posta</label>
                  <input name="email" required type="email" className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-burgundy/50 transition-all text-slate-800" placeholder="example@mail.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 ml-1">Mesajınız</label>
                  <textarea name="message" required className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 h-32 focus:outline-none focus:ring-2 focus:ring-burgundy/50 transition-all resize-none text-slate-800" placeholder="Sorularınızı buraya yazabilirsiniz..."></textarea>
                </div>
                <button type="submit" disabled={contactState.submitting} className="w-full bg-burgundy text-white py-5 rounded-2xl font-bold text-lg hover:bg-navy-900 transition-all shadow-xl active:scale-95 disabled:opacity-70">
                  {contactState.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
            <p>© 2026 SCA Eğitim Danışmanlık. Tüm hakları saklıdır.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-navy-900 transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-navy-900 transition-colors">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-[90] w-12 h-12 bg-white text-burgundy rounded-2xl shadow-xl border border-slate-100 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all group active:scale-95"
            aria-label="Yukarı Çık"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
