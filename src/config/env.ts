import { Platform } from 'react-native';

interface IEnv {
  name: 'dev' | 'test' | 'production';
  api: string;
}

const AMBIENTE = 'dev';

const envs: IEnv[] = [
  {
    name: 'dev',
    api: `http://${Platform.OS === 'ios' ? 'localhost' : '10.0.2.2'}:3333`,
  },
  {
    name: 'test',
    api: 'http://urldeteste.com.br',
  },
  {
    name: 'production',
    api: 'http://urldeproducao.com.br',
  },
];

const currentEnv = envs.find(env => env.name === AMBIENTE);

export const isProduction = (): boolean => {
  return !!currentEnv && currentEnv.name === 'production';
};

export default currentEnv;
