// module.exports = {
//     load: {
//         before: ['responseTime', 'logger', 'cors', 'responses','gzip'],
//         order: [
//             "Define the middlewares' load order by putting their name in this array in the right order",
//         ],
//         after: ['parser', 'router'],
//     },
//     settings: {
//         cors: {
//             origin: ['*'],
//         },
//     },
// };

module.exports = {
    load: {
      before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
        "Define the middlewares' load order by putting their name in this array is the right order",
      ],
      after: ['parser', 'router'],
    },
    settings: {
      timer: {
        enabled: true,
      },
    },
  };