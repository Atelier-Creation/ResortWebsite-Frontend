import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Rohan Patel",
      role: "CEO, ABCD Private Limited",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ultricies feugiat arcu arcu tortor tortor in commodo leo. Nibh vel et viverra integer urna tincidunt at ipsum, semper. Convallis vel viverra diam elementum eget viverra morbi id integer. Orci mattis mauris nisi, fermentum. Elementum diam scelerisque adipiscing tincidunt sapien. Sed commodo mauris risus ultrices. Consectetur sagittis quam imperdiet ornare egestas ac mattis.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg", 
      name: "Rohan",
      role: "CEO, ABCD Private Limited",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ultricies feugiat arcu arcu tortor tortor in commodo leo. Nibh vel et viverra integer urna tincidunt at ipsum, semper. Convallis vel viverra diam elementum eget viverra morbi id integer. Orci mattis mauris nisi, fermentum. Elementum diam scelerisque adipiscing tincidunt sapien. Sed commodo mauris risus ultrices. Consectetur sagittis quam imperdiet ornare egestas ac mattis.",
    },
];

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='testimonial-container'>
            <div className='testimonial-header'>
                <h1>Client Testimonials</h1>
            </div>
            <div className='testimonial-content'>
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className='testimonial-photo'/>
                <div className='testimonial-text'>
                    <p className='testimonial-quote'>{testimonials[currentIndex].quote}</p>
                    <p className='testimonial-name'>{testimonials[currentIndex].name}</p>
                    <p className='testimonial-role'>{testimonials[currentIndex].role}</p>
                </div>
            </div>
            <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? "active" : ""}`} 
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonial;