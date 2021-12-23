document.documentElement.className="js-enabled";
/*
function debounce(func, wait = 3, immediate = true) {
    let timeout;
    return () => {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
//création des options de circonstances pour l'obersvation dans varibale observer dessous
let options = {
    root: null, //par rapport au viewport donc null sinon ancêtre de l'élément
    rootMargin: '0px', // définit s'il y a des marges ici non
    threshold: 0.5 // % qui s'affiche ici 50% si entier on écrit 1.0
}
//variable observer avec le créateur de l'observateur avec les options passer en critère
let observer = new IntersectionObserver(callback, options);


//choisis l'élément à observer
let target = document.querySelectorAll('.slide-in');
observer.observe(target);
/*Lorsque la cible franchit un palier spécifié indiqué dans l'objet IntersectionObserver,
la fonction callback est appelée. Le callback reçoit une liste d'objets IntersectionObserverEntry ainsi que l'observateur :

*/

const app = {
    //constante qui écoute la cible et écrit les options pour l'observateur
    aImg: document.querySelectorAll('.slide-in'),
    options: {
        root: null,
        rootMargin: '0px',
        threshold: 1
    },
    iLoadedImg: 0,
    //fonction qui crée le tableau d'img et écoute le chargement de l'événement img
    setUp() {
        document.body.classList.add('js-enabled');
        this.iTotalNumberOfImg = this.aImg.length;
        for (const eImg of this.aImg) {
            eImg.addEventListener('load', () => {
                this.checkLoadedImg();
            })
        }
    },

    // fonction qui incrémente iloadimg
    checkLoadedImg() {
        this.iLoadedImg++;
        if (this.iLoadedImg === this.iTotalNumberOfImg) {
            this.obServeImg();
        }
    },
    //fonction qui crée l'intersection avec animateimg en paramètre et boucle sur le tableau img
    obServeImg() {
        const observer = new IntersectionObserver(this.animateImg);
        for (const eImg of this.aImg) {
            observer.observe(eImg);
        }
    },
    //fonction qui boucle sur tableau pour tester l'intersection
    animateImg(entries, observer) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        }
    }

}
app.setUp();

/*solution
*
const app = {
  aImg: document.querySelectorAll('.slide-in'),
  options: {
    root: null,
    rootMargin: '0px',
    threshold: 1
  },
  iLoadedImg: 0,
  setUp() {
    document.body.classList.add('js-enabled');
    this.iTotalNumberOfImg = this.aImg.length;
    for (const eImg of this.aImg) {
      eImg.addEventListener('load', () => {
        this.checkLoadedImg();
      })
    }
  },
  checkLoadedImg() {
    this.iLoadedImg++;
    if (this.iLoadedImg === this.iTotalNumberOfImg) {
      this.obServeImg();
    }
  },
  obServeImg() {
    const observer = new IntersectionObserver(this.animateImg);
    for (const eImg of this.aImg) {
      observer.observe(eImg);
    }
  },
  animateImg(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    }
  }

}
app.setUp();*/
