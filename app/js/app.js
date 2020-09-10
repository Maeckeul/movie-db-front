const carouselSlide = document.querySelector('.main__films--list');
const carouselImages = document.querySelectorAll('.main__films--item');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = 310;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', ()=> {
  if(counter >= carouselImages.length -1) return;
  console.log(carouselImages.length)
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

const carouselSlideCategory = document.querySelector('.main__categories--list');
const carouselImagesCategory = document.querySelectorAll('.main__categories--item');

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let counterCategory = 1;
const sizeCategory = 310;

carouselSlideCategory.style.transform = 'translateX(' + (-sizeCategory * counterCategory) + 'px)';

nextButton.addEventListener('click', ()=> {
  if(counterCategory >= carouselImagesCategory.length -1) return;
  carouselSlideCategory.style.transition = "transform 0.4s ease-in-out";
  counterCategory++;
  carouselSlideCategory.style.transform = 'translateX(' + (-sizeCategory * counterCategory) + 'px)';
})

prevButton.addEventListener('click', ()=> {
  if(counterCategory <= 0) return;
  carouselSlideCategory.style.transition = "transform 0.4s ease-in-out";
  counterCategory--;
  carouselSlideCategory.style.transform = 'translateX(' + (-sizeCategory * counterCategory) + 'px)';
})

carouselSlideCategory.addEventListener('transitionend', () => {
  if(carouselImagesCategory[counterCategory].id === 'lastLi'){
    carouselSlideCategory.style.transition = "none";
    counterCategory = carouselImagesCategory.length - 1;
    carouselSlideCategory.style.transform = 'translateX(' + (-sizeCategory * counterCategory) + 'px)';
  }

  if(carouselImagesCategory[counterCategory].id === 'firstLi'){
    carouselSlideCategory.style.transition = "none";
    counterCategory = carouselImagesCategory.length - counterCategory;
    carouselSlideCategory.style.transform = 'translateX(' + (-sizeCategory * counterCategory) + 'px)';
  }
});

const carouselSlideActor = document.querySelector('.main__actors--list');
const carouselImagesActor = document.querySelectorAll('.main__actors--item');

const prevButtonActor = document.querySelector('#prevButtonActor');
const nextButtonActor = document.querySelector('#nextButtonActor');

let counterActor = 1;
const sizeActor = 310;

carouselSlideActor.style.transform = 'translateX(' + (-sizeActor * counterActor) + 'px)';

nextButtonActor.addEventListener('click', ()=> {
  if(counterActor >= carouselImagesActor.length -1) return;
  carouselSlideActor.style.transition = "transform 0.4s ease-in-out";
  counterActor++;
  carouselSlideActor.style.transform = 'translateX(' + (-sizeActor * counterActor) + 'px)';
})

prevButtonActor.addEventListener('click', ()=> {
  if(counterActor <= 0) return;
  carouselSlideActor.style.transition = "transform 0.4s ease-in-out";
  counterActor--;
  carouselSlideActor.style.transform = 'translateX(' + (-sizeActor * counterActor) + 'px)';
})

carouselSlideActor.addEventListener('transitionend', () => {
  if(carouselImagesActor[counterActor].id === 'lastLiActor'){
    carouselSlideActor.style.transition = "none";
    counterActor = carouselImagesActor.length - 1;
    carouselSlideActor.style.transform = 'translateX(' + (-sizeActor * counterActor) + 'px)';
  }

  if(carouselImagesActor[counterActor].id === 'firstLiActor'){
    carouselSlideActor.style.transition = "none";
    counterActor = carouselImagesActor.length - counterActor;
    carouselSlideActor.style.transform = 'translateX(' + (-sizeActor * counterActor) + 'px)';
  }
});