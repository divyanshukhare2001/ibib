(() => {
  const preloader = document.getElementById('preloader');
  const percent = document.getElementById('preloaderPercent');
  const bar = document.getElementById('preloaderBarFill');
  const page = document.getElementById('page-wrap');

  if (!preloader || !page) return;

  const DURATION = 4800;
  const start = performance.now();

  function animate(now) {
    const progress = Math.min((now - start) / DURATION, 1);
    // const value = (1 - (1 - progress) ** 2) * 100;
    const value = progress* 100;

    percent.textContent = `${Math.round(value)}%`;
    bar.style.width = `${value}%`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      preloader.classList.add('is-done');
      page.classList.add('loaded');
      preloader.addEventListener(
        'transitionend',
        () => preloader.remove(),
        { once: true }
      );
      document.body.style.overflow = "auto";
    }
  }

  requestAnimationFrame(animate);
})();









document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Navbar shrink on scroll ---------------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- Mobile menu ---------------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const navMobile = document.getElementById('navMobile');
  burgerBtn.addEventListener('click', () => {
    navMobile.classList.toggle('is-open');
    burgerBtn.innerHTML = navMobile.classList.contains('is-open')
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
  navMobile.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      burgerBtn.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    })
  );

  /* ---------------- Hero slider ---------------- */
  // const SLIDES = [
  //   {
  //     eyebrow: 'International Business',
  //     heading: 'Connecting Bihar to Global Business Opportunities',
  //     subheading:
  //       'International business conferences, trade exhibitions, and global networking events.',
  //     cta: 'Explore Events',
  //     href: '#why',
  //     image:
  //       'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1800&auto=format&fit=crop',
  //   },
  //   {
  //     eyebrow: 'Business Delegations',
  //     heading: 'Expand Your Business Beyond Borders',
  //     subheading:
  //       'Join international business delegations, meet global partners, and unlock new markets.',
  //     cta: 'View Countries',
  //     href: '#countries',
  //     image:
  //       'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1800&auto=format&fit=crop',
  //   },
  //   {
  //     eyebrow: 'International Travel',
  //     heading: 'Explore Global Business Destinations',
  //     subheading:
  //       'Discover curated business travel packages, exhibitions, and networking opportunities across the world.',
  //     cta: 'Explore Packages',
  //     href: '#packages',
  //     image:
  //       'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1800&auto=format&fit=crop',
  //   },
  // ];

  // const slidesWrap = document.getElementById('heroSlides');
  // const dotsWrap = document.getElementById('heroDots');
  // const eyebrowEl = document.getElementById('heroEyebrow');
  // const headingEl = document.getElementById('heroHeading');
  // const subEl = document.getElementById('heroSubheading');
  // const ctaEl = document.getElementById('heroCta');

  // SLIDES.forEach((s, i) => {
  //   const slide = document.createElement('div');
  //   slide.className = 'hero__slide' + (i === 0 ? ' is-active img-expand'  : '');
  //   slide.innerHTML = `
  //     <div class="hero__slide-bg" style="background-image:url('${s.image}')"></div>
  //     <div class="hero__slide-overlay"></div>
  //   `;
  //   slidesWrap.appendChild(slide);

  //   const dot = document.createElement('button');
  //   dot.className = 'hero__dot' + (i === 0 ? ' is-active' : '');
  //   dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  //   dot.innerHTML = '<span></span>';
  //   dot.addEventListener('click', () => goToSlide(i));
  //   dotsWrap.appendChild(dot);
  // });

  // const slideEls = slidesWrap.querySelectorAll('.hero__slide');
  // const dotEls = dotsWrap.querySelectorAll('.hero__dot');
  // let current = 0;
  // let autoplayId = null;

  // function renderText(i) {
  //   const s = SLIDES[i];
  //   eyebrowEl.textContent = s.eyebrow;
  //   headingEl.textContent = s.heading;
  //   subEl.textContent = s.subheading;
  //   ctaEl.textContent = s.cta;
  //   ctaEl.setAttribute('href', s.href);
  //   [headingEl, subEl, eyebrowEl, ctaEl].forEach((el) => {
  //     el.style.animation = 'none';
  //     // eslint-disable-next-line no-unused-expressions
  //     el.offsetHeight;
  //     el.style.animation = null;
  //   });
  // }

  // function goToSlide(i) {

  //    const previous = current;

  //   slideEls[current].classList.remove('is-active');
  //   dotEls[current].classList.remove('is-active');
  //   current = (i + SLIDES.length) % SLIDES.length;
  //   slideEls[current].classList.add('is-active');
  //   slideEls[current].classList.add('img-expand');
  //   dotEls[current].classList.add('is-active');
  //   setTimeout( ()=>{
  //     slideEls[previous].classList.remove('img-expand');
  //   },1000 )
    
  //   renderText(current);
  //   restartAutoplay();
  // }

  // function restartAutoplay() {
  //   clearInterval(autoplayId);
  //   autoplayId = setInterval(() => goToSlide(current + 1), 6500);
  // }

  // document.getElementById('heroPrev').addEventListener('click', () => goToSlide(current - 1));
  // document.getElementById('heroNext').addEventListener('click', () => goToSlide(current + 1));

  // renderText(0);
  // restartAutoplay();

  const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');

