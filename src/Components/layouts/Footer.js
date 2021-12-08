import React from "react";
import { Nav } from "react-bootstrap";
import photo from "../../assets/photo.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <h2 className="d-flex justify-content-center"> Про компанію</h2>
        <p className="about">
          В наш час будівництво, у тому числі житлове, набуло небувалого розмаху
          і розвитку. Поява нових видів матеріалів та методів їх застосування у
          межах базових правил та умов надає можливість справжнім фахівцям
          виконувати будівельні роботи відповідно до вимог сьогодення.
        </p>
        <p className="about">
          Ми – сучасна компанія, яка успішно працює на ринку будівельних послуг
          з 2002 року. Ми професійно виконуємо ремонтно-будівельні роботи із
          застосуванням високоякісних матеріалів, використовуючи власне
          будівельне обладнання.
        </p>
        <div className="icons">
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="https://www.facebook.com/profile.php?id=100009304363626"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="https://twitter.com/Rhufchak"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </Nav.Link>
          <Nav.Link style={{ margin: "0px 2px ", padding: "0px" }} href="#">
            <i className="fa fa-linkedin"></i>
          </Nav.Link>
          <Nav.Link style={{ margin: "0px 2px ", padding: "0px" }} href="#">
            <i className="fa fa-google-plus"></i>
          </Nav.Link>
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="https://www.instagram.com/roman_0__/"
            target="_blank"
          >
            <i className="fa fa-instagram"></i>
          </Nav.Link>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker" />
          <p>
            <Nav.Link
              style={{ color: "#fff" }}
              href="https://goo.gl/maps/BAqfG5CsLB9koHhu5"
              target="_blank"
            >
              м. Івано-Франківськ, Україна
            </Nav.Link>
          </p>
        </div>

        <div className="phone">
          <i className="fa fa-phone" />
          <p>
            <Nav.Link style={{ color: "#fff" }} href="tel:+74951234567">
              +7 (495) 123-45-67
            </Nav.Link>
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Nav.Link style={{ color: "#fff" }} href="mailto:vlad@webref.ru">
              hufchak.company@mail.com
            </Nav.Link>{" "}
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <img height="170px" width="350px" src={photo} alt="Logo" />
        <p className="menu">
          <Nav.Link style={{ margin: "0px 2px ", padding: "0px" }} href="/">
            {" "}
            Домашня сторінка
          </Nav.Link>{" "}
          |{" "}
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="/aboutus"
          >
            {" "}
            Про нас
          </Nav.Link>{" "}
          |{" "}
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="/contacts"
          >
            {" "}
            Контакти
          </Nav.Link>{" "}
          |{" "}
          <Nav.Link
            style={{ margin: "0px 2px ", padding: "0px" }}
            href="/price"
          >
            {" "}
            Ціни
          </Nav.Link>{" "}
          |
        </p>
        <p
          className="d-flex justify"
          style={{ color: "#fff", marginTop: "25px" }}
        >
          &copy;{new Date().getFullYear()} Сайт будівельних робіт - Всі права
          захищені
        </p>{" "}
      </div>
    </footer>
  );
}
export default Footer;

