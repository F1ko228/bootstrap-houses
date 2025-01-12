// (function () {
//     findCity();
//     async function findCity() {
//         try {
//             const getIp = await fetch('https://api.ipify.org?format=json');
//             const data = await getIp.json();
//             const city = await geoipResponse.city.names.en || 'your city';
//             document.querySelectorAll('city').innerHTML = cityName;
//         } catch(error) {
//             alert(error);
//         }
//     }
// })();