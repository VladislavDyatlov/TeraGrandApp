import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Navbar} from '../Main/Navbar/Navbar'
import { Footer } from '../Main/Footer/Footer';
import './Galleria.scss'

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <div>
      <Navbar />
    <div className="gallery">
    <div>
    <ImageList
      className="image"
      sx={{
        marginTop: `1px`,
        marginBottom: `-0px`,
        width: `100%`,
        height: `100vh`,
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
    <div className="images">
    <ImageList
      className="image"
      sx={{
        marginTop: `1px`,
        marginBottom: `-0px`,
        width: `100%`,
        height: `100vh`,
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}
    >
      {itemDatas.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
    </div>
    </div>
    <Footer />
    </div>
  );
}

const itemData = [
  {
    img: 'https://phonoteka.org/uploads/posts/2021-05/1620076562_29-phonoteka_org-p-gruzoperevozki-fon-34.jpg',
    title: 'Грузоперевозки',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://dostavkamos.ru/wp-content/uploads/2021/04/fura03-1536x1152.jpg',
    title: 'Грузоперевозки',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://potatosystem.ru/wp-content/uploads/2021/08/5ea2e1ceebbcbace16b88db1ba59e859.jpg',
    title: 'Грузоперевозки',
    author: '@helloimnik',
  },
  {
    img: 'https://oteplicah.com/wp-content/uploads/2021/02/gruzoperevozki.jpg',
    title: 'Грузоперевозки',
    author: '@nolanissac',
  },
  {
    img: 'https://sportishka.com/uploads/posts/2022-11/1667438265_37-sportishka-com-p-gruzovaya-mashina-instagram-41.jpg',
    title: 'Грузоперевозки',
    author: '@hjrc33',
  },
  {
    img: 'https://pic.rutubelist.ru/video/6c/86/6c861be2aeac67a9e2094f544851cfb6.jpg',
    title: 'Грузоперевозки',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://phonoteka.org/uploads/posts/2021-05/1620076562_29-phonoteka_org-p-gruzoperevozki-fon-34.jpg',
    title: 'Грузоперевозки',
    author: '@tjdragotta',
  },
  {
    img: 'https://funart.pro/uploads/posts/2019-10/1571524733_gruzoviki-176.jpg',
    title: 'Грузоперевозки',
    author: '@katie_wasserman',
  },
  {
    img: 'https://s1.1zoom.ru/big7/702/Trucks_Blue_Motion_455479.jpg',
    title: 'Грузоперевозки',
    author: '@silverdalex',
  },
  {
    img: 'https://daleeliksa.files.wordpress.com/2015/05/transport.jpg',
    title: 'Грузоперевозки',
    author: '@shelleypauls',
  },
  {
    img: 'https://www.pervo.ru/uploads/posts/2021-05/1621313721_pervoru-4014.jpeg',
    title: 'Грузоперевозки',
    author: '@peterlaster',
  },
  {
    img: 'http://www.gdtm.net/MBimages/Truck.jpg',
    title: 'Грузоперевозки',
    author: '@southside_customs',
  },
];

const itemDatas = [
  {
    img: 'https://kartinkin.net/uploads/posts/2023-02/thumbs/1675776038_kartinkin-net-p-vidi-gruzovikh-avtomobilei-krasivo-19.jpg',
    title: 'Грузоперевозки',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://sportishka.com/uploads/posts/2022-11/1667498003_29-sportishka-com-p-malenkie-gruzovie-mashini-vkontakte-30.jpg',
    title: 'Грузоперевозки',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://potatosystem.ru/wp-content/uploads/2021/08/5ea2e1ceebbcbace16b88db1ba59e859.jpg',
    title: 'Грузоперевозки',
    author: '@helloimnik',
  },
  {
    img: 'https://oteplicah.com/wp-content/uploads/2021/02/gruzoperevozki.jpg',
    title: 'Грузоперевозки',
    author: '@nolanissac',
  },
  {
    img: 'https://krot.info/uploads/posts/2021-11/1636016234_12-krot-info-p-gruzovaya-mashina-kenvort-mashini-krasivo-13.jpg',
    title: 'Грузоперевозки',
    author: '@hjrc33',
  },
  {
    img: 'https://sportishka.com/uploads/posts/2022-11/1667438229_56-sportishka-com-p-gruzovaya-mashina-instagram-61.jpg',
    title: 'Грузоперевозки',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://phonoteka.org/uploads/posts/2021-05/1620076562_29-phonoteka_org-p-gruzoperevozki-fon-34.jpg',
    title: 'Грузоперевозки',
    author: '@tjdragotta',
  },
  {
    img: 'https://krot.info/uploads/posts/2021-11/1635877596_30-krot-info-p-gruzovie-mashini-furi-mashini-krasivo-foto-33.jpg',
    title: 'Грузоперевозки',
    author: '@katie_wasserman',
  },
  {
    img: 'https://s1.1zoom.ru/big7/702/Trucks_Blue_Motion_455479.jpg',
    title: 'Грузоперевозки',
    author: '@silverdalex',
  },
  {
    img: 'https://daleeliksa.files.wordpress.com/2015/05/transport.jpg',
    title: 'Грузоперевозки',
    author: '@shelleypauls',
  },
  {
    img: 'https://www.pervo.ru/uploads/posts/2021-05/1621313721_pervoru-4014.jpeg',
    title: 'Грузоперевозки',
    author: '@peterlaster',
  },
  {
    img: 'http://www.gdtm.net/MBimages/Truck.jpg',
    title: 'Грузоперевозки',
    author: '@southside_customs',
  },
];