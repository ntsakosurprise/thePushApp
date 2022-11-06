// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import * as RootNavigation from '../RootNavigation';
// import {Platform} from 'react-native';

// export const configurePushNotifications = () => {
//   console.log('CONFIGURE GOT A CALL');
//   try {
//     PushNotification.configure({
//       onRegister: function (info) {
//         registerDeviceInfo({token: info.token, os: info.os});
//       },

//       onNotification: function (notification) {
//         console.log('@@@@@@@ onNotification ', notification);
//         notification.finish(PushNotificationIOS.FetchResult.NoData);
//         let clicked = notification.userInteraction;
//         console.log('THE CLICKED STATE');
//         console.log(clicked);
//         if (clicked && notification.data) {
//           console.log('@@@@@@@ onNotification If Statement ', notification);
//           console.log('@@@@@@ Platform', Platform.OS);
//           console.log('THE NOTIFICATION IS WORKING');
//           //   let pushedItem =
//           //     Platform.OS == 'ios'
//           //       ? JSON.parse(notification.data.custom)
//           //       : JSON.parse(notification.data.custom);

//           //   console.log('@@@ pushed item', pushedItem);
//           //   console.log('@@@ bundle_id', pushedItem.bundle_id);

//           //   pushedItem.utm_content = notification.data['google.message_id'];
//           //   pushedItem.utm_campaign = notification.data.from;

//           RootNavigation.navigate('Home', {
//             itemId: clicked,
//             otherParam: {...notification.data},
//           });
//           console.log(
//             '!!! onNotification the pushed item',
//             JSON.stringify(clicked),
//           );
//         }
//       },
//       onRegistrationError: function (err) {
//         console.log('registration error');
//         console.error(err.message, err);
//       },
//       permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//       },
//       popInitialNotification: true,
//       requestPermissions: true,
//     });
//   } catch (e) {
//     console.log('!!! onNotification FAILED ', e);
//   }
// };

// registerDeviceInfo = (deviceInfo, token) => {
//   let body = {
//     DeviceToken: deviceInfo.token,
//     OperatingSystem: deviceInfo.os,
//   };
//   console.log('!!! body', body);

//   fetch('https://wwww.ricimr.com/registerDevice', {
//     method: 'POST',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json',
//       //   Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(body),
//   })
//     .then(res => {
//       console.log('THE Response;;;', res);
//       console.log('!!! ', res);
//       if (res.status === 201 || res.status === 200) {
//         console.log('(@@@@@@@ Device was registered', res);
//       } else {
//         console.log('THe failing status;;;');
//         console.log(JSON.stringify(res));
//       }
//     })
//     .catch(err => {
//       //   console.error('@@@@@@@ Err', JSON.stringify(err));
//     });
// };