const prevBtn = document.getElementById('heroPrev');
const nextBtn = document.getElementById('heroNext');

let current = 0;
let autoplay = null;

function goToSlide(index) {

  const previous = current;

  current = (index + slides.length) % slides.length;

  slides[previous].classList.remove('is-active');
  dots[previous].classList.remove('is-active');

  slides[current].classList.add('is-active');
  slides[current].classList.add('img-expand');

  dots[current].classList.add('is-active');

  setTimeout(() => {
    slides[previous].classList.remove('img-expand');
  }, 1200);

  restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => {
    goToSlide(current + 1);
  }, 6500);
}

nextBtn.addEventListener('click', () => {
  goToSlide(current + 1);
});

prevBtn.addEventListener('click', () => {
  goToSlide(current - 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

restartAutoplay();


  /* ---------------- Contact popup ---------------- */
const popup = document.getElementById('popup');
const popupBackdrop = document.getElementById('popupBackdrop');
const popupClose = document.getElementById('popupClose');
const popupForm = document.getElementById('popupForm');
const popupThanks = document.getElementById('popupThanks');
const contactForm = document.getElementById('contactForm');

function openPopup() {
    popup.hidden = false;
    lucide.createIcons();
}

function closePopup() {
    popup.hidden = true;
}

setTimeout(openPopup, 9000);

popupBackdrop.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    popupForm.hidden = true;
    popupThanks.hidden = false;

    lucide.createIcons();

    // setTimeout(closePopup, 1600);
});



  /* ---------------- Upcoming Business Events ---------------- */
  const eventsNavList = document.getElementById('eventsNavList');
  if (eventsNavList) {
    const featureImage = document.getElementById('eventsFeatureImage');
    const featureCategory = document.getElementById('eventsFeatureCategory');
    const featureTitle = document.getElementById('eventsFeatureTitle');
    const featureDate = document.getElementById('eventsFeatureDate');
    const featureLocation = document.getElementById('eventsFeatureLocation');
    const featureDesc = document.getElementById('eventsFeatureDesc');
    const navItems = eventsNavList.querySelectorAll('.events__nav-item');

    function activateEvent(item) {
      navItems.forEach((el) => el.classList.remove('is-active'));
      item.classList.add('is-active');

      featureImage.style.backgroundImage = `url('${item.dataset.image}')`;
      featureCategory.textContent = item.dataset.category;
      featureTitle.textContent = item.dataset.title;
      featureDate.textContent = item.dataset.date;
      featureLocation.textContent = item.dataset.location;
      featureDesc.textContent = item.dataset.desc;
    }

    navItems.forEach((item) => {
      item.addEventListener('click', () => activateEvent(item));
    });
  }
});
