const speakers = document.querySelector('#speakers');
const speakersArray = [
  {
    picture: 'images/speakers/hamilton.png',
    name: 'Lewis Hamilton',
    description: '7-Times World Champion',
    text: 'This amazing driver won his first World Championship with McLaren in 2008',
    id: 'speakers-card0',
  },
  {
    picture: 'images/speakers/mika.png',
    name: 'Mika Hakkinen',
    description: '2-Times World Champion',
    text: 'Mika won his two World Championship Titles with McLaren in 1998 and 1999',
    id: 'speakers-card1',
  },
  {
    picture: 'images/speakers/norris.png',
    name: 'Lando Norris',
    description: 'McLaren F1 Driver',
    text: 'Racing for McLaren since 2019, he is our young talent',
    id: 'speakers-card2',
  },
  {
    picture: 'images/speakers/brown.png',
    name: 'Zak Brown',
    description: 'McLaren Racing Team Principal',
    text: 'Chief Director of McLaren Motorsport division',
    id: 'speakers-card3',
  },
  {
    picture: 'images/speakers/driver.png',
    name: 'Mike Turner',
    description: 'McLaren E-Sports Driver',
    text: 'Racing for McLaren E-Sports since 2019, he is our young talent',
    id: 'speakers-card4',
  },
  {
    picture: 'images/speakers/driver2.png',
    name: 'Matt Helders',
    description: 'McLaren E-Sports Driver',
    text: 'Racing for McLaren E-Sports since 2019, he is our young talent',
    id: 'speakers-card5',
  },
];

const createSpeakers = () => {
  const speakersTitle = document.createElement('h2');
  speakersTitle.classList.add('speakers-title');
  speakersTitle.innerText = 'Featured Speakers';
  speakers.appendChild(speakersTitle);

  const speakersCardsContainer = document.createElement('div');
  speakersCardsContainer.classList.add('speakers-cardsContainer');
  speakers.appendChild(speakersCardsContainer);

  speakersArray.forEach((item) => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speakers-card');
    speakerCard.setAttribute('id', item.id);
    speakersCardsContainer.appendChild(speakerCard);
    /* ok */

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('spk-img');
    speakerCard.appendChild(imgContainer);

    const img = document.createElement('img');
    img.classList.add('spk-imgs');
    img.setAttribute('src', item.picture);
    img.setAttribute('alt', 'Featured Speaker');
    imgContainer.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('spk-textContainer');
    speakerCard.appendChild(info);

    const tittle = document.createElement('h2');
    tittle.classList.add('spk-title');
    tittle.innerText = item.name;
    info.appendChild(tittle);

    const place = document.createElement('h4');
    place.classList.add('spk-subTitle');
    place.innerText = item.description;
    info.appendChild(place);

    const city = document.createElement('p');
    city.classList.add('spk-text');
    city.innerText = item.text;
    info.appendChild(city);
  });

  const seeMore = document.createElement('div');
  seeMore.classList.add('speakers-seeMore');
  speakers.appendChild(seeMore);

  const seeMoreFlex = document.createElement('div');
  seeMoreFlex.classList.add('speakers-moreFlex');
  seeMore.appendChild(seeMoreFlex);

  const seeMoreTextCont = document.createElement('div');
  seeMoreTextCont.classList.add('speakers-seeMoreText');
  seeMoreFlex.appendChild(seeMoreTextCont);

  const seeMoreText = document.createElement('p');
  seeMoreText.innerText = 'See More';
  seeMoreTextCont.appendChild(seeMoreText);
};

createSpeakers();