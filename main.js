const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温華氏50度で外は暑かった。  :insertx: は散歩に出かけた。  :inserty: に着いた。  :insertz:. 田中 は驚かなかった。 — :insertx: は体重300ポンドで、その日は天気が良かった。';
let insertX = ['吉沢亮','横浜流星','佐々木蔵之介'];
let insertY = ['牛角','スペースワールド','首相官邸'];
let insertZ = ['その場にいる人は皆踊っていた。','その場にいる人は皆赤いセーターをきていた。','その場にいる人は皆片足で立っていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('田中',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' キログラム';
    const temperature =  Math.round((50-32) * 5 / 9) + ' 摂氏';
    newStory = newStory.replace('華氏50度',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
