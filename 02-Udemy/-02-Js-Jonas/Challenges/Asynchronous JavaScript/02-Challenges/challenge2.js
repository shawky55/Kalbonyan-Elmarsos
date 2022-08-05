const imageContainer = document.querySelector('.images');
let currentImage;

function timer(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${sec} passed `);
    }, sec * 1000);
  });
}
const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgPath;
    imgElement.addEventListener('load', () => {
      imageContainer.append(imgElement);
      resolve(imgElement);
    });
    imgElement.addEventListener('error', () => {
      reject(new Error('image not found'));
    });
  });
};

//PHASE ONE SOLVE CHALLENGE WITH THREE IMAGE

() => {
  createImage('./img/img-1.jpg')
    .then(img => {
      currentImage = img;
      console.log('image uploaded');
      return timer(2);
    })
    .then(response => {
      console.log(response);
      currentImage.style.display = 'none';
      return createImage('./img/img-2.jpg');
    })
    .then(img => {
      currentImage = img;
      console.log('image uploaded');
      return timer(2);
    })
    .then(response => {
      console.log(response);
      currentImage.style.display = 'none';
      return createImage('./img/img-3.jpg');
    })
    .then(img => {
      currentImage = img;
      console.log('image uploaded');
      return timer(2);
    })
    .then(response => {
      console.log(response);
      currentImage.style.display = 'none';
    });
};

// ///PHASE REDUCE DUPLICATE OF CODE WITH USE FUNCTION

////////////////////////////
/////////////////////////
//////////////////////
const uploadedImage = (img, seconds = 2) => {
  currentImage = img;
  console.log('image uploaded');
  return timer(seconds);
};

const nextImage = (response, imgPath) => {
  console.log(response);
  currentImage.style.display = 'none';
  return createImage(imgPath);
};

createImage('./img/img-1.jpg')
  .then(img => uploadedImage(img))
  .then(response => nextImage(response, 'img/img-2.jpg'))
  .then(img => uploadedImage(img))
  .then(response => nextImage(response, './img/img-3.jpg'))
  .then(img => uploadedImage(img))
  .then(response => nextImage(response, './img/img-3.jpg'))
  .catch(err => console.error(err.message));
console.log('hekk');
navigator.geolocation.getCurrentPosition(
  Geolocation => {
    console.log(Geolocation['coords'].longitude);
    console.log(Geolocation['coords'].latitude);
  },
  () => {
    console.log('failded');
  }
);
