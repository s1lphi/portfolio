let homepg = document.getElementById("homepg"),
    menu = document.querySelector(".menu-btn-container p"),
    musicpg = document.getElementById("musicpg"),
    mediapg = document.getElementById("mediapg"),
    contactpg = document.getElementById("contactpg"),
    albums = document.querySelector(".name-of-block-left p"),
    singles = document.querySelector(".name-of-block-right p"),
    moreSngls = document.querySelector(".next-btn-sngls span"),
    moreAlbms = document.querySelector(".next-btn-albms span"),
    hellotext = document.getElementById("hellotext"),
    hellolasttext = document.querySelector(".last-text"),
    prodlate = document.querySelector(".fnsh-video p"),
    ytblink = document.querySelector(".yt-btn p"),
    smbtbtn = document.getElementById("smbt-btn"),
    nameInp = document.getElementById("name"),
    emailInp = document.getElementById("email"),
    aboutInp = document.getElementById("aboutarea");
    ytbtnopentext = document.querySelector(".yt-btn.open p");

const language = {
    en: {
        MENU: 'MENU',
        HOME: 'HOME',
        MUSIC: 'MUSIC',
        MEDIA: 'MEDIA',
        CONTACT: 'CONTACT',
        ALBUMS: 'ALBUMS',
        SINGLES: 'SINGLES',
        MORE: "MORE",
        HELLOTEXT: "Hello there!<br><br>Welcome to my world of music! Here you will find sounds that will penetrate your soul and make it tremble with tension. My artistry is a dive into the darkest corners of the human psyche, where there is no escape and nowhere to hide.<br>Music is the instrument through which I convey my thoughts, emotions, and fears. Dark melodies, deep basslines, atmospheric components, lyrics that require digging for the truth - you will find it all in my tracks.<br>If you are ready to open your heart to art and immerse yourself in the atmosphere of my story, then my music is for you. Open the door to your soul!",
        LASTTEXT: "<br>Good day!",
        CONTLINK: "Continued on YOUTUBE",
        YOUTUBECONT: "Continue",
        SMBTBTN: "Send",
        NAMEINPUT: "Name",
        EMAILINPUT: "Email",
        ABOUTINPUT: "Text",
    },
    ru: {
        MENU: 'МЕНЮ',
        HOME: 'ГЛАВНАЯ',
        MUSIC: 'МУЗЫКА',
        MEDIA: 'МЕДИА',
        CONTACT: 'КОНТАКТЫ',
        ALBUMS: 'АЛЬБОМЫ',
        SINGLES: 'СИНГЛЫ',
        MORE: "Ещё",
        HELLOTEXT: "Приветствую тебя!<br><br>Добро пожаловать в мой мир музыки! Здесь вы найдете звуки, которые проникнут в вашу душу и заставят ее дрожать от напряжения. Мое творчество - это погружение в самые темные уголки человеческой психики, откуда не убежать и где не спрятаться.<br>Музыка - это орудие, которым я передаю свои мысли, эмоции и страхи. Мрачные мелодии, глубокие басы, атмосферные состовляющие, текста, в которых нужно покопаться для поиска истины - все это вы найдете в моих треках. <br>Если вы готовы открыть свое сердце для искусства и погрузиться в атмосферу моей истории, то моя музыка для вас. Откройте дверь в свою душу!",
        LASTTEXT: "<br>Хорошего полёта!",
        CONTLINK: "Продолжение на YOUTUBE",
        YOUTUBECONT: "Продолжение",
        SMBTBTN: "Отправить",
        NAMEINPUT: "Имя",
        EMAILINPUT: "Почта",
        ABOUTINPUT: "Текст",
    },
};

let lang = localStorage.getItem('lang');
if (lang === null) {
    lang = 'ru';
}
setLanguage(lang);

if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    if (hash !== lang) {
        lang = hash;
        localStorage.setItem('lang', lang);
        setLanguage(lang);
    }
}

function setLanguage(lang) {
    homepg.textContent = language[lang].HOME;
    menu.textContent = language[lang].MENU;
    musicpg.textContent = language[lang].MUSIC;
    mediapg.textContent = language[lang].MEDIA;
    contactpg.textContent = language[lang].CONTACT;
    if (albums) {
        albums.textContent = language[lang].ALBUMS;
    }
    if (singles) {
        singles.textContent = language[lang].SINGLES;
    }
    if (moreSngls) {
        moreSngls.textContent = language[lang].MORE;
    }
    if (moreAlbms) {
        moreAlbms.textContent = language[lang].MORE;
    }
    if (hellotext) {
      hellotext.innerHTML = language[lang].HELLOTEXT;
    }
    if (hellolasttext) {
      hellolasttext.innerHTML = language[lang].LASTTEXT;
    }
    if (prodlate) {
      prodlate.textContent = language[lang].CONTLINK;
    }
    if (ytblink) {
      ytblink.textContent = language[lang].YOUTUBECONT;
      if (lang === 'en') {
        ytblink.style.marginLeft = '30px';
      } else {
        ytblink.style.marginLeft = '5px';
      }
    }
    if (smbtbtn) {
      smbtbtn.textContent = language[lang].SMBTBTN;
    }
    if (nameInp) {
      nameInp.placeholder = language[lang].NAMEINPUT;
    }
    if (emailInp) {
      emailInp.placeholder = language[lang].EMAILINPUT;
    }
    if (aboutInp) {
      aboutInp.placeholder = language[lang].ABOUTINPUT;
    }
}

const dateReload = document.querySelectorAll('[data-reload]');

for (let i = 0; i < dateReload.length; i++) {
    dateReload[i].onclick = function() {
        let lang = this.getAttribute('href').substring(1);
        localStorage.setItem('lang', lang);
        setLanguage(lang);
    };
}
