# Building Minecraft for Xiaomi Smart Band 10 with AIoT-IDE

## 1. Open the project

1. Download the project ZIP archive from GitHub: **Code → Download ZIP**.
2. Extract the archive to a convenient folder on your computer.
3. Launch **AIoT-IDE**.
4. Select **File → Open Folder**.
5. Choose the root `Minecraft-for-Xiaomi-Smart-Band-10` folder — the one containing `package.json`, `package-lock.json`, and the `src` folder.
6. Wait for AIoT-IDE to open and analyze the project.

Do not open the `src` folder separately or create a new project over the existing one.

## 2. Install dependencies through the AIoT-IDE interface

If the IDE displays the **Development Guide** panel or prompts you to install dependencies after opening the project, start the installation using the button in that panel and wait for it to finish.

If the IDE does not prompt you to install dependencies, do not proceed to the build until AIoT-IDE has finished preparing the project. Button names and panel locations may differ between AIoT-IDE versions.

## 3. Build the project

1. Make sure the Minecraft project is open in AIoT-IDE.
2. Find **Build**, **Build Project**, or **Package** in the IDE interface. The command name and location may differ between AIoT-IDE versions.
3. Select the **Watch** application target if the IDE offers a target-device selection.
4. Start the build and wait for it to finish.
5. Check the result in the build panel or the AIoT-IDE messages window.

This project uses `aiot-toolkit` version `2.0.5`. The build command configured in `package.json` is `aiot build`.

## 4. Where to find the build output

After a successful build, check the `dist` folder in the project root. During development, AIoT-IDE usually creates a debug application package with the `.debug.rpk` extension.

The `build` folder may also be updated with compilation files. These are not the same as the ready-to-install `.rpk` package.

---

**Important:** This project is designed for Xiaomi Smart Band 10 and includes the `watch` category settings. Do not change the device settings or project source files unless necessary.
