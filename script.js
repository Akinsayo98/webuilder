// disappearing header 

// const mainHeader = document.getElementById('mainHeader');
// const scrollHeader = document.getElementById('scrollHeader');

// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.scrollY;

//   if (currentScroll > 100) {
//     // Scrolling down
//     if (currentScroll > lastScrollY) {
//       mainHeader.style.transform = 'translateY(-100%)';
//       scrollHeader.classList.add('active');
//     } 
//     // Scrolling up
//     else {
//       if (currentScroll <= 150) {
//         mainHeader.style.transform = 'translateY(0)';
//         scrollHeader.classList.remove('active');
//       }
//     }
//   } else {
//     // Near top
//     mainHeader.style.transform = 'translateY(0)';
//     scrollHeader.classList.remove('active');
//   }

//   lastScrollY = currentScroll;
// });

// disappearing header 


// controls on the video section 
    const playIcon = document.getElementById("play-icon");
    const videoWrapper = document.getElementById("video-wrapper");
    const cancelButton = document.getElementById("cancel-button");

    playIcon.addEventListener("click", () => {
      playIcon.style.display = "none";
      videoWrapper.style.display = "inline-block";
    });

    cancelButton.addEventListener("click", () => {
      videoWrapper.style.display = "none";
      playIcon.style.display = "inline-block";
    });
// controls on the video section ends here 

// gallery codes 

// new 
const buttons = document.querySelectorAll('.packs button');
const allItems = Array.from(document.querySelectorAll('.img-cover'));
const galleries = document.querySelectorAll('.galleries');

// Define which images each category should show
const categories = {
  "Show All": ["img1", "img2", "img3", "img4", "img5", "img6"],
  "Interior": ["img1", "img3", "img5"],
  "Recent": ["img2", "img4", "img6"],
  "Big Building": ["img1", "img2", "img4"],
  "Park": ["img3", "img5", "img6"]
};

// Add animation to each img-cover
allItems.forEach(item => {
  item.style.transition = "transform 0.5s ease, opacity 0.5s ease";
});

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Highlight clicked button
    buttons.forEach(b => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });
    btn.style.color = "orangered";

    // Get selected category images
    const selected = categories[btn.textContent];
    const selectedItems = selected.map(id =>
      allItems.find(item => item.querySelector('.img2').id === id)
    );

    // Animate current items out
    galleries.forEach(gallery => {
      Array.from(gallery.children).forEach(child => {
        child.style.opacity = "0";
        child.style.transform = "scale(0.8)";
      });
    });

    // Wait for fade-out before injecting new ones
    setTimeout(() => {
      galleries.forEach(gallery => {
        gallery.innerHTML = "";
        selectedItems.forEach(item => {
          item.style.opacity = "1";
          item.style.transform = "scale(1)";
          gallery.appendChild(item);
        });
      });
    }, 200);
  });
});

// new 

//  const buttons = document.querySelectorAll('.packs button');
//   const allItems = Array.from(document.querySelectorAll('.img-cover'));
//   const galleries = document.querySelectorAll('.galleries');

//   // Define which images each category should show
//   const categories = {
//     "Show All": ["img1", "img2", "img3", "img4", "img5", "img6"],
//     "Interior": ["img1", "img3", "img5"],
//     "Recent": ["img2", "img4", "img6"],
//     "Big Building": ["img1", "img2", "img4"],
//     "Park": ["img3", "img5", "img6"]
//   };

//   // Add animation to each img-cover
//   allItems.forEach(item => {
//     item.style.transition = "transform 0.5s ease, opacity 0.5s ease";
//   });

//   buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//       // Highlight clicked button
//       buttons.forEach(b => {
//         b.style.backgroundColor = "";
//         b.style.color = "";
//       });
//       // btn.style.backgroundColor = "orange";
//       btn.style.color = "orangered";

//       // Get selected category images
//       const selected = categories[btn.textContent];
//       const selectedItems = selected.map(id =>
//         allItems.find(item => item.querySelector('.img2').id === id)
//       );

//       // Animate current items out
//       galleries.forEach(gallery => {
//         Array.from(gallery.children).forEach(child => {
//           child.style.opacity = "0";
//           child.style.transform = "scale(0.8)";
//         });
//       });

//       // Wait for fade-out before injecting new ones
//       setTimeout(() => {
//         if (btn.textContent === "Show All") {
//           galleries.forEach((gallery, i) => {
//             gallery.innerHTML = "";
//             const slice = selectedItems.slice(i * 3, i * 3 + 3);
//             slice.forEach(item => {
//               item.style.opacity = "1";
//               item.style.transform = "scale(1)";
//               gallery.appendChild(item);
//             });
//           });
//         } else {
//           galleries.forEach((gallery, i) => {
//             gallery.innerHTML = "";
//             const item = selectedItems.slice(i * 3, i * 3 + 3);
//             item.forEach(card => {
//               card.style.opacity = "1";
//               card.style.transform = "scale(1)";
//               gallery.appendChild(card);
//             });
//           });
//         }
//       }, 200);
//     });
//   });

  // const buttons = document.querySelectorAll('.packs button');
  // const allItems = Array.from(document.querySelectorAll('.galleries .img-cover'));

  // buttons.forEach((btn, index) => {
  //   btn.addEventListener('click', () => {
  //     const galleries = document.querySelectorAll('.galleries');

  //     if (btn.textContent === 'Show All') {
  //       // Reset to original order
  //       galleries.forEach((gallery, i) => {
  //         const start = i * 3;
  //         const slice = allItems.slice(start, start + 3);
  //         gallery.innerHTML = ''; // Clear
  //         slice.forEach(item => gallery.appendChild(item));
  //       });
  //     } else {
  //       // Reverse/shuffle items for animation
  //       const reversed = [...allItems].reverse();

  //       galleries.forEach((gallery, i) => {
  //         const start = i * 3;
  //         const slice = reversed.slice(start, start + 3);

  //         // Trigger animation by forcing reflow
  //         slice.forEach(item => {
  //           item.style.opacity = '0';
  //           item.style.transform = 'scale(0.8)';
  //         });

  //         setTimeout(() => {
  //           gallery.innerHTML = '';
  //           slice.forEach(item => {
  //             item.style.opacity = '1';
  //             item.style.transform = 'scale(1)';
  //             gallery.appendChild(item);
  //           });
  //         }, 200);
  //       });
  //     }
  //   });
  // });
// gallery codes 



// counting numbers 
document.addEventListener("DOMContentLoaded", () => {
  // Select all <p> inside .numb-one
  const counters = document.querySelectorAll(".numb-one p");

  // Function to animate counting
  function animateCount(el, target) {
    let start = 0;
    let speed = 40; // smaller = faster
    const update = () => {
      start++;
      el.firstChild.textContent = start; // change only the number, keep <span>
      if (start < target) {
        setTimeout(update, speed);
      }
    };
    update();
  }

  // IntersectionObserver: start counting when visible
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const p = entry.target;
          let fullText = p.textContent.trim(); // e.g. "76Tools"
          let number = parseInt(fullText, 10); // get just the number
          animateCount(p, number);
          observer.unobserve(p); // run only once
        }
      });
    },
    { threshold: 0.5 } // trigger when 50% visible
  );

  counters.forEach(p => observer.observe(p));
});


// counting numbers