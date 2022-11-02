#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UNUserNotificationCenter.h>
#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>



@property (nonatomic, strong) UIWindow *window;

@end

@interface RCTLogger : NSObject <RCTBridgeModule>
@end
