import { Box, Typography } from '@mui/material';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HeroImg } from '../../assets/img';
import Button from '../../shared/Button';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', marginBottom: '2rem' }}
          >
            <Box sx={{ flexGrow: 1, marginBlock: 'auto' }}>
              <Typography
                variant="h1"
                sx={{ color: '#002084', marginBottom: '2rem' }}
              >
                Helping Parents{' '}
                <span style={{ color: '#F3F34A' }}>Raise Achievers</span> By{' '}
                <span style={{ color: '#F3F34A' }}>
                  Developing Good Study Habits
                </span>{' '}
                Through{' '}
                <span style={{ color: '#F3F34A' }}>
                  Achiever For Life Method
                </span>
              </Typography>
              <Button text="book now" height="4rem" width="25%" />
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
              <Box component="img" src={HeroImg} width="100%" />
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', marginBottom: '2rem' }}
          >
            <Box sx={{ flexGrow: 1, marginBlock: 'auto' }}>
              <Typography
                variant="h1"
                sx={{ color: '#002084', marginBottom: '2rem' }}
              >
                Helping Parents{' '}
                <span style={{ color: '#F3F34A' }}>Raise Achievers</span> By{' '}
                <span style={{ color: '#F3F34A' }}>
                  Developing Good Study Habits
                </span>{' '}
                Through{' '}
                <span style={{ color: '#F3F34A' }}>
                  Achiever For Life Method
                </span>
              </Typography>
              <Button text="book now" height="4rem" width="25%" />
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
              <Box component="img" src={HeroImg} width="100%" />
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', marginBottom: '2rem' }}
          >
            <Box sx={{ flexGrow: 1, marginBlock: 'auto' }}>
              <Typography
                variant="h1"
                sx={{ color: '#002084', marginBottom: '2rem' }}
              >
                Helping Parents{' '}
                <span style={{ color: '#F3F34A' }}>Raise Achievers</span> By{' '}
                <span style={{ color: '#F3F34A' }}>
                  Developing Good Study Habits
                </span>{' '}
                Through{' '}
                <span style={{ color: '#F3F34A' }}>
                  Achiever For Life Method
                </span>
              </Typography>
              <Button text="book now" height="4rem" width="25%" />
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
              <Box component="img" src={HeroImg} width="100%" />
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;
