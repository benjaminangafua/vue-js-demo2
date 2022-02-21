// export const devServer = {
//     proxy: {
//         '^api': {
//             // target: 'http://localhost:5000',
//             changeOrigin: true,
//             ws: true,
//             logLevel: 'debug',
//             pathRewrite: { '^api': '/' },
//         },
//         router: {
//             // when request.headers.host == 'dev.localhost:3000',
//             // override target 'http://www.example.org' to 'http://localhost:8000'
//             'dev.localhost:5000': 'http://localhost:8000',
//         },
//     }
// };