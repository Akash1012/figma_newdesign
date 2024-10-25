import { useState } from "react";

import comment from "../../assets/images/comment_frame.png";
import star from "../../assets/images/star_frame.png";
import person from "../../assets/images/person.png";
import left from "../../assets/images/arrow-left.png";
import right from "../../assets/images/arrow-right.png";

import "./style.css";

let commentDetails = [
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 0",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 1",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 2",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 3",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 4",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 5",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 6",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 7",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 8",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 9",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 10",
  "Solo is a powerful app that can connect a lot of services I’m using. It is so flexible ! 11",
];

const TestimonialGallery = () => {
  const [data] = useState(commentDetails);
  const [slideImage, setSlideImage] = useState({
    previous: 0,
    main: 1,
    next: 2,
  });

  const previousCard = (value) => {
    return (
      <div className="card opacity">
        <img src={comment} alt="Testimonial_1" width="270" />
        <div className="testimonial-text">
          <p>{value}</p>
          <img src={star} alt="Testimonial_2" />
        </div>
      </div>
    );
  };

  const mainCard = (value) => {
    return (
      <div className="card">
        <img src={comment} alt="Testimonial_2" />
        <div className="testimonial-text">
          <p>{value}</p>
          <img src={star} alt="Testimonial_2" />
        </div>
        <div className="user">
          <img src={person} alt="User Image" width={64} height={64} />
          <div className="user_details">
            <p className="user_name">Jaida Barton</p>
            <p className="user_last_active">2 days ago</p>
          </div>
        </div>
      </div>
    );
  };

  const moveImageRight = () => {
    setSlideImage({
      ...slideImage,
      previous: slideImage.main,
      main: (slideImage.main + 1) % data.length,
      next: (slideImage.main + 2) % data.length,
    });
  };

  const moveImageLeft = () => {
    setSlideImage({
      previous: slideImage.main,
      main: (slideImage.main + data.length - 1) % data.length,
      next: (slideImage.main + data.length - 2) % data.length,
    });
  };

  return (
    <div className="testimonial-container">
      <h1>TestimonialGallery</h1>
      <p className="tag_line">What people are</p>
      <p className="tag_line">saying</p>

      <div className="testimonial-list">
        {data.length === 1
          ? mainCard(data[slideImage.previous])
          : previousCard(data[slideImage.previous])}

        {data[slideImage.main] && mainCard(data[slideImage.main])}
        {data[slideImage.main] && previousCard(data[slideImage.next])}
      </div>

      <div className="arrow">
        <img src={left} onClick={moveImageLeft} />
        <img src={right} onClick={moveImageRight} />
      </div>
    </div>
  );
};

export default TestimonialGallery;
