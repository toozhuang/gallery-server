import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME =
  process.env.NODE_ENV === 'development'
    ? process.env.IS_LOCAL === 'local'
      ? 'dev_local_config.yaml'
      : 'dev_config.yaml'
    : 'config.yaml';

/**
 * 在导出 config 的时候 决定当前的 config
 * 内部的内容究竟是属于 dev 还是属于 prod
 */
export default () => {
  console.log('process.env.IS_LOCAL: ', YAML_CONFIG_FILENAME);
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};