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


// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import * as RootNavigation from '../RootNavigation';
// import {Platform} from 'react-native';


import notifee from '@notifee/react-native';

export const configurePushNotifications = () => {
  console.log('CONFIGURE GOT A CALL');
  if(!checkIfNotificationsEnabled()) requestUNotifPermission()
  listenToEvents()
  // try {
  //   PushNotification.configure({
  //     onRegister: function (info) {
  //       registerDeviceInfo({token: info.token, os: info.os});
  //     },

  //     onNotification: function (notification) {
  //       console.log('@@@@@@@ onNotification ', notification);
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //       let clicked = notification.userInteraction;
  //       console.log('THE CLICKED STATE');
  //       console.log(clicked);
  //       if (clicked && notification.data) {
  //         console.log('@@@@@@@ onNotification If Statement ', notification);
  //         console.log('@@@@@@ Platform', Platform.OS);
  //         console.log('THE NOTIFICATION IS WORKING');
  //         //   let pushedItem =
  //         //     Platform.OS == 'ios'
  //         //       ? JSON.parse(notification.data.custom)
  //         //       : JSON.parse(notification.data.custom);

  //         //   console.log('@@@ pushed item', pushedItem);
  //         //   console.log('@@@ bundle_id', pushedItem.bundle_id);

  //         //   pushedItem.utm_content = notification.data['google.message_id'];
  //         //   pushedItem.utm_campaign = notification.data.from;

  //         RootNavigation.navigate('Home', {
  //           itemId: clicked,
  //           otherParam: {...notification.data},
  //         });
  //         console.log(
  //           '!!! onNotification the pushed item',
  //           JSON.stringify(clicked),
  //         );
  //       }
  //     },
  //     onRegistrationError: function (err) {
  //       console.log('registration error');
  //       console.error(err.message, err);
  //     },
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },
  //     popInitialNotification: true,
  //     requestPermissions: true,
  //   });
  // } catch (e) {
  //   console.log('!!! onNotification FAILED ', e);
  // }
  
};

registerDeviceInfo = (deviceInfo, token) => {
  let body = {
    DeviceToken: deviceInfo.token,
    OperatingSystem: deviceInfo.os,
  };
  console.log('!!! body', body);

  fetch('https://wwww.ricimr.com/registerDevice', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
    .then(res => {
      console.log('THE Response;;;', res);
      console.log('!!! ', res);
      if (res.status === 201 || res.status === 200) {
        console.log('(@@@@@@@ Device was registered', res);
      } else {
        console.log('THe failing status;;;');
        console.log(JSON.stringify(res));
      }
    })
    .catch(err => {
      //   console.error('@@@@@@@ Err', JSON.stringify(err));
    });
};

checkIfNotificationsEnabled = async ()=>{

    const settings = await notifee.getNotificationSettings();
  
    if (settings.authorizationStatus == AuthorizationStatus.AUTHORIZED) {
      console.log("--- permisions granted ---")
      return true
    } else if (settings.authorizationStatus == AuthorizationStatus.DENIED) {
      console.log('Notification permissions has been denied');
      return false
    }
  
}


requestUNotifPermission = async ()=>{
  await notifee.requestPermission()
}


listenToEvents = async ()=>{

   handleForgroundEvent()
   handleBackgroundEvent()
}

handleForgroundEvent = ()=>{

  notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        handleNotificationDisplay(detail.notification)
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        break;
    }
  });

}

handleBackgroundEvent = ()=>{

  notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
  
    // Check if the user pressed the "Mark as read" action
    if (type === EventType.ACTION_PRESS) {
      // Update external API
      console.log("THE NOTIFICATION OCCURS IN THE BACKGROUND EVENT;;;",detail)
      console.log('--- notification ---',notification)
      handleNotificationDisplay(detail.notification)
      // await fetch(`https://my-api.com/chat/${notification.data.chatId}/read`, {
      //   method: 'POST',
      // });
  
      // Remove the notification
      // await notifee.cancelNotification(notification.id);
    }
  });

}

handleNotificationDisplay = async ()=>{

    try {
      await notifee.displayNotification({
        title: 'Chat with Joe Bloggs',
        body: 'A new message has been received from a user.',
        
      });
    } catch (e) {
      console.log(e);
    }
 

}

