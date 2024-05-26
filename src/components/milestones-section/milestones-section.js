(function () {
  // VARIABLES
  const timeline = document.querySelector('.timeline ol'),
    elH = document.querySelectorAll('.timeline li > div'),
    arrows = document.querySelectorAll('.timeline .arrow'),
    arrowPrev = document.querySelector('.timeline .arrow__prev'),
    arrowNext = document.querySelector('.timeline .arrow__next'),
    firstItem = document.querySelector('.timeline li:first-child'),
    lastItem = document.querySelector('.timeline li:last-child'),
    disabledClass = 'disabled';

  let xScrolling = 280; // Default scrolling value
  let currentScroll = 0;

  // START
  window.addEventListener('load', init);
  window.addEventListener('resize', updateScrollValue); // Update scroll value on resize

  function init() {
    setEqualHeights(elH);
    updateScrollValue(); // Set initial scrolling value based on screen width
    animateTl(arrows, timeline);
    setSwipeFn(timeline, arrowPrev, arrowNext);
    setKeyboardFn(arrowPrev, arrowNext);
    scrollToMiddle(); // Scroll to middle position on load
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }

  // UPDATE SCROLL VALUE BASED ON SCREEN WIDTH
  function updateScrollValue() {
    if (window.innerWidth <= 930) {
      xScrolling = 225; // Scroll one item at a time on small screens
    } else {
      xScrolling = 280; // Default scrolling value for larger screens
    }
    scrollToMiddle(); // Recalculate the middle position on resize
  }

  // CHECK IF AN ELEMENT IS IN VIEWPORT
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // CHECK IF LAST ITEM IS CENTERED
  function isLastItemCentered() {
    const rect = lastItem.getBoundingClientRect();
    const timelineRect = timeline.getBoundingClientRect();
    return (
      rect.left >= timelineRect.width / 2 - rect.width / 2 &&
      rect.right <= timelineRect.width / 2 + rect.width / 2
    );
  }

  // SET STATE OF PREV/NEXT ARROWS
  function setBtnState(el, flag = true) {
    if (flag) {
      el.classList.add(disabledClass);
    } else {
      if (el.classList.contains(disabledClass)) {
        el.classList.remove(disabledClass);
      }
      el.disabled = false;
    }
  }

  // ANIMATE TIMELINE
  function animateTl(el, tl) {
    for (let i = 0; i < el.length; i++) {
      el[i].addEventListener('click', function () {
        if (!arrowPrev.disabled) {
          arrowPrev.disabled = true;
        }
        if (!arrowNext.disabled) {
          arrowNext.disabled = true;
        }
        const sign = this.classList.contains('arrow__prev') ? '' : '-';
        currentScroll += sign === '' ? xScrolling : -xScrolling;
        tl.style.transform = `translateX(${currentScroll}px)`;

        setTimeout(() => {
          isElementInViewport(firstItem) ? setBtnState(arrowPrev) : setBtnState(arrowPrev, false);
          isElementInViewport(lastItem) || isLastItemCentered()
            ? setBtnState(arrowNext)
            : setBtnState(arrowNext, false);
        }, 1100);
      });
    }
  }

  // ADD SWIPE SUPPORT FOR TOUCH DEVICES
  function setSwipeFn(tl, prev, next) {
    const hammer = new Hammer(tl);
    hammer.on('swipeleft', () => next.click());
    hammer.on('swiperight', () => prev.click());
  }

  // ADD BASIC KEYBOARD FUNCTIONALITY
  function setKeyboardFn(prev, next) {
    document.addEventListener('keydown', (e) => {
      if (e.which === 37 || e.which === 39) {
        const timelineOfTop = timeline.offsetTop;
        const y = window.pageYOffset;
        if (timelineOfTop !== y) {
          window.scrollTo(0, timelineOfTop);
        }
        if (e.which === 37) {
          prev.click();
        } else if (e.which === 39) {
          next.click();
        }
      }
    });
  }

  // SCROLL TO MIDDLE
  function scrollToMiddle() {
    const totalItems = document.querySelectorAll('.timeline li').length;
    const middleIndex = Math.floor(totalItems / 2);
    const scrollPosition = middleIndex * xScrolling - window.innerWidth / 2 + xScrolling / 2;
    timeline.style.transform = `translateX(-${scrollPosition}px)`;
    currentScroll = -scrollPosition; // Initialize currentScroll to middle position
  }
})();
