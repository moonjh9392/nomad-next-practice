/** @type {import('next').NextConfig} */

const API_KEY = 'bb0b830f3457801698cbd268e85c8b9f';

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path', //변경될 path로 보낼 url
        destination: '/new-blog/:path', //source로 오면 destination으로 보냄
        permanent: false, //브라우저나 검색엔진이 이 정보를 기억하는지 여부
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies', //유저가 보는 url
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, //실제로 보내는 url
      },
      {
        source: '/api/movies/:id', //유저가 보는 url
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`, //실제로 보내는 url
      },
    ];
  },
};

module.exports = nextConfig;
