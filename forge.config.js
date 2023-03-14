
module.exports = {
  packagerConfig: {
    name: "memoa",
    executableName: "memoa",
    icon: "images/icon",
    appBundleId: "com.taoka.memoa",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: {
      hardenedRuntime: false,
      gatekeeperAssess: false,
      identity: "Developer ID Application: Lyser.io Ltd (R4PF6TTR6Z)",
    },
  },

  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};