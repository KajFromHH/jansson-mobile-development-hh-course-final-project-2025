# Dev log / Learning diary

According to course requirements, every students must write their learning
experience about their mobile development, in form of diary (or developer's log).

Note that the diary can only be maximum two pages. In order to better recall or
remember each progress that I have made during development, I decided log all 
small decisions, processes and changes from every working days in the separate 
document _appendix_1_for_dev_log_.

In other words, this learning diary (i.e. **dev_log.md**) is a short and cohesive essay, 
where I answer most important subjects according the course requirements 
such as _difficulties during development, tools that helped me during development, 
what resources I use,_ etc.

Meanwhile **appendix_1_for_dev_log.md** is a loose and "free form" notebook, where I
record specific day's work and results. Additionally I write a lot of thinking
and planning process, inspired from outside / third party sources such as 
AI tools like Co-Pilot, professional articles and official tools' documents.
Note that I shall only use AI tools for simple question, problems and opinions,
_**but not for developing whole project as a rule of the course!**_


## Appendix 1 : Work report.

### February 2025

**February 21th 2025**
* I created and configured repository for my final course project.
* I created also manual.md and README.md.
* Overall simply stuff, no difficulties. However I have not decided
  overall theme or idea for the final project.

**February 27th 2025** 
* I thought that should learn to deploy and publish my final project / 
mobile application to Google Play. Hence I had to created 
new _professional / developer_ Google account, 
which will be connected to Google Play Console.

Google Play Console is mandatory for publishing apps in Google Play.
Since I will primarily publish my app in Google Play,
I have to develop my app in Android platform accordingly
(also a requirement from Google Play). Hence, I will code and test
my smartphone, Samsung Galaxy A20 (Android).

I want to notify about getting right to and setting up Google Play Console.
First, there were a lot of verification steps when submitting form for Google Play Console,
from phone number and email to legal governmental ID verification and receipt of phone bill
(in my case DNA kauppa phone fee) from last 60 days. This was both for protection
of user / developer (so that no one will fraud someone personal ID) and stopping 
scam and harmful applications' submission to the Google Play Store.

Second, as Google recommendation, Google Play Console works best when using Google own 
service and tools. In other words, verification process was faster when I used 
Google Account and Google Gmail during form submission and Google Authenticator for
2-step verification. I also needed install Google Play Console both to my workstation
(a Windows OS laptop) and my Samsung Galaxy smartphone from Google Play Store.

One more important thing I must notify and it is the primary cost for Google Play Console.
I used the free version of Google Account for my developer account (with 15 GB free space for
Google Driver but no special business features like Gemini). However, the Google Play Console
required upfront payment of 25 dollars (approx. 23 euros). Thankfully, this is only one-time cost, 
meaning I don't need pay additional product submission fees like in other platforms 
such as Steam (91.99 euros, source: https://store.steampowered.com/sub/163632).

* I created the dev log / learning diary as a requirement from course.

* I got sudden inspiration about developing small mobile game, which would connected
the React Native + Expo Go (acronym _RNEG_) together with Godot Engine. However, when asking Co-pilot
opinion, it is quite complex work to integrate RNEG with Godot Engine and probably too big scope
to course project.

Then I read about React Native own gaming engine called _react-native-game-engine_ and I thought that could
be solution. Though, reading professional and hobbyists opinion about react-native-game-engine from forums such
Reddit, the overall recommendation was lukewarm, in worst case negative. Most comments pointed out that
React Native was never developed as game engine, hence React Native has known having **performance issues**
when rendering complex gameplay and visuals.

Sources:
React-Native-Game-Engine -
a) https://github.com/bberak/react-native-game-engine
Reddit -
a) https://www.reddit.com/r/reactnative/comments/1cn0ent/what_problems_might_there_be_building_a_2d_game/
b) https://www.reddit.com/r/reactnative/comments/vj9otm/react_native_and_gamedev_are_compatible/?rdt=33450

Since office based or hands-on / practical application projects like password generator, todolist,
user account control in database, etc. didn't motivate me as much as mobile game development,
I asked Co-pilot for suggestions, that are similar to game but don't intensive-performance.
One of suggestion was creating _an interactive storybook_ with simple illustration and animations.

That suggestion sparked my interest, since there some games that are simple visual novels with
a multiple choice or non-linear branching system. Similarily, an interactive storybook
remind me a trolley problem web app with only two choices per one moral philosophical question.
I asked once again Co-pilot opinion, and it answered that they can be developed in React-native, 
since they don't require intensive-performance as most of mobile games.

Hence, I will create prototype (MVP) of this **interactive storybook** -mobile application,
with emphesis of multiple choice / non-linear branching system.

Co-pilot listed following libraries for development:
1) **React Navigation** for handling different screens, scenarios
or story segments.
2) **Redux or Context API** for managing user input / choices.
3) **Lottie and React Native Reanimated** for simple animations.
4) **Styled components** for UI.
5) **SVG and Vector Graphics + ImageOptim or TinyPNG** for creating _optimized_ images.

In the following days, I will research and code MVP of this project according to 
the Co-pilot recommended tools.

![image](https://github.com/user-attachments/assets/e8eea941-c4c3-4934-83bb-b6c21e5ed8f5)

![image](https://github.com/user-attachments/assets/9e2c8d81-d36e-430a-a996-bede61870609)

Picture: A snapshot from Co-pilot answers.
 
