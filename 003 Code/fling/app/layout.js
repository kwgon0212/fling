import './reset.css';
import './globals.css';
import './login.css';
import './slider.css';
import localfont from 'next/font/local';
import { NextUIProviders } from '../lib/NextUIProviders';
import StyledComponentsRegistry from '@/lib/StyledComponentRegistry';

// const hanbit = localfont({
//   src: '../public/fonts/KCC-Hanbit.woff2',
//   weight: 'normal',
// });

// const WantedSans = localfont({
//   src: [
//     {
//       path: '../public/fonts/WantedSansStd-Black.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/WantedSansStd-Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/WantedSansStd-SemiBold.ttf',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/WantedSansStd-Medium.ttf',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/WantedSansStd-Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//   ],
// });

const HancomMalang = localfont({
  src: [
    {
      path: '../public/fonts/HancomMalangMalang-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/HancomMalangMalang-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: '플링',
  description: '터치 단 한 번으로 랜덤 소개팅',
  icons: {
    icon: 'icons/pwa-icons/icon-512x512.png',
  },
  keywords: ['대학', '소개팅', '랜덤 소개팅', '랜덤'],
  appleWebApp: {
    title: '플링',
    statusBarStyle: 'white',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  // openGraph: {
  //   title: '플링',
  //   description: '터치 단 한 번으로 랜덤 소개팅',
  //   // url: 'https://nextjs.org',
  //   siteName: '플링',
  //   images: [
  //     {
  //       // url: 'https://nextjs.org/og.png', // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       // url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
  //       width: 1800,
  //       height: 1600,
  //       alt: 'My custom alt',
  //     },
  //   ],
  //   locale: 'ko_KR',
  //   type: 'website',
  // },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body className={HancomMalang.className}>
        <div className='w-screen h-screen flex bg-black/10'>
          {/* max-h-[940px] */}
          <div className='main w-full max-w-[440px] min-w-[330px] min-h-[568px] text-center m-auto box-border flex flex-col h-screen overflow-x-hidden bg-white relative'>
            <NextUIProviders>
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </NextUIProviders>
          </div>
        </div>
      </body>
    </html>
  );
}
