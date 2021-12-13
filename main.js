//elementos
const title = document.querySelector('h1');
const text = document.querySelector('main p');
const buttons = document.querySelectorAll('img');

//eventos
buttons.forEach(button => button.addEventListener('click', changeLanguage));

//conteudos
const languages = {
  portuguese: {
    contentTitle: "Múltiplos Idiomas",
    contentText: "Há mais, muito mais, para o Natal do que luz de vela e alegria. É o espírito de doce amizade que brilha todo o ano. É consideração e bondade, é a esperança renascida novamente, para paz, para entendimento e para benevolência dos homens."
  },
  english: {
    contentTitle: "Multiple Languages",
    contentText: "There is more, much more to Christmas than candlelight and cheer. It is the spirit of sweet friendship that shines throughout the year. It is consideration and kindness, it is hope reborn again, for peace, for understanding and for the benevolence of men."
  },
  spanish: {
    contentTitle: "Múltiples Idiomas",
    contentText: "La Navidad es más, mucho más que luz de velas y alegría. Es el espíritu de dulce amistad que brilla durante todo el año. Es consideración y bondad, es esperanza renacida, por la paz, por la comprensión y por la benevolencia de los hombres."
  },
  chinese: {
    contentTitle: "多种语言",
    contentText: "除了烛光和欢呼，圣诞节还有更多、更多。是一年四季都闪耀着甜蜜友情的精神。它是体贴和善意，是重生的希望，是为了和平、为了理解和人类的仁慈。"
  }
}

function changeLanguage({ target }) {
  const takeSelectLanguage = target.getAttribute('select');

  const { contentTitle, contentText } = languages[takeSelectLanguage];

  title.innerHTML = contentTitle;
  text.innerHTML = contentText;
}
