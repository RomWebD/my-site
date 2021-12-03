import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
export default class Price extends Component {
  render() {
    return (
      <div>
        <style>{"body { background-color: #F6F4E8; }"}</style>

        <Container>
          <Tab.Container id="left-tab-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="light" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="text-link">
                      Стіни
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="text-link" eventKey="second">
                      Стелі
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="text-link" eventKey="third">
                      Сантехнічні роботи
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="text-link" eventKey="fourth">
                      Електромонтажні Роботи
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="text-link" eventKey="five">
                      Столярні Роботи
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <img
                      className="d-block w-100"
                      src="https://24tv.ua/resources/photos/news/1024x768_DIR/202101/1521015_14825946.jpg?202101132509"
                      width="900"
                      alt="Стіни"
                      height="450"
                    />
                    <p
                      className="text-center"
                      style={{
                        marginTop: "15px",
                        fontFamily: "Georgia, serif",
                        fontSize: "25px",
                      }}
                    >
                      Ціни на виконання робіт
                    </p>
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Тип Роботи</th>
                          <th scope="col">Од.Вимірювання</th>
                          <th scope="col">Ціна в грн.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td> Штукатурка стін по маяках</td>
                          <td>м2</td>
                          <td>110</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Штукатурка відкосів</td>
                          <td>м/погонний</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Шпаклювання під фарбування</td>
                          <td>м2</td>
                          <td>95</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Шпаклювання під фарбування</td>
                          <td>м2</td>
                          <td>95</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Фарбування</td>
                          <td>м2</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>Поклейка шпалер</td>
                          <td>м2</td>
                          <td>80</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>Нанесення декоративної штукатурки</td>
                          <td>м2</td>
                          <td>Від 300грн</td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td> Монтаж гіпсокартону на клей</td>
                          <td>м2</td>
                          <td>90</td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>Нанесення декоративної штукатурки</td>
                          <td>м2</td>
                          <td>Договірна</td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          <td>Монтаж гіпсокартону на профіль</td>
                          <td>м2</td>
                          <td>110</td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Влаштування перегородок з картону</td>
                          <td>м2</td>
                          <td>160</td>
                        </tr>
                        <tr>
                          <th scope="row">12</th>
                          <td> Монтаж арки з картону</td>
                          <td>1 штука</td>
                          <td>Від 600грн</td>
                        </tr>
                        <tr>
                          <th scope="row">13</th>
                          <td> Монтаж плитки розміром до 30*30 </td>
                          <td>м2</td>
                          <td>Від 220</td>
                        </tr>
                        <tr>
                          <th scope="row">14</th>
                          <td> Монтаж плитки розміром від 30*30 </td>
                          <td>м2</td>
                          <td>Від 250</td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>

                  <Tab.Pane eventKey="second">
                    <img
                      className="d-block w-100"
                      src="https://rbk-kronos.lviv.ua/wp-content/uploads/2019/12/shpaklyuvannya-g%D1%96psokartonu-2.jpg"
                      width="900"
                      height="450"
                      alt="Стелі"
                    />
                    <p
                      className="text-center"
                      style={{
                        marginTop: "15px",
                        fontFamily: "Georgia, serif",
                        fontSize: "25px",
                      }}
                    >
                      Ціни на виконання робіт
                    </p>
                    <table
                      className="table table-bordered table-dark"
                      style={{ marginTop: "15px" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Тип Роботи</th>
                          <th scope="col">Од.Вимірювання</th>
                          <th scope="col">Ціна в грн.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td> Шпаклювання під фарбування</td>
                          <td>м2</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Монтаж гіпсокартону на клей</td>
                          <td>м2</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Шпаклювання під фарбування</td>
                          <td>м2</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Монтаж гіпсокартону на профіль (один рівень.)</td>
                          <td>м2</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Монтаж гіпсокартону на профіль (два рівня)</td>
                          <td>м2</td>
                          <td>180</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td> Монтаж підвісної стилі типу «Armstrong»</td>
                          <td>м2</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>Монтаж багет та фарбування</td>
                          <td>м/пог</td>
                          <td>50</td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    <img
                      className="d-block w-100"
                      src="https://idealbud.com.ua/wp-content/uploads/2016/03/santehnichni-roboty-1.jpg"
                      width="900"
                      height="450"
                      alt="Сантехнічні роботи"
                    />
                    <p
                      className="text-center"
                      style={{
                        marginTop: "15px",
                        fontFamily: "Georgia, serif",
                        fontSize: "25px",
                      }}
                    >
                      Ціни на виконання робіт
                    </p>
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Тип Роботи</th>
                          <th scope="col">Од.Вимірювання</th>
                          <th scope="col">Ціна в грн.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td> Монтаж каналізації (точка) </td>
                          <td>шт.</td>
                          <td>150</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Монтаж водопроводу (точка)</td>
                          <td>шт.</td>
                          <td>120</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Встановлення душової кабіни </td>
                          <td>шт</td>
                          <td>800</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Встановлення унітаз</td>
                          <td>шт.</td>
                          <td>400</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Встановлення рушникосушки</td>
                          <td>шт</td>
                          <td>150</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td> Монтаж газового котла</td>
                          <td>шт</td>
                          <td>Від 1700</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>Монтаж котла на твердому паливі </td>
                          <td>шт.</td>
                          <td>2200</td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td>Монтаж «теплоточки (батарея)</td>
                          <td>шт.</td>
                          <td>270</td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>Монтаж «теплої підлоги»</td>
                          <td>м2.</td>
                          <td>100</td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>

                  <Tab.Pane eventKey="fourth">
                    <img
                      className="d-block w-100"
                      src="https://ireland.apollo.olxcdn.com/v1/files/gh1uj1kvca081-UA/image;s=644x461"
                      width="900"
                      height="450"
                      alt="Електромонтажні роботи"
                    />
                    <p
                      className="text-center"
                      style={{
                        marginTop: "15px",
                        fontFamily: "Georgia, serif",
                        fontSize: "25px",
                      }}
                    >
                      Ціни на виконання робіт
                    </p>
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Тип Роботи</th>
                          <th scope="col">Од.Вимірювання</th>
                          <th scope="col">Ціна в грн.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Штрабування бетонних поверхонь під кабель </td>
                          <td>м/пог</td>
                          <td>80</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Штрабування цегляних поверхонь під кабель</td>
                          <td>м/пог</td>
                          <td>70</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Штрабування цегляних поверхонь під кабель </td>
                          <td>п/пог</td>
                          <td>35</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Монтаж «електроточки»</td>
                          <td>шт.</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Монтаж електролічильника</td>
                          <td>шт</td>
                          <td>200</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td> Монтаж світильника</td>
                          <td>шт</td>
                          <td>Від 200</td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>

                  <Tab.Pane eventKey="five">
                    <img
                      className="d-block w-100"
                      src="https://mebelindesign.ru/wp-content/uploads/2017/09/Ustanovka-dverey-39.jpg"
                      width="900"
                      height="450"
                      alt="Столярні роботи"
                    />
                    <p
                      className="text-center"
                      style={{
                        marginTop: "15px",
                        fontFamily: "Georgia, serif",
                        fontSize: "25px",
                      }}
                    >
                      Ціни на виконання робіт
                    </p>
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Тип Роботи</th>
                          <th scope="col">Од.Вимірювання</th>
                          <th scope="col">Ціна в грн.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Встановлення дверей </td>
                          <td>Шт</td>
                          <td>300</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Монтаж завіс</td>
                          <td>шт.</td>
                          <td>35</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Монтаж замків </td>
                          <td>шт.</td>
                          <td>70</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>Встановлення обналічників</td>
                          <td>м/пог</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Монтаж деревяноївагонки</td>
                          <td>м2</td>
                          <td>150</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td> Монтаж пластикової вагонки</td>
                          <td>м2</td>
                          <td>170</td>
                        </tr>
                      </tbody>
                    </table>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
