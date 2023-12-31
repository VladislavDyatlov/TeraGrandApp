import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.scss'

const CardContents = [
    {
        id: 1,
        img: "https://images.satom.ru/i3/firms/28/5479/5479246/furgon-dlya-perevozki-hleba-na-shassi-gazel-biznes-128-144-160-lotkov-evro-5_165a56be6e37820_800x600.jpg",
        title: "Газель 3302",
        text: "К заводскому обозначению ГАЗ-3302 принадлежат ГАЗели бортовые и шасси с кабиной 1,5-тонного класса грузоподъёмности. Грузовые цельнометаллические фургоны обозначаются как ГАЗ-2705.",
    },
    {
        id: 1,
        img: "https://club4x4.club/upload/iblock/bfc/bfc24595572e91e6eba422a6ab8fec25.jpg",
        title: "Газель 57027",
        text: "Газ 27057 фургон металлический Газель Бизнес металлический фургон ГАЗ 27057 7 мест 7 мест Длина фургона 1,3 м Объем грузового фургона 6 м³. С удлинненной коробкой передач и подушками безопасности",
    },
    {
        id: 1,
        img: "https://images.satom.ru/i3/firms/28/5479/5479246/bortovoy-gaz-2310-sobol-biznes-bort-2-3m-ili-3m-gruzopodemnost-do-1-1t_65505e74240d625_800x600.jpg",
        title: "ГАЗель NEXT",
        text: "NEXT c эргономичной приборной панелью, подушками безопасности, элетростеклоподъёмниками и целым рядом новшеств, а также удлинённой колёсной базой, коробкой передач.",
    },
    {
        id: 1,
        img: "https://images.satom.ru/i3/firms/28/5479/5479246/furgon-dlya-perevozki-hleba-na-shassi-gazel-biznes-128-144-160-lotkov-evro-5_165a56be6e37820_800x600.jpg",
        title: "Газель 3302",
        text: "К заводскому обозначению ГАЗ-3302 принадлежат ГАЗели бортовые и шасси с кабиной 1,5-тонного класса грузоподъёмности. Грузовые цельнометаллические фургоны обозначаются как ГАЗ-2705.",
    },
]

export function Cards(){
    return (
      <div className="container" data-aos="flip-up">
        <h1 className="container__title">Наши автомобили</h1>
        <div className="container__card">
          {CardContents.map((card) => (
            <div className="container__cards">
              <Card sx={{ maxWidth: 345 }}  data-aos="zoom-in-up">
                <CardMedia
                  component="img"
                  height="140"
                  image={card.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </CardContent>
                <div className="container__hr" />
                <CardActions>
                  <img
                    src="https://phonoteka.org/uploads/posts/2021-05/1621757126_5-phonoteka_org-p-fon-ikonki-instagrama-5.png"
                    width="30"
                    height="30"
                    className="container__img"
                  />
                  <img
                    src="https://galinaseregina.ru/wp-content/uploads/tg-1024x1024.png"
                    width="40"
                    height="40"
                    className="container__img"
                  />
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
}