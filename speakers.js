const speakers = [
  {
    picture: 'images/speakers/hamilton.png',
    name: 'Lewis Hamilton',
    description: '7-Times World Champion',
    text: 'This amazing driver won his first World Championship with McLaren in 2008',
  },
  {
    picture: 'images/speakers/mika.png',
    name: 'Mika Hakkinen',
    description: '2-Times World Champion',
    text: 'Mika won his two World Championship Titles with McLaren in 1998 and 1999',
  },
  {
    picture: 'images/speakers/norris.png',
    name: 'Lando Norris',
    description: 'McLaren F1 Driver',
    text: 'Racing for McLaren since 2019, he is our young talent',
  },
  {
    picture: 'images/speakers/brown.png',
    name: 'Zak Brown',
    description: 'McLaren Racing Team Principal',
    text: 'Chief Director of McLaren Motorsport division',
  },
  {
    picture: 'images/speakers/driver.png',
    name: 'Mike Turner',
    description: 'McLaren E-Sports Driver',
    text: 'Racing for McLaren E-Sports since 2019, he is our young talent',
  },
  {
    picture: 'images/speakers/driver2.png',
    name: 'Matt Helders',
    description: 'McLaren E-Sports Driver',
    text: 'Racing for McLaren E-Sports since 2019, he is our young talent',
  },
];

document.getElementById('spk-img0').src = speakers[0].picture;
document.getElementById('spk-title0').textContent = speakers[0].name;
document.getElementById('spk-subTitle0').textContent = speakers[0].description;
document.getElementById('spk-text0').textContent = speakers[0].text;

document.getElementById('spk-img1').src = speakers[1].picture;
document.getElementById('spk-title1').textContent = speakers[1].name;
document.getElementById('spk-subTitle1').textContent = speakers[1].description;
document.getElementById('spk-text1').textContent = speakers[1].text;

document.getElementById('spk-img2').src = speakers[2].picture;
document.getElementById('spk-title2').textContent = speakers[2].name;
document.getElementById('spk-subTitle2').textContent = speakers[2].description;
document.getElementById('spk-text2').textContent = speakers[2].text;

document.getElementById('spk-img3').src = speakers[3].picture;
document.getElementById('spk-title3').textContent = speakers[3].name;
document.getElementById('spk-subTitle3').textContent = speakers[3].description;
document.getElementById('spk-text3').textContent = speakers[3].text;

document.getElementById('spk-img4').src = speakers[4].picture;
document.getElementById('spk-title4').textContent = speakers[4].name;
document.getElementById('spk-subTitle4').textContent = speakers[4].description;
document.getElementById('spk-text4').textContent = speakers[4].text;

document.getElementById('spk-img5').src = speakers[5].picture;
document.getElementById('spk-title5').textContent = speakers[5].name;
document.getElementById('spk-subTitle5').textContent = speakers[5].description;
document.getElementById('spk-text5').textContent = speakers[5].text;

/*
document.getElementById('seeTonic').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('project-name').textContent = projects[0].name;
  document.getElementById('modal_li1').textContent = projects[0].clases1;
  document.getElementById('modal_li2').textContent = projects[0].clases2;
  document.getElementById('modal_li3').textContent = projects[0].clases3;
  document.getElementById('project-image').src = projects[0].ftdImage;
  document.getElementById('modal_li4').textContent = projects[0].technologies0;
  document.getElementById('modal_li5').textContent = projects[0].technologies1;
  document.getElementById('modal_li6').textContent = projects[0].technologies2;
  document.getElementById('modal_li7').textContent = projects[0].technologies3;
  document.getElementById('modal_li8').textContent = projects[0].technologies4;
  document.getElementById('modal_li9').textContent = projects[0].technologies5;
  document.getElementById('modal-description').textContent = projects[0].description;
  document.getElementById('live-link').textContent = projects[0].liveVersion;
  document.getElementById('source-link').textContent = projects[0].source;
  document.getElementById('modal-close').src = projects[0].closeButton;
  document.getElementById('liveIMG').src = projects[0].liveButton;
  document.getElementById('srcIMG').src = projects[0].sourceButton;
});

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-container').style.display = 'none';
});

*/