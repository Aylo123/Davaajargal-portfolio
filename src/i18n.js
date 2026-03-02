import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {

  /* ======================= MONGOL ======================= */

  mn: {
    translation: {

      /* ---------- NAV ---------- */
      nav: {
        home: "Нүүр хуудас",
        experience: "Мэргэжил",
        education: "Боловсрол",
        projects: "Төслүүд",   // 
        about: "Миний тухай",
        contact: "Холбоо барих"
      },

      /* ---------- HERO ---------- */
      hero: {
        greeting: "Сайн уу?",
        name: "Намайг Э.Даваажаргал гэдэг.",
        title: "Мэдээллийн системийн аюулгүй байдал чиглэлээр төгссөн шинэхэн мэргэжилтэн",
        contactBtn: "Надтай холбогдох",
        cvBtn: "Анкет"
      },

      /* ---------- ABOUT ---------- */
      about: {
        title: "Мэргэжил",
        role:"Мэдээллийн системийн аюулгүй байдал",
        desc:
          "Сүлжээ болон мэдээллийн системийн аюулгүй байдлын суурь мэдлэг, веб систем эмзэг байдлын шинжилгээ хийх чадвартай. Эмзэг байдлын үнэлгээ, веб пентест болон мэдээллийн аюулгүй байдлын аудит, эрсдэлийн үнэлгээ чиглэлээр мэргэжилийн ур чадваруудаа хөгжүүлэх зорилготой.",

        skillsTitle: "Ур чадвар",
        skills1:"Сүлжээний үндсэн ойлголт, мэдлэг",
        skills2:"ISO/IEC 27001 мэдээллийн аюулгүй байдлын стандартын суурь мэдлэг",
        skills3:"Веб системийн эмзэг байдлын үнэлгээ",
        skills4:"Kali Linux орчинд ажиллах чадвар",

        strengthsTitle: "Давуу тал",
        strength1: "Багаар үр дүнтэй хамтран ажиллах чадвар",
        strength2: "Өндөр эмпати, харилцааны ур чадвар",
        strength3: "Бие даан суралцах болон шинэ мэдлэг хурдан эзэмших чадвар",
        strength4: "Хариуцлагатай, цаг баримталдаг",

        goalTitle: "Мэргэжилийн зорилго",
        goalDesc:
          "Бодит орчинд байгууллагын хүрээнд аюулгүй байдлын эмзэг байдлыг илрүүлж аюул занал, эрсдэлээс сэргийлж, сайжруулах шийдэл боловсруулахад суралцан ажиллахыг зорьж байна."
      },

      /* ---------- EDUCATION ---------- */
      education: {
        title: "Боловсрол",
        subtitle: "Миний суурь, академик боловсрол",

        highschool: {
          title: "Ерөнхий боловсролын сургууль",
          date: "2009 — 2021",
          school: "Хөвсгөл аймаг Түнэл ЕБС",
          score: "Голч дүн: 99.8"
        },

        university: {
          title: "Мэдээллийн системийн аюулгүй байдал бакалавр",
          date: "2021 — 2025",
          school: "Шинжлэх Ухаан Технологийн Их Сургууль",
          score: "Голч дүн: 3.38",
          focus1: "Диплом 1: Онлайн худалдааны веб сайтын аюулгүй байдал, хамгаалалтыг сайжруулах арга замууд /Монгол улсын жишээн дээр/ ",
          focus2: "Диплом 2: Дижитал ур чадвар ба хиймэл оюун ухааны эрсдэл нийгмийн инженерчлэлийн орчинд нөлөөлөх нь",
        }
      },

      /* ---------- PROJECTS ---------- */
      projects: {
        title: "Төслүүд",

        project1: {
          title: "Төсөл 1",
          desc:
            "Диплом сэдэв: Онлайн худалдааны веб сайтын аюулгүй байдал, хамгаалалтыг сайжруулах арга замууд /Монгол улсын жишээн дээр/"
        },

        project2: {
          title: "Төсөл 2",
          desc:
            "Диплом сэдэв: Дижитал ур чадвар ба хиймэл оюун ухааны эрсдэл нийгмийн инженерчлэлийн орчинд нөлөөлөх нь"
        }
      },

      /* ---------- PERSONAL ---------- */
      personal: {
        title: "Миний тухай",

        intro:
          "Өөрийгөө тасралтгүй хөгжүүлэх, шинэ зүйл сурах сонирхолтой.",

        softSkillsTitle: "Хэлний мэдлэг",
        soft1: "Англи хэл ахисан дунд түвшин",
        soft2: "Солонгос хэл дунд түвшин",
        
        interestsTitle: "Сонирхол",
        interest1: "Сагсан бөмбөг тоглох",
        interest2: "Гар урлал хийх",
        interest3: "Анимэ үзэх",
        interest4: "Хоол хийх",

        strengthsTitle: "Миний зан чанар",
        strength1: "Тайван, логик сэтгэлгээтэй",
        strength2: "Шинийг турших дуртай",
        strength3: "Төлөвлөгөө боловсруулах",
        strength4: "Асуудлыг задлан шийдэх дуртай",
      },

      /* ---------- CONTACT ---------- */
      contact: {
        title: "Холбоо барих",
        success: "Амжилттай илгээгдлээ",
        error: "Алдаа гарлаа",

        nameLabel: "Нэр",
        emailLabel: "Имэйл",
        messageLabel: "Мессеж",
        namePlaceholder: "Таны нэр",
        emailPlaceholder: "Таны имэйл хаяг",
        messagePlaceholder: "Агуулга",

        sending: "Илгээж байна...",
        sendBtn: "Илгээх"
      },

      /* ---------- FOOTER ---------- */
      footer: {
        titleLine1: "Миний профайлаар зочилсонд",
        titleLine2: "Баярлалаа",
        contactBtn: "Холбоо барих 📞"
      }
    }
  },

  /* ======================= ENGLISH ======================= */

  en: {
    translation: {

      nav: {
        home: "Home",
        experience: "Profession",
        education: "Education",
        projects: "Projects",  // 
        about: "About Me",
        contact: "Contact"
      },

      hero: {
        greeting: "Hi, I'm",
        name: "Davaajargal.",
        title: "Graduate in Information Systems Security",
        contactBtn: "Contact Me",
        cvBtn: "Resume"
      },

      about: {
        title: "Professional Profile",
        role:"Information System Security",
        desc:
          "I’m a graduate in network and information systems security with a basic understanding of cybersecurity and experience in analyzing vulnerabilities in web systems. I want to build my skills in vulnerability assessment, web penetration testing, information security auditing, and risk assessment. ",
          skillsTitle: "Skill",
          skills1:"Foundational knowledge of computer networking principles and protocols",
          skills2:"Foundational knowledge of ISO/IEC 27001 information security standards",
          skills3:"Web application vulnerability assessment",
          skills4:"Hands-on experience using Kali Linux for security testing and analysis",

          strengthsTitle: "Strength",
          strength1: "Proven ability to collaborate effectively within team environmen",
          strength2: "Strong interpersonal and communication skills",
          strength3: "Highly motivated self-learner with the ability to quickly adapt and learn new technologies",
          strength4: "Responsible and punctual",

          goalTitle: "Career Objective",
          goalDesc:
          "I am eager to gain hands-on experience in real-world environments, identifying security vulnerabilities and helping organizations reduce risks while contributing to practical and effective cybersecurity solutions."
      },

      education: {
        title: "Education",
        subtitle: "Academic background",

        highschool: {
          title: "High School",
          date: "2009 — 2021",
          school: "Tunel High School",
          score: "GPA: 99.8"
        },

        university: {
          title: "Bachelor of Information System Security",
          date: "2021 — 2025",
          school: "Mongolian University of Science and Technology",
          score: "GPA: 3.38",
          focus1: "Thesis 1: Security and protection methods for online shopping websites/on the example of Mongolia",
          focus2: "Thesis 2: The Impact of Digital Skills and AI Risks in the Context of Social Engineering ",
        }
      },

      projects: {
        title: "Projects",

        project1: {
          title: "Project 1",
          desc:
            "Thesis: Security and protection methods for online shopping websites/on the example of Mongolia."
        },

        project2: {
          title: "Project 2",
          desc:
            "Thesis: The Impact of Digital Skills and AI Risks in the Context of Social Engineering."
        }
      },

      personal: {
        title: "About Me",
        intro:
          "Passionate about continuous learning and self-improvement",

        softSkillsTitle: "Languages",
        soft1: "English: Upper-intermediate level",
        soft2: "Korean: Intermediate level",
        interestsTitle: "Interests",
        interest1: "Playing basketball",
        interest2: "Arts",
        interest3: "Watching anime",
        interest4: "Cooking",
        

      strengthsTitle: "Strengths",
      strength1: "Calm and analytical mindset under pressure",
      strength2: "Proactive and eager to explore new technologies",
      strength3: "Strong planning and organizational skills",
      strength4: "Analytical problem-solver with attention to detail",
      },

      contact: {
        title: "Contact Me",
        success: "Your message has been sent successfully.",
        error: "Something went wrong. Please try again.",

        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "",
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email address ",
        messagePlaceholder: "Write your message here...",


        sending: "Sending...",
        sendBtn: "Sent",
      },

      footer: {
        titleLine1: "Thank you for visiting",
        titleLine2: "My Profile",
        contactBtn: "Contact Me 📞"
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "mn",
  fallbackLng: "mn",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;