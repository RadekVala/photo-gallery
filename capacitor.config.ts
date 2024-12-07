import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "photo-gallery",
  webDir: "www",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
