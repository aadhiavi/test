// import React, { useState, useCallback, useEffect } from 'react';
// import './ImageSlider.css';

// const VerticalSlider = ({ vertical }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isScrolling, setIsScrolling] = useState(false);
//     const [isAtLastImage, setIsAtLastImage] = useState(false);

//     const handleScroll = useCallback((e) => {
//         if (isScrolling) return;
//         setIsScrolling(true);

//         if (e.deltaY > 0) {
//             setCurrentIndex((prev) => Math.min(prev + 1, vertical.length - 1));
//         } else {
//             setCurrentIndex((prev) => Math.max(prev - 1, 0));
//         }

//         setTimeout(() => {
//             setIsScrolling(false);
//         }, 200);
//     }, [isScrolling, vertical.length]);

//     useEffect(() => {
//         setIsAtLastImage(currentIndex === vertical.length - 1);
//     }, [currentIndex, vertical.length]);

//     useEffect(() => {
//         const handleWheelEvent = (e) => {
//             // Check if we're at the last image
//             if (isAtLastImage) {
//                 const lastSlide = document.querySelector('.vertical-slides:last-child');
//                 const lastSlideHeight = lastSlide ? lastSlide.offsetHeight : 0;
//                 const viewportHeight = window.innerHeight;

//                 // If the last image is not filling the entire screen, allow scroll up
//                 if (lastSlideHeight < viewportHeight && e.deltaY > 0) {
//                     e.preventDefault();
//                 } else if (lastSlideHeight >= viewportHeight && e.deltaY > 0) {
//                     e.preventDefault();
//                 }
//             } else {
//                 e.preventDefault();
//             }
//         };

//         if (!isAtLastImage) {
//             window.addEventListener('wheel', handleWheelEvent, { passive: false });
//         } else {
//             window.removeEventListener('wheel', handleWheelEvent);
//         }

//         return () => {
//             window.removeEventListener('wheel', handleWheelEvent);
//         };
//     }, [isAtLastImage]);

//     return (
//         <div className="fullpage-container" onWheel={handleScroll}>
//             <div
//                 className="vertical-slider"
//                 style={{
//                     transform: `translateY(-${currentIndex * 100}vh)`,
//                     transition: 'transform 0.2s ease-in-out',
//                 }}
//             >
//                 {vertical.map((item, index) => (
//                     <div key={index} className="vertical-slides">
//                         <div className="vertical-slide">{item}</div>
//                     </div>
//                 ))}
//             </div>
//             <div className="vertical-dots">
//                 {vertical.map((_, index) => (
//                     <div
//                         key={index}
//                         className={`vertical-dot ${index === currentIndex ? 'active' : ''}`}
//                         onClick={() => setCurrentIndex(index)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default VerticalSlider;

// import React, { useState, useEffect } from 'react';
// import Slide1 from './Slides/Slide1';
// import Slide2 from './Slides/Slide2';
// import Slide3 from './Slides/Slide3';
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// const Header = () => {

//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slides = [Slide1, Slide2, Slide3];
//     const totalSlides = slides.length;

//     const nextSlide = () => {
//         setCurrentSlide((currentSlide + 1) % totalSlides);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
//     };

//     useEffect(() => {
//         const slideInterval = setInterval(nextSlide, 5000);
//         return () => clearInterval(slideInterval);
//     }, [currentSlide]);



//     return (
//         <div className="auto-slider">
//             <div className="slide-container">
//                 {slides.map((Slide, index) => (
//                     <div key={index} className={index === currentSlide ? 'active' : 'inactive'}>
//                         <Slide />
//                     </div>
//                 ))}
//             </div>
//             <div className="btn">
//                 <button onClick={prevSlide}><FiChevronLeft /></button>
//                 <button onClick={nextSlide}><FiChevronRight /></button>
//             </div>
//         </div>
//     )
// }
// export default Header;

// .auto-slider {
//     position: relative;
//     width: 100%;
//     margin: 0 auto;
//     overflow: hidden;
//     margin-top: 0px;
//   }
  
