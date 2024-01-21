import { CapacitorConfig } from '@capacitor/cli';
import { trendingUp } from 'ionicons/icons';

const config: CapacitorConfig = {
  appId: 'ph.u3.cristhian.bravo',
  appName: 'ph-u3-cristhian-bravo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
