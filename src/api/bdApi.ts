import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://todo-list-fb5eb-default-rtdb.firebaseio.com",
});
//https://console.firebase.google.com/u/0/project/todo-list-fb5eb/database/todo-list-fb5eb-default-rtdb/data/~2F?hl=es-419
export default todoApi;

// [
//   {
//     adult: false,
//     backdrop_path: "/pFalq14lacs2oO7Q6YKiNqz5uAC.jpg",
//     genre_ids: [10751, 35, 16, 12],
//     id: 11621,
//     original_language: "ja",
//     original_title: "紅の豚",
//     overview:
//       "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso, a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo and his longtime friend Madame Gina.",
//     popularity: 32.732,
//     poster_path: "/byKAndF6KQSDpGxp1mTr23jPbYp.jpg",
//     release_date: "1992-07-18",
//     title: "Porco Rosso",
//     video: false,
//     vote_average: 7.787,
//     vote_count: 2774,
//   },
//   {
//     adult: false,
//     backdrop_path: "/7Z7WVzJsSReG8B0CaPk0bvWD7tK.jpg",
//     genre_ids: [14, 16, 10751],
//     id: 51739,
//     original_language: "ja",
//     original_title: "借りぐらしのアリエッティ",
//     overview:
//       '14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items "borrowed" from the house\'s human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.',
//     popularity: 38.516,
//     poster_path: "/xLkyM2Vt3yqlttnql02uXt0lemy.jpg",
//     release_date: "2010-07-16",
//     title: "The Secret World of Arrietty",
//     video: false,
//     vote_average: 7.6,
//     vote_count: 2428,
//   },
//   {
//     adult: false,
//     backdrop_path: "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
//     genre_ids: [16, 10751, 14],
//     id: 129,
//     original_language: "ja",
//     original_title: "千と千尋の神隠し",
//     overview:
//       "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
//     popularity: 112.031,
//     poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
//     release_date: "2001-07-20",
//     title: "Spirited Away",
//     video: false,
//     vote_average: 8.539,
//     vote_count: 14143,
//   },
//   {
//     adult: false,
//     backdrop_path: "/mpNd0rTVrp6vHJ9Je7wSa3zC8JS.jpg",
//     genre_ids: [12, 14, 16],
//     id: 128,
//     original_language: "ja",
//     original_title: "もののけ姫",
//     overview:
//       "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
//     popularity: 53.217,
//     poster_path: "/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
//     release_date: "1997-07-12",
//     title: "Princess Mononoke",
//     video: false,
//     vote_average: 8.3,
//     vote_count: 6888,
//   },
//   {
//     adult: false,
//     backdrop_path: "/zlHeQg9OTYED2Gm4ZErdvElsUFg.jpg",
//     genre_ids: [16, 35],
//     id: 955666,
//     original_language: "ja",
//     original_title: "映画クレヨンしんちゃん もののけニンジャ珍風伝",
//     overview:
//       'One day, a woman named Chiyome Hesogakure with a child named Chinzō visits the Nohara family and claims that she is the real mother of Shinnosuke and takes him away to a Ninja Village. In the Ninja Village, the Hesogakure family has been protecting "the earth\'s navel" by blocking it with a pure gold stopper using the "Mononoke technique" that has been passed down from generation. If it comes off, the earth will wither, the rotation will stop, and the "tomorrow" of the world will be lost! It is up to Shinnosuke to reveal the mystery of his birth and protect the future of the earth and the "tomorrow" of his family.',
//     popularity: 12.842,
//     poster_path: "/mUaSjomGtcVFbOwUgI1xJa5Fgqu.jpg",
//     release_date: "2022-04-22",
//     title: "Crayon Shin-chan: Mononoke Ninja Chinpūden",
//     video: false,
//     vote_average: 7.7,
//     vote_count: 6,
//   },
// ];


// movie_11621{
// id: Valor;
// 11621;
// img: "/byKAndF6KQSDpGxp1mTr23jPbYp.jpg";
// name: "Porco Rosso";
// penguins: "10";
// stars: "8";
// title: "紅の豚";
// value: "7.787";
// }