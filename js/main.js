const elBody = document.body;
const elDiv = document.createElement('div');
const elImg = document.createElement('img');


elBody.style.background = 'white';
elBody.style.display = 'flex';
elBody.style.justifyContent = 'center';
elBody.style.alignItems = 'center';
elBody.style.height = '100vh';

elDiv.style.backgroundColor = '#FF4F52';
elDiv.style.width = '263px';
elDiv.style.height = '370px';
elDiv.style.borderRadius = '10px';
elDiv.style.boxShadow = '6px 5px 4px 0px rgba(0, 0, 0, 0.25)';


elImg.src = './Russell.png';
elImg.style.width = '155px';
elImg.style.height = '155px';     



elBody.append(elDiv);
elDiv.append(elImg);