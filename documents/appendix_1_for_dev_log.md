# Appendix 1 for Dev Log.

This is my official dev log about developing my mobile app as final project for the course.

This is a free-form and loose notebook, where I write (or log) every possible my development, '
process and result from the specific work day.

For a more cohesive and shorter devlog, please read the **dev_log.md** -document.


## February 2025

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

## March 2025

**March 04th 2025**
* I decided dev log into two documents, _one short and cohesive essay, dev_log.md ._
and _one long and free-form notebook, appendix_1_dev_log.md ._

This is due, that appendix 1 has become much longer than expected, risking the
**actual** dev log to drown in wordly ocean. By dividing dev log into two,
I can assure that most essential writings of dev log (i.e. the course's required
learning diary) will be much easier to find and read.

**March 11th 2025**
* I send my concept to my teacher, which he approved. He pointed two important key feature
that must be added to an interactive story app.
1) **A save function and save menu** when users want save their progress
and / or return to a specific game scene.
2) **A looping music and sound effects** to give the story more life and
also indication for user response. Thankfully I have a huge library of royalty-free
music from Ovani Sound. 

Lastly I send my quick sketch how the interactive story will conceptually look like (in Finnish):
![image](https://github.com/user-attachments/assets/1a59dec2-dea2-4ecd-965e-1abf8e1433d8)

**March 13th 2025**
I started to develop my interactive story / visual novel app. For simplicity sake,
I shall recall my conceptual story app from now on as _VN-app_.

When I started my project, following question sprung up:

1. _Horizontally or vertically?_

In most of visual novels / interactive stories that I have played in PC and game system,
they have been presented in horizontal (or landscape) window view as default.
This due our most screen devices (TV and PC monitors) are also in horizontal dimensions.
According to users visual novels forums, the horizontal view also allows multiple characters
to be in same scene.

However, for mobile visual novels, the vertical view (i.e. portait mode) is _**ergonomically**_
better than the horizontal view. The user **foleso** from lemmasoft forum stated that horizontal view will fatigue their hands more
than the vertical view iin long periods of time.

Thus, I have decided to develop my VN-app in vertical mode, due comfortity to all possible users. 
I will though sacrifice the option to present multiple in same scene / screen. 
Also I need to res-tructure the story convention, that are common in most visual novels (in horizontal view).
In other words, I need to write the story in aspect of mobile perspective. As user ketskari mentions in lemmaforum,
"When the story is congruent with the format, that can be an extra touch.".

Source: https://lemmasoft.renai.us/forums/index.php?sid=e57199e54523f6c8858701aa7f38be3e

2. _How to start? Tutorials?_
 
Surprisingly, after Google searching tutorials for interactive stories in React Native, I mostly get
results of Storybook tool for React Native. There were no tutorials about my VN-app idea.
Thus, I need to take even more steps back. Starting with...

a) Move from scene-to-scene / page-to-page.
As the main function in stories, the user needs to able continue the story from page to page.
Thus I need to first develop, as MVP, three scenes called "Beginning", "Middle" and "Ending", and make sure
that I can move between scenes correctly.

3. _Naming conventions for deploying apps to platform?_
As most of applications ever released to the market, they have most certainitly 
**a serial number** to indicate the version of application. For example, as March 13 2025,
Visual Studio Code current version is 1.98.1 .

For quick answer, I asked Co-pilot for standards for giving numbers of specific version.
According Co-pilot, the most common convention for version numbering is ** Semantic Versioning** (SemVer),
wich uses format **MAJOR.MINOR.PATCH**. I think the Semantic Versioning works perfectly to small mobile project.

_**Copy of text prompt:**_
"Then about naming conventions in full stack project. When deploying or updating any app, it's the standard to tell users what versions are they installing and using. Most apps what I used have the typical serial number when describe version, such as Visual Studio Code 1.98.2. For a small mobile app as mine, how do I determine what serial number for version should I give? So far I have understood, that if the app is still in alpha and work in progress, then first number must be zero ("0.x"). When it is deployed for full release, then number will be changed to one ("1.x"). So my question is, what number must be added in x position of e.g. "0.x" and "1.x" according to standards?"

_**Copy of Co-pilot answer:**_
"Version numbering is an important aspect of software development, and it's great that you're considering it for your app. The most common convention for version numbering is **Semantic Versioning (SemVer)**, which uses the format **MAJOR.MINOR.PATCH**. Here's a breakdown of how to determine the numbers:

### Semantic Versioning (SemVer)
- **MAJOR**: Incremented for major changes that are not backward-compatible. For example, when you release the first stable version of your app, you might start with `1.0.0`.
- **MINOR**: Incremented for backward-compatible feature additions. For example, adding new features or significant improvements while maintaining compatibility with previous versions.
- **PATCH**: Incremented for backward-compatible bug fixes. For example, fixing bugs or making minor improvements that do not affect the overall functionality.

### Examples
- **Alpha/Beta Versions**: While your app is in alpha or beta, you can use `0.x.y` to indicate that it is still in development. For example, `0.1.0` for the first beta release, `0.2.0` for the second beta release with new features, and `0.2.1` for a patch update.
- **Stable Release**: Once your app is ready for a stable release, you can start with `1.0.0`. Subsequent updates would follow the SemVer convention:
  - **1.1.0**: Adding new features.
  - **1.1.1**: Fixing bugs.

### Practical Example for Your App
- **Initial Alpha Release**: `0.1.0`
- **Second Alpha Release with New Features**: `0.2.0`
- **Patch Update in Alpha**: `0.2.1`
- **First Stable Release**: `1.0.0`
- **New Features in Stable Release**: `1.1.0`
- **Bug Fixes in Stable Release**: `1.1.1`

### Summary
- **MAJOR**: Significant changes, not backward-compatible (e.g., `1.x.x`).
- **MINOR**: New features, backward-compatible (e.g., `x.1.x`).
- **PATCH**: Bug fixes, backward-compatible (e.g., `x.x.1`).

By following Semantic Versioning, you can clearly communicate the state and progress of your app to users. If you have any more questions or need further assistance, feel free to ask! 😊"

Thus, I have decided to call my first deployment of my VN-app as _VN-app-0.1.0_.
