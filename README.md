# DIEL_POS

**Offline Dielectric Materials Learning App** for the DPH-101 assignment.

## QR Code

Scan this QR code with **Expo Go on your Android device** to open the development version of DIEL_POS.

![DIEL_POS Expo QR Code](assets\diel-pos-qr.png)

> The QR code is for opening the app through Expo Go while the development server is running. It is not an APK download link.

## Setup

1. Open a terminal in the project folder.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Install the Expo SQLite package compatible with the project's Expo SDK:

   ```bash
   npx expo install expo-sqlite
   ```

4. Start the development server:

   ```bash
   npx expo start -c
   ```

5. Open **Expo Go** on your Android device and scan the QR code shown in the terminal.

## Build an Android APK

The project includes an EAS `preview` profile configured to produce an installable APK.

1. Log in to your Expo account:

   ```bash
   npx eas-cli login
   ```

2. Configure EAS if this project has not been configured yet:

   ```bash
   npx eas-cli build:configure
   ```

3. Start the APK build:

   ```bash
   npx eas-cli build --platform android --profile preview
   ```

4. When the cloud build completes, open the build page/link provided by EAS and download the `.apk` file.
5. Transfer the APK to your Android device and install it. You may need to allow installation from that source in Android settings.

## Offline Design

- Dielectric material records are seeded into a local SQLite database.
- Learning lessons and quiz questions are bundled in JavaScript files.
- The app is designed not to call remote APIs or load remote images.

After installing the app, test it on a real Android device with airplane mode enabled to verify its offline behaviour.

## Important Scientific Note

Values in the seed database are typical indicative values, not universal constants. Dielectric properties depend on frequency, temperature, material grade, composition, and measurement method. Verify each value against the cited source or a manufacturer datasheet before submitting a scientific report.
