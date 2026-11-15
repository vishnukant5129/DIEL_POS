# DIEL_POS

Offline Dielectric Materials Learning App for the DPH-101 assignment.

## Setup

1. Copy/replace these project files into your `DIEL_POS` folder.
2. Open a terminal in the project folder.
3. Run:

```bash
npm install
npx expo install expo-sqlite
npx expo start -c
```

4. Open the app in Expo Go on Android using the QR code.

## APK build

Install EAS CLI if needed:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android --profile preview
```

The preview profile is configured to produce an APK.

## Offline design

- Dielectric material records are seeded into a local SQLite database.
- Learning lessons and quiz questions are bundled in JavaScript files.
- The app does not call remote APIs or load remote images.

Test on a real Android device with airplane mode enabled after the app has been installed.

## Important scientific note

Values in the seed database are typical indicative values, not universal constants. Dielectric properties depend on frequency, temperature, material grade, composition and measurement method. Verify each value against the cited source or a manufacturer datasheet before submitting a scientific report.
