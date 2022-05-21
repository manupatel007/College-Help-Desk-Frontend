import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import { BsArrowLeftCircle } from "react-icons/bs";

function blogPost() {
  return (
    <>
      <section id="blogPageTop">
        <div className="container">
          <br />
          <div id="blogPostHeadDiv">
            <div>
              <Link to="/blog">
                <BsArrowLeftCircle size={25} />
              </Link>
            </div>

            <div id="blogPostHeading" className="row">
              <h2>Artificial Intelligence</h2>
            </div>

            <br />
            <div id="blogPostheadDiv2" className="row">
              <p>
                <strong>Contributed by : </strong>Sudhanshu Gupta
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="space"></div>

      <section id="blogPostBody" style={{ color: "lightblue" }}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga
            sint vel qui id, hic, omnis corporis deleniti facere adipisci
            debitis natus autem quia ex ut officia incidunt temporibus! Aperiam,
            non nihil eveniet doloribus rem aut recusandae porro sapiente quasi
            a quod assumenda. Pariatur maiores magnam quas quisquam nisi, atque
            eius odio quae, excepturi, ipsa magni optio quo cupiditate autem
            maxime officiis nemo illo. In rem a ex neque suscipit voluptatum,
            quisquam unde quam quo culpa quidem libero dolorem magnam non.
            Laudantium provident rerum eum officia possimus fugiat, obcaecati
            ipsa reiciendis sapiente, quod aperiam itaque mollitia veritatis
            exercitationem a error ipsum placeat reprehenderit perspiciatis
            recusandae earum vel? Facilis culpa aut, perspiciatis nemo
            asperiores sunt vero minus quidem est inventore tenetur temporibus
            fugit corrupti itaque impedit ratione ea suscipit harum, consectetur
            voluptatem, quis ullam sed! Magnam corporis ab deleniti assumenda
            ducimus. Ratione itaque incidunt tempore quasi nostrum laboriosam
            similique reiciendis minus tenetur rerum. Atque obcaecati sed aut
            illo modi dicta impedit vel nam maxime, commodi nulla delectus ab
            quisquam omnis reiciendis. Illum praesentium laudantium odio
            perspiciatis exercitationem libero, veniam sunt repellat obcaecati
            architecto cum debitis quisquam tenetur beatae expedita, sint quo at
            sed fugiat! Laboriosam dolores id similique sequi excepturi.
            Mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga
            sint vel qui id, hic, omnis corporis deleniti facere adipisci
            debitis natus autem quia ex ut officia incidunt temporibus! Aperiam,
            non nihil eveniet doloribus rem aut recusandae porro sapiente quasi
            a quod assumenda. Pariatur maiores magnam quas quisquam nisi, atque
            eius odio quae, excepturi, ipsa magni optio quo cupiditate autem
            maxime officiis nemo illo. In rem a ex neque suscipit voluptatum,
            quisquam unde quam quo culpa quidem libero dolorem magnam non.
            Laudantium provident rerum eum officia possimus fugiat, obcaecati
            ipsa reiciendis sapiente, quod aperiam itaque mollitia veritatis
            exercitationem a error ipsum placeat reprehenderit perspiciatis
            recusandae earum vel? Facilis culpa aut, perspiciatis nemo
            asperiores sunt vero minus quidem est inventore tenetur temporibus
            fugit corrupti itaque impedit ratione ea suscipit harum, consectetur
            voluptatem, quis ullam sed! Magnam corporis ab deleniti assumenda
            ducimus. Ratione itaque incidunt tempore quasi nostrum laboriosam
            similique reiciendis minus tenetur rerum. Atque obcaecati sed aut
            illo modi dicta impedit vel nam maxime, commodi nulla delectus ab
            quisquam omnis reiciendis. Illum praesentium laudantium odio
            perspiciatis exercitationem libero, veniam sunt repellat obcaecati
            architecto cum debitis quisquam tenetur beatae expedita, sint quo at
            sed fugiat! Laboriosam dolores id similique sequi excepturi. Mollit.
          </p>
        </div>
      </section>

      <section id="footer">
        <Footer rel="#blogPostPageTop" />
      </section>
    </>
  );
}

export default blogPost;
