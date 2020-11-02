import css from "styled-jsx/css";

export default css.HomeStyle`
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");
/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9e4f9e;
  height: 100px;
  padding: 0 10%;
  min-width:1124px;
}
.header__img__container img {
  height: 50px;
}
/* Hero */
.hero {
  background-color: #9e4f9e;
  display: flex;
  justify-content: space-between;
  padding: 1rem 10%;
  position: relative;
  height: 600px;
    min-width:1124px;
}
.hero__info {
  position: absolute;
  top: 40%;
  left: 50%;
  right: 10%;
  max-width: 600px;
}
.hero__info h1 {
  color: white;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 0.2px;
}
.hero__img {
  position: absolute;
  top: 2em;
}
.hero__info__description {
  color: white;
  font-weight: 300;
  line-height: 2em;
}
.hero__info__description a {
  text-decoration: none;
  color: #ffc24b;
}
.hero__info__btn {
  color: #9e4f9e;
  border: 0.1em solid #ffc24b;
  background-color: #ffc24b;
  border-radius: 30px;
  padding: 0.5em 1.5em;
  font-weight: 400;
  text-decoration: none;
  font-size: 1.5em;
  position: absolute;
  left: 30%;
  margin-top: 1em;
}
.hero__info__btn:hover {
  color: #ffc24b;
  background-color: transparent;
  border: 0.1em solid #ffc24b;
}
/* Lara Specs */
.lara__specs {
  display: flex;
  padding: 0 10%;
    min-width:1124px;
}
.description__section {
  display: flex;
  flex-direction: column;
  width: 40vw;
  max-width: 500px;
}
.lara__specs__description {
  position: absolute;
  margin-top: 7em;
}
.description__title {
  color: #1d293f;
  font-size: 3em;
  font-weight: 400;
}
.description__p {
  color: #525252;
  font-size: 1em;
  margin-top: 1em;
  width: 25vw;
}
.lara__specs__description__cards {
  margin-top: 5em;
  display: flex;
  justify-content: space-between;
  width: 30vw;
  max-width: 600px;
}
.lara__specs__img {
  position: absolute;
  left: 53%;
  margin-top: 1%;
}
.lara__specs__img img {
  width: 500px;
  height: 650px;
}
/* Top Artist */
.artist {
  margin-top: 45rem;
  padding: 0 10%;
   min-width:1124px;
}
.artist__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.artist__info h1 {
  color: #1d293f;
  font-size: 3em;
  font-weight: 400;
}
.artist__info p {
  color: #525252;
  font-size: 1em;
  margin-top: 1em;
  width: 25vw;
  text-align: center;
}
.grid__container__artist {
  padding: 0 10%;
  margin-top: 5%;
  display: grid;
  grid-template: 1fr 1fr/ 1fr 1fr 1fr;
  gap: 2em;
}
/* Footer */
footer {
  padding: 0 10%;
  display: flex;
  margin-top: 5em;
  justify-content: space-between;
  background-color: #f9f9f9;
}
footer img {
  height: 50px;
  margin: 21px 0px 108px 0px;
}
footer ul {
  width: 500px;
  display: flex;
  justify-content: space-evenly;
}
footer li {
  font-weight: 300;
  margin-top: 10%;
  list-style: none;
  color: #989898;
  letter-spacing: 2px;
}

@media screen and (max-width: 1024px) {
.hero__info {
  top: 40%;
  left: 55%;
  width:500px;
}
.lara__specs__img{
  left:60%;
}
.grid__container__artist{
  padding:0;
}

}
@media screen and (max-width: 768px) {

.lara__specs__img{
  left:75%;
}


}

@media screen and (max-width: 320px) {

  .hero__info {
  left: 50%;
  width:500px;
}
.description__title {
}
.lara__specs__img{
  left:170%;
  margin-top:2%;
}
.description__section{
width:500px;
}
.description__p{
  
  width:500px;
}
.artist{
}
.artist__info p {
  width:350px;
}
}

`;