//   .slide-container {
//     display: flex;
//     transition: transform 0.5s ease;
//     position: relative;
//   }
  
//   .slide {
//     flex: 0 0 100%;
//     position: relative;
//   }
  
//   .active {
//     width: 100%;
//     opacity: 1;
//     position: relative;
//   }
  
//   .inactive {
//     display: none;
//   }
  
//   .btn {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   button {
//     padding: 10px 20px;
//     font-size: 16px;
//     background-color: rgb(255, 255, 255);
//     color: #252525;
//     border: none;
//     cursor: pointer;
//     z-index: 1;
//   }
  
//   .prev-button {
//     left: 10px;
//   }
  
//   .next-button {
//     right: 10px;
//   }

// import React, { useState } from "react";

// export const BasicSlider = ({images}) => {


//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div>
//       <img style={{height:'500px'}} src={images[currentIndex]} alt="Slider" />
//       <div>
//         <button onClick={prevImage}>Previous</button>
//         <button onClick={nextImage}>Next</button>
//       </div>
//     </div>
//   );
// };


// import React, { useState, useEffect } from "react";

// export const AutoSlider = ({images}) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return <img style={{height:'500px'}} src={images[currentIndex]} alt="Auto Slider" />;
// };


// import React, { useState } from "react";

// const ThumbnailSlider = ({images}) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div>
//       <img src={images[currentIndex]} alt="Main" style={{ width: "100%", marginBottom: "10px" }} />
//       <div style={{ display: "flex" }}>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index + 1}`}
//             style={{
//               width: "50px",
//               height: "50px",
//               margin: "0 5px",
//               cursor: "pointer",
//               border: currentIndex === index ? "2px solid blue" : "none",
//             }}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThumbnailSlider;

// import React, { useState } from "react";

// const FullScreenSlider = ({images}) => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index + 1}`}
//             style={{ width: "1000px", cursor: "pointer", marginRight: "10px" }}
//             onClick={() => openModal(index)}
//           />
//         ))}
//       </div>

//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div>
//             <button onClick={closeModal} style={{ color: "white", fontSize: "30px" }}>
//               &times;
//             </button>
//             <img
//               src={images[currentIndex]}
//               alt="Full screen"
//               style={{ width: "80%", maxWidth: "1200px", margin: "20px" }}
//             />
//             <div>
//               <button onClick={prevImage} style={{ color: "white", fontSize: "20px" }}>
//                 Previous
//               </button>
//               <button onClick={nextImage} style={{ color: "white", fontSize: "20px" }}>
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FullScreenSlider;


import React, { useState, useEffect } from "react";

const AutoSlider = ({ images, transitionDuration = 1000, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);  // To handle hover state

  useEffect(() => {
    // Auto slider functionality
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length, isHovered, autoPlayInterval]);  // Added dependencies for autoPlayInterval and images.length

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        width: "600px",
        height: "400px",  // Set a height for better layout control
        overflow: "hidden",
        margin: "auto",
      }}
      onMouseEnter={() => setIsHovered(true)} // Pause autoplay on hover
      onMouseLeave={() => setIsHovered(false)} // Resume autoplay when hover ends
    >
      <div
        style={{
          display: "flex",
          transition: `transform ${transitionDuration}ms ease-in-out`,  // Smooth transition for image change
          transform: `translateX(-${currentIndex * 100}%)`, // Slide effect
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              objectFit: "cover",
              height: "100%",  // Ensure the image covers the container height
            }}
          />
        ))}
      </div>

      <button
        onClick={goToPreviousImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          zIndex: 10,  // Ensure button stays on top of the image
        }}
      >
        Prev
      </button>
      <button
        onClick={goToNextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          padding: "10px",
          zIndex: 10,  // Ensure button stays on top of the image
        }}
      >
        Next
      </button>

      {/* Slide Indicators */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "10px",
              height: "10px",
              margin: "0 5px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;

