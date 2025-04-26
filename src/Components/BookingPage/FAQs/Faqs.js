import React, { useState } from 'react';
import './Faq.css';
import { FiChevronDown, FiChevronUp, FiInfo } from 'react-icons/fi';

const initialFaqs = [
  {
    question: "What time is check-in and check-out?",
    answer: "Check-in is from 2:00 PM, and check-out is until 11:00 AM.",
  },
  {
    question: "Do you allow pets in the resort?",
    answer: "Yes, we are pet-friendly! Please inform us in advance.",
  },
  {
    question: "Is breakfast included in the stay?",
    answer: "Yes, a complimentary breakfast is included for all guests.",
  },
];

const moreFaqs = [
  {
    question: "Do you have free Wi-Fi?",
    answer: "Yes, high-speed Wi-Fi is available throughout the resort.",
  },
  {
    question: "Is there a swimming pool?",
    answer: "Absolutely! Our resort features an infinity pool overlooking nature.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [...initialFaqs, ...(showMore ? moreFaqs : [])];

  return (
    <div className="faq-wrapper">
      <div className="faq-box">
        <h2 className="faq-heading">FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <div className="faq-icon-text">
                <FiInfo className="info-icon" />
                <span>{faq.question}</span>
              </div>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            <hr />
          </div>
        ))}
        {!showMore && (
          <button className="view-more-btn" onClick={() => setShowMore(true)}>
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Faqs;
